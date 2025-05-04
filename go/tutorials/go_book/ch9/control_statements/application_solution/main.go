package main

import (
	"fmt"
	"math/rand"
)


func main() {
	var ageJohn, agePaul int = rand.Intn(110), rand.Intn(110)
	fmt.Printf("John is %v years old\n", ageJohn)
	fmt.Printf("Paul is %v years old\n", agePaul)
	isJohnOlder := ageJohn > agePaul
	sameAge := ageJohn == agePaul
	fmt.Printf("it is %v that John is older than Paul\n", isJohnOlder)
	fmt.Printf("it is %v that John and Paul are the same age\n", sameAge)
}