const toggleBtn = document.querySelector('.toggle-btn');
const mobileNav = document.querySelector('.mobile-nav');

toggleBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show-mobile-nav');
});

const body = document.querySelector('body');
const darkModeInput = document.getElementById('dark-mode-input');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const hero = document.querySelector('.hero');
const gradientText = document.querySelectorAll('.gradient-text');
const skillsDivItem = document.querySelectorAll('.skills-div-item');
const projectsGridItem = document.querySelectorAll('.projects-grid-item');
const contactIcon = document.querySelectorAll('.contact-icon');

darkModeInput.checked = JSON.parse(localStorage.getItem('themeMode'));

updateTheme();

function updateTheme() {
  if (darkModeInput.checked) {
    body.style.backgroundColor = 'hsl(24, 10%, 10%)';
    body.style.color = 'hsl(20, 6%, 90%)';
    header.style.backgroundColor = 'hsl(24, 10%, 35%)';
    footer.style.backgroundColor = 'hsl(24, 10%, 35%)';
    hero.style.background =
      'radial-gradient(circle at 50% 50%, hsl(20, 6%, 50%), hsl(24, 10%, 35%), gray)';
    skillsDivItem.forEach((item) => {
      item.style.background =
        'linear-gradient(to bottom right, gray,white, black)';
      item.style.color = 'hsl(20, 6%, 40%)';
    });
    projectsGridItem.forEach((item) => {
      item.style.background =
        'linear-gradient(to bottom right, gray,white, black)';
      item.style.color = 'hsl(20, 6%, 40%)';
    });
    contactIcon.forEach((item) => {
      item.style.boxShadow = '0px 0px 15px rgba(255, 255, 255,0.8)';
      item.style.backgroundColor = 'white';
    });
    gradientText.forEach((item) => {
      item.style.backgroundImage =
        'linear-gradient(to left, white, pink, tomato)';
    });
  } else {
    body.style.backgroundColor = 'hsl(20, 6%, 90%)';
    body.style.color = 'hsl(24, 10%, 10%)';
    header.style.backgroundColor = 'hsl(0, 0%, 80%)';
    footer.style.backgroundColor = 'hsl(0, 0%, 80%)';
    hero.style.background =
      'radial-gradient(circle at 50% 50%, cadetblue, white)';
    skillsDivItem.forEach((item) => (item.style.background = 'transparent'));
    projectsGridItem.forEach((item) => (item.style.background = 'transparent'));
    contactIcon.forEach((item) => {
      item.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.8)';
      item.style.backgroundColor = 'transparent';
    });
    gradientText.forEach((item) => {
      item.style.backgroundImage =
        'linear-gradient(to left, black, #9956f5, #19125a)';
    });
  }
}

darkModeInput.addEventListener('input', () => {
  updateTheme();
  saveThemeToLocalStorage();
});

function saveThemeToLocalStorage() {
  localStorage.setItem('themeMode', JSON.stringify(darkModeInput.checked));
}
