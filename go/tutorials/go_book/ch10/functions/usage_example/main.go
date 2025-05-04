package main

import "fmt"

func main() {
	johnPrice := computerPrice(145.90, 3)
	paulPrice := computerPrice(26.32, 10)
	robPrice := computerPrice(189.21, 2)

	total := johnPrice + paulPrice + robPrice
	fmt.Printf("Total : %0.2f $\n", total)
}

func computerPrice(rate float32, nights int) float32 {
	return rate * float32(nights)
}