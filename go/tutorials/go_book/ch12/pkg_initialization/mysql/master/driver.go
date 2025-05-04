package MySQL

import (
	//...
	"database/sql"
	//...
)

func init() {
	sql.Register("mysql", &MySQLDriver{})
}