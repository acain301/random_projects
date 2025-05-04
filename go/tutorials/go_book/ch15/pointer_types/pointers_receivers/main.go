package main 

import "fmt"

	type Cat struct {
		Color string
		Age uint8
		Name string
	}

	func (cat *Cat) Rename(newName string) {
		cat.Name = newName
	}

	func (cat Cat) RenameV2(newName string) {
		cat.Name = newName
		fmt.Println("RenameV2", cat.Name)
	}

	func main() {
		cat := Cat{Color: "blue", Age: 8, Name: "Milow"}
		cat.Rename("Bob")
		fmt.Println(cat)

		cat.RenameV2("Ben")
		fmt.Println(cat.Name)
	}
