
/* =====================================
   NOTE.ARSIN
   Language + Theme + Mobile Navigation
===================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // ---------- Elements ----------

  const html = document.documentElement;

  const languageToggle = document.getElementById("languageToggle");
  const themeToggle = document.getElementById("themeToggle");

  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  // ---------- Translations ----------

  const translations = {

    fa: {
      pageTitle: "Note.Arsin | خانه موسیقی",

      navHome: "خانه",
      navNotes: "جزوه‌ها",
      navInstruments: "سازها",
      navTutorials: "آموزش‌ها",
      navAbout: "درباره ما",

      heroBadge: "✦ دنیای یادگیری موسیقی",
      heroTitle: "موسیقی را <span>متفاوت یاد بگیر</span>",
      heroDescription:
        "مجموعه‌ای از جزوه‌ها، آموزش‌ها و مطالب کاربردی برای علاقه‌مندان موسیقی؛ همه در یک فضای ساده و زیبا.",

      heroButton: "شروع یادگیری",
      moreButton: "بیشتر بدانید",

      musicCardTitle: "موسیقی امروز",
      musicCardName: "زیبایی در نت‌ها",
      musicCardSubtitle: "یادگیری، تمرین، پیشرفت",

      notesLabel: "کتابخانه یادگیری",
      notesTitle: "جزوه‌ها و منابع",
      notesDescription: "مطالب آموزشی را در دسته‌بندی‌های مختلف دنبال کن.",

      noteOneTitle: "تئوری موسیقی",
      noteOneText: "آشنایی با نت‌ها، ریتم و مفاهیم پایه موسیقی.",

      noteTwoTitle: "آموزش پیانو",
      noteTwoText: "مفاهیم و تمرین‌های مقدماتی پیانو.",

      noteThreeTitle: "آشنایی با سازها",
      noteThreeText: "شناخت سازها و روش شروع یادگیری آن‌ها.",

      noteFourTitle: "دانش موسیقی",
      noteFourText: "مطالب تکمیلی برای علاقه‌مندان موسیقی.",

      learnMore: "مشاهده مطالب ←",

      instrumentLabel: "دنیای سازها",
      instrumentTitle: "ساز مورد علاقه‌ات را پیدا کن",
      instrumentDescription: "با خانواده‌های مختلف سازهای موسیقی آشنا شو.",

      pianoTitle: "پیانو",
      pianoText: "آشنایی با کلاویه‌ها و اصول نوازندگی.",

      guitarTitle: "گیتار",
      guitarText: "شناخت آکوردها و اصول اولیه گیتار.",

      violinTitle: "ویولن",
      violinText: "آشنایی با سازهای زهی و آرشه‌ای.",

      explore: "بیشتر بدانید ←",

      tutorialLabel: "مسیر یادگیری",
      tutorialTitle: "قدم‌به‌قدم پیشرفت کن",
      tutorialDescription:
        "از مفاهیم پایه شروع کن و با تمرین منظم، دانش موسیقی خودت را گسترش بده.",

      viewResources: "دیدن منابع آموزشی",

      stepOne: "یادگیری مفاهیم",
      stepTwo: "تمرین و تکرار",
      stepThree: "پیشرفت و تجربه",

      aboutLabel: "درباره پروژه",
      aboutTitle: "به Note.Arsin خوش آمدی",
      aboutDescription:
        "Note.Arsin فضایی برای جمع‌آوری و ارائه مطالب آموزشی موسیقی است. هدف ما ایجاد تجربه‌ای ساده، قابل دسترس و لذت‌بخش برای یادگیری است.",

      footerText: "یادگیری موسیقی، با تجربه‌ای متفاوت.",
      copyright: "تمام حقوق محفوظ است."
    },

    en: {
      pageTitle: "Note.Arsin | Music Learning",

      navHome: "Home",
      navNotes: "Notes",
      navInstruments: "Instruments",
      navTutorials: "Tutorials",
      navAbout: "About",

      heroBadge: "✦ The World of Music Learning",
      heroTitle: "Learn Music <span>Differently</span>",
      heroDescription:
        "A collection of notes, tutorials, and useful resources for music lovers, all in one simple and beautiful space.",

      heroButton: "Start Learning",
      moreButton: "Learn More",

      musicCardTitle: "Today's Music",
      musicCardName: "Beauty in Notes",
      musicCardSubtitle: "Learn, Practice, Progress",

      notesLabel: "Learning Library",
      notesTitle: "Notes & Resources",
      notesDescription: "Explore educational materials in different categories.",

      noteOneTitle: "Music Theory",
      noteOneText: "Discover notes, rhythm, and basic music concepts.",

      noteTwoTitle: "Piano Lessons",
      noteTwoText: "Learn basic piano concepts and exercises.",

      noteThreeTitle: "Musical Instruments",
      noteThreeText: "Discover instruments and how to start learning them.",

      noteFourTitle: "Music Knowledge",
      noteFourText: "Additional resources for music enthusiasts.",

      learnMore: "Explore Resources →",

      instrumentLabel: "Instrument World",
      instrumentTitle: "Find Your Favorite Instrument",
      instrumentDescription: "Explore different families of musical instruments.",

      pianoTitle: "Piano",
      pianoText: "Discover piano keys and playing fundamentals.",

      guitarTitle: "Guitar",
      guitarText: "Learn chords and guitar basics.",

      violinTitle: "Violin",
      violinText: "Explore string and bowed instruments.",

      explore: "Explore More →",

      tutorialLabel: "Learning Path",
      tutorialTitle: "Progress Step by Step",
      tutorialDescription:
        "Start with the basics and expand your musical knowledge through regular practice.",

      viewResources: "View Learning Resources",

      stepOne: "Learn Concepts",
      stepTwo: "Practice & Repeat",
      stepThree: "Progress & Experience",

      aboutLabel: "About the Project",
      aboutTitle: "Welcome to Note.Arsin",
      aboutDescription:
        "Note.Arsin is a space for collecting and sharing music learning resources. Our goal is to make learning simple, accessible, and enjoyable.",

      footerText: "Learn music through a different experience.",
      copyright: "All rights reserved."
    }

  };

  // ---------- Safe Storage ----------

  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function saveStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // The site still works if storage is unavailable.
    }
  }

  // ---------- Language ----------

  function setLanguage(language) {

    const selectedLanguage =
      language === "en" ? "en" : "fa";

    const isEnglish = selectedLanguage === "en";

    html.lang = selectedLanguage;
    html.dir = isEnglish ? "ltr" : "rtl";

    document.title = translations[selectedLanguage].pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.dataset.i18n;
      const translatedText = translations[selectedLanguage][key];

      if (translatedText !== undefined) {
        element.innerHTML = translatedText;
      }

    });

    if (languageToggle) {
      languageToggle.textContent = isEnglish ? "FA" : "EN";
      languageToggle.setAttribute(
        "aria-label",
        isEnglish ? "Switch to Persian" : "Switch to English"
      );
      languageToggle.title =
        isEnglish ? "Switch to Persian" : "Switch to English";
    }

    saveStorage("noteArsinLanguage", selectedLanguage);

    closeMenu();
  }

  // ---------- Theme ----------

  function setTheme(theme) {

    const selectedTheme =
      theme === "light" ? "light" : "dark";

    html.dataset.theme = selectedTheme;

    const isLight = selectedTheme === "light";

    if (themeToggle) {

      themeToggle.textContent = isLight ? "☾" : "☀";

      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark mode" : "Switch to light mode"
      );

      themeToggle.title =
        isLight ? "Dark Mode" : "Light Mode";
    }

    const themeColor = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeColor) {
      themeColor.content = isLight ? "#f3f3fc" : "#101124";
    }

    saveStorage("noteArsinTheme", selectedTheme);
  }

  // ---------- Mobile Menu ----------

  function closeMenu() {

    if (!mainNav || !menuButton) return;

    mainNav.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  }

  function toggleMenu() {

    if (!mainNav || !menuButton) return;

    const isOpen = mainNav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  }

  // ---------- Event Listeners ----------

  if (languageToggle) {

    languageToggle.addEventListener("click", () => {

      const nextLanguage =
        html.lang === "fa" ? "en" : "fa";

      setLanguage(nextLanguage);

    });

  }

  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      const nextTheme =
        html.dataset.theme === "dark" ? "light" : "dark";

      setTheme(nextTheme);

    });

  }

  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }

  if (mainNav) {

    mainNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", closeMenu);

    });

  }

  document.addEventListener("click", (event) => {

    if (!mainNav || !menuButton) return;

    const clickedInsideMenu = mainNav.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMenu();
    }

  });

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });

  window.addEventListener("resize", () => {

    if (window.innerWidth > 700) {
      closeMenu();
    }

  });

  // ---------- Initial Settings ----------

  const savedLanguage = readStorage("noteArsinLanguage");
  const savedTheme = readStorage("noteArsinTheme");

  setLanguage(savedLanguage || "fa");
  setTheme(savedTheme || "dark");

});

