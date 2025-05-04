package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"os"
	"io"
)

func createTeacher(firstname string, lastname string, db *sql.DB) (int64, error) {
    res, err := db.Exec("INSERT INTO `teacher` (`create_time`, `firstname`, `lastname`) VALUES (NOW(), ?, ?)", firstname, lastname)
    if err != nil {
        return 0, err
    }
    id, err := res.LastInsertId()
    if err != nil {
        return 0, err
    }
    return id, nil
}

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/school")
	if err != nil {
		fmt.Println(err)
		return
	}

	err = db.Ping()
	if err != nil {
		fmt.Println(err)
		return 
	}
	

	// f, err := os.Open("create_table.sql")
	// if err != nil {
	// 	fmt.Println(err)
	// 	return 
	// }

	// b, err := io.ReadAll(f)
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// res, err := db.Exec(string(b))
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// fmt.Println(res)
}