package main

import (
   "net/http"
   "fmt"

   "github.com/gorilla/mux"

   "recog/api/hello"
)

func main() {

   /*ルーター用意*/
   r := mux.NewRouter()

   /*ルーティング*/
   r.HandleFunc("/hello", hello_world.HelloWorld).Methods("GET", "OPTIONS")

   /*サーバー開始*/
   http.ListenAndServe(":8000", r)

}