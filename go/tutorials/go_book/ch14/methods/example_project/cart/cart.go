// methods/example-project/cart/cart.go
package cart

import (
    "example-project/product"
    "os/user"
    "time"
    "errors"
    "github.com/Rhymond/go-money"
)

type Cart struct {
    ID        string
    CreatedAt time.Time
    UpdatedAt time.Time
    lockedAt  time.Time
    user.User
    Items        []Item
    CurrencyCode string
    isLocked     bool
}

type Item struct {
    product.Product
    Quantity uint8
}

func (c *Cart) TotalPrice() (*money.Money, error) {
    total := money.New(0, c.CurrencyCode)
    var err error
    for _, v := range c.Items {
        itemSubtotal := v.Product.Price.Multiply(int64(v.Quantity))
        total, err = total.Add(itemSubtotal)
        if err != nil {
            return nil, err
        }
    }
    return total, nil}

func (c *Cart) Lock() error {
    if c.isLocked {
        return errors.New("cart is already locked")
    }
    c.isLocked = true
    c.lockedAt = time.Now()
    return nil
}

func (c *Cart) delete() error {
    // to implement
    return nil
}
