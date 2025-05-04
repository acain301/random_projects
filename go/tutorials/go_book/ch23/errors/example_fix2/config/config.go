package config 

import (
	"errors"
	"os"
)

const fileHeader = "APPCONF"

func Load() (string, error) {
	data, err := os.ReadFile("/tmp/myHotelApp/config.txt")
	if err != nil {
		return "", err
	}
	conf := string(data)
	if conf[0:8] != fileHeader {
		return "", errors.New("The config file does not begin with the accepted header -> APPCONF")
	}
	return conf, nil
}