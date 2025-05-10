document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.querySelector('input');
  const errText = document.getElementById('p');
  const errIcon = document.getElementById('img');
  const emailValue = email.value.trim();
  const btn = document.querySelector('button');
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (pattern.test(emailValue)) {
    errText.style.display = 'none';
    errIcon.style.display = 'none';
    window.location.href = 'style.css';
  } else {
    errText.style.display = 'block';
    errIcon.style.display = 'block';
    btn.style.top = '-60px'; // 調整された値
    email.style.borderColor = 'hsl(0, 80%, 60%)'; // 調整された値
  }
});
