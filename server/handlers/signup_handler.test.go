package handlers

import (
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"testing"
)

func TestSignupHandler(t *testing.T) {
	// Initialize a temporary file for testing
	const filename = "test_user_credentials.txt"
	defer func() { const filename = "user_credentials.txt" }()

	// Test a successful signup
	payload := `{"name": "testuser", "password": "testpassword"}`
	request, err := http.NewRequest("POST", "/api/signup", strings.NewReader(payload))
	if err != nil {
		t.Fatal(err)
	}

	recorder := httptest.NewRecorder()
	handler := http.HandlerFunc(SignupHandler)

	handler.ServeHTTP(recorder, request)

	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("Expected status %v, but got %v", http.StatusOK, status)
	}

	// Test signup with existing credentials
	payload = `{"name": "testuser", "password": "testpassword"}`
	request, err = http.NewRequest("POST", "/api/signup", strings.NewReader(payload))
	if err != nil {
		t.Fatal(err)
	}

	recorder = httptest.NewRecorder()

	handler.ServeHTTP(recorder, request)

	if status := recorder.Code; status != http.StatusConflict {
		t.Errorf("Expected status %v, but got %v", http.StatusConflict, status)
	}

	// Additional tests can be added as needed
}

func TestCredentialsExist(t *testing.T) {
	// Initialize a temporary file for testing
	const filename = "test_user_credentials.txt"
	defer func() { const filename = "user_credentials.txt" }()

	// Add a sample credential to the file
	StoreCredentials("testuser", "testpassword")

	// Test existing credentials
	if !CredentialsExist("testuser", "testpassword") {
		t.Error("Expected credentials to exist, but they were not found")
	}

	// Test non-existing credentials
	if CredentialsExist("nonexistentuser", "nonexistentpassword") {
		t.Error("Expected credentials to not exist, but they were found")
	}

	// Additional tests can be added as needed
}

// Clean up temporary files or database connections if necessary
func TestMain(m *testing.M) {
	// Run tests
	exitCode := m.Run()

	// Clean up resources (e.g., delete temporary files, close database connections)

	// Exit with the code from tests
	os.Exit(exitCode)
}
