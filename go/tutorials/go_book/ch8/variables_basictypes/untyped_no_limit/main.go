package main

import "fmt"

func main() {
    // maximum value of an int is 9223372036854775807
    // 9223372036854775808 (max + 1 ) overflows int
    const profit = 9223372036854775808
    var profit2 int64 = profit
    fmt.Println(profit2)
}
