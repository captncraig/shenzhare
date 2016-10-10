package web

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"net/http"

	"github.com/gorilla/securecookie"
	log "github.com/sirupsen/logrus"
)

type contextKey int

const (
	anonIDCookie            = "anonId"
	maxAge                  = 3600 * 24 * 90 //90 days
	ctxAnonID    contextKey = 1
)

type cookieMgr struct {
	*securecookie.SecureCookie
	devMode bool
}

func initSecureCookie(secret string, devMode bool) cookieMgr {
	sDat, err := base64.StdEncoding.DecodeString(secret)
	if err != nil {
		log.Fatal("Cookie secret should be base 64 encoded.")
	}
	if len(sDat) < 32 {
		log.Fatal("Cookie secret should be at least 32 bytes.")
	}
	left, right := sDat[0:len(sDat)/2], sDat[len(sDat)/2:]
	hmac, enc := sha256.Sum256(left), sha256.Sum256(right)
	sc := securecookie.New(hmac[:], enc[:])
	sc.MaxAge(maxAge)
	sc.SetSerializer(securecookie.NopEncoder{})

	return cookieMgr{SecureCookie: sc, devMode: devMode}
}

// gives every user an anonymous id cookie. Will be stored with saves to allow later editing of metadata, deletion etc.
// simple solution to allow some features without requiring login.
func (c cookieMgr) setAnonID(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		id := c.getCookie(r, anonIDCookie)
		if id == "" {
			id = randString(9)
			c.setCookie(w, anonIDCookie, id)
		}
		next.ServeHTTP(w, r.WithContext(context.WithValue(r.Context(), ctxAnonID, id)))
	})
}

func randString(i int) string {
	dat := make([]byte, i)
	rand.Read(dat)
	return base64.StdEncoding.EncodeToString(dat)
}

func (c cookieMgr) getCookie(r *http.Request, name string) string {
	cookie, err := r.Cookie(name)
	if err != nil {
		return ""
	}
	if c.devMode {
		return cookie.Value
	}
	dst := []byte{}
	if err = c.Decode(name, cookie.Value, &dst); err != nil {
		log.WithError(err).Error("Error decoding cookie")
		return ""
	}
	return string(dst)
}

func (c cookieMgr) setCookie(w http.ResponseWriter, name, content string) {
	var dat string
	var err error
	if c.devMode {
		dat = content
	} else {
		dat, err = c.Encode(name, []byte(content))
		if err != nil {
			log.WithError(err).Error("Error encoding secure cookie")
			return
		}
	}
	cookie := &http.Cookie{
		MaxAge:   maxAge,
		HttpOnly: true,
		Name:     name,
		Path:     "/",
		Secure:   true,
		Value:    dat,
	}
	http.SetCookie(w, cookie)
}
