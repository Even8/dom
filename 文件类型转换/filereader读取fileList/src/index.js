// https://www.cnblogs.com/pengdt/p/12037986.html
// 在web应用程序中使用文件 https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications#Example.3A_Using_object_URLs_to_display_images
let intputBtn = document.querySelector('.intputBtn');
let base64Content = document.querySelector('.base64Content');
intputBtn.addEventListener('change', function() {
  console.log('fileList对象', this.files[0]);
  let fileList = this.files;
  var f = new FileReader();
  f.onload = function() {
    console.log('f.result', f.result)
    base64Content.innerHTML = f.result;
  }
  // 生成base64类型数据；
  f.readAsDataURL(fileList[0]);
});

// 
var imgVal = '';
let canvasToB = document.getElementById('canvasToB');
let every_few = document.querySelector('.every_few');
let btnToB = document.getElementById('btnToB');

// 获取网路图片 赋值给image
canvasToB.addEventListener('input', function() {
  console.log('this.value', this.value);
  imgVal = this.value;
  every_few.src = imgVal;
})
btnToB.addEventListener('click', function() {
  if (!imgVal) {
    alert('请先填写图片url')
    return;
  }
  var img = new Image();
  img.crossOrigin = 'anonymous'
  img.src = imgVal;
  img.onload = function() {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let content = canvas.getContext('2d');
    content.drawImage(img,0,0,img.width,img.height);
    let url = canvas.toDataURL();
    base64Content.innerHTML = url;
  }
})
