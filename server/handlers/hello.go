package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func HelloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / hello\n")
	response := struct {
		Message string `json:"message"`
	}{
		Message: "Hello, HTTP!",
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}
