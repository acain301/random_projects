package main 

import (
	"fmt"
	"log"
	"ex_fix_2/config"
)

func main() {
    confData, err := config.Load()
    if err != nil {
        log.Fatalf("Impossible to load application config because: %s", err)
    }
    fmt.Println(confData)
}