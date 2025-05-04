package main

import "fmt"

func main() {
	const occupancyLimit = 12

	var occupancyLimit1 uint8
	var occupancyLimit2 int64
	var occupancyLimit3 float32

	//assign out untyped const to a uint8 variable
	occupancyLimit1 = occupancyLimit
	//assign our untyped const to a int64 variable
	occupancyLimit2 = occupancyLimit
	//assign out untyped const to a float32 variable
	occupancyLimit3 = occupancyLimit

	fmt.Println(occupancyLimit1, occupancyLimit2, occupancyLimit3)
}
