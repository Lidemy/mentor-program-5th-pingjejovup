## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

#### strong : 用來使標籤內的字，字體加粗
####  svg : 可以在標籤內直接嵌入 svg 圖檔代碼  
#### noscript: 在客戶端瀏覽器無法支援 Javascript 時，會出現的替代文字

## 請問什麼是盒模型（box modal）
一個 Box 模型，由幾個要素組合而成，由中心內到外分別是 ```content 主要內容```, ```padding 內距```, ```border 邊框```, ```margin 外距```，而當我們在 css 所設定的寬高，即是對 content 設定寬高。



## 請問 display: inline, block 跟 inline-block 的差別是什麼？

### block
此時元素的 box moel 空間會占滿整個一行，即下一個元素會換到下一行。block 元素，可以對它設置寬跟高，設定 margin，padding，其他相鄰的元素也會被 css margin 設定的值所推開。
### inline
display 設定為 inline 的元素則會在行內相鄰排列，並且無法對其設定寬高，而 margin 和 padding 可以設置，但是其位置還是會在該行上，margin 跟 padding 只能水平推開其它元素。
### inline-block
inline-block 及介於 inline 和 block 屬性之間，同 inline 元素不會占滿一行，會在本來行內相鄰並排，但其寬高同 block 元素是可以設定的，padding，margin 一樣起作用，把相鄰元素推開。



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

### static
元素的 position 基本預設值即為 static ，而此時 left | right | top | bottom | z-index 這些相應的屬性就不對屬性起作用，元素不會有位移。

### relative
此時，元素的本來在 html 所佔的位置和體積仍不變，而 left | right | top | bottom | z-index 這些相應的屬性就起作用，這時所設定的位移是根據原本元素的位置去作相對位移。

### absolute
當元素 position 設置 absolute ，元素就不在原本的 html 上的階層，原本所占的元素體積也跳脫了，而 left | right | top | bottom | z-index ，所設定的值會向外找 position 非 static 的元素作為父元素，然後會根據父元素的 box model 去做相對位移。

### fixed
其特性與 absolute 相似，差別在於其設定位移的值是相對於整個瀏覽視窗，並不會被捲軸拖拉影響，固定在
視窗的相對位置上。




