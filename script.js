/*
  22 DÍAS PARA NOSOTROS
  ---------------------
  Fecha de inicio: 1 de septiembre de 2026
  Aniversario:     22 de septiembre de 2026

  ZONA HORARIA:
  Quito, Ecuador = UTC-5
  America/Guayaquil

  El calendario se desbloquea según la fecha de Quito.
  El contador llega exactamente a cero a las
  00:00:00 del 22 de septiembre de 2026 en Quito.
*/

const START_DATE = "2026-09-01";
const ANNIVERSARY_DATE = "2026-09-22";
const TOTAL_DAYS = 22;

const ECUADOR_TIME_ZONE = "America/Guayaquil";


// ==========================================
// SORPRESAS
// ==========================================

const surprises = [
  {
    icon: "❤️",
    title: "Una razón para sonreír",
    text: `Hoy comienza nuestra cuenta regresiva. No necesito una fecha especial para recordarte cuánto significas para mí. Pero quiero aprovechar estos 22 días para dejarte pequeños pedacitos de todo lo que siento por ti y nuestra historia.`
  },
  {
    icon: "📸",
    title: "Varios recuerdos juntos",
    text: ` "Gracias por compartir un poquito de tu tiempo junto a mi, espero poder seguir viviendo varias cosas junto a ti y que nunca terminen las fotos oficiales."`,
    images: [
  "images/foto01.jpeg",
  "images/foto02.jpeg",
  "images/foto03.jpeg",
  "images/foto04.jpeg",
  "images/foto05.jpeg",
  "images/foto06.jpeg",
  "images/foto07.jpeg",
  "images/foto08.jpeg",
  "images/foto09.jpeg",
  "images/foto10.jpeg"
]
  },
  {
    icon: "💕",
    title: "Siete cosas que amo de ti",
    text: `1. Amo que te guste el fútbol porque me encanta compartir contigo esa pasión y sufrir por el nachito.<br><br>2. Amo lo cariñosa que eres con los animales porque demuestra el bonito corazón que tienes.<br><br>3. Me encanta lo cariñosa que eres conmigo, cada abrazo, cada palabra y cada pequeño detalle tuyo significa muchísimo para mí.<br><br>4. Amo tu sentido del humor, especialmente esos chistes de doble sentido que terminan haciéndonos reír juntos.<br><br>5. Amo tu belleza y no solamente por lo hermosa que eres físicamente, sino por la forma en que tu personalidad hace que seas todavía más especial. <br><br>6 Amo la buena madre que eres porque admiro la dedicación, el amor y la paciencia que tienes. <br><br>7. Amo que seas tú, porque entre tantas personas en el mundo, tuve la suerte de encontrarte y poder compartir mi vida contigo.`
  },
  {
    icon: "🎵",
    title: "Nuestra canción",
    text: `Hoy quiero que escuches nuestra canción y recuerdes lo importante que eres para mi vida y de que manera eres importante para mí. ❤️<br><br><strong>Tip:</strong>usa el botón ♫ de la esquina.`
  },
  {
    icon: "🥰",
    title: "Un momento que nunca olvido",
    text: `Hay varios momentos que hemos compartido, desde perdernos en el sur hasta pasar 2 o 3 días perdidos juntos, pero me gusta recordar mucho como emzo todo, con unos deberes, las notitas pequeñas hasta llegar a darte clases donde empezamos algo que sigue hasta ahora.`,
    image: "images/foto11.jpg"
  },
  {
    icon: "💌",
    title: "Una pequeña carta",
    text: `A veces no digo todo lo que siento, pero quiero que sepas que cada momento contigo ocupa un lugar especial en mi corazón. Gracias por estar en mi vida.`
  },
  {
    icon: "😂",
    title: "Nuestro momento más gracioso",
    text: `Igual hay muchos jajaja pero me gusta cuando ibamos jugando con una piedrita por toda la amazonas hasta llegar a la zona para seguir tomando.`
  },
  {
    icon: "🎟️",
    title: "Cupón para ti",
    text: `<div class="quote">🎟️ CUPÓN ESPECIAL<br><br>Vale por una una cita y un viaje juntos amor. ❤️</div>`
  },
  {
    icon: "🌹",
    title: "Lo que admiro de ti",
    text: `1. Admiro lo inteligente que eres.<br><br>2. Admiro tu fuerza y como enfrentas los problemas.<br><br>2. Admiro tu dedicacion y esfuerzo por cumplir tus metas.`
  },
  {
    icon: "✨",
    title: "Si pudiera volver al principio...",
    text: `Si pudiera regresar al momento en que comenzó nuestra historia, volvería a elegir conocerte, volvería a elegir cada conversación y volvería a elegirte a ti.`
  },
  {
    icon: "📷",
    title: "Otra foto, otro recuerdo",
    text: `Agrega aquí otra foto importante y cuenta brevemente qué sentías ese día.`,
    image: "images/foto02.jpg"
  },
  {
    icon: "💭",
    title: "12 cosas que quiero vivir contigo",
    text: `1. Viajar juntos.<br>2. Conocer lugares nuevos.<br>3. Celebrar muchos aniversarios.<br>4. Reírnos hasta que nos duela el estómago.<br>5. Tener más fotografías juntos.<br>6. Crear nuevas tradiciones.<br>7. Apoyarnos en nuestros sueños.<br>8. Ver amaneceres juntos.<br>9. Celebrar nuestros logros.<br>10. Superar los días difíciles.<br>11. Seguir aprendiendo del otro.<br>12. Seguir escogiendo estar juntos. ❤️`
  },
  {
    icon: "🌙",
    title: "Si estuvieras aquí...",
    text: `Si estuvieras aquí ahora mismo, probablemente no necesitaría decir demasiado. Solo quisiera tenerte cerca, abrazarte y disfrutar uno de esos momentos sencillos que terminan siendo los más importantes.`
  },
  {
    icon: "💗",
    title: "Lo que me haces sentir",
    text: `Escribe aquí, con tus propias palabras, cómo cambia tu día cuando estás con ella. Hazlo personal: habla de algo que solo ustedes dos entienden.`
  },
  {
    icon: "🎶",
    title: "Una playlist para nosotros",
    text: `Puedes reemplazar este texto por 5 canciones que representen diferentes momentos de su relación.`
  },
  {
    icon: "📝",
    title: "Una promesa",
    text: `No prometo que todos los días serán perfectos. Sí quiero prometerte que seguiré valorando nuestra historia, escuchándote y cuidando cada momento que construyamos juntos.`
  },
  {
    icon: "🌟",
    title: "Lo que quiero que nunca olvides",
    text: `<div class="quote">Nunca olvides que eres importante para mí. Incluso en los días en que no pueda estar cerca, quiero que recuerdes que tienes un lugar enorme en mi corazón.</div>`
  },
  {
    icon: "📸",
    title: "Un recuerdo que quiero repetir",
    text: `Coloca aquí una foto o historia de algo que te gustaría volver a vivir con ella.`,
    image: "images/foto03.jpg"
  },
  {
    icon: "❤️",
    title: "Ya casi llega nuestro día",
    text: `Faltan muy pocos días. Gracias por haber llegado hasta aquí conmigo. Mañana habrá otro pequeño detalle para ti.`
  },
  {
    icon: "💌",
    title: "La víspera",
    text: `Mañana es nuestro día. Pero quería que supieras algo: para mí, nuestra historia no se celebra solamente en una fecha. Se celebra en cada conversación, cada abrazo, cada risa y cada momento en que seguimos eligiéndonos.`
  },
  {
    icon: "🥹",
    title: "Mañana...",
    text: `Mañana llega el día 22. Guarda este momento, porque todo lo que hemos preparado hasta aquí nos lleva a nuestra sorpresa final. ❤️`
  },
  {
    icon: "💖",
    title: "Feliz aniversario, mi amor",
    text: `<img src="images/foto-final.jpg" alt="Nuestro recuerdo"><div class="quote">Hoy, 22 de septiembre, celebro nuestra historia.<br><br>Gracias por cada momento, por cada sonrisa y por formar parte de mi vida.<br><br>Si pudiera volver al principio, volvería a elegirte.<br><br><strong>Feliz aniversario. Te amo. ❤️</strong></div>`
  }
];


