package main

import (
	"github.com/acain301/error_failure/config"
	"fmt"
	"log"
)

func main() {
    confData, err := config.Load()
	if err != nil {
		log.Fatalf("Impossible to load app config because: %s", err)
	}
	fmt.Println(confData)
}