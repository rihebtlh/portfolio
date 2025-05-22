// Smooth scroll is handled by CSS scroll-behavior, but here is a console log for testing
console.log("Portfolio loaded successfully! 🌸");

window.addEventListener('scroll', () => {
  // Show button after scrolling down 300px
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  // Highlight nav links based on scroll position
  const sections = document.querySelectorAll('section');
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(section => {
    const top = section.offsetTop - 60;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`nav a[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
});

// Smooth scroll for Back to Top button
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll reveal for sections
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const backToTopBtn = document.getElementById('backToTop');

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


