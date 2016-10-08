from golang:1.7.1
ADD . /go/src/github.com/captncraig/shenzhare
RUN export PKG=github.com/captncraig/shenzhare

RUN go install $PKG
EXPOSE 8888
CMD /go/bin/shenzhare