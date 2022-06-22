// ======================= fetch Github API for archives folder =======================
const divContainer = document.getElementById("apiNews");

const requestUrl = "https://api.github.com/users/geoescobar/repos";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < 100; i++) {
      const divElement = document.createElement("div");
      divElement.setAttribute("class", "api-news");
      const aTag = document.createElement("a");
      aTag.setAttribute("class", "repo");
      aTag.textContent = data[i].name;
      aTag.setAttribute("href", data[i].svn_url);
      aTag.setAttribute("target", "_blank");
      divElement.appendChild(aTag);
      divContainer.appendChild(divElement);
    }
  });

// ======================= linking the icons =======================
feather.replace();

// ======================= scroll fade effects =======================
const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".home");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// ======================= scroll fade effects =======================

