package main

import (
	"log"
	"time"
)

func main() {

	type Cart struct {
		ID string
		CreatedDate time.Time
		Items map
	}

	cart := Cart{
		ID:          "115552221",
		CreatedDate: time.Now(),
	}

	cartPtr := &cart
	cartPtr.Items = []Item{
		{SKU: "154550", Quantity: 12},
		{SKU: "DTY8755", Quantity: 1},
	}
	log.Println(cart.Items)
}