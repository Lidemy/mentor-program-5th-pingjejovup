## 請以自己的話解釋 API 是什麼
API (Application Programming Interface)，根據英文字面上的意思，即為應用程式介面。應用程式可以是網頁，或是一個軟體套件，或是系統程式等等，如果把一個應用程式視為一個機器，我們要如何操作它來達到我們的目的，即為透過 API，就像是一些家電的遙控器，可以讓我們不必知道為什麼我們按了開關鍵，電器就打開了，透過遙控器，我們只要知道長得最顯眼的電源鍵按下去，他就會開啟了，使我們可以順利「使用」它。API 也是如此，每一個應用程式 (Application)，要從外部去使用它，必須透過他的 api 去使用它，才能達到我們要它操作的功能，或是顯示給我們的資訊。而每個應用程式都有自己的 api 文件，類似使用手冊，讓我們去讀懂該如何去操作。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

####401 Unauthorized
表示該 request 需要經過認證，可能發生 WWW-Authenticate header 認證錯誤 
####304 Not Modified
資源未被修改，當使用者重複 request，所以直接從快取提取
####502 Bad Gateway
表明伺服器以閘道器或代理訪問時，收到了來自上游服務器的無效回應

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
###主要網址: https://www.restarant.com/
|| http method | path name |   |
| --- | --- |  ----  | ----  |
|所有餐廳資料| get | /all [?limit] | limit: 資料筆數  |
|單一餐廳資料| get | /getRestarant/ [ id ] | id: 該餐廳的 ID |
|刪除| delete | /delRestarant/ [ id ]   | id: 該餐廳的 ID  |
|新增| post | /newRestarant | |
|更改| patch | /updateRestarant/ [ id ]  | id: 該餐廳的 ID  |