// ==========================================
// FECHA ACTUAL DE ECUADOR
// ==========================================

function getEcuadorDate() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: ECUADOR_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  return formatter.format(new Date());
}


// ==========================================
// CONVERTIR FECHA YYYY-MM-DD A UTC
// ==========================================

function dateToUTC(dateString) {
  const [y, m, d] = dateString.split("-").map(Number);

  return Date.UTC(y, m - 1, d);
}


// ==========================================
// DÍA ACTUAL DEL CALENDARIO
// ==========================================

function getCurrentDay() {
  // 🔐 MODO DE PRUEBA
  // Ejemplo: ?preview=22
  const params = new URLSearchParams(window.location.search);
  const previewDay = Number(params.get("preview"));

  if (
    Number.isInteger(previewDay) &&
    previewDay >= 1 &&
    previewDay <= TOTAL_DAYS
  ) {
    return previewDay;
  }

  // 📅 FUNCIONAMIENTO NORMAL
  const today = getEcuadorDate();

  const difference = Math.floor(
    (dateToUTC(today) - dateToUTC(START_DATE)) / 86400000
  );

  return Math.min(Math.max(difference + 1, 0), TOTAL_DAYS);
}


// ==========================================
// FECHA EXACTA DEL ANIVERSARIO
// ==========================================
//
// Quito = UTC-5
//
// 22/09/2026 00:00:00 Quito
// equivale a
// 22/09/2026 05:00:00 UTC
//
// Por eso utilizamos explícitamente -05:00.
//

