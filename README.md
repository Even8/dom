### dom01 元素位置测试  client: 都是相对于视口。
+ getBoundingClientRect()
>  它们的值是相对于视口的，而不是绝对的. 会随着**滚动而改变**
+ mouseEvent: (鼠标事件)[https://www.cnblogs.com/hanguozhi/p/7382719.html]
> offsetX、offsetY:事件属性返回触发事件时 鼠标相对于事件源元素 的X,Y坐标，标准事件没有对应的属性

> clientX、clientY:事件属性返回当事件被触发时鼠标指针相对于浏览器页面（或客户区）的水平坐标、垂直坐标

> pageX、pageY:事件属性返回当事件被触发时鼠标指针相对于整个页面左上角的水平坐标、垂直坐标

> screenX、screenY：事件属性返回当事件被触发时鼠标位置相对于用户屏幕水水平坐标、垂直坐标，此时的参照点也就是原点是屏幕的左上角。

+ DOMContentLoaded事件： 等待dom文档加载完成
