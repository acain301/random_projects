package main 

import "log"

func main() {
	cities := make(map[string]string)
	addElement(cities)
	log.Println(cities)
}

func addElement(cities map[string]string) {
	cities["France"] = "Paris"
}