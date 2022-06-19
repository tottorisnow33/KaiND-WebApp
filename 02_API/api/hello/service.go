package hello_world

import (
   "fmt"
   "net/http"
)

func HelloWorld(w http.ResponseWriter, r *http.Request) {

	/*ハローワールド*/
   fmt.Println("hello world")

}