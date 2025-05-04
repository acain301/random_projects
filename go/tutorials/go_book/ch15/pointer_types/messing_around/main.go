package main 

import "fmt"

func main() {
	var p *int
	var answer int = 42
	p = &answer
	fmt.Println(p)

	type Cart struct{
		ID string
		Paid bool
	}

	cart := Cart{
		ID: "1234",
		Paid: true,
	}

	cartPtr := &cart

	cartDeref := *cartPtr

	fmt.Println(cartDeref.ID)
}