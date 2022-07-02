package main

import (
   "net/http"

   "github.com/gorilla/mux"

   "recog/api/hello"
   "recog/api/recog"
)

func main() {

   /*ルーター用意*/
   r := mux.NewRouter()

   /*ルーティング*/
   r.HandleFunc("/hello", hello_world.HelloWorld).Methods("GET", "OPTIONS")
   r.HandleFunc("/recog", recog_img.RecogImg).Methods("POST", "OPTIONS")
   
   /*サーバー開始*/
   http.ListenAndServe(":8000", r)

}