function getAnniversaryDate() {
  return new Date(
    `${ANNIVERSARY_DATE}T00:00:00-05:00`
  );
}


// ==========================================
// CONTADOR REGRESIVO
// ==========================================

function updateCountdown() {

  const now = new Date();

  const anniversary = getAnniversaryDate();

  const diff = anniversary.getTime() - now.getTime();


  // ========================================
  // YA LLEGÓ EL ANIVERSARIO
  // ========================================

  if (diff <= 0) {

    document.getElementById("countdown-label").textContent =
      "❤️ Hoy es nuestro día ❤️";

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;
  }


  // ========================================
  // CALCULAR TIEMPO RESTANTE
  // ========================================

  const days = Math.floor(
    diff / 86400000
  );

  const hours = Math.floor(
    (diff % 86400000) / 3600000
  );

  const minutes = Math.floor(
    (diff % 3600000) / 60000
  );

  const seconds = Math.floor(
    (diff % 60000) / 1000
  );


  // ========================================
  // MOSTRAR CONTADOR
  // ========================================

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}


// ==========================================
// RENDERIZAR CALENDARIO
// ==========================================

function renderCalendar() {

  const calendar = document.getElementById("calendar");

  const currentDay = getCurrentDay();


  // ========================================
  // MENSAJE DE ESTADO
  // ========================================

  if (currentDay === 0) {

    document.getElementById("status-text").textContent =
      "La cuenta regresiva comienza el 1 de septiembre ❤️";

  } else if (currentDay >= TOTAL_DAYS) {

    document.getElementById("status-text").textContent =
      "Hoy es nuestro día. ❤️";

  } else {

    document.getElementById("status-text").textContent =
      `Hoy está disponible el detalle del día ${currentDay}. Los demás se desbloquearán automáticamente.`;
  }


  calendar.innerHTML = "";


  // ========================================
  // CREAR LOS 22 DÍAS
  // ========================================

  for (
    let day = 1;
    day <= TOTAL_DAYS;
    day++
  ) {

    const unlocked = day <= currentDay;

    const isToday = day === currentDay;


    const card = document.createElement("button");

    card.className =
      `day-card ${
        unlocked ? "unlocked" : "locked"
      } ${
        isToday ? "today" : ""
      }`;


    // ======================================
    // FECHA DEL DÍA
    // ======================================

    const date = new Date(
      dateToUTC(START_DATE) +
      (day - 1) * 86400000
    );


    const dateText =
      date.toLocaleDateString("es-EC", {
        day: "numeric",
        month: "short",
        timeZone: "UTC"
      });


    // ======================================
    // DÍA DESBLOQUEADO
    // ======================================

    if (unlocked) {

      card.innerHTML = `
        <span class="day-number">
          Día ${String(day).padStart(2, "0")}
        </span>

        <span class="day-date">
          ${dateText}
        </span>

        <div class="day-icon">
          ${surprises[day - 1].icon}
        </div>

        <div class="day-title">
          ${surprises[day - 1].title}
        </div>
      `;

      card.onclick = () =>
        openSurprise(day);


    // ======================================
    // DÍA BLOQUEADO
    // ======================================

    } else {

      card.innerHTML = `
        <span class="day-number">
          Día ${String(day).padStart(2, "0")}
        </span>

        <span class="day-date">
          ${dateText}
        </span>

        <div class="day-icon">
          🔒
        </div>

        <div class="day-title">
          Todavía no...
        </div>

        <span class="lock">
          ♥
        </span>
      `;

      card.onclick = () =>
        showLockedMessage(day);
    }


    calendar.appendChild(card);
  }
}


