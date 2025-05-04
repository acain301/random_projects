package main

import (
	"fmt"
	"os"
)

func main() {
	f, err := os.Open("test.csv")
	if err != nil {
		fmt.Println(err)
		return
	}

	info, err := f.Stat()
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Printf("Mode Numeric : %o\n", info.Mode())
	fmt.Println(info.Mode())

	err = f.Chmod(0664)
	if err != nil {
		fmt.Println(err)
	}
}
