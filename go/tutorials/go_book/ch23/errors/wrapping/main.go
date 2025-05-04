package main

import (
	"os"
	"fmt"
	"log"
)

func transferFileContents(filename string) error {
    contents, err := os.ReadFile(filename)
    if err != nil {
        return fmt.Errorf("during file transfer impossible to open source file: %w", err)
    }
    err = os.WriteFile("/tmp/filecontents", contents, 0644)
    if err != nil {
        return fmt.Errorf("during file transfer impossible to write source file: %w", err)
    }
    return nil
}


func main() {
    err := transferFileContents("/my/imaginary/file")
    if err != nil {
        log.Printf("error occured: %s", err)
    }
}