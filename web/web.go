package web

import (
	"flag"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/justinas/alice"
	log "github.com/sirupsen/logrus"
)

var dev = flag.Bool("dev", false, "Dev mode")

//Listen starts the web server on the given port.
func Listen(addr string, cookieSecret string) {
	cookie := initSecureCookie(cookieSecret, *dev)

	chain := alice.New(cookie.setAnonID)

	r := mux.NewRouter()
	static := http.StripPrefix("/static", http.FileServer(http.Dir("static")))
	r.PathPrefix("/static").Handler(chain.Then(static))

	r.PathPrefix("/").Handler(chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/index.html")
	}))

	log.Printf("Listening http on %s", addr)
	log.Fatal(http.ListenAndServe(addr, r))
}
