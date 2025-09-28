const bubbles = document.querySelectorAll('.bubble-text');
  let current = 0;

  function showNextBubble() {
    bubbles[current].classList.remove('active');
    current = (current + 1) % bubbles.length;
    bubbles[current].classList.add('active');
  }

  setInterval(showNextBubble, 3000); 