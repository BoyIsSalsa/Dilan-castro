document.addEventListener('DOMContentLoaded', function() {
  const player = document.getElementById('player');
  let x = 50;
  let y = 50;
  const speed = 10;

  document.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'w':
        y -= speed;
        break;
      case 's':
        y += speed;
        break;
      case 'a':
        x -= speed;
        break;
      case 'd':
        x += speed;
        break;
    }

    player.style.transform = `translate(${x}px, ${y}px)`;
  });
});
