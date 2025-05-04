package main

import "fmt"

func main() {
	hotelName := "The gopher hotel"
	fmt.Println("Hotel " + hotelName)
	var roomsAvailable uint8
	var rooms, roomsOccupied uint8 = 100, 10
	roomsAvailable = rooms - roomsOccupied
	fmt.Println(roomsAvailable, "rooms available")
}