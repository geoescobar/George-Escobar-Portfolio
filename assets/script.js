// ======================= fetch Github API for archives folder =======================
const divContainer = document.getElementById("apiNews");
if (window.location.href.endsWith("/archives.html")) {
  const requestUrl = "https://api.github.com/users/geoescobar/repos";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
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
} else {
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

  // ======================= show more button =======================
  const showMoreBtn = document.querySelector(".more-less-btn");
  const extraCards = document.querySelector(".more-cards");

  extraCards.style.display = "none";

  showMoreBtn.addEventListener("click", () => {
    if (showMoreBtn.innerText === "Show More") {
      extraCards.style.display = "block";
      showMoreBtn.innerText = "Show Less";
    } else {
      extraCards.style.display = "none";
      showMoreBtn.innerText = "Show More";
    }
    return;
  });

  // ======================= navbar =======================
  const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });

  // ======================= highlight current tab =======================
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const currentTab = () => {
    const sections = document.querySelectorAll("section");

    for (let i = 0; i < sections.length; i++) {
      const height = sections[i].offsetHeight;
      const start = sections[i].offsetTop - 150;
      const end = start + height;
      const navId = sections[i].dataset.navId;
      if (window.pageYOffset >= start && window.pageYOffset <= end) {
        console.log(navId);
        document.getElementById(navId).classList.add("current");
      } else {
        document.getElementById(navId).classList.remove("current");
      }
    }
  };

  window.addEventListener("scroll", debounce(currentTab, 100));
  currentTab();
}
// ======================= switch to dark mode =======================
const darkMode = () => {
  const element = document.body;
  element.classList.toggle("dark-mode");
};
