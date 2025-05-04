package bar

import (
    "fmt"

    "gitlab.com/loir402/baz"
    "gitlab.com/loir402/qux"
)

func Bar() string {
    return fmt.Sprintf("Bar %s %s", baz.Baz(), qux.Qux())
}