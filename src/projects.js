function createProjects() {
  const projects = document.getElementById('content');
  projects.innerHTML = `
            
        <main id="content">
        <div class="header-container">
            <div class="horizontal-line" aria-hidden="true"></div>
            <h4>Projects</h4>
        </div>

        <div class="all-projects-wrapper">
            <div class="project-wrapper preview-left">
                <div class="project-details">
                    <div class="details-text">
                        <h3>Weather App</h3>
                        <p>Weather Data,API Integration,Utilizes the WeatherAPI to fetch weather data in JSON format.</p>
                    </div>
                    <div class="button-wrapper">
            
                            <a href="">Live App</a>
            
                            <a href="">Repository</a>
            
                    </div>
                </div>
            
                <img class="project-preview" src="./media/project-images/weather_Api.png" alt="">
            
            </div>
            <div class="project-wrapper preview-right">
                <div class="project-details">
                    <div class="details-text">
                        <h3>Admin Dashboard</h3>
                        <p>Flexbox and Grid Layout: I used some layout techniques to create a visually appealing and organized dashboard interface.</p>
                    </div>
                    <div class="button-wrapper">
            
                            <a href="">Live App</a>
            
                            <a href="">Repository</a>
            
                    </div>
                </div>
            
                <img class="project-preview" src="./media/project-images/dashboard-screenshot.png" alt="">
            
            </div>

            <div class="project-wrapper preview-left">
                <div class="project-details">
                    <div class="details-text">
                        <h3>Sign Up Page</h3>
                        <p>Form Validation: Form validation is implemented using HTML attributes like required and pattern to ensure that certain fields are filled out correctly.</p>
                    </div>
                    <div class="button-wrapper">
            
                            <a href="">Live App</a>
            
                            <a href="">Repository</a>
            
                    </div>
                </div>
            
                <img class="project-preview" src="./media/project-images/sign_up.png" alt="">
            
            </div>
        </div>
  `;
  return projects;
}

function loadProjects() {
  const main = document.getElementById('content');
  main.textContent = '';
  main.appendChild(createProjects());
}

export default loadProjects;
