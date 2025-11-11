import { experienceData } from "./data/experience-data.js";
import { projectsData } from "./data/projects-data.js";

// Code to generate the Experience Section

const experienceContainer = document.querySelector(
  ".experience-item-container",
);

const experienceHTML = experienceData.map((item) => {
  return `
        <div class="experience-item">
            <div>
              <p class="experience-item-date">${item.date}</p>
            </div>
            <div class="experience-item-text-container">
              <h2 class="experience-item-title">${item.title}</h2>
              <p class="experience-item-description">${item.description}</p>
              <p class="experience-item-techStack">${item.techStack
                .map((tech) => `<span class="tech-item">${tech}</span>`)
                .join(" ")}</p>
            </div>
        </div>
    `;
});

experienceContainer.innerHTML = experienceHTML.join("");

// Code to generate the Projects Section

const projectsContainer = document.querySelector(".projects-item-container");

const projectsHTML = projectsData.map((item) => {
  return `
        <div class="project-item">

         <!--
            This allows each project item to have a screenshot image

            <div class="project-image-container">
              <img src=${item.imageLink} width="200" height="100">
            </div>
          -->

            <div class="projects-item-text-container">
              <h2 class="projects-item-name">${item.name}</h2>
              <p class="projects-item-description">${item.description}</p>
              <div class="projects-item-techStack">${item.techStack
                .map((tech) => `<span class="tech-item">${tech}</span>`)
                .join(" ")}
              </div>
            </div>

        </div>`;
});

projectsContainer.innerHTML = projectsHTML.join("");

// TODO: Implement download CV logic

function downloadCv() {
  window.open("assets/cv.md", "_blank");
}

const downloadCvBtn = document.getElementById("download-cv-btn");

downloadCvBtn.addEventListener("click", downloadCv);
