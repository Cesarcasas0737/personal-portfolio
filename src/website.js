import loadAbout from './about';
import loadProjects from './projects';
import loadResume from './resume';

// ignore lint error
function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createAbout() {
  const aboutButton = document.createElement('button');
  aboutButton.classList.add('button-nav');
  aboutButton.textContent = 'About';
  aboutButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(aboutButton);
    loadAbout();
  });

  return aboutButton;
}

function createProjects() {
  const projectsButton = document.createElement('button');
  projectsButton.classList.add('button-nav');
  projectsButton.textContent = 'Projects';
  projectsButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(projectsButton);
    loadProjects();
  });

  return projectsButton;
}

function createResume() {
  const resumeButton = document.createElement('button');
  resumeButton.classList.add('button-nav');
  resumeButton.textContent = 'Resume';
  resumeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(resumeButton);
    loadResume();
  });

  return resumeButton;
}

function initializeWebsite() {
  const nav = document.getElementById('nav');
  nav.appendChild(createAbout());
  nav.appendChild(createProjects());
  nav.appendChild(createResume());
  setActiveButton(document.querySelector('.button-nav'));
  loadAbout();
}

export default initializeWebsite;
