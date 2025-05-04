package main 

import "fmt"

func totalPrice(nights, rate, cityTax uint) uint {
	return nights* (rate + cityTax)
 }

 func main() {
	price := totalPrice(3, 10000, 132)
	fmt.Println(price)
 }
