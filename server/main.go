package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("frontend/build")) // change to serve the correct build file
	http.Handle("/", fs)

	log.Println("Listening on :3000")

	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal(err)
	}
}