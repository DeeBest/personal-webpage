const toggleBtn = document.querySelector(".toggle-btn");
const navbarLinks = document.querySelector(".navbar-links");

toggleBtn.addEventListener('click', ()=> {
  // Check the current display property of navbarLinks
  const currentDisplay = getComputedStyle(navbarLinks).display;
  
  // Toggle the display property based on its current value
  if (currentDisplay === 'none') {
    navbarLinks.style.display = 'flex';
  } else {
    navbarLinks.style.display = 'none';
  }
});
