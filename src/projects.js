function createProjects() {
  const projects = document.getElementById('content');
  projects.innerHTML = `
            
  `;
  return projects;
}

function loadProjects() {
  const main = document.getElementById('content');
  main.textContent = '';
  main.appendChild(createProjects());
}

export default loadProjects;
