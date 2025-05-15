const techObj = {
    tech1: {
        src: "images/icons/React-icon.svg.png",
        name: "React"
    },
    tech2: {
        src: "images/icons/Postgresql_elephant.svg.png",
        name: "SQL"
    },    
    tech3: {
        src: "images/icons/Tailwind_CSS_Logo.svg.png",
        name: "Tailwind"
    },
    tech4: {
        src: "images/icons/Visual_Studio_Code_1.35_icon.svg.png",
        name: "Vscode"
    },
}

const techRow = document.getElementById('techRow');


Object.values(techObj).forEach(framework => {
    const techCol = document.createElement('div');
    techCol.className = "tech-col";
    techRow.appendChild(techCol);

    const techBox = document.createElement('div');
    techBox.className = 'tech-box';
    techCol.appendChild(techBox);

    const techImg = document.createElement('img');
    techImg.className = 'tech-img';
    techImg.src = framework.src;
    techBox.appendChild(techImg);

    const techName = document.createElement('p');
    techName.className = 'tech-name';
    techName.textContent = framework.name;
    techCol.appendChild(techName);

    techBox.onmouseover = function() {
        techName.style.display = "block";
    }

    techBox.onmouseout = function() {
    techName.style.display = "none";
    }
}) 


const projectObj = {
    proj1: {
        name: "Photographer Portfolio Landing Page – Kristine",
        description:
        "A modern landing page design for photographers to showcase their work and be easily hired.",
        image: "images/web01.jpg",
        link: "#",
        tools: ["React", "SQL", "Frontend"],
    },
        proj2: {
        name: "Photographer Portfolio Landing Page – Kristine",
        description:
        "A modern landing page design for photographers to showcase their work and be easily hired.",
        image: "images/web01.jpg",
        link: "#",
        tools: ["React", "SQL", "Frontend"],
    }
};

const section = document.getElementById("projectSection");
  // Project container
  const projectBg = document.createElement("div");
  projectBg.className = "project-bg";

  // Header row
  const headerRow = document.createElement("div");
  headerRow.className = "project-sec-header-row";

  const h2 = document.createElement("h2");
  h2.id = "projects-heading";
  h2.className = "project-sec-header";
  h2.textContent = "My Latest Design & Development Projects";

  const allProjectsBtn = document.createElement("a");
  allProjectsBtn.href = "/projects";
  allProjectsBtn.className = "all-proj-btn";
  allProjectsBtn.setAttribute("role", "button");
  allProjectsBtn.textContent = "All Projects";

  headerRow.appendChild(h2);
  headerRow.appendChild(allProjectsBtn);
  projectBg.appendChild(headerRow);

Object.values(projectObj).forEach(project => {
  
  // Project Row (Article)
  const article = document.createElement("article");
  article.className = "project-row";

  const img = document.createElement("img");
  img.className = "project-image";
  img.src = project.image;
  img.alt = `Screenshot of ${project.name}`;
  img.loading = "lazy";

  const infoCol = document.createElement("div");
  infoCol.className = "project-info-col";

  const h3 = document.createElement("h3");
  h3.className = "project-name";
  h3.textContent = project.name;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const toolsList = document.createElement("ul");
  toolsList.className = "tools-row";
  toolsList.setAttribute("aria-label", "Technologies used");

  project.tools.forEach((tool) => {
    const li = document.createElement("li");
    li.className = "tool";
    li.textContent = tool;
    toolsList.appendChild(li);
  });

  const visitBtn = document.createElement("a");
  visitBtn.href = project.link;
  visitBtn.className = "visit-btn";
  visitBtn.setAttribute("role", "button");
  visitBtn.textContent = "Visit";

  infoCol.appendChild(h3);
  infoCol.appendChild(description);
  infoCol.appendChild(toolsList);
  infoCol.appendChild(visitBtn);

  article.appendChild(img);
  article.appendChild(infoCol);

  // Assemble the project section
  projectBg.appendChild(article);

  // Clear section and add new content
  section.innerHTML = "";
  section.appendChild(projectBg);
});


// Contact Form
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute("action");

    try {
      const res = await fetch(action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        status.style.display = "block";
        status.textContent = "Thanks for your message!";
        form.reset();
      } else {
        status.style.display = "block";
        status.textContent = "Oops! Something went wrong.";
      }
    } catch (err) {
      status.style.display = "block";
      status.textContent = "Error submitting form.";
    }
  });
