export const experienceData = [
  {
    date: "2023 — Present",
    title: "Junior Developer - PChoice",
    description:
      "Build and maintain the Official Celbux Vouchering Platform's frontend, implementing cutting each tool and best practices. Work closely with cross-functional teams, including developers, project managers and support teams, to implement and advocate for best practices in web development",
    techStack: [
      "Nextjs",
      "Typescript",
      "Tailwind",
      "ShadCN",
      "Google Cloud Platform",
    ],
  },

  {
    date: "2020 — 2022",
    title: "Technician - Mojo ICT",
    description:
      "Create and install cloud and local servers for clients like schools and small-business and provide onsite and remote support",
    techStack: ["Linux", "Servers", "TeamViewer"],
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
    image: "",
    name: "Portfolio",
    description: "Website to showcase my projects and experience",
    techStack: ["HTML", "CSS", "Javascript"],
    link: "",
    githubLink: "",
  },
  {
    image: "",
    name: "Servy",
    description:
      "a Simple web-server built using Elixir and Erlang to help me understand the fundamentals of functional programming and the Elixir Languages",
    techStack: ["Elixir"],
    link: "",
    githubLink: "",
  },
  {
    image: "",
    name: "Studio Game",
    description:
      "a Simple ruby cli game to help me understand the fundamentals of OOP programming and the Ruby Language",
    techStack: ["Ruby"],
    link: "",
    githubLink: "",
  },
  {
    image: "",
    name: "Heads Up",
    description:
      "a Phoenix web app to help me understand the Phoenix Framework",
    techStack: ["Phoenix", "Elixir"],
    link: "",
    githubLink: "",
  },
  {
    image: "",
    name: "Rails Studio",
    description:
      "a Rails web app for movie reviews to help me understand The Rails Framework",
    techStack: ["Rails", "Ruby"],
    link: "",
    githubLink: "",
  },
];

const projectsContainer = document.querySelector(".projects-item-container");

const projectsHTML = projectsData.map((item) => {
  return `
        <div class="experience-item">
            <h2 class="projects-item-name">${item.name}</h2>
            <p class="projects-item-description">${item.description}</p>
            <div class="projects-item-techStack">${item.techStack}</div>
        </div>`;
});

projectsContainer.innerHTML = projectsHTML.join("");
