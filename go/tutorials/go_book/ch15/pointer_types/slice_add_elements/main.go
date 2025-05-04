package main 

import (
	"log"
	"strings"
)

func main() {
	EUcountries := []string{"Austria", "Belgium", "Bulgaria"}
	addCountries(EUcountries)
	log.Println(EUcountries)
	upper(EUcountries)
	log.Println(EUcountries)
	addCountries2(&EUcountries)
	log.Println(EUcountries)
}

func addCountries(countries []string) {
	countries = append(countries, []string{"Croatia", "Denmark"}...)
	log.Println(countries)
}

func upper(countries []string) {
    for k, _ := range countries {
        countries[k] = strings.ToUpper(countries[k])
    }
}


func addCountries2(countriesPtr *[]string) {
    *countriesPtr = append(*countriesPtr, []string{"Croatia", "Republic of Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden"}...)
}