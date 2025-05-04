package main

import "fmt"

func main() {
	b := [2]string{"FR", "US"}
	firstElement := b[0]
	secondElement := b[1]
	fmt.Println(firstElement, secondElement)
	myArray := [2]int{156, 147}
	for index, element := range myArray {
		fmt.Printf("element at index %d is %d\n", index, element)
	}
}
