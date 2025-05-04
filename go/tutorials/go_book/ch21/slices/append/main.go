package main 

import "fmt"

func main() {
	a := []int{10, 20, 30, 40}
	a = append(a, 50, 60)
	fmt.Println(a)


	///


	s := []uint{10, 20, 30, 40}
	fmt.Printf("Length : %d - Capacity : %d\n", len(s), cap(s))
	s = append(s, 50)
	fmt.Printf("Length : %d - Capacity : %d\n", len(s), cap(s))
	s = append(s, 60)
	fmt.Printf("Length : %d - Capacity : %d\n", len(s), cap(s))
	s = append(s, 70)
	fmt.Printf("Length : %d - Capacity : %d\n", len(s), cap(s))
	s = append(s, 80)
	fmt.Printf("Length : %d - Capacity : %d\n", len(s), cap(s))
	s = append(s, 90)
	fmt.Printf("Length : %d - Capacity : %d\n", len(s), cap(s))

	//
	names := []string{"John", "Bob", "Peter"}
	for _, name := range names {
		fmt.Println(name)
	}

	///

	test := append([]int{10,20}, []int{30,40,50}...)
	fmt.Println(test)


	///
	test_names := []string{"John", "Bob", "Claire", "Nik"}
	for index, name := range test_names {
		if name == "Claire" {
			fmt.Println("Claire found at index", index)
		}
	}

}