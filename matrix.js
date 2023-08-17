const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01010011010110010101';  //aqui sera o texto que sera apresentado no projeto-->
const charSize = 20;
const columns = canvas.width / charSize;
const rows = canvas.height / charSize;
const matrix = [];

for (let i = 0; i < columns; i++) {
  matrix[i] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00FF00';
  ctx.font = charSize + 'px monospace';

  for (let i = 0; i < matrix.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * charSize, matrix[i] * charSize);

    if (matrix[i] * charSize > canvas.height && Math.random() > 0.975) {
      matrix[i] = 0;
    }

    matrix[i]++;
  }
}

setInterval(draw, 80); // aqui definimos a velocidade-->