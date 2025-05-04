package main
import "fmt"

type Hotel struct {
	Name string
	Country
}

type Country struct {
	Name string
	CapitalCity string 
}

func main() {
	hotel := Hotel {
		Name: "Hotel super luxe",
		Country: Country{Name: "France"},
	}

	fmt.Println(hotel.Country.Name)
}