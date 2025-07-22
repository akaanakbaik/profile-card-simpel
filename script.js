document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");
  const card = document.querySelector(".card");

  let currentSection = document.querySelector(".card-section.is-active") || sections[0];
  let isAnimating = false;

  const profileData = {
    name: "It's Me Aka",
    tagline: "ini sebenarnya buat apa ya?",
    avatar: "https://files.catbox.moe/qfamnx.jpg",
    cover: "https://i.ibb.co/8d33grw/tumblr-ppaq0f-Dy-B41ugxywdo1-1280.jpg",
    age: "15 tahun",
    origin: "Sumatra Barat",
    school: "MTsN 2 Pasaman Barat",
    quotes: "Hanya seorang manusia biasa yang mengharapkan kehangatan tulus dari seseorang.",
    roles: ["Pelajar", "Developer", "Pemula", "hehehe 🗿"],
    social: [
      { icon: "fab fa-whatsapp", link: "https://wa.me/6281266950382" },
      { icon: "fab fa-instagram", link: "https://instagram.com/kenal.aka" },
      { icon: "fab fa-github", link: "https://github.com/akaanakbaik" }
    ],
    journey: [
      { year: "2022", title: "Menemukan Hobi Baru", description: "Mulai menjelajahi dunia JB dan Hosting" },
      { year: "2023", title: "Fokus di JB & Hosting", description: "Meskipun JB kecil-kecilan dan jualan panel" },
      { year: "2024", title: "era jb dan awal developer", description: "nama jb ku mulai tinggi tetapi karena ingin fokus sekolah saya istirahat jb dan belajar pemograman javascript sebagai awal dan kembangkan bot wa" },
      { year: "2025", title: "Fokus ke pemograman kecil", description: "kembangkan bot wa dan dalami ngoding website, belajar secara otodidak" },
      { year: "2026", title: "asah pemograman dan fokus sekolah", description: "terus mengembangkan bot wa, buat projek web kecil dan lebih fokus sekolah" }
    ],
    friends: [
      { name: "Habibi", description: "teman rl terbaik" },
      { name: "hydra", description: "teman baik online, dev bot wa dan leluhur" },
      { name: "youso", description: "teman online baik,pengembang berbakat dan sesepuh" },
      { name: "kyz", description: "teman online baik, pembuat dan developer bot furina ai" },
      { name: "raol", description: "teman online, kang open source code" }
    ],
    contact: {
      location: "Sumatra Barat, Indonesia",
      phone: "+6281266950382",
      email: "furinabyaka@gmail.com"
    },
    music: "https://files.catbox.moe/2itqw3.mp3"
  };

  const switchSection = (targetSectionId) => {
    if (isAnimating || !targetSectionId) return;

    const newSection = document.querySelector(targetSectionId);
    if (!newSection || newSection === currentSection) return;

    isAnimating = true;
    currentSection.classList.add("fade-out");

    setTimeout(() => {
      sections.forEach((s) => s.classList.remove("is-active", "fade-in", "fade-out"));

      newSection.classList.add("is-active", "fade-in");

      buttons.forEach((b) => b.classList.remove("is-active"));
      const targetButton = document.querySelector(`button[data-section="${targetSectionId}"]`);
      if (targetButton) targetButton.classList.add("is-active");

      card.setAttribute("data-state", targetSectionId);
      currentSection = newSection;
      isAnimating = false;
    }, 300);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.currentTarget.getAttribute("data-section");
      if (target && document.querySelector(target)) {
        switchSection(target);
      }
    });
  });

  if (currentSection) {
    currentSection.classList.add("is-active");
  }

  document.querySelector(".card-cover").style.backgroundImage = `url('${profileData.cover}')`;
  document.querySelector(".card-avatar").src = profileData.avatar;
  document.querySelector(".card-fullname").textContent = profileData.name;
  document.querySelector(".card-jobtitle").textContent = profileData.tagline;

  const typingTextElement = document.querySelector(".typing-text .text");
  if (typingTextElement) {
    const roles = profileData.roles;
    let i = 0, j = 0, isDeleting = false;

    const typeEffect = () => {
      const current = roles[i];
      typingTextElement.textContent = isDeleting 
        ? current.substring(0, j - 1) 
        : current.substring(0, j + 1);

      j += isDeleting ? -1 : 1;

      if (j === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else if (j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
        setTimeout(typeEffect, 400);
      } else {
        setTimeout(typeEffect, isDeleting ? 60 : 120);
      }
    };
    typeEffect();
  }

  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.querySelector(".profile-info").innerHTML = `
      <p><span>Umur:</span> ${profileData.age}</p>
      <p><span>Asal:</span> ${profileData.origin}</p>
      <p><span>Sekolah:</span> ${profileData.school}</p>
    `;
    aboutSection.querySelector(".card-quote").textContent = `qoutes: ${profileData.quotes}"`;

    const socialLinksContainer = aboutSection.querySelector(".card-social");
    socialLinksContainer.innerHTML = "";
    profileData.social.forEach(social => {
      const a = document.createElement("a");
      a.href = social.link;
      a.target = "_blank";
      a.innerHTML = `<i class="${social.icon}"></i>`;
      socialLinksContainer.appendChild(a);
    });
  }

  const experienceSection = document.getElementById("experience");
  if (experienceSection) {
    experienceSection.querySelector(".card-subtitle").textContent = "Perjalanan Saya";
    const timelineDiv = experienceSection.querySelector(".card-timeline");
    timelineDiv.innerHTML = "";
    profileData.journey.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "card-item";
      itemDiv.setAttribute("data-year", item.year);
      itemDiv.innerHTML = `
        <div class="card-item-title">${item.title}</div>
        <div class="card-item-desc">${item.description}</div>
      `;
      timelineDiv.appendChild(itemDiv);
    });
  }

  const friendsSection = document.getElementById("friends");
  if (friendsSection) {
    friendsSection.querySelector(".card-subtitle").textContent = "teman Saya";
    const timelineDiv = friendsSection.querySelector(".card-timeline");
    timelineDiv.innerHTML = "";
    profileData.friends.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "card-item";
      itemDiv.setAttribute("data-year", index + 1);
      itemDiv.innerHTML = `
        <div class="card-item-title">${item.name}</div>
        <div class="card-item-desc">${item.description}</div>
      `;
      timelineDiv.appendChild(itemDiv);
    });
  }

  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.querySelector(".card-subtitle").textContent = "Hubungi Saya";
    contactSection.querySelector(".card-contact-wrapper").innerHTML = `
      <div class="card-contact">
        <i class="fas fa-map-marker-alt"></i>
        <span>${profileData.contact.location}</span>
      </div>
      <div class="card-contact">
        <i class="fas fa-phone-alt"></i>
        <span>${profileData.contact.phone}</span>
      </div>
      <div class="card-contact">
        <i class="fas fa-envelope"></i>
        <span>${profileData.contact.email}</span>
      </div>
      <a href="https://wa.me/${profileData.contact.phone.replace("+", "")}" target="_blank">
        <button class="contact-me">hubungi saya</button>
      </a>
    `;
  }

  document.querySelector(".footer p").innerHTML = `&copy; ${new Date().getFullYear()} Aka . Dibuat dengan ❤️ & code`;

  const musicBtn = document.getElementById("musicBtn");
  const backgroundMusic = document.getElementById("backgroundMusic");

  if (musicBtn && backgroundMusic) {
    backgroundMusic.src = profileData.music;
    backgroundMusic.volume = 0.3;

    const updateMusicButton = () => {
      musicBtn.innerHTML = backgroundMusic.paused ? 
        '<i class="fas fa-play"></i>' : 
        '<i class="fas fa-pause"></i>';
    };

    musicBtn.addEventListener("click", async () => {
      if (backgroundMusic.paused) {
        try {
          await backgroundMusic.play();
        } catch (error) {
          console.error("Music playback error:", error);
        }
      } else {
        backgroundMusic.pause();
      }
      updateMusicButton();
    });

    backgroundMusic.addEventListener("ended", () => {
      backgroundMusic.currentTime = 0;
      backgroundMusic.play();
    });

    document.body.addEventListener("click", () => {
      if (localStorage.getItem("musicPlaying") === "true") {
        backgroundMusic.play().catch(() => console.log("Autoplay blocked"));
      }
    });
  }

  const initSnowEffect = () => {
    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-effect";
    document.body.appendChild(snowContainer);

    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";

      const size = Math.random() * 10 + 5;
      const posX = Math.random() * window.innerWidth;
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 5;
      const opacity = Math.random() * 0.5 + 0.5;

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${posX}px`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${delay}s`;
      snowflake.style.opacity = opacity;

      snowContainer.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, duration * 1000);
    };

    for (let i = 0; i < 30; i++) {
      createSnowflake();
    }

    const snowInterval = setInterval(createSnowflake, 500);

    return () => {
      clearInterval(snowInterval);
      snowContainer.remove();
    };
  };

  const whatsappButton = document.querySelector("[data-section=\'#whatsapp\"]");
  if (whatsappButton) {
    whatsappButton.addEventListener("click", () => {
      const cleanupSnow = initSnowEffect();

      const observer = new MutationObserver(() => {
        if (card.getAttribute("data-state") !== "#whatsapp") {
          cleanupSnow();
          observer.disconnect();
        }
      });
      observer.observe(card, { attributes: true, attributeFilter: ["data-state"] });
    });
  }
});
