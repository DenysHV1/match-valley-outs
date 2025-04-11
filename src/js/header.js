const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header-nav-mobile-button');
  const mobileMenu = document.querySelector('.header-nav-mobile');
  const mobileMenuItems = document.querySelectorAll('.header-nav-mobile-item');
  const backdrop = document.querySelector('.header-nav-mobile');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  backdrop.addEventListener('click', () => {
    if (mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
    }
  });

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  });
};

export default mobileMenu;
