let btn = document.querySelector('.btn');
let b = document.querySelector('.b');
btn.addEventListener('click', function() {
  let event = new MouseEvent('mousemove');
  b.dispatchEvent(event); 
})

b.addEventListener('mousemove', function() {
  alert('b-mousemove事件被触发')
})
