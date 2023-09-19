function createAbout() {
  const about = document.getElementById('content');
  about.innerHTML = `
  <div class="header-container">
                <div class="horizontal-line" aria-hidden="true"></div>
                <h4>About</h4>
            </div>
            <p>Hi there! I'm Cesar, a self-taught front-end developer who enjoys the puzzles of web devlopemnt and jumping straight into the deepend.</p>
            <p>When im not coding, You can find me bodybuilding and practing my korean.</p>
            <p>lets get in touch!</p>
            <div class="skills-wrapper">
                <div class="tech-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    <p>html</p>
                </div>
        
                <div class="tech-icon">  
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    <p>CSS</p>
                </div>

                <div class="tech-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                    <p>SASS</p>
                </div>

                <div class="tech-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <p>JavaScript</p>
                </div>
            </div>

            <div class="skills-wrapper">
                <div class="tech-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                    <p>NPM</p>
                </div>  

                <div class="tech-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                    <p>Git</p>
                </div>

                <div class="tech-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                    <p>Jest</p>
                </div>

                <div class="tech-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
                    <p>Webpack</p>
                </div>
            </div>
            
  `;
  return about;
}

function loadAbout() {
  const main = document.getElementById('content');
  main.textContent = '';
  main.appendChild(createAbout());
}

export default loadAbout;
