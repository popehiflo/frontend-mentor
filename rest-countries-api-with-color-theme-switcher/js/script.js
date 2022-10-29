// Change theme
const btnTheme = document.querySelector('.btn-theme');

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // change icon for theme
  if(document.body.className == 'dark') {
    btnTheme.innerHTML = `
      <i class="fa-solid fa-sun"></i>
      Light Mode
    `;
  } else {
    btnTheme.innerHTML = `
    <i class="fa-solid fa-moon"></i>
    Dark Mode
  `;
  }
});