// ==========================================
// ABRIR SORPRESA
// ==========================================

function openSurprise(day) {
  const currentDay = getCurrentDay();

  if (day > currentDay) {
    showLockedMessage(day);
    return;
  }

  const surprise = surprises[day - 1];

  document.getElementById("modal-day").textContent =
    `Día ${String(day).padStart(2, "0")} · ${getDayLabel(day)}`;

  document.getElementById("modal-title").textContent =
    surprise.title;

  document.getElementById("modal-icon").textContent =
    surprise.icon;

  let body = "";

  // 🎠 CARRUSEL DE IMÁGENES
  if (surprise.images && surprise.images.length > 0) {

    body += `
      <div class="photo-carousel">

        <button 
          class="carousel-button carousel-prev"
          onclick="changeCarousel(-1)"
          aria-label="Foto anterior">
          ‹
        </button>

        <div class="carousel-image-container">
          <img
            id="carousel-image"
            src="${surprise.images[0]}"
            alt="Recuerdo 1"
          >
        </div>

        <button 
          class="carousel-button carousel-next"
          onclick="changeCarousel(1)"
          aria-label="Foto siguiente">
          ›
        </button>

      </div>

      <div class="carousel-counter">
        <span id="carousel-counter">1 / ${surprise.images.length}</span>
      </div>

      <div class="carousel-dots" id="carousel-dots">
    `;

    surprise.images.forEach((image, index) => {
      body += `
        <button
          class="carousel-dot ${index === 0 ? "active" : ""}"
          onclick="goToCarousel(${index})"
          aria-label="Ir a foto ${index + 1}">
        </button>
      `;
    });

    body += `
      </div>
    `;

    // Guardamos las imágenes para poder navegar
    window.currentCarouselImages = surprise.images;
    window.currentCarouselIndex = 0;
  }

  body += `
    <div class="surprise-text">
      ${surprise.text}
    </div>
  `;

  document.getElementById("modal-body").innerHTML = body;

  const modal = document.getElementById("modal");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  if (day === 22) {
    createHearts(28);
  }
}

// 🎠 Cambiar foto del carrusel
function changeCarousel(direction) {

  if (!window.currentCarouselImages) {
    return;
  }

  const total = window.currentCarouselImages.length;

  window.currentCarouselIndex += direction;

  // Si llega al final, vuelve al principio
  if (window.currentCarouselIndex >= total) {
    window.currentCarouselIndex = 0;
  }

  // Si retrocede desde la primera, va a la última
  if (window.currentCarouselIndex < 0) {
    window.currentCarouselIndex = total - 1;
  }

  updateCarousel();
}


// 📸 Ir directamente a una foto
function goToCarousel(index) {

  if (!window.currentCarouselImages) {
    return;
  }

  window.currentCarouselIndex = index;

  updateCarousel();
}


