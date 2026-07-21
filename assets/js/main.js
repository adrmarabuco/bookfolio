const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-site-nav]');

if (menuButton && navigation) {
  const menuLabel = menuButton.querySelector('.sr-only');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.removeAttribute('data-open');
    if (menuLabel) menuLabel.textContent = 'Open navigation';
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.toggleAttribute('data-open', !isOpen);
    if (menuLabel) menuLabel.textContent = isOpen ? 'Open navigation' : 'Close navigation';
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButton.focus();
    }
  });
}

const year = document.querySelector('[data-current-year]');
if (year) year.textContent = String(new Date().getFullYear());
