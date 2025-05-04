package gomodule

import "time"

func WhatTimeIsIt() string {
   return time.Now().Format(time.RFC3339)
}
