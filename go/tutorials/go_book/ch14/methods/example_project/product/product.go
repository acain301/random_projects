// methods/example-project/product/product.go
package product

import "github.com/Rhymond/go-money"

type Product struct {
    ID    string
    Name  string
    Price *money.Money
}
