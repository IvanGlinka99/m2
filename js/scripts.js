
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
    console.log("Клік по бургеру");

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
      "./img/img/img-3.webp",
      "./img/img/img-7.webp",
      "./img/img/img-4.webp",
      "./img/frame/frame-7.webp",
    ],
    design: [
      "./img/img/img-7.webp",
      "./img/design/design-2.webp",
      "./img/img/img-5.webp",
      "./img/planning/planning-2.webp",
    ],
    repair: [
      "./img/img/img-3.webp",
      "./img/repair/repair-2.webp",
      "./img/houses/houses-3.webp",
      "./img/frame/frame-5.webp",
    ],
    planning: [
      "./img/img/img-4.webp",
      "./img/proekt-1.webp",
      "./img/frame/frame-11.webp",
      "./img/frame/frame-10.webp",
    ],
    houses: [
      "./img/frame/frame-7.webp",
      "./img/frame/frame-6.webp",
      "./img/frame/frame-8.webp",
      "./img/img/img-5.webp",
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
  slidesPerView: 1,
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
      slidesPerView: 1,
    },
  },
});

// furniture
const swiperf = new Swiper(".furniture-swiper", {
  slidesPerView: 3,
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
      slidesPerView: 1,
    },
  },
});

window.langData = {
  about__h1: {
    uk: 'Дізнайтесь більше про «<span class="about__desc-m2 m2">М²</span>»',
    en: 'Learn more about «<span class="about__desc-m2 m2">М²</span>»',
    pl: 'Dowiedz się więcej o «<span class="about__desc-m2 m2">М²</span>»',
    ru: 'Узнайте больше о «<span class="about__desc-m2 m2">М²</span>»',
  },
  "about__description-1": {
    uk: '<span class="about__desc-m2 m2">М²</span> — компанія, що динамічно розвивається та надає послуги високої якості у сферах проєктування, дизайну та ремонту житлових і комерційних приміщень. Ми працюємо як з приватними клієнтами, так і з бізнесом, реалізуючи проєкти по всій Польщі.',
    en: '<span class="about__desc-m2 m2">M²</span> is a dynamically growing company providing high-quality services in design, architecture, and renovation of residential and commercial spaces. We work with both private clients and businesses, implementing projects throughout Poland.',
    pl: '<span class="about__desc-m2 m2">M²</span> to dynamicznie rozwijająca się firma oferująca wysokiej jakości usługi w zakresie projektowania, aranżacji i remontów mieszkań oraz lokali komercyjnych. Pracujemy zarówno z klientami indywidualnymi, jak i z firmami, realizując projekty w całej Polsce.',
    ru: '<span class="about__desc-m2 m2">М²</span> — это динамично развивающаяся компания, предоставляющая высококачественные услуги в сфере проектирования, дизайна и ремонта жилых и коммерческих помещений. Мы работаем как с частными клиентами, так и с бизнесом, реализуя проекты по всей Польше.',
  },
  "about__description-2": {
    uk: "Наша команда — це об’єднання досвідчених фахівців, креативних дизайнерів і сучасних інженерів, які створюють надійні, естетичні та функціональні рішення у сфері будівництва та інтер’єру.",
    en: "Our team combines experienced professionals, creative designers, and modern engineers who deliver reliable, aesthetic, and functional solutions in construction and interior design.",
    pl: "Nasz zespół to połączenie doświadczonych specjalistów, kreatywnych projektantów i nowoczesnych inżynierów, którzy tworzą niezawodne, estetyczne i funkcjonalne rozwiązania w budownictwie i aranżacji wnętrz.",
    ru: "Наша команда — это объединение опытных специалистов, креативных дизайнеров и современных инженеров, создающих надежные, эстетичные и функциональные решения в строительстве и дизайне интерьера.",
  },
  
  "about__subtitle-1": {
    uk: 'Переваги роботи з <span class="about__desc-m2 m2">м²</span>:',
    en: 'Advantages of working with <span class="about__desc-m2 m2">м²</span>:',
    pl: 'Zalety robotów <span class="about__desc-m2 m2">м²</span>:',
    ru: 'Преимущества работы с <span class="about__desc-m2 m2">м²</span>:',
  },
  about__title: {
    uk: "— там, де ідея стає реальністю",
    en: "— where an idea becomes reality",
    pl: "— gdzie pomysł staje się rzeczywistością",
    ru: "- там, где идея становится реальностью",
  },
  "about__description-3": {
    uk: "Ми беремося за проєкти будь-якої складності — від косметичного ремонту до повномасштабного будівництва та створення ексклюзивного інтер’єру під ключ. Наш головний пріоритет — задоволення потреб клієнтів і перевершення їхніх очікувань.",
    en: "We take on projects of any complexity — from cosmetic renovations to large-scale construction and creating exclusive turnkey interiors. Our top priority is meeting client needs and exceeding their expectations.",
    pl: "Podejmujemy się projektów o różnym stopniu trudności — od drobnych remontów po pełnowymiarowe budowy i tworzenie ekskluzywnych wnętrz pod klucz. Naszym priorytetem jest zadowolenie klienta i przewyższenie jego oczekiwań.",
    ru: "Мы беремся за проекты любой сложности — от косметического ремонта до масштабного строительства и создания эксклюзивных интерьеров под ключ. Наш главный приоритет — удовлетворение потребностей клиентов и превышение их ожиданий.",
  },
  "about__description-4": {
    uk: "З моменту заснування компанії ми реалізували десятки успішних проєктів, здобувши репутацію надійного партнера. Ми приділяємо увагу кожному етапу: від концепції до фінішного оздоблення, гарантуючи якість, чіткі терміни та прозору співпрацю.",
    en: "Since the company's founding, we have completed dozens of successful projects, earning a reputation as a reliable partner. We pay close attention to every stage — from concept to final finishing — ensuring quality, timely delivery, and transparent collaboration.",
    pl: "Od momentu założenia firmy zrealizowaliśmy dziesiątki udanych projektów, zdobywając reputację solidnego partnera. Zwracamy uwagę na każdy etap — od koncepcji po końcowe wykończenie — zapewniając jakość, terminowość i przejrzystą współpracę.",
    ru: "С момента основания компании мы реализовали десятки успешных проектов и завоевали репутацию надежного партнёра. Мы внимательно относимся ко всем этапам — от концепции до финальной отделки, обеспечивая качество, сроки и прозрачность сотрудничества.",
  },
  "about__description-5": {
    uk: "Обираючи М² — ви обираєте професіоналізм, відповідальність і результат, яким можна пишатися.",
    en: "By choosing M², you choose professionalism, responsibility, and results you can be proud of.",
    pl: "Wybierając M², wybierasz profesjonalizm, odpowiedzialność i rezultat, z którego możesz być dumny.",
    ru: "Выбирая М², вы выбираете профессионализм, ответственность и результат, которым можно гордиться.",
  },
  "about__block-col-2": {
    uk: "Ремонтні роботи",
    en: "Renovation works",
    pl: "Prace remontowe",
    ru: "Ремонтные работы",
  },
  "about__block-col-3": {
    uk: "Дизайн інтер’єру",
    en: "Interior design",
    pl: "Projektowanie wnętrz",
    ru: "Дизайн интерьера",
  },
  "about__block-col-4": {
    uk: "Проєктні роботи",
    en: "Project works",
    pl: "Prace projektowe",
    ru: "Проектные работы",
  },
  "about__block-col-5": {
    uk: "Додаткові послуги",
    en: "Additional services",
    pl: "Usługi dodatkowe",
    ru: "Дополнительные услуги",
  },
  "about__block-li-1": {
    uk: "Зведення приватних будинків і котеджів",
    en: "Construction of private houses and cottages",
    pl: "Budowa domów prywatnych i domków letniskowych",
    ru: "Возведение частных домов и коттеджей",
  },
  "about__block-li-2": {
    uk: "Комерційне та промислове будівництво",
    en: "Commercial and industrial construction",
    pl: "Budownictwo komercyjne i przemysłowe",
    ru: "Коммерческое и промышленное строительство",
  },
  "about__block-li-3": {
    uk: "Монолітні та каркасні конструкції",
    en: "Monolithic and frame structures",
    pl: "Konstrukcje monolityczne i szkieletowe",
    ru: "Монолитные и каркасные конструкции",
  },
  "about__block-li-4": {
    uk: "Фундаменти, дах, фасадні роботи",
    en: "Foundations, roofing, façade works",
    pl: "Fundamenty, dach, prace elewacyjne",
    ru: "Фундаменты, крыша, фасадные работы",
  },
  "about__block-li-5": {
    uk: "Комплексний ремонт квартир, будинків, офісів",
    en: "Comprehensive renovation of apartments, houses, offices",
    pl: "Kompleksowy remont mieszkań, domów, biur",
    ru: "Комплексный ремонт квартир, домов, офисов",
  },
  "about__block-li-6": {
    uk: "Косметичний та капітальний ремонт",
    en: "Cosmetic and major repairs",
    pl: "Remont kosmetyczny i generalny",
    ru: "Косметический и капитальный ремонт",
  },
  "about__block-li-7": {
    uk: "Вирівнювання стін і стелі, укладка підлогових покриттів",
    en: "Wall and ceiling leveling, floor covering installation",
    pl: "Wyrównywanie ścian i sufitów, układanie podłóg",
    ru: "Выравнивание стен и потолков, укладка напольных покрытий",
  },
  "about__block-li-8": {
    uk: "Монтаж сантехніки та електрики",
    en: "Installation of plumbing and electrical systems",
    pl: "Montaż instalacji wodno-kanalizacyjnych i elektrycznych",
    ru: "Монтаж сантехники и электрики",
  },
  "about__block-li-9": {
    uk: "Індивідуальні дизайн-проєкти",
    en: "Individual design projects",
    pl: "Indywidualne projekty aranżacji",
    ru: "Индивидуальные дизайн-проекты",
  },
  "about__block-li-10": {
    uk: "3D-візуалізація приміщень",
    en: "3D visualization of spaces",
    pl: "Wizualizacja 3D pomieszczeń",
    ru: "3D визуализация помещений",
  },
  "about__block-li-11": {
    uk: "Підбір матеріалів, меблів і декору",
    en: "Selection of materials, furniture, and decor",
    pl: "Dobór materiałów, mebli i dekoracji",
    ru: "Подбор материалов, мебели и декора",
  },
  "about__block-li-12": {
    uk: "Авторський супровід",
    en: "Author supervision",
    pl: "Nadzór autorski",
    ru: "Авторский надзор",
  },
  "about__block-li-13": {
    uk: "Архітектурне проєктування житлових і комерційних об’єктів",
    en: "Architectural design of residential and commercial buildings",
    pl: "Projektowanie architektoniczne budynków mieszkalnych i komercyjnych",
    ru: "Архитектурное проектирование жилых и коммерческих объектов",
  },
  "about__block-li-14": {
    uk: "Інженерні мережі та комунікації",
    en: "Engineering networks and communications",
    pl: "Sieci inżynieryjne i komunikacja",
    ru: "Инженерные сети и коммуникации",
  },
  "about__block-li-15": {
    uk: "Узгодження документації",
    en: "Documentation approval",
    pl: "Zatwierdzanie dokumentacji",
    ru: "Согласование документации",
  },
  "about__block-li-16": {
    uk: "Енергоефективні рішення",
    en: "Energy-efficient solutions",
    pl: "Rozwiązania energooszczędne",
    ru: "Энергоэффективные решения",
  },
  "about__block-li-17": {
    uk: "Демонтажні роботи",
    en: "Demolition works",
    pl: "Prace rozbiórkowe",
    ru: "Демонтажные работы",
  },
  "about__block-li-18": {
    uk: "Ландшафтний дизайн",
    en: "Landscape design",
    pl: "Projektowanie krajobrazu",
    ru: "Ландшафтный дизайн",
  },
  "about__block-li-19": {
    uk: "Технічний нагляд",
    en: "Technical supervision",
    pl: "Nadzór techniczny",
    ru: "Технический надзор",
  },
  "about__block-li-20": {
    uk: "Консультації та оцінка проєктів",
    en: "Consultations and project evaluations",
    pl: "Konsultacje i ocena projektów",
    ru: "Консультации и оценка проектов",
  },
  "about__box-title-1": {
    uk: "Досвід та професіоналізм",
    en: "Experience and professionalism",
    pl: "Doświadczenie i profesjonalizm",
    ru: "Опыт и профессионализм",
  },
  "about__box-text-1": {
    uk: "Багаторічна практика у сфері будівництва, ремонту та дизайну дозволяє нам впевнено реалізовувати проєкти будь-якої складності.",
    en: "Many years of practice in construction, renovation, and design allow us to confidently implement projects of any complexity.",
    pl: "Wieloletnia praktyka w budownictwie, remontach i projektowaniu pozwala nam pewnie realizować projekty o dowolnym stopniu skomplikowania.",
    ru: "Многолетняя практика в строительстве, ремонте и дизайне позволяет нам уверенно реализовывать проекты любой сложности.",
  },
  "about__box-title-2": {
    uk: "Індивідуальний підхід",
    en: "Individual approach",
    pl: "Indywidualne podejście",
    ru: "Индивидуальный подход",
  },
  "about__box-text-2": {
    uk: "Кожен клієнт — унікальний. Ми уважно слухаємо ваші побажання та пропонуємо рішення, які відповідають саме вашим потребам і бюджету.",
    en: "Every client is unique. We carefully listen to your wishes and offer solutions tailored to your needs and budget.",
    pl: "Każdy klient jest wyjątkowy. Uważnie słuchamy Twoich potrzeb i oferujemy rozwiązania dopasowane do Twoich wymagań i budżetu.",
    ru: "Каждый клиент уникален. Мы внимательно слушаем ваши пожелания и предлагаем решения, соответствующие именно вашим потребностям и бюджету.",
  },
  "about__box-title-3": {
    uk: "Робота “під ключ”",
    en: "Turnkey work",
    pl: "Praca „pod klucz”",
    ru: "Работа «под ключ»",
  },
  "about__box-text-3": {
    uk: "Від ідеї до повної реалізації — ми беремо на себе всі етапи: проєктування, виконання робіт, авторський нагляд і здачу об’єкта.",
    en: "From idea to full implementation — we handle all stages: design, execution, supervision, and project handover.",
    pl: "Od pomysłu do pełnej realizacji — zajmujemy się wszystkimi etapami: projektowaniem, wykonaniem, nadzorem i przekazaniem obiektu.",
    ru: "От идеи до полной реализации — мы берем на себя все этапы: проектирование, выполнение работ, авторский надзор и сдачу объекта.",
  },
  "about__box-title-4": {
    uk: "Якість і гарантії",
    en: "Quality and guarantees",
    pl: "Jakość i gwarancje",
    ru: "Качество и гарантии",
  },
  "about__box-text-4": {
    uk: "Ми використовуємо лише перевірені матеріали та дотримуємося всіх технологічних норм. На всі види робіт надаємо гарантію.",
    en: "We use only proven materials and adhere to all technological standards. We provide a warranty for all types of work.",
    pl: "Używamy tylko sprawdzonych materiałów i przestrzegamy wszystkich norm technologicznych. Na wszystkie prace udzielamy gwarancji.",
    ru: "Мы используем только проверенные материалы и соблюдаем все технологические нормы. На все виды работ даем гарантию.",
  },
  "about__box-title-5": {
    uk: "Дотримання термінів",
    en: "Meeting deadlines",
    pl: "Dotrzymywanie terminów",
    ru: "Соблюдение сроков",
  },
  "about__box-text-5": {
    uk: "Цінуємо ваш час. Завжди працюємо за узгодженим графіком та дотримуємось дедлайнів.",
    en: "We value your time. We always work according to the agreed schedule and meet deadlines.",
    pl: "Cenimy Twój czas. Zawsze pracujemy zgodnie z ustalonym harmonogramem i dotrzymujemy terminów.",
    ru: "Ценим ваше время. Всегда работаем по согласованному графику и соблюдаем дедлайны.",
  },
  "about__box-title-6": {
    uk: "Прозоре ціноутворення",
    en: "Transparent pricing",
    pl: "Przejrzystość cen",
    ru: "Прозрачное ценообразование",
  },
  "about__box-text-6": {
    uk: "Жодних прихованих витрат. Ви заздалегідь знаєте, за що платите, та отримуєте чесну вартість без сюрпризів.",
    en: "No hidden costs. You know in advance what you are paying for and get an honest price with no surprises.",
    pl: "Żadnych ukrytych kosztów. Z góry wiesz, za co płacisz i otrzymujesz uczciwą cenę bez żadnych niespodzianek.",
    ru: "Никаких скрытых издержек. Вы заранее знаете, за что платите и получаете честную стоимость без сюрпризов.",
  },

  advantages__title: {
    uk: "Що ви отримаєте",
    en: "What You Get",
    pl: "Co otrzymasz",
    ru: "Что вы получите",
  },
  advantages__desc: {
    uk: "Для зручності та комфорту співпраці ми пропонуємо низку вигідних пропозицій для всіх клієнтів.",
    en: "For your comfort and convenience, we offer a range of valuable services for all clients.",
    pl: "Dla wygody i komfortu współpracy oferujemy szereg korzystnych propozycji dla wszystkich klientów.",
    ru: "Для удобства и комфорта сотрудничества мы предлагаем ряд выгодных предложений для всех клиентов.",
  },
  "advantages__subtitle-1": {
    uk: "Комплексні рішення під ключ",
    en: "Comprehensive Turnkey Solutions",
    pl: "Kompleksowe rozwiązania pod klucz",
    ru: "Комплексные решения под ключ",
  },
  "advantages__text-1": {
    uk: "Від ідеї до реалізації — усі роботи беремо на себе: проєктування, будівництво, ремонт, дизайн, технічний нагляд.",
    en: "From idea to realization — we handle everything: design, construction, renovation, interior design, supervision.",
    pl: "Od pomysłu do realizacji — zajmujemy się wszystkim: projektowaniem, budową, remontem, nadzorem.",
    ru: "От идеи до реализации — все работы берем на себя: проектирование, строительство, ремонт, дизайн, технадзор.",
  },
  "advantages__subtitle-2": {
    uk: "Прозорий кошторис і строки",
    en: "Transparent Budget and Deadlines",
    pl: "Przejrzysty kosztorys i terminy",
    ru: "Прозрачная смета и сроки",
  },
  "advantages__text-2": {
    uk: "Без прихованих платежів. Ви наперед знаєте вартість робіт і чіткі терміни виконання.",
    en: "No hidden fees. You know the cost and deadlines upfront.",
    pl: "Bez ukrytych opłat. Znasz koszt i terminy z góry.",
    ru: "Без скрытых платежей. Вы заранее знаете стоимость работ и сроки выполнения.",
  },
  "advantages__subtitle-3": {
    uk: "Професійну команду",
    en: "A Professional Team",
    pl: "Profesjonalny zespół",
    ru: "Профессиональную команду",
  },
  "advantages__text-3": {
    uk: "Досвідчені архітектори, дизайнери, будівельники — кожен займається своєю справою на найвищому рівні.",
    en: "Experienced architects, designers, and builders — each expert in their field.",
    pl: "Doświadczeni architekci, projektanci, budowniczy — każdy ekspert w swojej dziedzinie.",
    ru: "Опытные архитекторы, дизайнеры, строители — каждый занимается своим делом на высшем уровне.",
  },
  "advantages__subtitle-4": {
    uk: "Індивідуальний підхід",
    en: "Individual Approach",
    pl: "Indywidualne podejście",
    ru: "Индивидуальный подход",
  },
  "advantages__text-4": {
    uk: "Рішення створюються під вас — з урахуванням стилю життя, бюджету та побажань.",
    en: "Solutions are tailored to your lifestyle, budget, and preferences.",
    pl: "Rozwiązania tworzone są specjalnie dla Ciebie — zgodnie z Twoim stylem życia, budżetem i życzeniami.",
    ru: "Решения создаются под вас — с учетом стиля жизни, бюджета и пожеланий.",
  },
  "advantages__subtitle-5": {
    uk: "Якість на кожному етапі",
    en: "Quality at Every Stage",
    pl: "Jakość na każdym etapie",
    ru: "Качество на каждом этапе",
  },
  "advantages__text-5": {
    uk: "Контроль усіх процесів та відповідальність за результат. Використовуємо тільки перевірені матеріали.",
    en: "Control of all processes and responsibility for results. We use only trusted materials.",
    pl: "Kontrola wszystkich procesów i odpowiedzialność za wynik. Używamy tylko sprawdzonych materiałów.",
    ru: "Контроль всех процессов и ответственность за результат. Используем только проверенные материалы.",
  },
  "advantages__subtitle-6": {
    uk: "Гарантії та підтримка",
    en: "Guarantees and Support",
    pl: "Gwarancje i wsparcie",
    ru: "Гарантии и поддержка",
  },
  "advantages__text-6": {
    uk: "Підписуємо договір, надаємо гарантії на роботи, залишаємося на зв’язку після здачі проєкту.",
    en: "We sign a contract, provide warranties, and stay in touch after project completion.",
    pl: "Podpisujemy umowę, udzielamy gwarancji i pozostajemy w kontakcie po zakończeniu projektu.",
    ru: "Подписываем договор, предоставляем гарантии и остаёмся на связи после сдачи проекта.",
  },

  contact__title: {
    uk: "Наші контакти",
    en: "Our Contacts",
    pl: "Nasze kontakty",
    ru: "Наши контакты",
  },
  "contact__subtitle-1": {
    uk: "Адреса",
    en: "Address",
    pl: "Adres",
    ru: "Адрес",
  },
  "contact__text-1": {
    uk: "Познань",
    en: "Poznań",
    pl: "Poznań",
    ru: "Познань",
  },
  "contact__subtitle-2": {
    uk: "Телефон",
    en: "Phone",
    pl: "Telefon",
    ru: "Телефон",
  },
  "contact__subtitle-3": {
    uk: "Графік роботи",
    en: "Working hours",
    pl: "Godziny pracy",
    ru: "График работы",
  },
  "contact__text-2": {
    uk: "Пн. – Пт.: с 9:00 до 20:00",
    en: "Mon – Fri: 9:00 to 20:00",
    pl: "Pn – Pt: 9:00 do 20:00",
    ru: "Пн – Пт: с 9:00 до 20:00",
  },
  "contact__text-3": {
    uk: "Сб.: с 10:00 до 16:00",
    en: "Sat: 10:00 to 16:00",
    pl: "Sob: 10:00 do 16:00",
    ru: "Сб: с 10:00 до 16:00",
  },
  "contact__subtitle-4": {
    uk: "Пошта",
    en: "Email",
    pl: "E-mail",
    ru: "Почта",
  },
  "contact__desc-1": {
    uk: "Якщо потрібно, проконсультуємо по телефону або поштою – просто напишіть нам повідомлення та вкажіть кращий спосіб зв'язку.",
    en: "If needed, we’ll consult you by phone or email — just send us a message and specify your preferred contact method.",
    pl: "W razie potrzeby doradzimy telefonicznie lub mailowo — po prostu napisz do nas wiadomość i podaj preferowany sposób kontaktu.",
    ru: "При необходимости проконсультируем по телефону или почте — просто напишите нам сообщение и укажите удобный способ связи.",
  },
  contact__button: {
    uk: "Надіслати повідомлення",
    en: "Send Message",
    pl: "Wyślij wiadomość",
    ru: "Отправить сообщение",
  },

  "footer__title-1": {
    uk: "Компанія",
    en: "Company",
    pl: "Firma",
    ru: "Компания",
  },
  "footer__item-link-1": {
    uk: "Про нас",
    en: "About Us",
    pl: "O nas",
    ru: "О нас",
  },
  "footer__item-link-2": {
    uk: "Карта об’єктів",
    en: "Project Map",
    pl: "Mapa obiektów",
    ru: "Карта объектов",
  },
  "footer__item-link-3": {
    uk: "Меблі на заказ",
    en: "Custom furniture",
    pl: "Meble na wymiar",
    ru: "Мебель на заказ",
  },
  "footer__title-2": {
    uk: "Послуги",
    en: "Services",
    pl: "Usługi",
    ru: "Услуги",
  },
  "footer__item-link-5": {
    uk: "Будівництво",
    en: "Construction",
    pl: "Budownictwo",
    ru: "Строительство",
  },
  "footer__item-link-6": {
    uk: "Ремонтні роботи",
    en: "Repairs",
    pl: "Remonty",
    ru: "Ремонтные работы",
  },
  "footer__item-link-7": {
    uk: "Дизайн",
    en: "Design",
    pl: "Projektowanie",
    ru: "Дизайн",
  },
  "footer__item-link-8": {
    uk: "Проектування",
    en: "Planning",
    pl: "Projektowanie",
    ru: "Проектирование",
  },
  "footer__title-3": {
    uk: "Інформація",
    en: "Information",
    pl: "Informacje",
    ru: "Информация",
  },
  "footer__item-link-9": {
    uk: "Ціни",
    en: "Prices",
    pl: "Cennik",
    ru: "Цены",
  },
  "footer__item-link-10": {
    uk: "Меблі на замовлення",
    en: "Custom Furniture",
    pl: "Meble na zamówienie",
    ru: "Мебель на заказ",
  },
  "footer__item-link-11": {
    uk: "Оформіть заявку",
    en: "Submit a Request",
    pl: "Złóż wniosek",
    ru: "Оформить заявку",
  },
  "footer__item-link-12": {
    uk: "Познань",
    en: "Poznan",
    pl: "Poznań",
    ru: "Познань",
  },
  "footer__item-link-13": {
    uk: "Меблі на заказ",
    en: "Custom-made furniture",
    pl: "Meble na wymiar",
    ru: "Мебель на заказ",
  },
  "footer__title-4": {
    uk: "Контакти",
    en: "Contacts",
    pl: "Kontakt",
    ru: "Контакты",
  },
  "footer__work-time-1": {
    uk: "Пн. – Пт.: з 9:00 до 20:00",
    en: "Mon – Fri: 9:00 to 20:00",
    pl: "Pn – Pt: 9:00 do 20:00",
    ru: "Пн – Пт: с 9:00 до 20:00",
  },
  "footer__work-time-2": {
    uk: "Сб.: з 10:00 до 16:00",
    en: "Sat: 10:00 to 16:00",
    pl: "Sob: 10:00 do 16:00",
    ru: "Сб: с 10:00 до 16:00",
  },
  "footer__item-link-3": {
    uk: "Меблі на замовлення",
    en: "Custom furniture",
    pl: "Meble na zamówienie",
    ru: "Мебель на заказ",
  },
  "footer__left-text-1": {
    uk: '© 2023 Будівельна компанія <span class="footer__m2">м²</span>.',
    en: '© 2023 Construction company <span class="footer__m2">м²</span>.',
    pl: '© 2023 Firma budowlana <span class="footer__m2">м²</span>.',
    ru: '© 2023 Строительная компания <span class="footer__m2">м²</span>.',
  },
  "footer__left-text-2": {
    uk: "Усі права захищено.",
    en: "All rights reserved.",
    pl: "Wszelkie prawa zastrzeżone.",
    ru: "Все права защищены.",
  },

  furniture__title: {
    uk: "Меблі на замовлення",
    en: "Custom Furniture",
    ru: "Мебель на заказ",
    pl: "Meble na zamówienie",
  },
  furniture__text: {
    uk: "Ми виготовляємо меблі на замовлення для дому, офісу та бізнесу. Враховуємо усі побажання клієнта – від розміру та кольору до матеріалів та функціональності. Наші майстри створюють унікальні рішення, які ідеально доповнять ваш інтер'єр.",
    en: "We make custom furniture for homes, offices, and businesses. We consider all client preferences – from size and color to materials and functionality. Our craftsmen create unique solutions that perfectly complement your interior.",
    ru: "Мы изготавливаем мебель на заказ для дома, офиса и бизнеса. Учитываем все пожелания клиента — от размера и цвета до материалов и функциональности. Наши мастера создают уникальные решения, идеально дополняющие ваш интерьер.",
    pl: "Tworzymy meble na zamówienie do domu, biura i biznesu. Uwzględniamy wszystkie życzenia klienta – od rozmiaru i koloru po materiały i funkcjonalność. Nasi rzemieślnicy tworzą unikalne rozwiązania, które idealnie uzupełnią Twoje wnętrze.",
  },
  furniture__button: {
    uk: "Надіслати запит",
    en: "Send Inquiry",
    ru: "Отправить запрос",
    pl: "Wyślij zapytanie",
  },

  "location__map-link-1": {
    uk: "Познань",
    en: "Poznan",
    pl: "Poznań",
    ru: "Познань",
  },
  "location__map-link-2": {
    uk: "Карта об'єктів",
    en: "Project Map",
    pl: "Mapa obiektów",
    ru: "Карта объектов",
  },
  "header__work-time-1": {
    uk: "Пн. – Пт.: з 9:00 до 20:00",
    en: "Mon – Fri: 9:00 to 20:00",
    pl: "Pn – Pt: 9:00 do 20:00",
    ru: "Пн – Пт: с 9:00 до 20:00",
  },
  "header__work-time-2": {
    uk: "Сб.: з 10:00 до 16:00",
    en: "Sat: 10:00 to 16:00",
    pl: "Sob: 10:00 do 16:00",
    ru: "Сб: с 10:00 до 16:00",
  },
  "menu-row__link-1": {
    uk: "Про компанію",
    en: "About",
    pl: "O firmie",
    ru: "О компании",
  },
  "menu-row__link-2": {
    uk: "Наші послуги",
    en: "Services",
    pl: "Nasze usługi",
    ru: "Наши услуги",
  },
  "menu-row__link-3": {
    uk: "Портфоліо",
    en: "Portfolio",
    pl: "Portfolio",
    ru: "Портфолио",
  },
  "menu-row__link-4": {
    uk: "Ціни",
    en: "Prices",
    pl: "Cennik",
    ru: "Цены",
  },
  "menu-row__link-5": {
    uk: "Контакти",
    en: "Contacts",
    pl: "Łączność",
    ru: "Контакты",
  },
  portfolio__h1: {
    uk: "Завершені об'єкти – наш досвід у деталях",
    en: "Completed projects - our experience in detail",
    ru: "Завершенные проекты – наши знания в деталях",
    pl: "Zrealizowane projekty - szczegółowo nasze doświadczenia",
  },
  portfolio__title: {
    uk: "Наші роботи",
    en: "Our Projects",
    ru: "Наши работы",
    pl: "Nasze realizacje",
  },
  "portfolio__item-1": {
    uk: "Усі",
    en: "All",
    ru: "Все",
    pl: "Wszystkie",
  },
  "portfolio__item-2": {
    uk: "Дизайн-проект",
    en: "Design Project",
    ru: "Дизайн-проект",
    pl: "Projekt wnętrza",
  },
  "portfolio__item-3": {
    uk: "Ремонт",
    en: "Renovation",
    ru: "Ремонт",
    pl: "Remont",
  },
  "portfolio__item-4": {
    uk: "Проектування",
    en: "Planning",
    ru: "Проектирование",
    pl: "Projektowanie",
  },
  "portfolio__item-5": {
    uk: "Збудовані будинки",
    en: "Constructed Houses",
    ru: "Построенные дома",
    pl: "Zbudowane domy",
  },
  prices__title: {
    uk: 'Ціни на будівельні послуги — Ремонт, дизайн, проєктування <span class="about__desc-m2 m2">М²</span>',
    en: 'Construction service prices — Renovation, design, planning <span class="about__desc-m2 m2">M²</span>',
    pl: 'Cennik usług budowlanych — Remonty, projektowanie, planowanie <span class="about__desc-m2 m2">M²</span>',
    ru: 'Цены на строительные услуги — Ремонт, дизайн, проектирование <span class="about__desc-m2 m2">М²</span>',
  },
  prices__text: {
    uk: "Детальний прайс на ремонтні та будівельні послуги: малярні роботи, плитка, гіпсокартон, сантехніка, електрика та інше. Прозорі ціни та якість, підтверджена досвідом.",
    en: "Detailed price list for renovation and construction services: painting, tiling, drywall, plumbing, electricity, and more. Transparent prices and quality proven by experience.",
    pl: "Szczegółowy cennik usług remontowo-budowlanych: malowanie, płytki, płyta gipsowa, hydraulika, elektryka i inne. Przejrzyste ceny i jakość potwierdzona doświadczeniem.",
    ru: "Подробный прайс на ремонтные и строительные услуги: малярные работы, плитка, гипсокартон, сантехника, электрика и другое. Прозрачные цены и качество, подтвержденное опытом.",
  },

  "prices__table-title-1": {
    uk: "Роботи малярські",
    en: "Painting Works",
    ru: "Малярные работы",
    pl: "Prace malarskie",
  },
  "prices__th-1": {
    uk: "Види робіт",
    en: "Type of Work",
    ru: "Виды работ",
    pl: "Rodzaje prac",
  },
  "prices__th-2": {
    uk: "Од.",
    en: "Unit",
    ru: "Ед.",
    pl: "Jedn.",
  },
  "prices__th-3": {
    uk: "Ціна",
    en: "Price",
    ru: "Цена",
    pl: "Cena",
  },
  "prices__td-m2": {
    uk: "м²",
    en: "m²",
    ru: "м²",
    pl: "m²",
  },
  "prices__td-mp": {
    uk: "м/п",
    en: "linear meter",
    ru: "п.м.",
    pl: "mb",
  },
  "prices__td-s": {
    uk: "шт.",
    en: "unit",
    ru: "шт.",
    pl: "szt.",
  },
  "prices__td-fin": {
    uk: "ребро",
    en: "fin",
    ru: "ребро",
    pl: "żebro",
  },
  "prices__td-kg": {
    uk: "100 кг",
    en: "100 kg",
    ru: "100 кг",
    pl: "100 kg",
  },
  "prices__td-f": {
    uk: "від",
    en: "from",
    ru: "от",
    pl: "od",
  },
  "prices__td-currency-1": {
    uk: "зл.",
    en: "pln",
    ru: "зл.",
    pl: "zł.",
  },
  "prices__td-1": {
    uk: "Виконання технічного проекту на ремонт квартири",
    en: "Technical project for apartment renovation",
    ru: "Технический проект на ремонт квартиры",
    pl: "Projekt techniczny remontu mieszkania",
  },
  "prices__td-2": {
    uk: "Підготовка об'єкта до ремонту",
    en: "Preparation of site for renovation",
    ru: "Подготовка объекта к ремонту",
    pl: "Przygotowanie obiektu do remontu",
  },
  "prices__td-3": {
    uk: "Шпаклювання 2 рази (шпаклівка гіпсова)",
    en: "Puttying twice (gypsum putty)",
    ru: "Шпаклевка 2 раза (гипсовая)",
    pl: "Szpachlowanie 2 razy (gipsowe)",
  },
  "prices__td-4": {
    uk: "Ґрунтування стін, стель, підлог",
    en: "Priming walls, ceilings, floors",
    ru: "Грунтовка стен, потолков, полов",
    pl: "Gruntowanie ścian, sufitów, podłóg",
  },
  "prices__td-5": {
    uk: "Покраска ґрунтувальною фарбою",
    en: "Painting with primer paint",
    ru: "Покраска грунтовочной краской",
    pl: "Malowanie farbą gruntującą",
  },
  "prices__td-6": {
    uk: "Покраска водоемульсійною фарбою (2 шари)",
    en: "Painting with water-based paint (2 coats)",
    ru: "Покраска водоэмульсионной краской (2 слоя)",
    pl: "Malowanie farbą wodną (2 warstwy)",
  },
  "prices__td-7": {
    uk: "Розділення кольорів",
    en: "Color separation",
    ru: "Разделение цветов",
    pl: "Oddzielenie kolorów",
  },
  "prices__td-8": {
    uk: "Покраска вікон",
    en: "Window painting",
    ru: "Покраска окон",
    pl: "Malowanie okien",
  },
  "prices__td-9": {
    uk: "Покраска дверей",
    en: "Door painting",
    ru: "Покраска дверей",
    pl: "Malowanie drzwi",
  },
  "prices__td-10": {
    uk: "Покраска радіаторів",
    en: "Radiator painting",
    ru: "Покраска радиаторов",
    pl: "Malowanie grzejników",
  },
  "prices__td-11": {
    uk: "Покраска труб",
    en: "Pipe painting",
    ru: "Покраска труб",
    pl: "Malowanie rur",
  },
  "prices__td-12": {
    uk: "Здирання стін і стель",
    en: "Scraping walls and ceilings",
    ru: "Снятие со стен и потолков",
    pl: "Zdzieranie ścian i sufitów",
  },
  "prices__td-13": {
    uk: "Поклейка шпалер",
    en: "Wallpapering",
    ru: "Поклейка обоев",
    pl: "Klejenie tapet",
  },
  "prices__td-14": {
    uk: "Демонтаж старих шпалер",
    en: "Old wallpaper removal",
    ru: "Демонтаж старых обоев",
    pl: "Usuwanie starych tapet",
  },
  "prices__td-15": {
    uk: "Проходження кутів акрилом",
    en: "Acrylic sealing of corners",
    ru: "Обработка углов акрилом",
    pl: "Zabezpieczenie rogów akrylem",
  },
  "prices__td-16": {
    uk: "Поправки",
    en: "Touch-ups",
    ru: "Доработки",
    pl: "Poprawki",
  },
  "prices__table-title-2": {
    uk: "Роботи з гіпсокартоном",
    en: "Drywall Works",
    ru: "Работы с гипсокартоном",
    pl: "Prace z płytami gipsowo-kartonowymi",
  },
  "prices__td-17": {
    uk: "Монтаж стелі з ГК",
    en: "Drywall ceiling installation",
    ru: "Монтаж потолка из ГК",
    pl: "Montaż sufitu z GK",
  },
  "prices__td-18": {
    uk: "Монтаж перестінків з ГК (1 шар) + вата",
    en: "Drywall partitions (1 layer) + insulation",
    ru: "Монтаж перегородок из ГК (1 слой) + вата",
    pl: "Montaż ścianek GK (1 warstwa) + izolacja",
  },
  "prices__td-19": {
    uk: "Монтаж перестінків з ГК (2 шари) + вата",
    en: "Drywall partitions (2 layers) + insulation",
    ru: "Монтаж перегородок из ГК (2 слоя) + вата",
    pl: "Montaż ścianek GK (2 warstwy) + izolacja",
  },
  "prices__td-20": {
    uk: "Поклейка ГК на стіни",
    en: "Gluing drywall to walls",
    ru: "Поклейка ГК на стены",
    pl: "Klejenie GK do ścian",
  },
  "prices__td-21": {
    uk: "Монтаж ГК на стіни (каркас)",
    en: "Drywall frame wall installation",
    ru: "Монтаж ГК на стены (каркас)",
    pl: "Montaż GK na ściany (stelaż)",
  },
  "prices__td-22": {
    uk: "Монтаж стелі з ГК в 2 і більше рівнів",
    en: "Multi-level drywall ceiling installation",
    ru: "Монтаж потолка из ГК в 2 и более уровней",
    pl: "Montaż sufitu GK na 2 i więcej poziomach",
  },
  "prices__td-23": {
    uk: "Утеплення мансарди (вата, паробар'єр, каркас, ГК)",
    en: "Attic insulation (wool, vapor barrier, frame, drywall)",
    ru: "Утепление мансарды (вата, паробарьер, каркас, ГК)",
    pl: "Izolacja poddasza (wełna, paroizolacja, stelaż, GK)",
  },
  "prices__td-24": {
    uk: "Заделка швів на ГК",
    en: "Sealing drywall joints",
    ru: "Заделка швов на ГК",
    pl: "Uszczelnianie spoin GK",
  },
  "prices__td-25": {
    uk: "Шпаклювання швів на ГК",
    en: "Puttying drywall joints",
    ru: "Шпаклевка швов на ГК",
    pl: "Szpachlowanie spoin GK",
  },
  "prices__td-26": {
    uk: "Монтаж коробів",
    en: "Box installation",
    ru: "Монтаж коробов",
    pl: "Montaż zabudów",
  },
  "prices__td-27": {
    uk: "Шпаклівка стін 2 рази",
    en: "Wall puttying (2 layers)",
    ru: "Шпаклевка стен в 2 слоя",
    pl: "Szpachlowanie ścian 2 razy",
  },
  "prices__td-28": {
    uk: "Монтаж перфо-кутників",
    en: "Installation of perforated corners",
    ru: "Монтаж перфоуголков",
    pl: "Montaż narożników perforowanych",
  },
  "prices__table-title-3": {
    uk: "Роботи плиточників",
    en: "Tiling Works",
    ru: "Плиточные работы",
    pl: "Prace glazurnicze",
  },
  "prices__td-29": {
    uk: "Демонтаж плитки + виніс в контейнер з ліфтом",
    en: "Tile removal + disposal with elevator",
    ru: "Демонтаж плитки + вынос с лифтом",
    pl: "Demontaż płytek + wyniesienie z windą",
  },
  "prices__td-30": {
    uk: "Демонтаж плитки + виніс в контейнер без ліфта",
    en: "Tile removal + disposal without elevator",
    ru: "Демонтаж плитки + вынос без лифта",
    pl: "Demontaż płytek + wyniesienie bez windy",
  },
  "prices__td-31": {
    uk: "Вирівнювання стін і підлоги під плитку",
    en: "Wall and floor leveling for tiles",
    ru: "Выравнивание стен и пола под плитку",
    pl: "Wyrównanie ścian i podłogi pod płytki",
  },
  "prices__td-32": {
    uk: "Поклейка плитки 10×10 - 15×15 см",
    en: "Tile installation 10×10 - 15×15 cm",
    ru: "Укладка плитки 10×10 - 15×15 см",
    pl: "Układanie płytek 10×10 - 15×15 cm",
  },
  "prices__td-33": {
    uk: "Поклейка плитки 30 см - 60 см",
    en: "Tile installation 30 cm - 60 cm",
    ru: "Укладка плитки 30 см - 60 см",
    pl: "Układanie płytek 30 cm - 60 cm",
  },
  "prices__td-34": {
    uk: "Поклейка плитки 60 см - 120 см",
    en: "Tile installation 60 cm - 120 cm",
    ru: "Укладка плитки 60 см - 120 см",
    pl: "Układanie płytek 60 cm - 120 cm",
  },
  "prices__td-35": {
    uk: "Поклейка каменю",
    en: "Stone tiling",
    ru: "Укладка камня",
    pl: "Układanie kamienia",
  },
  "prices__td-36": {
    uk: "Поклейка мозаїки",
    en: "Mosaic tiling",
    ru: "Укладка мозаики",
    pl: "Układanie mozaiki",
  },
  "prices__td-37": {
    uk: "Поклейка цоколів з порізкою",
    en: "Baseboard tiling with cutting",
    ru: "Укладка цоколей с подрезкой",
    pl: "Układanie cokołów z cięciem",
  },
  "prices__td-38": {
    uk: "Поклейка готових цоколів",
    en: "Ready baseboard tiling",
    ru: "Укладка готовых цоколей",
    pl: "Układanie gotowych cokołów",
  },
  "prices__td-39": {
    uk: "Укладання керамограніту на сходи (ступінь)",
    en: "Granite tile installation on stairs (step)",
    ru: "Укладка керамогранита на ступени",
    pl: "Układanie gresu na schodach (stopień)",
  },
  "prices__td-40": {
    uk: "Укладання керамограніту на сходи (підложка)",
    en: "Granite tile installation on stairs (base)",
    ru: "Укладка керамогранита на подложку",
    pl: "Układanie gresu na schodach (podkład)",
  },
  "prices__td-41": {
    uk: "Поклейка плитки-декор",
    en: "Decorative tile installation",
    ru: "Укладка декоративной плитки",
    pl: "Układanie płytek dekoracyjnych",
  },
  "prices__td-42": {
    uk: "Отвори в керамічній плитці",
    en: "Drilling in ceramic tile",
    ru: "Отверстия в керамической плитке",
    pl: "Otwory w płytkach ceramicznych",
  },
  "prices__td-43": {
    uk: "Отвори в (невказано матеріал)",
    en: "Drilling (unspecified material)",
    ru: "Отверстия (не указан материал)",
    pl: "Otwory (materiał nieokreślony)",
  },
  "prices__td-44": {
    uk: "Отвори в камені",
    en: "Drilling in stone",
    ru: "Отверстия в камне",
    pl: "Otwory w kamieniu",
  },
  "prices__td-45": {
    uk: "Гідроізоляція",
    en: "Waterproofing",
    ru: "Гидроизоляция",
    pl: "Hydroizolacja",
  },
  "prices__td-46": {
    uk: "Поклейка імітації цегли + затирка",
    en: "Brick imitation tiling + grouting",
    ru: "Укладка имитации кирпича + затирка",
    pl: "Układanie imitacji cegły + fugowanie",
  },
  "prices__td-47": {
    uk: "Шліфування кутів 45°",
    en: "45° corner grinding",
    ru: "Шлифовка углов 45°",
    pl: "Szlifowanie narożników 45°",
  },
  "prices__td-48": {
    uk: "Монтаж кутників, алюмінієвих планок",
    en: "Corner/aluminum strip installation",
    ru: "Монтаж уголков, алюминиевых планок",
    pl: "Montaż narożników, listew aluminiowych",
  },
  "prices__td-49": {
    uk: "Монтаж ревізійного люка з плитки",
    en: "Tile inspection hatch installation",
    ru: "Монтаж ревизионного люка из плитки",
    pl: "Montaż klapki rewizyjnej z płytek",
  },
  "prices__td-50": {
    uk: "Виготовлення і монтаж полиці з плитки",
    en: "Tile shelf manufacturing and installation",
    ru: "Изготовление и монтаж полки из плитки",
    pl: "Wykonanie i montaż półki z płytek",
  },
  "prices__td-51": {
    uk: "Обмуровка ванни",
    en: "Bath boxing",
    ru: "Обкладка ванны",
    pl: "Zabudowa wanny",
  },
  "prices__td-52": {
    uk: "Обмуровка піддона для душу",
    en: "Shower tray boxing",
    ru: "Обкладка душевого поддона",
    pl: "Zabudowa brodzika",
  },
  "prices__table-title-4": {
    uk: "Кам'яна кладка та штукатурка",
    en: "Stonework and Plastering",
    ru: "Каменная кладка и штукатурка",
    pl: "Murowanie i tynkowanie",
  },
  "prices__td-53": {
    uk: "Штукатурка стін гіпсова",
    en: "Gypsum wall plastering",
    ru: "Штукатурка стен гипсовая",
    pl: "Tynkowanie ścian gipsowych",
  },
  "prices__td-54": {
    uk: "Установка кутників штукатурних",
    en: "Installation of plaster corners",
    ru: "Установка штукатурных уголков",
    pl: "Montaż narożników tynkarskich",
  },
  "prices__td-55": {
    uk: "Установка штукатурних маяків",
    en: "Installation of plaster beacons",
    ru: "Установка штукатурных маяков",
    pl: "Montaż prowadnic tynkarskich",
  },
  "prices__td-56": {
    uk: "Штукатурка відкосів віконних",
    en: "Window slope plastering",
    ru: "Штукатурка оконных откосов",
    pl: "Tynkowanie glifów okiennych",
  },
  "prices__td-57": {
    uk: "Демонтаж перестінків",
    en: "Demolition of partitions",
    ru: "Демонтаж перегородок",
    pl: "Demontaż ścianek działowych",
  },
  "prices__td-58": {
    uk: "Занос матеріалу",
    en: "Material carrying",
    ru: "Занос материалов",
    pl: "Wnoszenie materiału",
  },
  "prices__td-59": {
    uk: "Демонтаж штукатурки",
    en: "Plaster removal",
    ru: "Демонтаж штукатурки",
    pl: "Demontaż tynku",
  },
  "prices__td-60": {
    uk: "Заделка штроб",
    en: "Groove sealing",
    ru: "Заделка штроб",
    pl: "Zatapianie bruzd",
  },
  "prices__td-61": {
    uk: "Самовирівнююча підлога",
    en: "Self-leveling floor",
    ru: "Самовыравнивающийся пол",
    pl: "Posadzka samopoziomująca",
  },
  "prices__td-62": {
    uk: "Виконання стяжки",
    en: "Floor screed installation",
    ru: "Выполнение стяжки",
    pl: "Wykonanie wylewki",
  },
  "prices__td-63": {
    uk: "Кладка перестінків товщиною до 120 мм",
    en: "Partition wall masonry up to 120 mm",
    ru: "Кладка перегородок толщиной до 120 мм",
    pl: "Murowanie ścianek działowych do 120 mm",
  },
  "prices__td-64": {
    uk: "Кладка склоблоків",
    en: "Glass block masonry",
    ru: "Кладка стеклоблоков",
    pl: "Murowanie pustaków szklanych",
  },
  "prices__td-65": {
    uk: "Демонтаж дверей",
    en: "Door removal",
    ru: "Демонтаж дверей",
    pl: "Demontaż drzwi",
  },
  "prices__td-66": {
    uk: "Монтаж дверей внутрішніх",
    en: "Interior door installation",
    ru: "Монтаж внутренних дверей",
    pl: "Montaż drzwi wewnętrznych",
  },
  "prices__td-67": {
    uk: "Монтаж дверей зовнішніх",
    en: "Exterior door installation",
    ru: "Монтаж наружных дверей",
    pl: "Montaż drzwi zewnętrznych",
  },
  "prices__td-68": {
    uk: "Монтаж підвіконь внутрішніх",
    en: "Installation of interior windowsills",
    ru: "Монтаж внутренних подоконников",
    pl: "Montaż parapetów wewnętrznych",
  },
  "prices__table-title-5": {
    uk: "Роботи з підлогою, монтаж порогів, плінтусів і т.д.",
    en: "Flooring, threshold and skirting installation",
    ru: "Работы с полом, монтаж порогов, плинтусов и т.д.",
    pl: "Prace podłogowe, montaż progów, listew itp.",
  },
  "prices__td-69": {
    uk: "Демонтаж старого паркету",
    en: "Old parquet removal",
    ru: "Демонтаж старого паркета",
    pl: "Demontaż starego parkietu",
  },
  "prices__td-70": {
    uk: "Демонтаж ковроліну",
    en: "Carpet removal",
    ru: "Демонтаж ковролина",
    pl: "Demontaż wykładziny",
  },
  "prices__td-71": {
    uk: "Демонтаж лінолеуму",
    en: "Linoleum removal",
    ru: "Демонтаж линолеума",
    pl: "Demontaż linoleum",
  },
  "prices__td-72": {
    uk: "Монтаж ковроліну",
    en: "Carpet installation",
    ru: "Монтаж ковролина",
    pl: "Montaż wykładziny",
  },
  "prices__td-73": {
    uk: "Монтаж лінолеуму",
    en: "Linoleum installation",
    ru: "Монтаж линолеума",
    pl: "Montaż linoleum",
  },
  "prices__td-74": {
    uk: "Укладання ламінату",
    en: "Laminate flooring",
    ru: "Укладка ламината",
    pl: "Układanie paneli laminowanych",
  },
  "prices__td-75": {
    uk: "Укладання паркетної дошки (без клею)",
    en: "Parquet board installation (without glue)",
    ru: "Укладка паркетной доски (без клея)",
    pl: "Układanie deski podłogowej (bez kleju)",
  },
  "prices__td-76": {
    uk: "Укладання паркетної дошки (на клей)",
    en: "Parquet board installation (with glue)",
    ru: "Укладка паркетной доски (на клей)",
    pl: "Układanie deski podłogowej (na klej)",
  },
  "prices__td-77": {
    uk: "Монтаж паркету",
    en: "Parquet installation",
    ru: "Монтаж паркета",
    pl: "Montaż parkietu",
  },
  "prices__td-78": {
    uk: "Циклювання + лакування",
    en: "Sanding and varnishing",
    ru: "Циклевка + лакировка",
    pl: "Cyklinowanie i lakierowanie",
  },
  "prices__td-79": {
    uk: "Монтаж плінтусів",
    en: "Skirting board installation",
    ru: "Монтаж плинтусов",
    pl: "Montaż listew przypodłogowych",
  },
  "prices__td-80": {
    uk: "Монтаж порогів",
    en: "Threshold installation",
    ru: "Монтаж порогов",
    pl: "Montaż progów",
  },
  "prices__td-81": {
    uk: "Монтаж поліуретанових багетів",
    en: "Polyurethane cornice installation",
    ru: "Монтаж полиуретановых багетов",
    pl: "Montaż gzymsów poliuretanowych",
  },
  "prices__table-title-6": {
    uk: "Білий монтаж і сантехніка",
    en: "White assembly and plumbing",
    ru: "Белый монтаж и сантехника",
    pl: "Biały montaż i hydraulika",
  },
  "prices__td-82": {
    uk: "Демонтаж точки водно-каналізаційної",
    en: "Dismantling of water-sewerage point",
    ru: "Демонтаж водо-канализационной точки",
    pl: "Demontaż punktu wodno-kanalizacyjnego",
  },
  "prices__td-83": {
    uk: "Демонтаж ванни, душової кабіни, умивальника тощо",
    en: "Dismantling of bathtub, shower, sink, etc.",
    ru: "Демонтаж ванны, душевой кабины, умывальника и т.д.",
    pl: "Demontaż wanny, kabiny prysznicowej, umywalki itp.",
  },
  "prices__td-84": {
    uk: "Точка водно-піддону для душової каналізаційна",
    en: "Shower tray drain connection",
    ru: "Точка канализации для душевого поддона",
    pl: "Punkt kanalizacyjny do brodzika prysznicowego",
  },
  "prices__td-85": {
    uk: "Точка водно-каналізаційна",
    en: "Water-sewerage point",
    ru: "Водо-канализационная точка",
    pl: "Punkt wodno-kanalizacyjny",
  },
  "prices__td-86": {
    uk: "Точка опалення",
    en: "Heating connection point",
    ru: "Точка отопления",
    pl: "Punkt grzewczy",
  },
  "prices__td-87": {
    uk: "Штроби під труби",
    en: "Grooving for pipes",
    ru: "Штробление под трубы",
    pl: "Bruzdy pod rury",
  },
  "prices__td-88": {
    uk: "Прокладка водяних трас",
    en: "Laying water lines",
    ru: "Прокладка водяных трасс",
    pl: "Układanie instalacji wodnej",
  },
  "prices__td-89": {
    uk: "Монтаж стелажа під підвісний унітаз",
    en: "Installation of wall-hung toilet frame",
    ru: "Монтаж инсталляции для подвесного унитаза",
    pl: "Montaż stelaża do podwieszanego WC",
  },
  "prices__td-90": {
    uk: "Монтаж змішувача прихованого монтажу",
    en: "Installation of concealed mixer",
    ru: "Установка скрытого смесителя",
    pl: "Montaż baterii podtynkowej",
  },
  "prices__td-91": {
    uk: "Монтаж змішувача стандартного",
    en: "Installation of standard mixer",
    ru: "Установка стандартного смесителя",
    pl: "Montaż baterii standardowej",
  },
  "prices__td-92": {
    uk: "Монтаж ванни",
    en: "Bathtub installation",
    ru: "Установка ванны",
    pl: "Montaż wanny",
  },
  "prices__td-93": {
    uk: "Монтаж умивальника, унітазу, біде",
    en: "Installation of sink, toilet, bidet",
    ru: "Установка раковины, унитаза, биде",
    pl: "Montaż umywalki, WC, bidetu",
  },
  "prices__td-94": {
    uk: "Монтаж піддону для душової кабіни",
    en: "Shower tray installation",
    ru: "Монтаж поддона для душевой кабины",
    pl: "Montaż brodzika",
  },
  "prices__td-95": {
    uk: "Монтаж душової кабіни",
    en: "Shower cabin installation",
    ru: "Монтаж душевой кабины",
    pl: "Montaż kabiny prysznicowej",
  },
  "prices__td-96": {
    uk: "Монтаж радіатора",
    en: "Radiator installation",
    ru: "Монтаж радиатора",
    pl: "Montaż grzejnika",
  },
  "prices__td-97": {
    uk: "Монтаж скла для душової кабіни",
    en: "Shower glass installation",
    ru: "Монтаж стекла для душевой кабины",
    pl: "Montaż szkła prysznicowego",
  },
  "prices__td-98": {
    uk: "Монтаж дзеркала",
    en: "Mirror installation",
    ru: "Монтаж зеркала",
    pl: "Montaż lustra",
  },
  "prices__td-99": {
    uk: "Монтаж скляних поличок",
    en: "Glass shelf installation",
    ru: "Монтаж стеклянных полочек",
    pl: "Montaż półek szklanych",
  },
  "prices__table-title-7": {
    uk: "Електрика",
    en: "Electricity",
    ru: "Электрика",
    pl: "Elektryka",
  },
  "prices__td-100": {
    uk: "Точка електрична",
    en: "Electric point",
    ru: "Электрическая точка",
    pl: "Punkt elektryczny",
  },
  "prices__td-101": {
    uk: "Монтаж оцинкованого корита",
    en: "Installation of galvanized tray",
    ru: "Монтаж оцинкованного короба",
    pl: "Montaż korytka ocynkowanego",
  },
  "prices__td-102": {
    uk: "Прокладка кабелю",
    en: "Cable routing",
    ru: "Прокладка кабеля",
    pl: "Układanie kabla",
  },
  "prices__td-103": {
    uk: "Монтаж розеток і вимикачів",
    en: "Installation of sockets and switches",
    ru: "Монтаж розеток и выключателей",
    pl: "Montaż gniazdek i włączników",
  },
  "prices__td-104": {
    uk: "Монтаж світильників",
    en: "Lighting fixture installation",
    ru: "Монтаж светильников",
    pl: "Montaż oświetlenia",
  },
  "prices__td-105": {
    uk: "Демонтаж точки електричної",
    en: "Dismantling of electric point",
    ru: "Демонтаж электрической точки",
    pl: "Demontaż punktu elektrycznego",
  },
  "prices__td-106": {
    uk: "Штроби під проводи",
    en: "Grooves for wires",
    ru: "Штробление под провода",
    pl: "Bruzdy pod przewody",
  },
  "prices__td-107": {
    uk: "Монтаж електрощитової",
    en: "Electrical panel installation",
    ru: "Монтаж электрощита",
    pl: "Montaż rozdzielnicy elektrycznej",
  },
  services__h1: {
    uk: "Комплексні рішення у сфері будівництва",
    en: "Comprehensive solutions in the construction sector",
    ru: "Комплексные решения в сфере строительства",
    pl: "Kompleksowe rozwiązania w sektorze budowlanym",
  },
  services__desc: {
    uk: 'Компанія <span class="m2">М²</span> надає послуги з ремонту, дизайну, будівництва та проектування будівель на території Польщі.',
    en: 'Company <span class="m2">М²</span> provides renovation, design, construction, and building planning services throughout Poland.',
    ru: 'Компания <span class="m2">М²</span> предоставляет услуги по ремонту, дизайну, строительству и проектированию зданий по всей Польше.',
    pl: 'Firma <span class="m2">М²</span> świadczy usługi remontowe, projektowe, budowlane i planistyczne na terenie całej Polski.',
  },
  "services__text-1": {
    uk: "Ремонт під ключ",
    en: "Turnkey Renovation",
    ru: "Ремонт под ключ",
    pl: "Remont pod klucz",
  },
  "services__text-2": {
    uk: "Індивідуальний дизайн",
    en: "Custom Design",
    ru: "Индивидуальный дизайн",
    pl: "Indywidualny projekt",
  },
  "services__text-3": {
    uk: "Проєктування будівель",
    en: "Building Design",
    ru: "Проектирование зданий",
    pl: "Projektowanie budynków",
  },

  "swiper__title-1": {
    uk: "Ваш простір починається тут – ми створимо його з нуля до ідеалу.",
    en: "Your space begins here – we’ll create it from scratch to perfection.",
    ru: "Ваше пространство начинается здесь – мы создадим его с нуля до идеала.",
    pl: "Twoja przestrzeń zaczyna się tutaj – stworzymy ją od zera do ideału.",
  },
  "swiper__text-1": {
    uk: "Індивідуальний підхід, сучасні технології, контроль якості та дотримання термінів. Працюємо для вашого комфорту.",
    en: "Individual approach, modern technologies, quality control, and on-time delivery. We work for your comfort.",
    ru: "Индивидуальный подход, современные технологии, контроль качества и соблюдение сроков. Работаем для вашего комфорта.",
    pl: "Indywidualne podejście, nowoczesne technologie, kontrola jakości i terminowość. Pracujemy dla Twojej wygody.",
  },
  "swiper__title-2": {
    uk: "Створюємо простір, у якому хочеться жити.",
    en: "We create spaces you want to live in.",
    ru: "Создаём пространство, в котором хочется жить.",
    pl: "Tworzymy przestrzeń, w której chcesz mieszkać.",
  },
  "swiper__text-2": {
    uk: "Функціональність, естетика та увага до деталей — від планування до останнього штриха.",
    en: "Functionality, aesthetics, and attention to detail — from planning to the final touch.",
    ru: "Функциональность, эстетика и внимание к деталям — от планировки до последнего штриха.",
    pl: "Funkcjonalność, estetyka i dbałość o szczegóły — od planowania po ostatni szlif.",
  },
  "swiper__title-3": {
    uk: "Будуємо не квадратні метри, а комфортне життя.",
    en: "We build not square meters, but comfortable living.",
    ru: "Строим не квадратные метры, а комфортную жизнь.",
    pl: "Budujemy nie metry kwadratowe, a komfortowe życie.",
  },
  "swiper__text-3": {
    uk: "Враховуємо кожну деталь, щоб простір був зручним, стильним і продуманим.",
    en: "We consider every detail to make the space convenient, stylish, and well thought-out.",
    ru: "Учитываем каждую деталь, чтобы пространство было удобным, стильным и продуманным.",
    pl: "Uwzględniamy każdy detal, aby przestrzeń była wygodna, stylowa i przemyślana.",
  },
  "swiper__title-4": {
    uk: "Робимо складне простим — для вас.",
    en: "We make the complex simple — for you.",
    ru: "Делаем сложное простым — для вас.",
    pl: "Upraszczamy skomplikowane — dla Ciebie.",
  },
  "swiper__text-4": {
    uk: "Беремо всі етапи на себе: проєкт, ремонт, дизайн, технічний супровід. Без стресу для вас.",
    en: "We handle every stage: design, renovation, planning, technical support. Stress-free for you.",
    ru: "Берём все этапы на себя: проект, ремонт, дизайн, техсопровождение. Без стресса для вас.",
    pl: "Bierzemy na siebie wszystkie etapy: projekt, remont, design, wsparcie techniczne. Bez stresu dla Ciebie.",
  },
  "swiper__title-5": {
    uk: "Від ідеї до результату — з точністю до міліметра.",
    en: "From idea to result — with millimeter precision.",
    ru: "От идеи до результата — с точностью до миллиметра.",
    pl: "Od pomysłu do efektu — z dokładnością do milimetra.",
  },
  "swiper__text-5": {
    uk: "Працюємо чітко, прозоро та з гарантією. Ви знаєте, що і коли отримаєте.",
    en: "We work clearly, transparently, and with guarantees. You know what and when you get it.",
    ru: "Работаем чётко, прозрачно и с гарантией. Вы знаете, что и когда получите.",
    pl: "Pracujemy jasno, przejrzyście i z gwarancją. Wiesz, co i kiedy otrzymasz.",
  },
  "swiper__title-6": {
    uk: "Ваш стиль — наша основа для проєкту.",
    en: "Your style is our foundation for the project.",
    ru: "Ваш стиль — наша основа для проекта.",
    pl: "Twój styl to nasza podstawa do projektu.",
  },
  "swiper__text-6": {
    uk: "Ми не просто будуємо — ми втілюємо саме ваше бачення і спосіб життя у просторі.",
    en: "We don’t just build — we bring your vision and lifestyle into the space.",
    ru: "Мы не просто строим — мы воплощаем ваше видение и образ жизни в пространстве.",
    pl: "Nie tylko budujemy — urzeczywistniamy Twoją wizję i styl życia w przestrzeni.",
  },

  work__titler: {
    uk: "Оформіть заявку на послугу",
    en: "Request a Service",
    ru: "Оформите заявку на услугу",
    pl: "Złóż wniosek o usługę",
  },
  work__desc: {
    uk: "Ми зв'яжемося з вами найближчим часом, відповімо на всі питання.",
    en: "We will contact you shortly and answer all your questions.",
    ru: "Мы свяжемся с вами в ближайшее время и ответим на все вопросы.",
    pl: "Skontaktujemy się z Tobą wkrótce i odpowiemy na wszystkie pytania.",
  },
  work__button: {
    uk: "Замовити послугу ",
    en: "Order Service ",
    ru: "Заказать услугу ",
    pl: "Zamów usługę ",
  },
  work__director: {
    uk: "Максимик Володимир",
    en: "Volodymyr Maksymyk",
    ru: "Владимир Максимик",
    pl: "Włodzimierz Maksymyk",
  },
  "work-p__span": {
    uk: "Генеральний директор",
    en: "General Director",
    ru: "Генеральный директор",
    pl: "Dyrektor generalny",
  },
};

const select = document.getElementById("language-select");
const langData = window.langData || {};

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (langData[key] && langData[key][lang]) {
      el.innerHTML = langData[key][lang];
    }
  });
  localStorage.setItem("lang", lang);
}

if (select) {
  select.addEventListener("change", () => {
    translatePage(select.value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "uk";
  if (select) select.value = lang;
  translatePage(lang);
});

