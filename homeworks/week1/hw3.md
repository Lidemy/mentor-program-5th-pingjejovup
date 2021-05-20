## 教你朋友 CLI

### 什麼是  Command Line
command line 基本上就是要電腦做事情而運用電腦終端機 Terminal（就是一個黑黑的視窗），來輸入的指令。
因為電腦只能一個指令一個動作，因此利用 Terminal 下指令，就可以要電腦幫我們做出我們想要的事情。

與 Command line 相反的概念是 GUI 圖形化介面，像平常我們看到的電腦視窗，有按鈕可以讓你用滑鼠點擊，讓電腦產生動作，Command line 就只能用鍵盤輸入英文指令，來讓電腦動作。

---


### 用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案

要使用 command line 首先要先打開 terminal

#### 在 mac 開 terminal 
    鍵盤按下 [command + space] 叫出 spotlight 輸入 ”terminal“ 打開

#### 建立 wifi 資料夾
	＃建立資料夾指令 mkdir 是 (make directory 的縮寫)
    $ mkdir 資料夾名字 
    
所以輸入 ``` mkdir wifi ``` 產生資料夾

#### 在裡面建立 afu.js 的檔案
	＃查看當所在目錄下有哪些檔案及資料夾 
    $ ls
輸入完應該可以看到 wifi 名字出現
 
 	＃切到該資料夾下 
    $ cd 資料夾名
 輸入 ``` cd wifi ``` 後 代表我們在 wifi 資料夾內
 
  	＃新增檔案
    $ touch 檔案名
 輸入 ``` touch afu.js ``` 後 代表我們在 wifi 資料夾內新增了一個 afu.js 檔案
 再次輸入 ``` ls ``` 應該可以看到 afu.js 是否成功新增在裡面了  
 
    ＃想要查看當前路徑
    $ pwd


