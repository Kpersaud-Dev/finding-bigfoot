function loadBigFoot() {
  document.getElementById('bigfoot').src = 'bigfoot.png'
}

function moveBigFoot() {
  alert('Woohoo, you win! You found Bigfoot!');
  let picture = document.getElementById('bigfoot')
  //generates random right and bottom numbers
  let x = Math.random() * 300;
  let y = Math.random() * 300;
  //connecting bottom and right
  picture.style.bottom = x + 'px';
  picture.style.right = y + 'px';
}
