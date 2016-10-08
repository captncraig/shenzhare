from golang:1.7.1
ADD . /go/src/github.com/captncraig/shenzhare
RUN go install github.com/captncraig/shenzhare
EXPOSE 8888
WORKDIR /go/src/github.com/captncraig/shenzhare
CMD /go/bin/shenzhare