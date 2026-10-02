
/* =====================================
   Note.Arsin
   Main JavaScript
   Supabase + Language + Theme
===================================== */

// ---------- Supabase ----------

const SUPABASE_URL =
  "https://hpwfxxrmrfdljakssisq.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_NMmT6x4OsYIjSd3jqKyTGg_TSew-aIG";

const db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


// ---------- Elements ----------

const songGrid = document.getElementById("songGrid");
const songCount = document.getElementById("songCount");
const searchInput = document.getElementById("searchInput");

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const languageBtn = document.getElementById("languageBtn");

let allSongs = [];


// ---------- Translations ----------

const translations = {
  fa: {
    home: "خانه",
    music: "موسیقی",
    notes: "یادداشت‌ها",
    instruments: "سازها",
    tutorials: "آموزش",
    about: "درباره ما",

    welcome: "دنیای موسیقی، یادگیری و خلاقیت",
    welcomeText:
      "به Note.Arsin خوش آمدید؛ فضایی برای کشف موسیقی، یادداشت‌های آموزشی و تجربه‌های تازه.",
    start: "شروع کاوش",

    musicTitle: "موسیقی امروز",
    musicSubtitle: "آهنگ‌های ثبت‌شده در پایگاه داده",

    notesTitle: "یادداشت‌ها",
    notesSubtitle: "مطالب کوتاه برای یادگیری و ایده‌پردازی",

    dailyTitle: "یادگیری روزانه",
    dailyText: "هر روز یک نکته تازه یاد بگیر و آن را تمرین کن.",

    ideasTitle: "ایده‌های خلاقانه",
    ideasText: "ایده‌هایت را ثبت کن تا بعداً بتوانی آن‌ها را گسترش بدهی.",

    notebookTitle: "دفتر یادداشت",
    notebookText: "مجموعه‌ای از مطالب و نوشته‌های آموزشی.",

    instrumentsTitle: "دنیای سازها",
    instrumentsSubtitle: "آشنایی با سازهای موسیقی",

    piano: "پیانو",
    pianoText: "آشنایی با نت‌ها، کلاویه‌ها و تمرین‌های پیانو.",

    guitar: "گیتار",
    guitarText: "مقدمات آکوردها و شناخت گیتار.",

    drums: "درامز",
    drumsText: "ریتم و آشنایی با سازهای کوبه‌ای.",

    tutorialsTitle: "آموزش‌ها",
    tutorialsSubtitle: "مسیر یادگیری از پایه تا سطح پیشرفته",

    theory: "تئوری موسیقی",
    theoryText: "آشنایی با نت‌ها، گام‌ها و ریتم.",

    listening: "تمرین شنیداری",
    listeningText: "تقویت دقت شنیداری و شناخت صداها.",

    videos: "ویدئوهای آموزشی",
    videosText: "مجموعه‌ای برای یادگیری مرحله‌به‌مرحله.",

    aboutTitle: "درباره Note.Arsin",
    aboutText:
      "Note.Arsin پروژه‌ای برای ترکیب موسیقی، آموزش و خلاقیت است. این وب‌سایت به‌تدریج توسعه پیدا می‌کند و امکانات جدیدی به آن اضافه خواهد شد.",

    search: "جست‌وجوی نام آهنگ یا خواننده...",
    loading: "در حال دریافت آهنگ‌ها از دیتابیس...",
    noSongs: "آهنگی برای نمایش پیدا نشد.",
    noAudio: "فایل صوتی هنوز ثبت نشده است.",
    connectionError: "خطا در دریافت اطلاعات دیتابیس.",
    unknownArtist: "نامشخص",
    noDescription: "بدون توضیحات",
    explore: "شروع کاوش",
    footer: "ساخته‌شده با علاقه به موسیقی و یادگیری"
  },

  en: {
    home: "Home",
    music: "Music",
    notes: "Notes",
    instruments: "Instruments",
    tutorials: "Tutorials",
    about: "About",

    welcome: "Music, Learning & Creativity",
    welcomeText:
      "Welcome to Note.Arsin, a place to discover music, learning notes, and new experiences.",
    start: "Explore",

    musicTitle: "Today's Music",
    musicSubtitle: "Songs stored in the database",

    notesTitle: "Notes",
    notesSubtitle: "Short content for learning and ideas",

    dailyTitle: "Daily Learning",
    dailyText: "Learn something new every day and practice it.",

    ideasTitle: "Creative Ideas",
    ideasText: "Save your ideas and develop them later.",

    notebookTitle: "Notebook",
    notebookText: "A collection of educational notes and articles.",

    instrumentsTitle: "World of Instruments",
    instrumentsSubtitle: "Discover musical instruments",

    piano: "Piano",
    pianoText: "Learn about piano keys, notes, and practice.",

    guitar: "Guitar",
    guitarText: "Learn basic chords and guitar concepts.",

    drums: "Drums",
    drumsText: "Discover rhythm and percussion instruments.",

    tutorialsTitle: "Tutorials",
    tutorialsSubtitle: "A learning path from beginner to advanced",

    theory: "Music Theory",
    theoryText: "Learn notes, scales, and rhythm.",

    listening: "Listening Practice",
    listeningText: "Improve listening skills and sound recognition.",

    videos: "Tutorial Videos",
    videosText: "Step-by-step learning resources.",

    aboutTitle: "About Note.Arsin",
    aboutText:
      "Note.Arsin is a project combining music, education, and creativity. New features will be added gradually.",

    search: "Search songs or artists...",
    loading: "Loading songs from database...",
    noSongs: "No songs found.",
    noAudio: "Audio file is not available yet.",
    connectionError: "Could not load database information.",
    unknownArtist: "Unknown",
    noDescription: "No description",
    explore: "Explore",
    footer: "Made with a passion for music and learning"
  }
};


