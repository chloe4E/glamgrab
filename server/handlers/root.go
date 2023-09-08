package handlers

import (
	"fmt"
	"io"
	"net/http"
)

func RootHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / request\n")
	io.WriteString(w, "Welcome to glamgrab!\n")
}
