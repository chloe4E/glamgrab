package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type LoginInfoRequestBody struct {
	Name     string `json:"name" validate:"required,min=2,max=100"`
	Password string `json:"password" validate:"required"`
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got /login request\n")

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
