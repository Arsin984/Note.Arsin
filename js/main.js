
/* =====================================
   Note.Arsin
   Main JavaScript + Supabase Database
===================================== */

// ---------- Supabase Configuration ----------

const SUPABASE_URL =
  "https://hpwfxxrmrfdljakssisq.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_NMmT6x4OsYIjSd3jqKyTGg_TSew-aIG";

const db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


// ---------- HTML Elements ----------

const songGrid = document.getElementById("songGrid");
const songCount = document.getElementById("songCount");
const searchInput = document.getElementById("searchInput");

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let allSongs = [];


// ---------- Security Helper ----------

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


// ---------- Load Songs From Database ----------

async function loadSongs() {
  if (!songGrid) return;

  songGrid.innerHTML = `
    <div class="status">
      در حال دریافت آهنگ‌ها از دیتابیس...
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

    renderSongs(allSongs);

  } catch (error) {
    console.error("Database Error:", error);

    if (songCount) {
      songCount.textContent = "خطا در اتصال";
    }

    songGrid.innerHTML = `
      <div class="status">
        دریافت آهنگ‌ها ناموفق بود.
        <br>
        اتصال Supabase و دسترسی خواندن جدول songs را بررسی کن.
      </div>
    `;
  }
}


// ---------- Render Songs ----------

function renderSongs(songs) {
  if (!songGrid) return;

  if (songCount) {
    songCount.textContent = `${songs.length} آهنگ`;
  }

  if (songs.length === 0) {
    songGrid.innerHTML = `
      <div class="status">
        آهنگی برای نمایش پیدا نشد.
      </div>
    `;
    return;
  }

  songGrid.innerHTML = songs.map(song => {
    const title = escapeHTML(song.title || "بدون عنوان");
    const artist = escapeHTML(song.artist || "نامشخص");
    const description = escapeHTML(
      song.description || "بدون توضیحات"
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
                  مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
                </audio>
              `
              : `
                <p class="artist">
                  فایل صوتی هنوز ثبت نشده است.
                </p>
              `
          }

        </div>
      </article>
    `;
  }).join("");
}


// ---------- Search Songs ----------

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value
      .trim()
      .toLowerCase();

    const filteredSongs = allSongs.filter(song => {
      const title = (song.title || "").toLowerCase();
      const artist = (song.artist || "").toLowerCase();

      return title.includes(term) || artist.includes(term);
    });

    renderSongs(filteredSongs);
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


// ---------- Light / Dark Theme ----------

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeBtn.textContent = isLight ? "🌙" : "☀️";
  });
}


// ---------- Language Toggle ----------

const languageBtn = document.getElementById("languageBtn");

if (languageBtn) {
  languageBtn.addEventListener("click", () => {
    const isEnglish = document.documentElement.lang === "en";

    document.documentElement.lang = isEnglish ? "fa" : "en";
    document.documentElement.dir = isEnglish ? "rtl" : "ltr";

    languageBtn.textContent = isEnglish ? "English" : "فارسی";
  });
}


// ---------- Start Application ----------

document.addEventListener("DOMContentLoaded", () => {
  loadSongs();
});