// 🔄 Actualizar carrusel
function updateCarousel() {

  const image = document.getElementById("carousel-image");
  const counter = document.getElementById("carousel-counter");
  const dots = document.querySelectorAll(".carousel-dot");

  if (!image) {
    return;
  }

  const index = window.currentCarouselIndex;
  const images = window.currentCarouselImages;

  // Pequeña animación
  image.classList.remove("carousel-fade");

  void image.offsetWidth;

  image.src = images[index];

  image.alt = `Recuerdo ${index + 1}`;

  image.classList.add("carousel-fade");

  // Contador
  if (counter) {
    counter.textContent = `${index + 1} / ${images.length}`;
  }

  // Puntos
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// ==========================================
// MENSAJE DÍA BLOQUEADO
// ==========================================

function showLockedMessage(day) {

  const date = new Date(
    dateToUTC(START_DATE) +
    (day - 1) * 86400000
  );


  const dateText =
    date.toLocaleDateString("es-EC", {
      day: "numeric",
      month: "long",
      timeZone: "UTC"
    });


  document.getElementById("modal-day").textContent =
    "🔒 Sorpresa bloqueada";


  document.getElementById("modal-icon").textContent =
    "🤫";


  document.getElementById("modal-title").textContent =
    "Todavía no...";


  document.getElementById("modal-body").innerHTML =
    `Este detalle está reservado para el <strong>${dateText}</strong>.<br><br>
    Ten paciencia, mi amor. ❤️<br><br>
    <em>Las sorpresas bonitas también necesitan esperar su momento.</em>`;


  const modal =
    document.getElementById("modal");


  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}


// ==========================================
// ETIQUETA DEL DÍA
// ==========================================

function getDayLabel(day) {

  if (day === 22)
    return "Nuestro día";

  if (day === getCurrentDay())
    return "Disponible hoy";

  return "Un recuerdo para ti";
}


// ==========================================
// CERRAR MODAL
// ==========================================

function closeModal() {

  const modal =
    document.getElementById("modal");


  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";
}


// ==========================================
// IR AL CALENDARIO
// ==========================================

function scrollToCalendar() {

  document.getElementById(
    "calendar-section"
  ).scrollIntoView({
    behavior: "smooth"
  });
}


// ==========================================
// CORAZONES
// ==========================================

function createHearts(amount = 8) {

  const container =
    document.getElementById("hearts");


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const heart =
      document.createElement("span");


    heart.className =
      "floating-heart";


    heart.textContent =
      Math.random() > .25
        ? "♥"
        : "❤";


    heart.style.left =
      `${Math.random() * 100}%`;


    heart.style.fontSize =
      `${12 + Math.random() * 22}px`;


    heart.style.animationDuration =
      `${5 + Math.random() * 7}s`;


    heart.style.animationDelay =
      `${Math.random() * 2}s`;


    container.appendChild(heart);


    setTimeout(
      () => heart.remove(),
      14000
    );
  }
}


// ==========================================
// ANIMACIÓN DE CORAZONES
// ==========================================

function startHeartAnimation() {

  setInterval(
    () => createHearts(1),
    1800
  );
}


// ==========================================
// MÚSICA
// ==========================================

async function toggleMusic() {

  const audio =
    document.getElementById("bg-music");

  const button =
    document.getElementById("music-btn");


  try {

    if (audio.paused) {

      await audio.play();

      button.textContent = "❚❚";

      button.title =
        "Pausar música";

    } else {

      audio.pause();

      button.textContent = "♫";

      button.title =
        "Reproducir música";
    }

  } catch (error) {

    alert(
      "Primero coloca tu canción en la carpeta music/nuestra-cancion.mp3"
    );
  }
}


// ==========================================
// TECLA ESCAPE
// ==========================================

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeModal();
    }
  }
);


// ==========================================
// INICIAR PÁGINA
// ==========================================

renderCalendar();

updateCountdown();

startHeartAnimation();


// Actualizar contador cada segundo
setInterval(
  updateCountdown,
  1000
);


// Si la página permanece abierta cuando
// cambia el día, actualizar calendario.
setInterval(
  renderCalendar,
  30000
);

// Si la página permanece abierta cuando cambia el día,
// se actualiza automáticamente el calendario.
setInterval(renderCalendar, 30000);
