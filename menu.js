document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    if (hamburgerBtn && mobileMenu) {
      hamburgerBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
  
        if (mobileMenu.classList.contains('active')) {
          hamburgerBtn.textContent = '✕';
          document.body.style.overflow = 'hidden';
        } else {
          hamburgerBtn.textContent = '☰';
          document.body.style.overflow = '';
        }
      });
    }
  
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        hamburgerBtn.textContent = '☰';
        document.body.style.overflow = '';
      }
    });
  });
  