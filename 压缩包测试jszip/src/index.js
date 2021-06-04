
// 实例化（jszip）对象
var zip = new JSZip();
// 创建一个文件
zip.file("hello.txt", "Hello[p my)6cxsw2q")
// 创建文件夹
var photoZip = zip.folder("photos");
var btn = document.getElementById('btn');
btn.addEventListener('click', function() { 
  // 生成虚拟jszip文件
  zip.generateAsync({type:"blob"})
  .then(function (blob) {
      // 下载保存文件
      saveAs(blob, "hello.zip");
  });
})

