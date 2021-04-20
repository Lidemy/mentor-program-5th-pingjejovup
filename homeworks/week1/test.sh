#!/bin/bash
#Program:
#  User input a number parameter behind. Program will generate that amount of files.

PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

i=0  
while [ "${i}" != "$1" ]
do
	i=$(($i+1))   # 每次 i 都會增加 1
        touch "$i.js"; 
done
echo "檔案建立完成！"

