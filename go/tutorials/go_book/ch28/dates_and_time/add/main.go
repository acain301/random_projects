package main

import (
	"fmt"
	"time"
)


func main() {
	now := time.Now()

	// + 12 years
	// + 1 minth
	// + 3 days

	now = now.AddDate(12, 1, 3)

	fmt.Printf("Plus 12 years 1 month and 3 days: %s\n", now)

}
