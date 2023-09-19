function createResume() {
  const resume = document.getElementById('content');
  resume.innerHTML = `
           <p>resume</p> 
  `;
  return resume;
}

function loadResume() {
  const main = document.getElementById('content');
  main.textContent = '';
  main.appendChild(createResume());
}

export default loadResume;
