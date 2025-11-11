const body = document.body;
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
const scrim = document.querySelector('.scrim');

function closeMenu(){
  body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
  scrim.setAttribute('hidden', '');
}

function openMenu(){
  body.classList.add('nav-open');
  toggle.setAttribute('aria-expanded', 'true');
  scrim.removeAttribute('hidden');
}

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  expanded ? closeMenu() : openMenu();
});

scrim.addEventListener('click', closeMenu);

window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeMenu();
});
