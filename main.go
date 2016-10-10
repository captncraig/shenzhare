package main

import (
	"flag"

	"github.com/captncraig/shenzhare/web"
	"github.com/kelseyhightower/envconfig"
	log "github.com/sirupsen/logrus"
)

type config struct {
	CookieSecret string `required:"true"`
	HTTPAddr     string `default:":8888"`

	Postgres string `required:"true"`
}

func main() {
	flag.Parse()
	c := &config{}
	if err := envconfig.Process("SHEN", c); err != nil {
		log.Fatal(err)
	}
	web.Listen(c.HTTPAddr, c.CookieSecret)
}
