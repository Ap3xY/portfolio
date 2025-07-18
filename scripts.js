export const experienceData = [
  {
    date: "2023 — Present",
    title: "Junior Developer - PChoice",
    description:
      "Build and maintain the Official Celbux Vouchering Platform's frontend, implementing cutting each tool and best practices. Work closely with cross-functional teams, including developers, project managers and support teams, to implement and advocate for best practices in web development",
    techStack: ["Nextjs", "Typescript", "Tailwind", "ShadCN"],
  },
];

const experienceContainer = document.querySelector(
  ".experience-item-container"
);

const experienceHTML = experienceData.map((item) => {
  return `
        <div class="experience-item">
            <p class="experience-item-date">${item.date}</p>
            <p class="experience-item-title">${item.title}</p>
            <p class="experience-item-description">${item.description}</p>
            <p class="experience-item-techStack">${item.techStack}</p>
        </div>
    `;
});

experienceContainer.innerHTML = experienceHTML.join("");

export const projectsData = [
  {
    name: "Portfolio",
    description: "Website to showcase my projects and experience",
    techStack: ["HTML", "CSS", "Javascript"],
  },
];

const projectsContainer = document.querySelector(".projects-item-container");

const projectsHTML = projectsData.map((item) => {
  return `
        <div class="experience-item">
            <p class="projects-item-name">${item.name}</p>
            <p class="projects-item-description">${item.description}</p>
            <p class="projects-item-techStack">${item.techStack}</p>
        </div>`;
});

projectsContainer.innerHTML = projectsHTML.join("");
