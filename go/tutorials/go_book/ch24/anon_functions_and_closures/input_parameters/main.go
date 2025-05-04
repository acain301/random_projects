// // sort package

// // Search for an index of a specific value using binary search
// func Search(n int, f func(int) bool) int

// // sort a slice by using the provided function (less)
// func Slice(slice interface{}, less func(i, j int) bool)

package main 

import (
	"fmt"
	"slices"
)

func main() {
	scores := []int{10, 89, 76, 3, 20, 12}
	slices.Sort(scores)
	fmt.Println(scores)


	slices.Reverse(scores)
	fmt.Println(scores)
}

 


 

 