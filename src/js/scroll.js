document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.fixed-header');
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const rect = targetElement.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top - headerHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});
