package recog_img

import (
   "os"
   "io"
   "fmt"
   "net/http"
   "encoding/json"
)

/*レスポンス返却用構造体*/
type StResponseRecogImg struct  {
   FileSize int `json:"file_size"`
}

func RecogImg(w http.ResponseWriter, r *http.Request) {

   /*OPTIONで来た場合ヘッダ書き込み(CORS対策)*/
   w.Header().Set("Access-Control-Allow-Origin", "*")
   w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
   w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization")

   if r.Method == "OPTIONS"{
      fmt.Println("OPTINメソッド")
      return
   }

   /*リクエスト受信*/
   file, _, _ := r.FormFile("file")
   filename := r.FormValue("filename")

   /*画像保存*/
   _ = os.MkdirAll("./uploadimages", os.ModePerm)
   dst, _ := os.Create(fmt.Sprintf("./uploadimages/%s", filename))
   defer dst.Close()
   _, _ = io.Copy(dst, file)

   
   /*レスポンスjson書き込み*/
   var stResponseRecogImg StResponseRecogImg 
   stResponseRecogImg.FileSize = 3

   /*json返却*/
   json.NewEncoder(w).Encode(stResponseRecogImg)
   w.WriteHeader(200)
   return

}