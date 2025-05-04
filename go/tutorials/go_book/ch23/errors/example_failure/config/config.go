package config 

import (
	// "fmt"
	"os"
)

func Load() (string, error) {
	dat, err := os.ReadFile("/tmp/myHotelApp/config.txt")
	if err != nil {
		return "", err 
	}
	return string(dat), nil
}

// func Print() {
// 	fmt.Println(string(Load()))
// }