
let canvas = document.createElement('canvas');
let content = canvas.getContext('2d');
canvas.height = 900;
canvas.width = 1000;
document.body.appendChild(canvas);
var x = 0, y = 0;
// CSSImageValue 作为 drawImage参数；
const button = document.querySelector( 'button' );
const allComputedStyles = button.computedStyleMap();
const CSSImageValue = allComputedStyles.get('background-image');
let CSSImageValueBtn = document.getElementById('CSSImageValueBtn');
CSSImageValueBtn.addEventListener('click', function() {
  content.drawImage(CSSImageValue, x ,y, 100, 100);
  x+=50;
  y+=50;
});

// HTMLImageElement作为drawImage参数；
const HTMLImageElementBtn = document.querySelector( '#HTMLImageElementBtn' );
const localimage = document.querySelector( '#localimage' );
HTMLImageElementBtn.addEventListener('click', function() {
  content.drawImage(localimage, x ,y , 100, 100);
  x+=50;
  y+=50;
})