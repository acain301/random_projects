package main 

import "fmt"

func main() {
	a := 21
	b := 42

	fmt.Println(a == b) // false
    fmt.Println(a == a) // true
    fmt.Println(a != b) // true
    fmt.Println(a > b)  // false
    fmt.Println(a < b)  // true
    fmt.Println(a <= b) // true
    fmt.Println(a <= a) // true
    fmt.Println(a >= a) // true
}