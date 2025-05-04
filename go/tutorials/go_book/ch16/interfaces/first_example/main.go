package main

import "fmt"

type Human struct {
	Firstname string
	Lastname string
	Age int
	Country string
}

type DomesticAnimal interface {
	ReceiveAffection(from Human)
	GiveAffection(to Human)
}

type Cat struct {
	Name string 
}

type Dog struct {
	Name string 
}

func (c Cat) ReceiveAffection(from Human) {
	fmt.Printf("The cat named %s has received affection from Human named %s\n", c.Name, from.Firstname)
}

func (c Cat) GiveAffection(from Human) {
	fmt.Printf("The cat named %s has given affection to Human named %s\n", c.Name, from.Firstname)
}

func (d Dog) ReceiveAffection(from Human) {
    fmt.Printf("The dog named %s has received affection from Human named %s\n", d.Name, from.Firstname)
}

func (d Dog) GiveAffection(to Human) {
    fmt.Printf("The dog named %s has given affection to Human named %s\n", d.Name, to.Firstname)
}

func Pet(animal DomesticAnimal, human Human) {
	animal.GiveAffection(human)
	animal.ReceiveAffection(human)
}


func main() {
	var john Human
	john.Firstname = "John"

	var c Cat
	c.Name = "Maru"

	var d Dog
	d.Name = "Medor"

	Pet(c, john)
	Pet(d, john)
}