package main

import "fmt"

func main() {
	customers := [4]string{"John Doe", "Helmuth Verein", "Dany Beril", "Oliver Lump"}
    	// slice the array
    	customersSlice := customers[0:1]
    	fmt.Println(customersSlice)

	vatRates := []float64{4.65, 4, 15, 20}
	fmt.Printf("length of slice vatRates is %d\n", len(vatRates))
}