// ---------- Language ----------

let currentLanguage = "fa";

function setTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light", isLight);

  if (themeBtn) {
    themeBtn.textContent = isLight ? "🌙" : "☀️";
  }
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");

    setTheme(isLight ? "dark" : "light");
  });
}
    );
  }
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");

    setTheme(isLight ? "dark" : "light");
  });
}


// ---------- Mobile Menu ----------

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}


// ---------- HTML Safety ----------

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function safeUrl(value) {
  try {
    const url = new URL(value);

    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.href;
    }

    return "";
  } catch {
    return "";
  }
}


// ---------- Search ----------

function getFilteredSongs() {
  const term = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  return allSongs.filter(song => {
    const title = (song.title || "").toLowerCase();
    const artist = (song.artist || "").toLowerCase();

    return title.includes(term) || artist.includes(term);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    renderSongs(getFilteredSongs());
  });
}


// ---------- Render Songs ----------

function renderSongs(songs) {
  if (!songGrid) return;

  if (songCount) {
    songCount.textContent = `${songs.length} ${
      currentLanguage === "fa" ? "آهنگ" : "songs"
    }`;
  }

  if (songs.length === 0) {
    songGrid.innerHTML = `
      <div class="status">
        ${translations[currentLanguage].noSongs}
      </div>
    `;
    return;
  }

  songGrid.innerHTML = songs.map(song => {
    const title = escapeHTML(song.title || "Untitled");

    const artist = escapeHTML(
      song.artist || translations[currentLanguage].unknownArtist
    );

    const description = escapeHTML(
      song.description || translations[currentLanguage].noDescription
    );

    const cover = safeUrl(song.cover_url);
    const audio = safeUrl(song.audio_url);

    return `
      <article class="card">

        <div class="cover">
          ${
            cover
              ? `<img src="${escapeHTML(cover)}"
                      alt="${title}"
                      loading="lazy">`
              : "🎵"
          }
        </div>

        <div class="card-body">

          <h3>${title}</h3>

          <div class="artist">
            ${artist}
          </div>

          <p class="description">
            ${description}
          </p>

          ${
            audio
              ? `
                <audio controls preload="none">
                  <source src="${escapeHTML(audio)}">
                </audio>
              `
              : `
                <p class="artist">
                  ${translations[currentLanguage].noAudio}
                </p>
              `
          }

        </div>
      </article>
    `;
  }).join("");
}


// ---------- Database Connection ----------

async function loadSongs() {
  if (!songGrid) return;

  songGrid.innerHTML = `
    <div class="status">
      ${translations[currentLanguage].loading}
    </div>
  `;

  try {
    const { data, error } = await db
      .from("songs")
      .select(
        "id,title,artist,description,cover_url,audio_url,created_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    allSongs = data || [];

    renderSongs(getFilteredSongs());

  } catch (error) {
    console.error("Supabase Error:", error);

    if (songGrid) {
      songGrid.innerHTML = `
        <div class="status">
          ${translations[currentLanguage].connectionError}
        </div>
      `;
    }
  }
}


// ---------- Start ----------

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("fa");
  loadSongs();
});

