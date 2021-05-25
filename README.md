### dom01 元素位置测试  client: 都是相对于视口。
+ getBoundingClientRect()
>  它们的值是相对于视口的，而不是绝对的. 会随着**滚动而改变**
+ mouseEvent: (鼠标事件)[https://www.cnblogs.com/hanguozhi/p/7382719.html]
> offsetX、offsetY:事件属性返回触发事件时 鼠标相对于事件源元素 的X,Y坐标，标准事件没有对应的属性

> clientX、clientY:事件属性返回当事件被触发时鼠标指针相对于浏览器页面（或客户区）的水平坐标、垂直坐标

> pageX、pageY:事件属性返回当事件被触发时鼠标指针相对于整个页面左上角的水平坐标、垂直坐标

> screenX、screenY：事件属性返回当事件被触发时鼠标位置相对于用户屏幕水水平坐标、垂直坐标，此时的参照点也就是原点是屏幕的左上角。

+ DOMContentLoaded事件： 等待dom文档加载完成
+ el.offsetTop: 相对于父元素的偏移量（父元素为relative或者其他的时候）**不会随着滚动而改变；**

===============

### dom2
+ css属性 pointer-event:
  > none : 禁用鼠标事件,
  
  > auto : 开启鼠标事件，(默认值)
+ 浏览器内核：
  > Trident： IE；***-ms-***

  > Gecko： Firefox； ***-moz-***

  > webkit： Safari，Google Chrome，遨游3，猎豹，百度；  ***-webkit-*** 

  > Presto：Opera——Opera mini ***-o-***

document.body
document.scrollingElement.scrollTop = 0
document.scrollTo(0,0)

### 文件类型

1. Blob: 原始数据的类文件对象；
2. base64: 是二进制数据的一个编码格式，就像utf8一样的东西，他跟json一样，也是前后端交互能够相互识别的数据，他更多的是用来传递文件数据；