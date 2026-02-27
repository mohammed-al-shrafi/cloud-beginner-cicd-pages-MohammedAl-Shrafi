const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
const steps = document.querySelectorAll('.step');

const messages = [
  '⏳ Pushing code to main branch...',
  '🔍 Running CI checks... verifying files...',
  '✅ All files found! index.html, style.css, script.js',
  '📦 Building and uploading site artifacts...',
  '🚀 Deploying to GitHub Pages...',
  '🎉 Pipeline complete! Site is live!',
];

let running = false;

btn.addEventListener('click', () => {
  if (running) return;
  running = true;
  btn.disabled = true;
  btn.textContent = '⏳ Running...';
  msg.classList.remove('visible');

  // Animate pipeline steps
  steps.forEach((s) => (s.style.borderColor = ''));

  let i = 0;
  const interval = setInterval(() => {
    msg.textContent = messages[i];
    msg.classList.add('visible');

    // Light up steps
    if (i < steps.length) {
      steps[i].style.borderColor = '#00ff88';
      steps[i].style.color = '#00ff88';
    }

    i++;
    if (i >= messages.length) {
      clearInterval(interval);
      btn.disabled = false;
      btn.textContent = '▶ Run Pipeline';
      running = false;
    }
    console.log(`This is new`);
  }, 900);
});

console.log('This is new to test the pipeline!');
