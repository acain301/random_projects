package main 

import (
	"fmt"
	"github.com/acain301/packageInit/rules/invoice"
)

func init() {
	fmt.Println("main")
}

func main() {
	fmt.Println("--program start--")
	invoice.Print()
}