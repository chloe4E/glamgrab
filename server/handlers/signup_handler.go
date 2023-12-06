package handlers

import (
	"bufio"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
)

const filename = "user_credentials.txt"

type SignUpInfoRequestBody struct {
	Name     string `json:"name" validate:"required,min=2,max=100"`
	Password string `json:"password" validate:"required"`
}

func SignupHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got /signup request\n")

	var requestBody SignUpInfoRequestBody
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	username := requestBody.Name
	password := requestBody.Password

	// Check if the username is in the list of existing users, if yes return error
	// if not save it and proceed:

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if CredentialsExist(username, password) {
		http.Error(w, "Username and password already exist", http.StatusConflict)
		return
	}

	StoreCredentials(username, password)

	// Respond with success message if everything is ok:
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Signup successful"))
}

// check if credentials already exist:

func CredentialsExist(username, password string) bool {
	// check if credentials already exist
	// if yes return true
	// if not return false
	file, err := os.Open(filename)
	if err != nil {
		fmt.Println("Error opening the file:", err)
		os.Exit(1)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		cred := strings.Split(line, ",")
		if len(cred) == 2 && cred[0] == username && cred[1] == password {
			return true
		}

		if err := scanner.Err(); err != nil {
			fmt.Println("Error reading the file:", err)
			os.Exit(1)
		}
	}
	return false
}

// save credentials:
func StoreCredentials(username, password string) {
	file, err := os.OpenFile(filename, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		fmt.Println("Error opening the file:", err)
		os.Exit(1)
	}
	defer file.Close()

	_, err = file.WriteString(username + "," + password + "\n")
	if err != nil {
		fmt.Println("Error writing to the file:", err)
		os.Exit(1)
	}
}
