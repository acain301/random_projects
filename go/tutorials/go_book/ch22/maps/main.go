package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
)

func main() {
	file, err := os.Open("./data/employees.csv")
	if err != nil {
		log.Fatalf("impossible to open file %s", err)
	}

	defer file.Close()

	r := csv.NewReader(file)
	for {
		record, err := r.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(record)
	}

	type employee struct {
		name string
		genre string
		position string
	}

	
}