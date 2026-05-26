const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

menuToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
});

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
