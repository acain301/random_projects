package main

import "fmt"

func main() {
	b := "hello"
	for i := 0; i < len(b); i++ {
		fmt.Println(b[i])
	}
}
