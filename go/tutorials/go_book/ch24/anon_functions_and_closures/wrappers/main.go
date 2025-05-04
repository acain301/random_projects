package main

import (
	"fmt"
	"net/http"
	"log"
	"html"
)

func homepageHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintln(writer, "Welcome to my homepage")
	fmt.Fprintln(writer, "I am max")
	fmt.Fprintf(writer, "Hello, %q", html.EscapeString(request.URL.Path))
  }

func trackVisits(handler func(http.ResponseWriter, *http.Request)) func(http.ResponseWriter, *http.Request) {
    return func(writer http.ResponseWriter, request *http.Request) {
        // track the visit
        fmt.Println("one visit !")
        // call the original handler
        handler(writer, request)
    }
}

func main() {
	http.HandleFunc("/homepage", trackVisits(homepageHandler))
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal(err)
	}
}