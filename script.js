"use strict";
/* ============================================================
   Portofolio Zidanalkaff: script.js
   Ubah data di bagian "DATA", sisanya jalan otomatis.
   Kompilasi: npx tsc   (hasilnya script.js)
   ============================================================ */
const profile = {
    name: "Ahmad Zaidan",
    shortName: "Zaidan",
    gender: "Laki-laki",
    umur: "19 tahun",
    campus: "Politeknik Elektronika Negeri Surabaya (PENS), Surabaya",
    major: "D3-PJJ Teknik Informatika",
    year: "2024 (semester 5)",
    email: "Legendalkaff@gmail.com", // ganti dengan email aktif
    phone: "0895-0510-0709",
    interests: "Software Engineering, Web Development, Linux, HTML, CSS, JavaScript, Membaca, Coding, Game, and Mendengarkan Musik",
    

};
const skills = [
    { name: "Java", note: "Mata kuliah pemrograman", level: 2 },
    { name: "Web Development", note: "Membuat web", level: 2 },
    { name: "Linux", note: "Perancangan sistem", level: 3 },
    { name: "HTML & CSS", note: "Tampilan web", level: 3 },
    { name: "JavaScript", note: "Interaksi web", level: 1 },
    { name: "Bootstrap", note: "Sedang dipelajari", level: 1 },
];
const projects = [
    {
        year: "2025",
        title: "Lampu",
        description: "Membuat Lampu digital Menyala dan Mati.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#",
    },
    {
        year: "2025",
        title: "Flower",
        description: "Membuat Flower digital.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#",
    },
    {
        year: "2025",
        title: "ahmadzaidan.html",
        description: "Ini ketika saya membuat web untuk portofolio saya.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#home",
    },
];
// ---------- Util ----------
const $ = (selector) => {
    const el = document.querySelector(selector);
    if (!el)
        throw new Error(`Elemen tidak ditemukan: ${selector}`);
    return el;
};
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const lerp = (a, b, t) => a + (b - a) * t;
// ---------- Isi konten dari data ----------
//Add gender and age fields to the bio section
function renderProfile() {
    $("#bioName").textContent = profile.name;
    $("#bioGender").textContent = profile.gender; // Add gender field
    $("#bioUmur").textContent = profile.umur; // Add age field
    $("#bioCampus").textContent = profile.campus;
    $("#bioMajor").textContent = profile.major;
    $("#bioYear").textContent = profile.year;
    $("#bioEmail").textContent = profile.email;
    $("#bioPhone").textContent = profile.phone; // Add phone field
    $("#bioInterest").textContent = profile.interests;
    const mail = $("#mailLink");
    mail.href = `mailto:${profile.email}`;
    mail.textContent = profile.email;
    $("#footerText").textContent = `© ${new Date().getFullYear()} ${profile.name}`;
}
function renderHeroTitle() {
    const title = $("#heroTitle");
    title.innerHTML = "";
    [...profile.shortName].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.setProperty("--i", String(i));
        title.appendChild(span);
    });
}
function renderSkills() {
    const list = $("#skillList");
    skills.forEach((skill, i) => {
        const li = document.createElement("li");
        li.className = "skill";
        li.dataset.observe = "true";
        li.style.setProperty("--d", `${(i % 2) * 0.1}s`);
        const segments = [1, 2, 3]
            .map((n) => `<i class="${n <= skill.level ? "on" : ""}" style="--i:${n - 1}"></i>`)
            .join("");
        li.innerHTML = `
            <div class="skill-head">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-note">${skill.note}</span>
            </div>
            <div class="meter" role="img" aria-label="Level ${skill.level} dari 3">${segments}</div>`;
        list.appendChild(li);
    });
}
function renderProjects() {
    const list = $("#projectList");
    projects.forEach((project, i) => {
        const a = document.createElement("a");
        a.className = "project";
        a.href = project.link;
        a.dataset.reveal = "";
        a.style.setProperty("--d", `${i * 0.1}s`);
        a.innerHTML = `
            <span class="project-year">${project.year}</span>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-desc-wrap">
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">${project.tags.map((t) => `<span>${t}</span>`).join("")}</div>
            </div>
            <i class="ph-bold ph-arrow-right arrow"></i>`;
        list.appendChild(a);
    });
}
// Pecah judul section jadi kata-kata agar bisa muncul satu per satu
function splitTitles() {
    document.querySelectorAll("[data-split]").forEach((el) => {
        const words = (el.textContent ?? "").trim().split(/\s+/);
        el.setAttribute("aria-label", words.join(" "));
        el.innerHTML = words
            .map((w, i) => `<span class="word" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`)
            .join("");
        el.dataset.observe = "true";
    });
}
// ---------- Animasi scroll ----------
function setupReveal() {
    const targets = document.querySelectorAll("[data-reveal], [data-observe]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("in"));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
    targets.forEach((el) => io.observe(el));
}
function setupScrollEffects() {
    const bar = $("#progress");
    const heroTitle = $("#heroTitle");
    const photo = $(".photo-frame");
    let ticking = false;
    const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        if (!reduceMotion && y < window.innerHeight * 1.2) {
            heroTitle.style.transform = `translateX(${y * -0.18}px)`;
            photo.style.transform = `translateY(${y * 0.12}px)`;
        }
        ticking = false;
    };
    window.addEventListener("scroll", () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }, { passive: true });
    update();
}
function setupActiveNav() {
    const links = document.querySelectorAll(".navmenu a");
    const sections = [...links]
        .map((a) => document.querySelector(a.getAttribute("href") ?? ""))
        .filter((s) => s !== null);
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting)
                return;
            links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { threshold: 0.45 });
    sections.forEach((s) => io.observe(s));
}
// ---------- Bayangan kursor ----------
function setupCursor() {
    if (!window.matchMedia("(pointer: fine)").matches)
        return;
    const glow = $("#cursorGlow");
    const ring = $("#cursorRing");
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let glowX = targetX, glowY = targetY;
    let ringX = targetX, ringY = targetY;
    window.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        document.body.classList.add("has-cursor");
    });
    document.addEventListener("mouseleave", () => document.body.classList.remove("has-cursor"));
    const hoverables = "a, button, .project";
    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(hoverables))
            ring.classList.add("hover");
    });
    document.addEventListener("mouseout", (e) => {
        if (e.target.closest(hoverables))
            ring.classList.remove("hover");
    });
    const loop = () => {
        glowX = lerp(glowX, targetX, 0.08); // bayangan: lambat, lembut
        glowY = lerp(glowY, targetY, 0.08);
        ringX = lerp(ringX, targetX, 0.25); // cincin: lebih cepat
        ringY = lerp(ringY, targetY, 0.25);
        glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
        requestAnimationFrame(loop);
    };
    loop();
}
// ---------- Tema hitam / putih ----------
function setupTheme() {
    const root = document.documentElement;
    const saved = (() => {
        try {
            return localStorage.getItem("theme");
        }
        catch {
            return null;
        }
    })();
    if (saved === "light")
        root.dataset.theme = "light";
    $("#themeToggle").addEventListener("click", () => {
        const next = root.dataset.theme === "light" ? "dark" : "light";
        root.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        }
        catch { /* abaikan */ }
    });
}
// ---------- Jalankan ----------
document.addEventListener("DOMContentLoaded", () => {
    renderProfile();
    renderHeroTitle();
    renderSkills();
    renderProjects();
    splitTitles();
    setupTheme();
    setupReveal();
    setupScrollEffects();
    setupActiveNav();
    setupCursor();
});
