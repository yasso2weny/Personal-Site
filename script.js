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
}) 


const projectObj = {
    proj1: {
      title: "Potion Shop Website",
        name: "Brew It, Bottle It, Sell It — Magical UX for Every Customer",
        description:
        "A whimsical e-commerce storefront for a fantasy potion shop, complete with animated effects, product filters, and a smooth cart experience.",
        image: "images/proj01.jpg",
        link: "https://dribbble.com/shots/25665998-Potion-Shop",
        tools: ["Wix Studio", "E-Commerce", "UIAnimation"],
    },
        proj2: {
          title: "Streaming Service Manager App",
        name: "All Your Streams in One Seamless Dashboard",
        description:
        "A clean, modern landing page for an app that helps users track, organize, and manage all their streaming services in one place.",
        image: "images/proj02.jpg",
        link: "https://dribbble.com/shots/25793582-Streaming-App-Website",
        tools: ["Landing Page", "Tracker", "ProductivityApp"],
    },
        proj3: {
          title: "Ice Cream Truck Landing Page",
        name: "Cool Treats. Hot Design.",
        description:
        "A playful and colorful website for an ice cream brand, featuring interactive scoops, dripping effects, and sweet pastel themes.",
        image: "images/proj03.png",
        link: "https://dribbble.com/shots/25995798-Ice-Cream-Truck-Landing-Page",
        tools: ["BrandWebsite", "CSSAnimation", "FoodDesign"],
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
  
  const article = document.createElement("article");
  article.className = "project-row";

  const img = document.createElement("img");
  img.className = "project-image";
  img.src = project.image;
  img.alt = `Screenshot of ${project.name}`;
  img.loading = "lazy";

  const projImgContainer = document.createElement('div');
  projImgContainer.className = 'proj-img-container';
  projImgContainer.appendChild(img);

  const projImgOverlay = document.createElement('div');
  projImgOverlay.className = 'proj-img-overlay';
  projImgOverlay.textContent = project.title;
  projImgContainer.appendChild(projImgOverlay);

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
  visitBtn.textContent = "Visit Site";

  infoCol.appendChild(h3);
  infoCol.appendChild(description);
  infoCol.appendChild(toolsList);
  infoCol.appendChild(visitBtn);

  article.appendChild(projImgContainer);
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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});