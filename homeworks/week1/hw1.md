## 交作業流程

1. 在專案下新增一個 homework 分支```git branch homework```
2. 切換到該分支 ``` git checkout homework```
3.  查看確認更改哪些檔案  ``` git status ```
3.  將所有更改的檔案加入 stage（暫存區） ``` git add . ```
4.  將所有變更文件提交 commit 加上 message ``` git commit -m "message" ```
5. 最後再 push  到 github repo 上 ``` git push ```
6. push 上去後到 github 自己的 repo 按下 homework 分支 按下 ``` pull request ``` 按鈕
7. 再將 pull request 頁面的連結繳交至學習系統 交作業表單

#### 作業被改完 merge 以後將 homework 分支刪除
1.  在本地端 切換至 master ``` git branch master ```
2.  將遠端異動拉下本地端 ``` git pull origin master```
3.  再將 homework 分支刪除 ``` git branch -d homework ```
