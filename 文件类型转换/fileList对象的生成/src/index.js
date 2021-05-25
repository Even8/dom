/**
 * @desc file/fileList对象的产生；
 * 1. input标签事件
 * 2. drag
 * 
*/ 

// input
let input = document.getElementById('file');
input.addEventListener('change', function(e) {
  console.log('生成Event对象', e);
  console.log('生成fileList对象', this.files);
})

// Document: drag event : PC端才生效！
var dragged;
document.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);
document.addEventListener("dragend", function(event) {
  console.log('生成fileList对象', event.dataTransfer.files)
  event.target.style.opacity = "";
}, false);
document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);
document.addEventListener("dragenter", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }
}, false);
document.addEventListener("dragleave", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }
}, false);
document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

// canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
let canvasEl = document.querySelector('.handleCanvas');
canvasEl.addEventListener('click', function() {
  // 很多浏览器并不支持次方法
  // var f = canvas.mozGetAsFile('test.png');
  // console.log('fileList', f);
  var dataURL = canvas.toDataURL();
  console.log(dataURL);
})