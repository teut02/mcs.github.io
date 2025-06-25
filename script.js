const btn = document.getElementById('theme-toggle');
const setTheme = d => {
  document.documentElement.dataset.theme = d ? 'dark' : 'light';
  btn.innerHTML = d ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};
setTheme(matchMedia('(prefers-color-scheme: dark)').matches);
btn.onclick = () => setTheme(document.documentElement.dataset.theme !== 'dark');
