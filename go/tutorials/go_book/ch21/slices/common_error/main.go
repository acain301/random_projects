package main

import "fmt"

func main() {
    languages := []string{"Java", "PHP", "C"}
    fmt.Println("Capacity :", cap(languages))
    // Capacity : 3
    
    // call function
    addGo(&languages)
    
    fmt.Println("Capacity :", cap(languages))
    // Capacity : 3
    fmt.Println(languages)
    // [Java PHP C]
    // what ! , where is Go ?????
}

func addGo(languages *[]string) {
   *languages = append(*languages, "Go")
}
