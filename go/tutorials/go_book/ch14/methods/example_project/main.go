package main

import (
	"log"
	"example-project/cart"
)

func main() {
	newCart := cart.Cart{}

	totalPrice, err := newCart.TotalPrice()
	if err != nil {
		log.Printf("impossible to compute price of the cart: %s", err)
		return 
	}

	log.Println("Total Price", totalPrice.Display())

	err = newCart.Lock()
	if err != nil {
		log.Printf("impossible to lock the cart: %s", err)
		return 
	}

}
