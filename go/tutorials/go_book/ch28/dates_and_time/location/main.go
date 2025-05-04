package main

import (
	"fmt"
	"time"
)

func main() {
	now := time.Now()
	fmt.Printf("%s\n", now)

	loc, err := time.LoadLocation("America/Cuiaba")
	if err != nil {
		panic(err)
	}

	nowNYC := now.In(loc)
	fmt.Printf("%s\n", nowNYC)
}
