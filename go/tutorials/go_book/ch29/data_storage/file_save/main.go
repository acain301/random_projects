package main

import (
	"fmt"
	"os"
)

func main() {
	f, err := os.Create("test.csv")
	if err != nil {
		fmt.Println(err)
		return 
	}
	fmt.Println(f)
}
