// package-imports/application-refactor/problem/main.go
package main

import (
	"fmt"
	"app_refactor/email_mods"
	"app_refactor/invoice_mods"
)

func main() {

    // first reservation
    customerName := "Doe"
    customerEmail := "john.doe@example.com"
    var nights uint = 12
    emailContents := emailmods.GetEmailContents("M", customerName, nights)
    emailmods.SendEmail(emailContents, customerEmail)
    invoicemods.CreateAndSaveInvoice(customerName, nights, 145.32)
	fmt.Println(emailContents)
}
