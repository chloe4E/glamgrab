package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/rs/cors"
)

type LoginInfoRequestBody struct {
	Name     string `json:"name" validate:"required,min=2,max=100"`
	Password string `json:"password" validate:"required"`
}

func contains(slice []string, str string) bool {
	for _, s := range slice {
		if s == str {
			return true
		}
	}
	return false
}

// TODO handlers shall be moved to a separate file

func getRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / request\n")
	io.WriteString(w, "Welcome to glamgrab!\n")
}

func getHello(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / hello\n")
	response := struct {
		Message string `json:"message"`
	}{
		Message: "Hello, HTTP!",
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got /login request\n")

	var requestBody LoginInfoRequestBody
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	username := requestBody.Name
	password := requestBody.Password

	allowedUsernames := []string{"user1", "user2", "user3"}

	// Check if the username is in the list of allowed usernames
	if contains(allowedUsernames, username) && password == "password" {
		response := "Authentication successful"
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(response))
	} else {
		response := "Authentication failed"
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(response))
	}

}

func main() {
	// Create a new CORS handler
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:5173"},
		AllowedMethods: []string{"GET", "POST", "OPTIONS"},
	})
	mux := http.NewServeMux()

	mux.HandleFunc("/", getRoot)
	mux.HandleFunc("/hello", getHello)
	mux.HandleFunc("/api/login", loginHandler)

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
