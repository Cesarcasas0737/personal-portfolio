import loadAbout from './about';

function setActiveButton(clickedButton) {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((button) => {
    if (button !== clickedButton) {
      button.classList.remove('active');
    }
  });
}

function createNav() {
  const aboutButton = document.createElement('button');
  aboutButton.classList.add('button-nav');
  aboutButton.textContent = 'test';
  aboutButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(aboutButton);
    console.log('did it');
  });

  return aboutButton;
}

function initializeWebsite() {
  const nav = document.getElementById('nav');
  nav.appendChild(createNav());

  setActiveButton(document.querySelector('.button-nav'));
  loadAbout();
}

export default initializeWebsite;
