
"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // عناصر صفحه
  const html = document.documentElement;

  const languageToggle = document.getElementById("languageToggle");
  const themeToggle = document.getElementById("themeToggle");

  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  // متن‌های فارسی و انگلیسی
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
      heroDescription: "مجموعه‌ای از جزوه‌ها، آموزش‌ها و مطالب کاربردی برای علاقه‌مندان موسیقی؛ همه در یک فضای ساده و زیبا.",

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
      tutorialDescription: "از مفاهیم پایه شروع کن و با تمرین منظم، دانش موسیقی خودت را گسترش بده.",

      viewResources: "دیدن منابع آموزشی",

      stepOne: "یادگیری مفاهیم",
      stepTwo: "تمرین و تکرار",
      stepThree: "پیشرفت و تجربه",

      aboutLabel: "درباره پروژه",
      aboutTitle: "به Note.Arsin خوش آمدی",
      aboutDescription: "Note.Arsin فضایی برای جمع‌آوری و ارائه مطالب آموزشی موسیقی است. هدف ما ایجاد تجربه‌ای ساده، قابل دسترس و لذت‌بخش برای یادگیری است.",

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
      heroDescription: "A collection of notes, tutorials, and useful resources for music lovers, all in one simple and beautiful space.",

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
      tutorialDescription: "Start with the basics and expand your musical knowledge through regular practice.",

      viewResources: "View Learning Resources",

      stepOne: "Learn Concepts",
      stepTwo: "Practice & Repeat",
      stepThree: "Progress & Experience",

      aboutLabel: "About the Project",
      aboutTitle: "Welcome to Note.Arsin",
      aboutDescription: "Note.Arsin is a space for collecting and sharing music learning resources. Our goal is to make learning simple, accessible, and enjoyable.",

      footerText: "Learn music through a different experience.",
      copyright: "All rights reserved."
    }
  };

  // ذخیره‌سازی امن تنظیمات
  function getSaved(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function saveSetting(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // سایت بدون ذخیره‌سازی هم کار می‌کند.
    }
  }

  // تغییر زبان
  function setLanguage(language) {

    const lang = language === "en" ? "en" : "fa";

    html.lang = lang;
    html.dir = lang === "en" ? "ltr" : "rtl";

    document.title = translations[lang].pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.getAttribute("data-i18n");

      if (Object.prototype.hasOwnProperty.call(translations[lang], key)) {
        element.innerHTML = translations[lang][key];
      }

    });

    if (languageToggle) {
      languageToggle.textContent = lang === "fa" ? "EN" : "FA";
      languageToggle.title =
        lang === "fa" ? "Switch to English" : "تغییر به فارسی";
    }

    saveSetting("noteArsinLanguage", lang);

    closeMenu();
  }

  // تغییر حالت شب و روز
  function setTheme(theme) {

    const selectedTheme = theme === "light" ? "light" : "dark";

    html.setAttribute("data-theme", selectedTheme);

    if (themeToggle) {
      themeToggle.textContent =
        selectedTheme === "dark" ? "☀" : "☾";

      themeToggle.title =
        selectedTheme === "dark" ? "Light Mode" : "Dark Mode";
    }

    const themeColor = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeColor) {
      themeColor.setAttribute(
        "content",
        selectedTheme === "dark" ? "#101124" : "#f3f3fc"
      );
    }

    saveSetting("noteArsinTheme", selectedTheme);
  }

  // بستن منوی موبایل
  function closeMenu() {

    if (!mainNav || !menuButton) return;

    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  // باز و بسته کردن منو
  function toggleMenu() {

    if (!mainNav || !menuButton) return;

    const opened = mainNav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(opened)
    );
  }

  // رویداد دکمه زبان
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {

      const nextLanguage =
        html.lang === "fa" ? "en" : "fa";

      setLanguage(nextLanguage);

    });
  }

  // رویداد دکمه تم
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {

      const nextTheme =
        html.dataset.theme === "dark" ? "light" : "dark";

      setTheme(nextTheme);

    });
  }

  // رویداد منوی موبایل
  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }

  // بستن منو پس از انتخاب لینک
  if (mainNav) {
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  // بستن منو با کلیک بیرون آن
  document.addEventListener("click", (event) => {

    if (!mainNav || !menuButton) return;

    if (
      !mainNav.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }

  });

  // بستن منو با کلید Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // بستن منو هنگام بزرگ شدن صفحه
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      closeMenu();
    }
  });

  // بارگذاری تنظیمات قبلی
  const savedLanguage = getSaved("noteArsinLanguage") || "fa";
  const savedTheme = getSaved("noteArsinTheme") || "dark";

  setLanguage(savedLanguage);
  setTheme(savedTheme);

});

