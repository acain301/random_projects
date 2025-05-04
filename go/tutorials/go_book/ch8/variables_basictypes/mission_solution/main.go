package main

import "fmt"

func main() {
	const hotelName string = "Gopher Hotel"

	const longitude, latitude = 24.806078, -78.243027

	var occupancy int = 12

	fmt.Printf("Hotelname: %v, Longitude: %v, Latitude: %v, Occupancy: %v", hotelName, longitude, latitude, occupancy)

}

