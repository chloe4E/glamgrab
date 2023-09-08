package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/chloe4E/handlers"
	"github.com/rs/cors"
)

func main() {

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:5173", "http://127.0.0.1:5173"},
		AllowedMethods: []string{"GET", "POST", "OPTIONS"},
	})
	mux := http.NewServeMux()

	mux.HandleFunc("/", handlers.RootHandler)
	mux.HandleFunc("/hello", handlers.HelloHandler)
	mux.HandleFunc("/api/login", handlers.LoginHandler)

	handler := c.Handler(mux)
	log.Println("Listening on :3000")

	err := http.ListenAndServe(":3000", handler)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
		os.Exit(1)
	}
}
