
function burgerMenu() {
  const burger = document.querySelector(".header__burger");
  const navbar = document.querySelector(".header__navbar");
  const b = document.querySelector(".header__burger-bars");
  const x = document.querySelector(".header__burger-x");
  const body = document.body;

  if (!burger || !navbar || !b || !x) {
    console.warn("Не знайдено один або більше елементів");
    return;
  }

  burger.addEventListener("click", () => {

    burger.classList.toggle("active");

    b.classList.toggle("none"); // приховуємо bars
    x.classList.toggle("active"); // показуємо x

    navbar.classList.toggle("active"); // показуємо меню
    body.classList.toggle("lock"); // блокуємо прокрутку
  });
}

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu();

  const languageSelect = document.getElementById("language-select");
  if (languageSelect) {
    languageSelect.addEventListener("change", () => {
      languageSelect.blur(); // знімає фокус після вибору мови
    });
  }
});

const swiper = new Swiper(".main-swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main-swiper__pagination",
    clickable: true,
  },
});

//====== PORTFOLIO JS ======//

document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".portfolio__item");
  const portfolioBlocks = document.querySelectorAll(".portfolio__block-img");

  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      const filter = item.getAttribute("data-filter");

      filterItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      portfolioBlocks.forEach((block) => {
        const category = block.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          block.style.display = "block";
        } else {
          block.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".portfolio__item");
  const imageBlocks = document.querySelectorAll(".portfolio__block-img");

  const portfolioImages = {
    all: [
      "/img/img/img-3.webp",
      "/img/img/img-7.webp",
      "/img/img/img-4.webp",
      "/img/frame/frame-7.webp",
    ],
    design: [
      "/img/img/img-7.webp",
      "/img/design/design-2.webp",
      "/img/img/img-5.webp",
      "/img/planning/planning-2.webp",
    ],
    repair: [
      "/img/img/img-3.webp",
      "/img/repair/repair-2.webp",
      "/img/houses/houses-3.webp",
      "/img/frame/frame-5.webp",
    ],
    planning: [
      "/img/img/img-4.webp",
      "/img/proekt-1.webp",
      "/img/frame/frame-11.webp",
      "/img/frame/frame-10.webp",
    ],
    houses: [
      "/img/frame/frame-7.webp",
      "/img/frame/frame-6.webp",
      "/img/frame/frame-8.webp",
      "/img/img/img-5.webp",
    ],
  };

  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      const filter = item.getAttribute("data-filter");
      // Активна кнопка
      filterItems.forEach((btn) => btn.classList.remove("active"));
      item.classList.add("active");

      const images = portfolioImages[filter];

      imageBlocks.forEach((block, index) => {
        const img = block.querySelector("img");

        if (images[index]) {
          img.src = images[index];
          block.style.display = "block";
        } else {
          block.style.display = "none";
        }
      });
    });
  });
});

// work-p js //

const workSwiper = new Swiper(".work-p__swiper", {
  slidesPerView: 2,
  loop: true,
  freeMode: true,
  speed: 10000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  pagination: {
    el: ".furniture-swiper__pagination",
    clickable: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
  },
});

const tabs = document.querySelectorAll(".prices__tab-button");
const contents = document.querySelectorAll(".prices__tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const id = tab.dataset.tab;

    tabs.forEach((t) => t.classList.remove("prices__tab-button-active"));
    contents.forEach((c) => c.classList.remove("prices__tab-active"));

    tab.classList.add("prices__tab-button-active");
    document
      .querySelector(`[data-content="${id}"]`)
      .classList.add("prices__tab-active");
  });
});

// furniture
const swiperf = new Swiper(".furniture-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  speed: 10000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  pagination: {
    el: ".furniture-swiper__pagination",
    clickable: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("language-select");

  if (!langSelect) return;

  const langs = ["pl", "en", "uk", "ru"];

  const routes = {
    about: {
      pl: "/about.html",
      en: "/en/about.html",
      uk: "/uk/about.html",
      ru: "/ru/about.html",
    },
    home: {
      pl: "/index.html",
      en: "/en/index.html",
      uk: "/uk/index.html",
      ru: "/ru/index.html",
    },
    services: {
      pl: "/services.html",
      en: "/en/services.html",
      uk: "/uk/services.html",
      ru: "/ru/services.html",
    },
    portfolio: {
      pl: "/portfolio.html",
      en: "/en/portfolio.html",
      uk: "/uk/portfolio.html",
      ru: "/ru/portfolio.html",
    },
    price: {
      pl: "/price.html",
      en: "/en/price.html",
      uk: "/uk/price.html",
      ru: "/ru/price.html",
    },
    contacts: {
      pl: "/contacts.html",
      en: "/en/contacts.html",
      uk: "/uk/contacts.html",
      ru: "/ru/contacts.html",
    },
  };

  // LANG DETECT
  function getLang() {
    const parts = window.location.pathname.split("/").filter(Boolean);

    if (langs.includes(parts[0])) {
      return parts[0];
    }

    return "pl";
  }

  // PAGE DETECT
  function getPage() {
    const parts = window.location.pathname.split("/").filter(Boolean);

    const file = parts[parts.length - 1];

    if (!file || file === "index.html") return "home";

    const name = file.replace(".html", "");

    if (name === "index") return "home";

    return name;
  }

  const currentLang = getLang();
  const currentPage = getPage();

  // set select value
  langSelect.value = currentLang;

  // change language
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;

    const url = routes[currentPage]?.[lang];

    if (!url) {
      console.error("Route not found:", currentPage, lang);
      return;
    }

    window.location.href = url;
  });
});


