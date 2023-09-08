package main

// Helper function to check if a string is in a slice of strings
func contains2(slice []string, str string) bool {
	for _, s := range slice {
		if s == str {
			return true
		}
	}
	return false
}
