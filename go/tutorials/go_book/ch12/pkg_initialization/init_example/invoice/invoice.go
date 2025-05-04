package invoice 

import (
	"fmt"
	"github.com/acain301/packageInit/rules/currency"
)

func init() {
	fmt.Println("invoice init")
}

func Print() {
	fmt.Println("INVOICE Number X")
	fmt.Println(54, currency.EuroSymbol())
}