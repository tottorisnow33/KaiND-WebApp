package recog_img

import (
   "fmt"
   "net/http"
)

func RecogImg(w http.ResponseWriter, r *http.Request) {

   /*ハローワールド*/
   fmt.Println("hello world")

   /*OPTIONで来た場合ヘッダ書き込み*/
   w.Header().Set("Access-Control-Allow-Origin", "*")
   w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
   w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization")

   if r.Method == "OPTIONS"{
      fmt.Println("OPTINメソッド")
      return
   }

}