package demo

import (
    "testing"

    "github.com/stretchr/testify/assert"
)

func TestUpdateArray1(t *testing.T) {
    testArray := [2]string{"Value1", "Value2"}
    UpdateArray1(&testArray)
    assert.Equal(t, NewValue, testArray[0])
}
