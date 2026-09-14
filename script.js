/*
  =========================================================
  22 DÍAS PARA NOSOTROS
  =========================================================

  Fecha de inicio: 1 de septiembre de 2026
  Aniversario:     22 de septiembre de 2026

  Zona horaria:
  Quito, Ecuador = UTC-5
  America/Guayaquil

  El calendario se desbloquea según la fecha de Quito.
  El contador llega exactamente a cero a las
  00:00:00 del 22 de septiembre de 2026 en Quito.
*/


// =========================================================
// CONFIGURACIÓN
// =========================================================

const START_DATE = "2026-09-01";
const ANNIVERSARY_DATE = "2026-09-22";
const TOTAL_DAYS = 22;

const ECUADOR_TIME_ZONE = "America/Guayaquil";


// =========================================================
// SORPRESAS
// =========================================================

const surprises = [

  // =======================================================
  // DÍA 1
  // =======================================================

  {
    icon: "❤️",

    title: "Una razón para sonreír",

    text: `
      Hoy comienza nuestra cuenta regresiva.

      No necesito una fecha especial para recordarte cuánto
      significas para mí.

      Pero quiero aprovechar estos 22 días para dejarte
      pequeños pedacitos de todo lo que siento por ti
      y nuestra historia.
    `
  },


  // =======================================================
  // DÍA 2
  // =======================================================

  {
    icon: "📸",

    title: "Varios recuerdos juntos",

    text: `
      Gracias por compartir un poquito de tu tiempo junto a mí.

      Espero poder seguir viviendo varias cosas junto a ti
      y que nunca terminen las fotos oficiales. ❤️
    `,

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


  // =======================================================
  // DÍA 3
  // =======================================================

  {
    icon: "💕",

    title: "Siete cosas que amo de ti",

    text: `
      1. Amo que te guste el fútbol porque me encanta
      compartir contigo esa pasión y sufrir por el Nachito.

      <br><br>

      2. Amo lo cariñosa que eres con los animales porque
      demuestra el bonito corazón que tienes.

      <br><br>

      3. Me encanta lo cariñosa que eres conmigo.
      Cada abrazo, cada palabra y cada pequeño detalle tuyo
      significa muchísimo para mí.

      <br><br>

      4. Amo tu sentido del humor, especialmente esos chistes
      de doble sentido que terminan haciéndonos reír juntos.

      <br><br>

      5. Amo tu belleza y no solamente por lo hermosa que eres
      físicamente, sino por la forma en que tu personalidad
      hace que seas todavía más especial.

      <br><br>

      6. Amo la buena madre que eres porque admiro la dedicación,
      el amor y la paciencia que tienes.

      <br><br>

      7. Amo que seas tú, porque entre tantas personas en el mundo,
      tuve la suerte de encontrarte y poder compartir mi vida contigo.
    `
  },


  // =======================================================
  // DÍA 4
  // =======================================================

  {
    icon: "🎵",

    title: "Nuestra canción",

    text: `
      Hoy quiero que escuches nuestra canción y recuerdes
      lo importante que eres para mi vida y de qué manera
      eres importante para mí, gracias por compartir tus gustos
      y hacerme recordarte a ti en cada segundo de la canción,
      antes de darle play piensa en algo lindo que hemos vivido, te amo. ❤️

      <br><br>

      <strong>Tip:</strong>
      Cierra y usa el botón ♫ de abajo en la esquina derecha y ahora cada día puedes escucharla.
    `
  },


  // =======================================================
  // DÍA 5
  // =======================================================

  {
    icon: "🥰",

    title: "Un momento que nunca olvido",

    text: `
      Hay varios momentos que hemos compartido,
      desde perdernos en el sur hasta pasar 2 o 3 días
      perdidos juntos.

      <br><br>

      Pero me gusta recordar mucho cómo empezó todo:

      con unos deberes, las notitas pequeñas,
      hasta llegar a darte clases donde empezamos algo
      que sigue hasta ahora. ❤️
    `,

    image: "images/foto11.jpeg"
  },


  // =======================================================
  // DÍA 6
  // =======================================================

  {
    icon: "💌",

    title: "Una pequeña carta",

    text: `
      A veces no digo todo lo que siento,
      pero quiero que sepas que cada momento contigo
      ocupa un lugar especial en mi corazón.

      <br><br>

      Gracias por estar en mi vida. ❤️
    `
  },


  // =======================================================
  // DÍA 7
  // =======================================================

  {
    icon: "😂",

    title: "Nuestro momento más gracioso",

    text: `
      Igual hay muchos jajaja.

      Pero me gusta cuando íbamos jugando con una piedrita
      por toda la Amazonas hasta llegar a la zona para
      seguir tomando.

      <br><br>

      Definitivamente tenemos recuerdos que solamente
      nosotros entendemos. 😂❤️
    `
  },


  // =======================================================
  // DÍA 8
  // =======================================================

  {
    icon: "🎟️",

    title: "Cupón para ti",

    text: `
      <div class="quote">

        🎟️ CUPÓN ESPECIAL

        <br><br>

        Vale por una cita y un viaje juntos, amor. ❤️

      </div>
    `
  },


  // =======================================================
  // DÍA 9
  // =======================================================

  {
    icon: "🌻",

    title: "Lo que nunca te digo suficiente",

    textCarousel: true,

    slides: [

      {
        title: "Gracias por hacerme reír",
        text: `
          Gracias por hacerme reír incluso cuando no estoy
          teniendo un buen día.

          <br><br>

          Siempre encuentras alguna forma de sacarme una sonrisa
          y hacer que todo se sienta un poquito mejor. ❤️
        `
      },

      {
        title: "Gracias por escucharme",
        text: `
          Gracias por escuchar mis historias, mis problemas,
          mis ideas y hasta mis cosas sin sentido.

          <br><br>

          Saber que puedo hablar contigo y sentirme escuchado
          significa muchísimo para mí. 💕
        `
      },

      {
        title: "Gracias por confiar en mí",
        text: `
          Gracias por confiar en mí, por contarme tus cosas
          y por dejarme conocer cada vez más de ti.

          <br><br>

          Quiero seguir siendo esa persona en la que puedas confiar. 🤍
        `
      },

      {
        title: "Gracias por dejarme formar parte de tu vida",
        text: `
          Gracias por dejarme compartir contigo tantos momentos,
          aventuras, risas y recuerdos.

          <br><br>

          Me hace feliz saber que nuestras vidas se encontraron
          y que ahora tenemos nuestra propia historia. 🥹❤️
        `
      },

      {
        title: "Lo que nunca te digo suficiente",
        text: `
          Quizá no te lo diga todos los días, pero hay muchas cosas
          que siento por ti que nunca quiero que olvides.

          <br><br>

          Gracias por estar, gracias por quererme,
          gracias por hacerme parte de tu mundo
          y gracias por ser tú.

          <br><br>

          <strong>Te quiero muchísimo. 🌻❤️</strong>
        `
      }

    ]
  },


  // =======================================================
  // DÍA 10
  // =======================================================

  {
    icon: "✨",

    title: "Si pudiera volver al principio...",

    text: `
      Si pudiera regresar al momento en que comenzó nuestra historia,
      volvería a elegir conocerte.

      <br><br>

      Volvería a elegir cada conversación
      y volvería a elegirte a ti. ❤️
    `
  },


  // =======================================================
  // DÍA 11
  // =======================================================

  {
    icon: "📷",

    title: "Otra foto, otro recuerdo",

    text: `
      Cada fotografía guarda un momento.

      Y cada momento contigo se convierte
      en un recuerdo que quiero conservar.
    `,

    image: "images/foto02.jpg"
  },


  // =======================================================
  // DÍA 12
  // =======================================================

  {
    icon: "💭",

    title: "12 cosas que quiero vivir contigo",

    text: `
      1. Viajar juntos.

      <br><br>

      2. Conocer lugares nuevos.

      <br><br>

      3. Celebrar muchos aniversarios.

      <br><br>

      4. Reírnos hasta que nos duela el estómago.

      <br><br>

      5. Tener más fotografías juntos.

      <br><br>

      6. Crear nuevas tradiciones.

      <br><br>

      7. Apoyarnos en nuestros sueños.

      <br><br>

      8. Ver amaneceres juntos.

      <br><br>

      9. Celebrar nuestros logros.

      <br><br>

      10. Superar los días difíciles.

      <br><br>

      11. Seguir aprendiendo del otro.

      <br><br>

      12. Seguir escogiendo estar juntos. ❤️
    `
  },


  // =======================================================
  // DÍA 13
  // =======================================================

  {
    icon: "🌙",

    title: "Si estuvieras aquí...",

    text: `
      Si estuvieras aquí ahora mismo,
      probablemente no necesitaría decir demasiado.

      <br><br>

      Solo quisiera tenerte cerca,
      abrazarte y disfrutar uno de esos momentos sencillos
      que terminan siendo los más importantes.

      <br><br>

      A veces no necesitamos hacer nada especial.
      Solo estar juntos ya hace que mi día sea mejor. ❤️
    `
  },


  // =======================================================
  // DÍA 14
  // =======================================================

  {
    icon: "🗺️",

    title: "Nuestro pequeño viaje",

    text: `
      Hoy quiero que hagamos algo diferente.

      <br><br>

      En lugar de recordar solamente un momento,
      quiero que recorramos un pequeño camino por nuestra historia.

      <br><br>

      Desde cómo comenzó todo hasta todo lo que todavía
      quiero vivir contigo.

      <br><br>

      <strong>Bienvenida a nuestro pequeño viaje. ❤️</strong>
    `,

    customContent: "day14"
  },


  // =======================================================
  // DÍA 15
  // =======================================================

  {
    icon: "🌻",

    title: "Si fueras una flor...",

    text: `
      Serías un girasol.

      Porque tienes esa forma de iluminar los momentos,
      de hacer que todo se sienta un poquito más bonito
      y porque sé cuánto te gustan.

      <br><br>

      Y si pudiera regalarte uno todos los días,
      lo haría sin pensarlo. 🌻❤️
    `
  },


  // =======================================================
  // DÍA 16
  // =======================================================

  {
    icon: "🐼🐺",

    title: "Tú y yo",

    text: `
      Si tuviera que elegir dos animales para representarnos,
      elegiría un panda y un lobo.

      <br><br>

      Tú, mi panda 🐼:
      tierna, bonita y con ese lado adorable que me encanta.

      <br><br>

      Yo, tu lobo 🐺:
      siempre queriendo estar a tu lado y cuidar lo que tenemos.

      <br><br>

      Diferentes, pero juntos hacemos nuestro propio equipo. ❤️
    `
  },


  // =======================================================
  // DÍA 17
  // =======================================================

  {
    icon: "😂",

    title: "Una de esas cosas que solo nosotros entendemos",

    text: `
      Nuestra relación está llena de pequeños momentos,
      frases, bromas y situaciones que probablemente
      no tendrían sentido para nadie más.

      <br><br>

      Y justamente eso me encanta.

      <br><br>

      Tenemos nuestro propio idioma,
      nuestras propias bromas
      y nuestros propios recuerdos.

      <br><br>

      Y espero que sigamos acumulando muchos más. 😂❤️
    `
  },


  // =======================================================
  // DÍA 18
  // =======================================================

  {
    icon: "📸",

    title: "Otro recuerdo nuestro",

    text: `
      Una foto puede parecer solamente una imagen.

      <br><br>

      Pero cuando es una foto contigo,
      para mí guarda muchísimo más:

      el lugar, el momento,
      lo que estábamos haciendo
      y todo lo que sentía en ese instante.

      <br><br>

      Quiero llenar nuestra historia de muchos recuerdos así. ❤️
    `,

    image: "images/foto03.jpg"
  },


  // =======================================================
  // DÍA 19
  // =======================================================

  {
    icon: "💖",

    title: "Lo que quiero que nunca cambie",

    text: `
      Quiero que nunca cambie nuestra capacidad
      de reírnos juntos.

      <br><br>

      Que podamos seguir hablando de cualquier cosa,
      haciendo bromas tontas,
      compartiendo nuestros problemas
      y apoyándonos.

      <br><br>

      Porque más allá de ser pareja,
      quiero seguir siendo tu compañero. ❤️
    `
  },


  // =======================================================
  // DÍA 20
  // =======================================================

  {
    icon: "✈️",

    title: "Todavía nos falta mucho por conocer",

    text: `
      Hay muchos lugares que todavía no hemos visitado.

      <br><br>

      Muchos caminos que todavía no hemos recorrido.

      <br><br>

      Muchas fotografías que todavía no existen.

      <br><br>

      Y muchas historias que todavía no hemos vivido.

      <br><br>

      Espero poder descubrirlas contigo. ❤️
    `
  },


  // =======================================================
  // DÍA 21
  // =======================================================

  {
    icon: "⏳",

    title: "Ya casi llega nuestro día",

    text: `
      Después de tantos recuerdos,
      estamos a un paso de nuestro aniversario.

      <br><br>

      Estos días fueron solamente una pequeña forma
      de recordarte cuánto te amo.

      <br><br>

      Pero mañana será diferente.

      <br><br>

      Mañana celebramos nosotros. ❤️
    `
  },


  // =======================================================
  // DÍA 22
  // =======================================================

  {
    icon: "💍",

    title: "Feliz aniversario",

    text: `
      Llegamos al día que estaba esperando.

      <br><br>

      Feliz aniversario, mi amor. ❤️

      <br><br>

      Gracias por cada momento,
      cada risa,
      cada abrazo,
      cada aventura
      y cada recuerdo.

      <br><br>

      Gracias por ser parte de mi vida.

      <br><br>

      Y si estos 22 días me enseñaron algo,
      es que todavía quiero escribir muchísimas páginas
      más de nuestra historia.

      <br><br>

      <strong>Te amo. ❤️</strong>
    `,

    image: "images/foto-final.jpg"
  }

];


// =========================================================
// VARIABLES DEL CARRUSEL
// =========================================================

window.currentCarouselSlides = [];
window.currentCarouselIndex = 0;


// =========================================================
// FECHA ACTUAL DE ECUADOR
// =========================================================

function getEcuadorDate() {

  const now = new Date();

  const parts =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone: ECUADOR_TIME_ZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }
    ).formatToParts(now);

  const values = {};

  parts.forEach(
    part => {
      if (part.type !== "literal") {
        values[part.type] = part.value;
      }
    }
  );

  return `${values.year}-${values.month}-${values.day}`;
}


// =========================================================
// CONVERTIR FECHA YYYY-MM-DD A UTC
// =========================================================

function dateToUTC(dateString) {

  const [
    year,
    month,
    day
  ] = dateString
    .split("-")
    .map(Number);

  return Date.UTC(
    year,
    month - 1,
    day
  );
}


// =========================================================
// DÍA ACTUAL DEL CALENDARIO
// =========================================================

function getCurrentDay() {

  const preview =
    new URLSearchParams(
      window.location.search
    ).get("preview");

  if (preview !== null) {

    const previewDay =
      parseInt(
        preview,
        10
      );

    if (
      !Number.isNaN(previewDay) &&
      previewDay >= 1 &&
      previewDay <= TOTAL_DAYS
    ) {

      return previewDay;

    }

  }


  const today =
    getEcuadorDate();

  const start =
    dateToUTC(
      START_DATE
    );

  const current =
    dateToUTC(
      today
    );

  const diff =
    Math.floor(
      (current - start) /
      86400000
    );

  const day =
    diff + 1;


  if (day < 1) {
    return 0;
  }


  if (day > TOTAL_DAYS) {
    return TOTAL_DAYS;
  }


  return day;
}


// =========================================================
// FECHA EXACTA DEL ANIVERSARIO
// =========================================================

function getAnniversaryDate() {

  return new Date(
    `${ANNIVERSARY_DATE}T00:00:00-05:00`
  );

}


// =========================================================
// CONTADOR REGRESIVO
// =========================================================

function updateCountdown() {

  const countdown =
    document.getElementById(
      "countdown"
    );

  if (!countdown) {
    return;
  }


  const target =
    getAnniversaryDate();

  const now =
    new Date();

  let difference =
    target.getTime() -
    now.getTime();


  if (difference <= 0) {

    countdown.innerHTML = `
      <div class="countdown-finished">
        ❤️ ¡Hoy es nuestro aniversario! ❤️
      </div>
    `;

    return;
  }


  const days =
    Math.floor(
      difference /
      86400000
    );

  difference %=
    86400000;


  const hours =
    Math.floor(
      difference /
      3600000
    );

  difference %=
    3600000;


  const minutes =
    Math.floor(
      difference /
      60000
    );

  difference %=
    60000;


  const seconds =
    Math.floor(
      difference /
      1000
    );


  const pad =
    number =>
      String(number)
        .padStart(2, "0");


  countdown.innerHTML = `

    <div class="countdown-item">
      <span>${days}</span>
      <small>Días</small>
    </div>

    <div class="countdown-separator">:</div>

    <div class="countdown-item">
      <span>${pad(hours)}</span>
      <small>Horas</small>
    </div>

    <div class="countdown-separator">:</div>

    <div class="countdown-item">
      <span>${pad(minutes)}</span>
      <small>Minutos</small>
    </div>

    <div class="countdown-separator">:</div>

    <div class="countdown-item">
      <span>${pad(seconds)}</span>
      <small>Segundos</small>
    </div>

  `;

}


// =========================================================
// RENDERIZAR CALENDARIO
// =========================================================

function renderCalendar() {

  const calendar =
    document.getElementById(
      "calendar"
    );

  if (!calendar) {
    return;
  }


  const currentDay =
    getCurrentDay();


  calendar.innerHTML = "";


  for (
    let day = 1;
    day <= TOTAL_DAYS;
    day++
  ) {

    const surprise =
      surprises[day - 1];


    const card =
      document.createElement(
        "button"
      );


    card.type =
      "button";


    card.className =
      "calendar-day";


    const unlocked =
      day <= currentDay;


    if (unlocked) {

      card.classList.add(
        "unlocked"
      );

    }
    else {

      card.classList.add(
        "locked"
      );

    }


    if (
      day === currentDay
    ) {

      card.classList.add(
        "today"
      );

    }


    if (
      day === 22
    ) {

      card.classList.add(
        "anniversary"
      );

    }


    card.innerHTML = `

      <span class="day-number">
        ${day}
      </span>

      <span class="day-icon">
        ${
          unlocked
            ? surprise.icon
            : "🔒"
        }
      </span>

      <span class="day-label">
        ${
          day === 22
            ? "Nuestro día"
            : unlocked
              ? "Abrir"
              : "Bloqueado"
        }
      </span>

    `;


    card.addEventListener(
      "click",
      () => {

        if (unlocked) {

          openSurprise(day);

        }
        else {

          showLockedMessage(day);

        }

      }
    );


    calendar.appendChild(
      card
    );

  }

}


// =========================================================
// NORMALIZAR IMÁGENES
// =========================================================

function normalizeSlides(
  surprise
) {

  if (
    surprise.slides &&
    Array.isArray(
      surprise.slides
    )
  ) {

    return surprise.slides;

  }


  if (
    surprise.images &&
    Array.isArray(
      surprise.images
    )
  ) {

    return surprise.images.map(
      image => ({
        image,
        text: ""
      })
    );

  }


  if (
    surprise.image
  ) {

    return [
      {
        image:
          surprise.image,

        text:
          ""
      }
    ];

  }


  return [];

}


// =========================================================
// ABRIR SORPRESA
// =========================================================

function openSurprise(
  day
) {

  const surprise =
    surprises[day - 1];


  if (!surprise) {
    return;
  }


  const modal =
    document.getElementById(
      "modal"
    );


  const modalDay =
    document.getElementById(
      "modal-day"
    );


  const modalIcon =
    document.getElementById(
      "modal-icon"
    );


  const modalTitle =
    document.getElementById(
      "modal-title"
    );


  const modalBody =
    document.getElementById(
      "modal-body"
    );


  if (!modal) {
    return;
  }


  modalDay.textContent =
    `Día ${day}`;


  modalIcon.textContent =
    surprise.icon ||
    "❤️";


  modalTitle.textContent =
    surprise.title ||
    `Sorpresa del día ${day}`;


  window.currentCarouselSlides =
    [];

  window.currentCarouselIndex =
    0;


  if (
    surprise.customContent ===
    "day14"
  ) {

    modalBody.innerHTML = `
      ${surprise.text}

      ${buildDay14Journey()}
    `;

    modal.classList.add("open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

    renderDay14Journey(0);

    return;

  }


  if (
    surprise.textCarousel
  ) {

    modalBody.innerHTML =
      buildTextCarousel(
        surprise
      );

    modal.classList.add(
      "open"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

    window.currentTextCarouselIndex =
      0;

    updateTextCarousel();

    return;

  }


  const slides =
    normalizeSlides(
      surprise
    );


  if (
    slides.length > 0
  ) {

    window.currentCarouselSlides =
      slides;


    modalBody.innerHTML = `

      <div class="surprise-text">
        ${
          surprise.text ||
          ""
        }
      </div>

      <div class="carousel">

        <button
          type="button"
          class="carousel-button carousel-prev"
          onclick="changeCarousel(-1)"
          aria-label="Anterior"
        >
          ❮
        </button>

        <div
          class="carousel-content"
          id="carousel-content"
        ></div>

        <button
          type="button"
          class="carousel-button carousel-next"
          onclick="changeCarousel(1)"
          aria-label="Siguiente"
        >
          ❯
        </button>

      </div>

      <div
        class="carousel-dots"
        id="carousel-dots"
      ></div>

    `;


    updateCarousel();

  }

  else {

    modalBody.innerHTML = `
      <div class="surprise-text">
        ${surprise.text || ""}
      </div>
    `;

  }


  modal.classList.add(
    "open"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}
// =========================================================
// CARRUSEL DE IMÁGENES
// =========================================================

function updateCarousel() {

  const content =
    document.getElementById(
      "carousel-content"
    );

  const dots =
    document.getElementById(
      "carousel-dots"
    );


  if (
    !content ||
    !dots
  ) {
    return;
  }


  const slides =
    window.currentCarouselSlides;


  if (
    !slides ||
    slides.length === 0
  ) {
    return;
  }


  const index =
    window.currentCarouselIndex;


  const slide =
    slides[index];


  let imageHTML =
    "";


  if (
    slide.image
  ) {

    imageHTML = `
      <img
        src="${slide.image}"
        alt="Recuerdo"
        class="carousel-image"
        loading="lazy"
        onerror="this.style.display='none';"
      >
    `;

  }


  content.innerHTML = `

    <div class="carousel-slide">

      ${imageHTML}

      ${
        slide.text
          ? `
            <div class="carousel-caption">
              ${slide.text}
            </div>
          `
          : ""
      }

    </div>

  `;


  dots.innerHTML = slides
    .map(
      (_, i) => `

        <button
          type="button"
          class="carousel-dot ${
            i === index
              ? "active"
              : ""
          }"
          onclick="goToCarousel(${i})"
          aria-label="Ir a imagen ${i + 1}"
        ></button>

      `
    )
    .join("");

}


// =========================================================
// CAMBIAR CARRUSEL
// =========================================================

function changeCarousel(
  direction
) {

  const slides =
    window.currentCarouselSlides;


  if (
    !slides ||
    slides.length === 0
  ) {
    return;
  }


  window.currentCarouselIndex +=
    direction;


  if (
    window.currentCarouselIndex < 0
  ) {

    window.currentCarouselIndex =
      slides.length - 1;

  }


  if (
    window.currentCarouselIndex >=
    slides.length
  ) {

    window.currentCarouselIndex =
      0;

  }


  updateCarousel();

}


// =========================================================
// IR A UNA IMAGEN ESPECÍFICA
// =========================================================

function goToCarousel(
  index
) {

  const slides =
    window.currentCarouselSlides;


  if (
    !slides ||
    index < 0 ||
    index >= slides.length
  ) {
    return;
  }


  window.currentCarouselIndex =
    index;


  updateCarousel();

}


// =========================================================
// CARRUSEL DE TEXTO
// =========================================================

function buildTextCarousel(
  surprise
) {

  window.currentTextSlides =
    surprise.slides || [];


  return `

    <div class="text-carousel">

      <button
        type="button"
        class="text-carousel-arrow"
        onclick="changeTextCarousel(-1)"
        aria-label="Anterior"
      >
        ❮
      </button>

      <div
        class="text-carousel-content"
        id="text-carousel-content"
      ></div>

      <button
        type="button"
        class="text-carousel-arrow"
        onclick="changeTextCarousel(1)"
        aria-label="Siguiente"
      >
        ❯
      </button>

    </div>

    <div
      class="text-carousel-dots"
      id="text-carousel-dots"
    ></div>

  `;

}


// =========================================================
// ACTUALIZAR CARRUSEL DE TEXTO
// =========================================================

function updateTextCarousel() {

  const content =
    document.getElementById(
      "text-carousel-content"
    );

  const dots =
    document.getElementById(
      "text-carousel-dots"
    );


  if (
    !content ||
    !dots
  ) {
    return;
  }


  const slides =
    window.currentTextSlides || [];


  if (
    slides.length === 0
  ) {
    return;
  }


  const index =
    window.currentTextCarouselIndex || 0;


  const slide =
    slides[index];


  content.innerHTML = `

    <div class="text-carousel-card">

      ${
        slide.title
          ? `
            <h3>
              ${slide.title}
            </h3>
          `
          : ""
      }

      <div class="text-carousel-message">

        ${
          slide.text ||
          ""
        }

      </div>

    </div>

  `;


  dots.innerHTML =
    slides
      .map(
        (_, i) => `

          <button
            type="button"
            class="carousel-dot ${
              i === index
                ? "active"
                : ""
            }"
            onclick="goToTextCarousel(${i})"
            aria-label="Ir a mensaje ${i + 1}"
          ></button>

        `
      )
      .join("");

}


// =========================================================
// CAMBIAR CARRUSEL DE TEXTO
// =========================================================

function changeTextCarousel(
  direction
) {

  const slides =
    window.currentTextSlides || [];


  if (
    slides.length === 0
  ) {
    return;
  }


  window.currentTextCarouselIndex =
    (window.currentTextCarouselIndex || 0) +
    direction;


  if (
    window.currentTextCarouselIndex < 0
  ) {

    window.currentTextCarouselIndex =
      slides.length - 1;

  }


  if (
    window.currentTextCarouselIndex >=
    slides.length
  ) {

    window.currentTextCarouselIndex =
      0;

  }


  updateTextCarousel();

}


// =========================================================
// IR A MENSAJE ESPECÍFICO
// =========================================================

function goToTextCarousel(
  index
) {

  const slides =
    window.currentTextSlides || [];


  if (
    index < 0 ||
    index >= slides.length
  ) {
    return;
  }


  window.currentTextCarouselIndex =
    index;


  updateTextCarousel();

}


// =========================================================
// DÍA 14 — VIAJE POR NUESTRA HISTORIA
// =========================================================

function buildDay14Journey() {

  return `

    <section
      class="day14-journey"
      id="day14-journey"
    >

      <div class="day14-progress">

        <span
          class="day14-progress-dot active"
          data-step="0"
        ></span>

        <span
          class="day14-progress-line"
        ></span>

        <span
          class="day14-progress-dot"
          data-step="1"
        ></span>

        <span
          class="day14-progress-line"
        ></span>

        <span
          class="day14-progress-dot"
          data-step="2"
        ></span>

      </div>


      <div
        class="day14-stage"
        id="day14-stage"
      ></div>


      <div class="day14-navigation">

        <button
          type="button"
          class="day14-nav-button secondary"
          id="day14-prev"
          onclick="changeDay14Step(-1)"
        >
          ← Anterior
        </button>

        <button
          type="button"
          class="day14-nav-button primary"
          id="day14-next"
          onclick="changeDay14Step(1)"
        >
          Continuar →
        </button>

      </div>


      <div
        class="day14-secret-container"
        id="day14-secret-container"
      ></div>

    </section>

  `;

}


// =========================================================
// CONTENIDO DE LAS ETAPAS DEL DÍA 14
// =========================================================

const day14Steps = [

  {

    number: 1,

    icon: "📝",

    title: "El comienzo",

    subtitle:
      "Todo empezó de una manera muy sencilla.",

    content: `

      <p>
        A veces las historias más bonitas
        no empiezan como uno se imagina.
      </p>

      <div class="day14-memory">

        <div class="day14-memory-icon">
          📚
        </div>

        <div>

          <h4>Unos deberes</h4>

          <p>
            Todo comenzó con algo tan simple
            como unos deberes.
          </p>

        </div>

      </div>


      <div class="day14-memory">

        <div class="day14-memory-icon">
          💌
        </div>

        <div>

          <h4>Las pequeñas notitas</h4>

          <p>
            Después llegaron esas pequeñas notas
            que poco a poco fueron haciendo
            que nuestra historia fuera diferente.
          </p>

        </div>

      </div>


      <div class="day14-memory">

        <div class="day14-memory-icon">
          ❤️
        </div>

        <div>

          <h4>Y después...</h4>

          <p>
            Llegaron las clases que te daba,
            las conversaciones,
            los momentos juntos
            y algo comenzó entre nosotros.
          </p>

        </div>

      </div>


      <div class="day14-highlight">

        <span>
          ✨
        </span>

        <p>
          Y mira hasta dónde nos llevó
          algo que parecía tan pequeño.
        </p>

      </div>

    `

  },


  {

    number: 2,

    icon: "🗺️",

    title: "Nuestras locuras",

    subtitle:
      "Porque contigo hasta perdernos se convierte en un recuerdo.",

    content: `

      <p>
        Si algo caracteriza nuestra historia
        son todos esos momentos que probablemente
        nadie más entendería como nosotros.
      </p>


      <div class="day14-adventure">

        <div class="day14-adventure-icon">
          🧭
        </div>

        <div>

          <h4>
            Perdernos en el sur
          </h4>

          <p>
            No siempre necesitamos saber exactamente
            hacia dónde vamos.
          </p>

          <p>
            A veces simplemente estar juntos
            hace que el camino valga la pena.
          </p>

        </div>

      </div>


      <div class="day14-adventure">

        <div class="day14-adventure-icon">
          😂
        </div>

        <div>

          <h4>
            2 o 3 días perdidos
          </h4>

          <p>
            Esos momentos en los que terminamos
            pasando días juntos,
            haciendo nuestras propias locuras
            y creando recuerdos.
          </p>

        </div>

      </div>


      <div class="day14-adventure">

        <div class="day14-adventure-icon">
          🪨
        </div>

        <div>

          <h4>
            La famosa piedrita
          </h4>

          <p>
            Incluso una simple piedra en la Amazonas
            terminó convirtiéndose en parte
            de una de esas historias que solo
            nosotros recordamos.
          </p>

        </div>

      </div>


      <div class="day14-highlight">

        <span>
          😂❤️
        </span>

        <p>
          Nuestra historia no necesita ser perfecta.
          Solo necesita seguir siendo nuestra.
        </p>

      </div>

    `

  },


  {

    number: 3,

    icon: "❤️",

    title: "Hoy",

    subtitle:
      "Y todavía nos queda muchísimo por vivir.",

    content: `

      <p>
        Cuando miro todo lo que hemos vivido,
        hay algo que me hace sonreír:
      </p>


      <div class="day14-big-message">

        <span class="day14-big-heart">
          ❤️
        </span>

        <p>
          Todo eso fue solamente
          el comienzo.
        </p>

      </div>


      <div class="day14-future-grid">

        <div>
          ✈️
          <span>
            Más viajes
          </span>
        </div>

        <div>
          📸
          <span>
            Más recuerdos
          </span>
        </div>

        <div>
          😂
          <span>
            Más risas
          </span>
        </div>

        <div>
          ❤️
          <span>
            Más nosotros
          </span>
        </div>

      </div>


      <p>
        Quiero seguir conociendo lugares contigo,
        seguir perdiéndonos,
        seguir riéndonos de cosas que solamente
        nosotros entendemos
        y seguir creando recuerdos.
      </p>


      <div class="day14-final-question">

        <span>
          🌎
        </span>

        <strong>
          ¿Te imaginas todo lo que todavía
          nos falta por vivir?
        </strong>

      </div>

    `

  }

];


// =========================================================
// RENDERIZAR ETAPA DEL DÍA 14
// =========================================================

function renderDay14Journey(
  step
) {

  const stage =
    document.getElementById(
      "day14-stage"
    );


  if (!stage) {
    return;
  }


  if (
    step < 0 ||
    step >= day14Steps.length
  ) {
    return;
  }


  window.day14CurrentStep =
    step;


  const data =
    day14Steps[step];


  stage.classList.remove(
    "day14-stage-enter"
  );


  void stage.offsetWidth;


  stage.innerHTML = `

    <div
      class="day14-stage-header"
    >

      <div class="day14-stage-icon">
        ${data.icon}
      </div>

      <div>

        <span class="day14-step-number">
          ETAPA ${data.number} DE 3
        </span>

        <h3>
          ${data.title}
        </h3>

        <p>
          ${data.subtitle}
        </p>

      </div>

    </div>


    <div class="day14-stage-content">

      ${data.content}

    </div>

  `;


  stage.classList.add(
    "day14-stage-enter"
  );


  updateDay14Navigation();


  updateDay14Progress();


  if (
    step ===
    day14Steps.length - 1
  ) {

    showDay14SecretButton();

  }
  else {

    hideDay14Secret();

  }

}


// =========================================================
// NAVEGACIÓN DÍA 14
// =========================================================

function changeDay14Step(
  direction
) {

  const current =
    window.day14CurrentStep || 0;


  const next =
    current + direction;


  if (
    next < 0 ||
    next >= day14Steps.length
  ) {
    return;
  }


  renderDay14Journey(
    next
  );

}


// =========================================================
// ACTUALIZAR BOTONES DÍA 14
// =========================================================

function updateDay14Navigation() {

  const previous =
    document.getElementById(
      "day14-prev"
    );

  const next =
    document.getElementById(
      "day14-next"
    );


  const current =
    window.day14CurrentStep || 0;


  if (previous) {

    previous.disabled =
      current === 0;

  }


  if (next) {

    if (
      current ===
      day14Steps.length - 1
    ) {

      next.textContent =
        "❤️ Terminar";

    }
    else {

      next.textContent =
        "Continuar →";

    }

  }

}


// =========================================================
// ACTUALIZAR PROGRESO DÍA 14
// =========================================================

function updateDay14Progress() {

  const dots =
    document.querySelectorAll(
      ".day14-progress-dot"
    );


  const current =
    window.day14CurrentStep || 0;


  dots.forEach(
    (dot, index) => {

      dot.classList.toggle(
        "active",
        index <= current
      );

    }
  );

}


// =========================================================
// BOTÓN SECRETO DÍA 14
// =========================================================

function showDay14SecretButton() {

  const container =
    document.getElementById(
      "day14-secret-container"
    );


  if (!container) {
    return;
  }


  container.innerHTML = `

    <button
      type="button"
      class="day14-secret-button"
      onclick="revealDay14Secret()"
    >

      💌
      Hay algo más...

    </button>

  `;

}


// =========================================================
// OCULTAR SECRETO
// =========================================================

function hideDay14Secret() {

  const container =
    document.getElementById(
      "day14-secret-container"
    );


  if (!container) {
    return;
  }


  container.innerHTML = "";

}


// =========================================================
// REVELAR SECRETO DÍA 14
// =========================================================

function revealDay14Secret() {

  const container =
    document.getElementById(
      "day14-secret-container"
    );


  if (!container) {
    return;
  }


  container.innerHTML = `

    <div class="day14-secret-message">

      <div class="day14-secret-hearts">
        ❤️ ❤️ ❤️
      </div>

      <h3>
        Y si me preguntas qué quiero
        para nuestra próxima etapa...
      </h3>

      <p>
        Quiero seguir escribiendo esta historia contigo.
      </p>

      <p>
        Quiero más viajes,
        más fotografías,
        más conversaciones,
        más bromas,
        más momentos inesperados
        y más días en los que simplemente
        podamos estar juntos.
      </p>

      <p>
        Porque si todo comenzó con unos deberes
        y unas pequeñas notitas,
        quién sabe hasta dónde podemos llegar.
      </p>

      <div class="day14-secret-final">
        <strong>
          Tú y yo todavía tenemos
          muchas páginas por escribir. ❤️
        </strong>
      </div>

      <button
        type="button"
        class="day14-heart-button"
        onclick="createDay14Hearts()"
      >
        ❤️ Te amo
      </button>

      <div
        id="day14-floating-hearts"
        class="day14-floating-hearts"
      ></div>

    </div>

  `;


  container.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


// =========================================================
// CORAZONES FLOTANTES DÍA 14
// =========================================================

function createDay14Hearts() {

  const container =
    document.getElementById(
      "day14-floating-hearts"
    );


  if (!container) {
    return;
  }


  const hearts = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💓",
    "💘"
  ];


  for (
    let i = 0;
    i < 18;
    i++
  ) {

    const heart =
      document.createElement(
        "span"
      );


    heart.className =
      "day14-floating-heart";


    heart.textContent =
      hearts[
        Math.floor(
          Math.random() *
          hearts.length
        )
      ];


    heart.style.left =
      `${Math.random() * 100}%`;


    heart.style.animationDelay =
      `${Math.random() * 1.5}s`;


    heart.style.animationDuration =
      `${2 + Math.random() * 2}s`;


    container.appendChild(
      heart
    );


    setTimeout(
      () => {

        heart.remove();

      },
      5000
    );

  }

}


// =========================================================
// MENSAJE DE DÍA BLOQUEADO
// =========================================================

function showLockedMessage(
  day
) {

  const modal =
    document.getElementById(
      "modal"
    );


  const modalDay =
    document.getElementById(
      "modal-day"
    );


  const modalIcon =
    document.getElementById(
      "modal-icon"
    );


  const modalTitle =
    document.getElementById(
      "modal-title"
    );


  const modalBody =
    document.getElementById(
      "modal-body"
    );


  if (!modal) {
    return;
  }


  modalDay.textContent =
    "🔒 Sorpresa bloqueada";


  modalIcon.textContent =
    "🔐";


  modalTitle.textContent =
    `El Día ${day} todavía no está disponible`;


  modalBody.innerHTML = `

    <div class="locked-message">

      <div class="locked-icon">
        🔒
      </div>

      <p>
        Esta sorpresa todavía está esperando
        su momento.
      </p>

      <p>
        Vuelve cuando llegue su día
        y descubre lo que preparé para ti. ❤️
      </p>

      <div class="locked-day">
        Día ${day}
      </div>

    </div>

  `;


  modal.classList.add(
    "open"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}


// =========================================================
// CERRAR MODAL
// =========================================================

function closeModal() {

  const modal =
    document.getElementById(
      "modal"
    );


  if (!modal) {
    return;
  }


  modal.classList.remove(
    "open"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


// =========================================================
// EVENTOS DEL MODAL
// =========================================================

function setupModalEvents() {

  const modal =
    document.getElementById(
      "modal"
    );


  if (!modal) {
    return;
  }


  const closeButtons =
    modal.querySelectorAll(
      ".modal-close, [data-close-modal]"
    );


  closeButtons.forEach(
    button => {

      button.addEventListener(
        "click",
        closeModal
      );

    }
  );


  modal.addEventListener(
    "click",
    event => {

      if (
        event.target === modal
      ) {

        closeModal();

      }

    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeModal();

      }

    }
  );

}


// =========================================================
// MÚSICA
// =========================================================

let musicPlayer = null;

let musicPlaying = false;


// =========================================================
// CONFIGURAR MÚSICA
// =========================================================

function setupMusic() {

  const audio =
    document.getElementById(
      "background-music"
    );


  if (!audio) {
    return;
  }


  musicPlayer =
    audio;


  const musicButton =
    document.getElementById(
      "music-button"
    );


  if (
    musicButton
  ) {

    musicButton.addEventListener(
      "click",
      toggleMusic
    );

  }

}


// =========================================================
// REPRODUCIR / PAUSAR MÚSICA
// =========================================================

function toggleMusic() {

  if (!musicPlayer) {
    return;
  }


  if (
    musicPlayer.paused
  ) {

    musicPlayer
      .play()
      .then(
        () => {

          musicPlaying =
            true;

          updateMusicButton();

        }
      )
      .catch(
        error => {

          console.warn(
            "No se pudo reproducir la música:",
            error
          );

        }
      );

  }
  else {

    musicPlayer.pause();

    musicPlaying =
      false;

    updateMusicButton();

  }

}


// =========================================================
// ACTUALIZAR BOTÓN DE MÚSICA
// =========================================================

function updateMusicButton() {

  const button =
    document.getElementById(
      "music-button"
    );


  if (!button) {
    return;
  }


  if (
    musicPlaying
  ) {

    button.textContent =
      "❚❚";

    button.setAttribute(
      "aria-label",
      "Pausar música"
    );

    button.classList.add(
      "playing"
    );

  }
  else {

    button.textContent =
      "♫";

    button.setAttribute(
      "aria-label",
      "Reproducir música"
    );

    button.classList.remove(
      "playing"
    );

  }

}


// =========================================================
// DETECTAR CAMBIO DE ESTADO DE AUDIO
// =========================================================

function setupAudioEvents() {

  if (!musicPlayer) {
    return;
  }


  musicPlayer.addEventListener(
    "play",
    () => {

      musicPlaying =
        true;

      updateMusicButton();

    }
  );


  musicPlayer.addEventListener(
    "pause",
    () => {

      musicPlaying =
        false;

      updateMusicButton();

    }
  );

}


// =========================================================
// ANIMACIÓN DE CORAZONES DEL FONDO
// =========================================================

function createBackgroundHearts() {

  const container =
    document.querySelector(
      ".hearts-container"
    );


  if (!container) {
    return;
  }


  const heartSymbols = [
    "❤",
    "♡",
    "💕",
    "💗"
  ];


  for (
    let i = 0;
    i < 16;
    i++
  ) {

    const heart =
      document.createElement(
        "span"
      );


    heart.className =
      "background-heart";


    heart.textContent =
      heartSymbols[
        Math.floor(
          Math.random() *
          heartSymbols.length
        )
      ];


    heart.style.left =
      `${Math.random() * 100}%`;


    heart.style.animationDelay =
      `${Math.random() * 8}s`;


    heart.style.animationDuration =
      `${7 + Math.random() * 8}s`;


    heart.style.fontSize =
      `${12 + Math.random() * 20}px`;


    container.appendChild(
      heart
    );

  }

}


// =========================================================
// ACTUALIZAR TEXTO DEL DÍA ACTUAL
// =========================================================

function updateCurrentDayText() {

  const element =
    document.getElementById(
      "current-day"
    );


  if (!element) {
    return;
  }


  const currentDay =
    getCurrentDay();


  if (
    currentDay <= 0
  ) {

    element.textContent =
      "Nuestra historia comienza pronto...";

    return;

  }


  if (
    currentDay >= TOTAL_DAYS
  ) {

    element.textContent =
      "❤️ ¡Feliz aniversario! ❤️";

    return;

  }


  element.textContent =
    `Hoy estamos en el Día ${currentDay} de nuestra historia. ❤️`;

}


// =========================================================
// ANIMACIÓN AL HACER SCROLL
// =========================================================

function setupScrollAnimations() {

  const elements =
    document.querySelectorAll(
      ".animate-on-scroll"
    );


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element => {

        element.classList.add(
          "visible"
        );

      }
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.15
      }
    );


  elements.forEach(
    element => {

      observer.observe(
        element
      );

    }
  );

}


// =========================================================
// ACTUALIZAR TODO
// =========================================================

function updatePage() {

  updateCountdown();

  renderCalendar();

  updateCurrentDayText();

}


// =========================================================
// INICIALIZACIÓN
// =========================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updatePage();

    setupModalEvents();

    setupMusic();

    setupAudioEvents();

    createBackgroundHearts();

    setupScrollAnimations();


    setInterval(
      updateCountdown,
      1000
    );


    setInterval(
      () => {

        const previousDay =
          window.lastKnownDay;


        const currentDay =
          getCurrentDay();


        if (
          previousDay !==
          currentDay
        ) {

          updatePage();

        }


        window.lastKnownDay =
          currentDay;

      },
      10000
    );

  }
);


// =========================================================
// FUNCIONES GLOBALES
// =========================================================

window.openSurprise =
  openSurprise;

window.closeModal =
  closeModal;

window.changeCarousel =
  changeCarousel;

window.goToCarousel =
  goToCarousel;

window.changeTextCarousel =
  changeTextCarousel;

window.goToTextCarousel =
  goToTextCarousel;

window.changeDay14Step =
  changeDay14Step;

window.renderDay14Journey =
  renderDay14Journey;

window.revealDay14Secret =
  revealDay14Secret;

window.createDay14Hearts =
  createDay14Hearts;

window.toggleMusic =
  toggleMusic;
// =========================================================
// ESTILOS DEL DÍA 14
// =========================================================

function injectDay14Styles() {

  if (
    document.getElementById(
      "day14-dynamic-styles"
    )
  ) {
    return;
  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "day14-dynamic-styles";


  style.textContent = `

    /* ==============================================
       DÍA 14
       ============================================== */

    .day14-journey {
      width: 100%;
      max-width: 850px;
      margin: 35px auto 10px;
      padding: 10px;
      box-sizing: border-box;
    }


    .day14-progress {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 500px;
      margin: 0 auto 30px;
    }


    .day14-progress-dot {
      width: 16px;
      height: 16px;
      min-width: 16px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
      border: 2px solid rgba(255, 255, 255, 0.35);
      transition:
        transform 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
    }


    .day14-progress-dot.active {
      background: #ff5c8a;
      border-color: #ff8fb0;
      transform: scale(1.25);
      box-shadow:
        0 0 15px rgba(255, 92, 138, 0.55);
    }


    .day14-progress-line {
      flex: 1;
      height: 3px;
      background: rgba(255, 255, 255, 0.18);
      max-width: 150px;
      transition: background 0.3s ease;
    }


    .day14-stage {
      background:
        linear-gradient(
          145deg,
          rgba(255, 255, 255, 0.10),
          rgba(255, 255, 255, 0.04)
        );

      border:
        1px solid rgba(255, 255, 255, 0.15);

      border-radius: 25px;

      padding: 30px;

      box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.20);

      backdrop-filter:
        blur(10px);

      overflow: hidden;
    }


    .day14-stage-enter {
      animation:
        day14StageEnter
        0.55s ease both;
    }


    @keyframes day14StageEnter {

      from {
        opacity: 0;
        transform:
          translateX(25px)
          scale(0.98);
      }

      to {
        opacity: 1;
        transform:
          translateX(0)
          scale(1);
      }

    }


    .day14-stage-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 25px;
    }


    .day14-stage-icon {
      width: 70px;
      height: 70px;
      min-width: 70px;
      border-radius: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 34px;

      background:
        linear-gradient(
          135deg,
          rgba(255, 105, 150, 0.25),
          rgba(255, 255, 255, 0.10)
        );

      box-shadow:
        0 10px 25px
        rgba(0, 0, 0, 0.15);
    }


    .day14-step-number {
      display: block;

      font-size: 11px;
      letter-spacing: 2px;
      font-weight: 700;

      opacity: 0.65;

      margin-bottom: 5px;
    }


    .day14-stage-header h3 {
      margin: 0 0 5px;

      font-size: 28px;
      line-height: 1.15;
    }


    .day14-stage-header p {
      margin: 0;
      opacity: 0.72;
      font-size: 14px;
    }


    .day14-stage-content {
      font-size: 16px;
      line-height: 1.75;
    }


    .day14-stage-content > p {
      margin:
        0 0 20px;
    }


    .day14-memory,
    .day14-adventure {
      display: flex;
      align-items: flex-start;
      gap: 18px;

      margin: 16px 0;
      padding: 18px;

      border-radius: 18px;

      background:
        rgba(255, 255, 255, 0.07);

      border:
        1px solid rgba(255, 255, 255, 0.10);

      transition:
        transform 0.3s ease,
        background 0.3s ease;
    }


    .day14-memory:hover,
    .day14-adventure:hover {
      transform:
        translateY(-3px);

      background:
        rgba(255, 255, 255, 0.11);
    }


    .day14-memory-icon,
    .day14-adventure-icon {
      width: 48px;
      height: 48px;
      min-width: 48px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 14px;

      font-size: 25px;

      background:
        rgba(255, 92, 138, 0.13);
    }


    .day14-memory h4,
    .day14-adventure h4 {
      margin:
        0 0 5px;

      font-size: 17px;
    }


    .day14-memory p,
    .day14-adventure p {
      margin:
        3px 0;

      font-size: 14px;
      line-height: 1.6;
      opacity: 0.82;
    }


    .day14-highlight {
      display: flex;
      align-items: center;
      gap: 15px;

      margin-top: 25px;
      padding: 20px;

      border-radius: 18px;

      background:
        linear-gradient(
          135deg,
          rgba(255, 92, 138, 0.15),
          rgba(255, 190, 210, 0.06)
        );

      border:
        1px solid
        rgba(255, 130, 160, 0.22);
    }


    .day14-highlight span {
      font-size: 28px;
    }


    .day14-highlight p {
      margin: 0;
      font-weight: 600;
    }


    .day14-big-message {
      text-align: center;

      padding:
        25px 15px;

      margin:
        20px 0;

      border-radius: 22px;

      background:
        rgba(255, 255, 255, 0.06);
    }


    .day14-big-heart {
      display: block;

      font-size: 52px;

      animation:
        day14Heartbeat
        1.6s ease-in-out
        infinite;
    }


    @keyframes day14Heartbeat {

      0%,
      100% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.13);
      }

    }


    .day14-big-message p {
      margin:
        10px 0 0;

      font-size: 21px;
      font-weight: 700;
    }


    .day14-future-grid {
      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

      gap: 12px;

      margin:
        25px 0;
    }


    .day14-future-grid > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 8px;

      min-height: 100px;

      padding: 12px;

      border-radius: 18px;

      background:
        rgba(255, 255, 255, 0.07);

      font-size: 30px;

      text-align: center;
    }


    .day14-future-grid span {
      font-size: 13px;
      font-weight: 600;
      opacity: 0.8;
    }


    .day14-final-question {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 12px;

      text-align: center;

      margin-top: 25px;
      padding: 25px;

      border-radius: 20px;

      background:
        linear-gradient(
          135deg,
          rgba(255, 105, 150, 0.14),
          rgba(255, 255, 255, 0.05)
        );
    }


    .day14-final-question span {
      font-size: 38px;
    }


    .day14-final-question strong {
      font-size: 17px;
      line-height: 1.5;
    }


    .day14-navigation {
      display: flex;
      justify-content: space-between;
      gap: 15px;

      margin-top: 22px;
    }


    .day14-nav-button {
      border: none;

      border-radius: 13px;

      padding:
        13px 20px;

      font-size: 14px;
      font-weight: 700;

      cursor: pointer;

      transition:
        transform 0.2s ease,
        opacity 0.2s ease,
        box-shadow 0.2s ease;
    }


    .day14-nav-button:hover {
      transform:
        translateY(-2px);
    }


    .day14-nav-button:disabled {
      opacity: 0.35;
      cursor: not-allowed;
      transform: none;
    }


    .day14-nav-button.primary {
      color: white;

      background:
        linear-gradient(
          135deg,
          #ff5c8a,
          #ff86a8
        );

      box-shadow:
        0 8px 20px
        rgba(255, 92, 138, 0.25);
    }


    .day14-nav-button.secondary {
      color: inherit;

      background:
        rgba(255, 255, 255, 0.08);

      border:
        1px solid
        rgba(255, 255, 255, 0.12);
    }


    .day14-secret-container {
      margin-top: 18px;
    }


    .day14-secret-button {
      display: block;

      width: 100%;

      padding:
        15px 20px;

      border-radius: 15px;

      border:
        1px dashed
        rgba(255, 130, 160, 0.45);

      background:
        rgba(255, 92, 138, 0.08);

      color: inherit;

      font-weight: 700;
      font-size: 14px;

      cursor: pointer;

      transition:
        background 0.3s ease,
        transform 0.3s ease;
    }


    .day14-secret-button:hover {
      background:
        rgba(255, 92, 138, 0.15);

      transform:
        translateY(-2px);
    }


    .day14-secret-message {
      position: relative;

      overflow: hidden;

      text-align: center;

      padding: 30px 22px;

      border-radius: 24px;

      background:
        linear-gradient(
          135deg,
          rgba(255, 92, 138, 0.16),
          rgba(255, 255, 255, 0.06)
        );

      border:
        1px solid
        rgba(255, 130, 160, 0.25);

      animation:
        day14SecretEnter
        0.6s ease both;
    }


    @keyframes day14SecretEnter {

      from {
        opacity: 0;
        transform:
          translateY(20px);
      }

      to {
        opacity: 1;
        transform:
          translateY(0);
      }

    }


    .day14-secret-hearts {
      font-size: 24px;
      letter-spacing: 5px;

      margin-bottom: 18px;

      animation:
        day14SecretPulse
        1.8s ease-in-out
        infinite;
    }


    @keyframes day14SecretPulse {

      0%,
      100% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.08);
      }

    }


    .day14-secret-message h3 {
      margin:
        0 auto 18px;

      max-width: 600px;

      font-size: 21px;
      line-height: 1.4;
    }


    .day14-secret-message p {
      max-width: 650px;

      margin:
        12px auto;

      line-height: 1.7;

      opacity: 0.9;
    }


    .day14-secret-final {
      margin-top: 22px;
      padding: 17px;

      border-radius: 15px;

      background:
        rgba(255, 255, 255, 0.07);

      line-height: 1.5;
    }


    .day14-heart-button {
      margin-top: 22px;

      border: none;

      border-radius: 999px;

      padding:
        12px 24px;

      background:
        linear-gradient(
          135deg,
          #ff5c8a,
          #ff7ca3
        );

      color: white;

      font-weight: 800;

      cursor: pointer;

      box-shadow:
        0 8px 25px
        rgba(255, 92, 138, 0.25);

      transition:
        transform 0.2s ease;
    }


    .day14-heart-button:hover {
      transform:
        scale(1.05);
    }


    .day14-floating-hearts {
      position: absolute;

      inset: 0;

      pointer-events: none;

      overflow: hidden;
    }


    .day14-floating-heart {
      position: absolute;

      bottom: 15px;

      font-size: 20px;

      animation:
        day14FloatHeart
        3s ease-out
        forwards;
    }


    @keyframes day14FloatHeart {

      0% {
        opacity: 0;
        transform:
          translateY(0)
          scale(0.5);
      }

      15% {
        opacity: 1;
      }

      100% {
        opacity: 0;
        transform:
          translateY(-300px)
          rotate(20deg)
          scale(1.25);
      }

    }


    /* ==============================================
       CARRUSEL
       ============================================== */

    .carousel {
      position: relative;

      display: flex;
      align-items: center;

      width: 100%;

      margin:
        25px auto;

      gap: 10px;
    }


    .carousel-content {
      flex: 1;
      min-width: 0;
    }


    .carousel-slide {
      text-align: center;
    }


    .carousel-image {
      display: block;

      width: 100%;
      max-width: 700px;

      max-height: 65vh;

      margin: 0 auto;

      object-fit: contain;

      border-radius: 15px;
    }


    .carousel-caption {
      margin-top: 15px;

      padding: 12px;

      line-height: 1.6;
    }


    .carousel-button,
    .text-carousel-arrow {
      width: 42px;
      height: 42px;

      min-width: 42px;

      border: none;

      border-radius: 50%;

      background:
        rgba(255, 255, 255, 0.10);

      color: inherit;

      cursor: pointer;

      font-size: 20px;

      transition:
        background 0.2s ease,
        transform 0.2s ease;
    }


    .carousel-button:hover,
    .text-carousel-arrow:hover {
      background:
        rgba(255, 255, 255, 0.18);

      transform:
        scale(1.05);
    }


    .carousel-dots,
    .text-carousel-dots {
      display: flex;

      justify-content: center;

      flex-wrap: wrap;

      gap: 7px;

      margin-top: 15px;
    }


    .carousel-dot {
      width: 8px;
      height: 8px;

      padding: 0;

      border: none;

      border-radius: 50%;

      background:
        rgba(255, 255, 255, 0.30);

      cursor: pointer;

      transition:
        transform 0.2s ease,
        background 0.2s ease;
    }


    .carousel-dot.active {
      transform:
        scale(1.45);

      background:
        #ff6b94;
    }


    /* ==============================================
       CARRUSEL DE TEXTO
       ============================================== */

    .text-carousel {
      display: flex;
      align-items: center;

      gap: 12px;

      margin-top: 20px;
    }


    .text-carousel-content {
      flex: 1;
      min-width: 0;
    }


    .text-carousel-card {
      padding:
        25px;

      border-radius: 20px;

      background:
        rgba(255, 255, 255, 0.06);

      border:
        1px solid
        rgba(255, 255, 255, 0.10);

      animation:
        day14StageEnter
        0.4s ease both;
    }


    .text-carousel-card h3 {
      margin:
        0 0 15px;

      font-size: 20px;

      text-align: center;
    }


    .text-carousel-message {
      line-height: 1.75;
    }


    /* ==============================================
       MENSAJE BLOQUEADO
       ============================================== */

    .locked-message {
      text-align: center;

      padding:
        20px;
    }


    .locked-icon {
      font-size: 55px;

      margin-bottom: 15px;

      animation:
        day14Heartbeat
        1.8s ease-in-out
        infinite;
    }


    .locked-message p {
      line-height: 1.7;
    }


    .locked-day {
      display: inline-block;

      margin-top: 15px;

      padding:
        8px 16px;

      border-radius: 999px;

      background:
        rgba(255, 255, 255, 0.08);

      font-weight: 700;
    }


    /* ==============================================
       RESPONSIVE
       ============================================== */

    @media (max-width: 700px) {

      .day14-journey {
        padding:
          5px;
      }


      .day14-stage {
        padding:
          20px 15px;

        border-radius:
          20px;
      }


      .day14-stage-header {
        gap: 13px;
      }


      .day14-stage-icon {
        width: 55px;
        height: 55px;
        min-width: 55px;

        border-radius: 16px;

        font-size: 27px;
      }


      .day14-stage-header h3 {
        font-size: 22px;
      }


      .day14-stage-header p {
        font-size: 12px;
      }


      .day14-memory,
      .day14-adventure {
        gap: 12px;

        padding:
          14px;
      }


      .day14-memory-icon,
      .day14-adventure-icon {
        width: 40px;
        height: 40px;
        min-width: 40px;

        font-size: 21px;
      }


      .day14-future-grid {
        grid-template-columns:
          repeat(2, 1fr);
      }


      .day14-navigation {
        gap: 10px;
      }


      .day14-nav-button {
        flex: 1;

        padding:
          12px 10px;

        font-size: 12px;
      }


      .carousel {
        gap: 5px;
      }


      .carousel-button,
      .text-carousel-arrow {
        width: 34px;
        height: 34px;
        min-width: 34px;

        font-size: 16px;
      }


      .text-carousel-card {
        padding:
          18px 14px;
      }

    }


    @media (max-width: 430px) {

      .day14-progress-line {
        max-width: 70px;
      }


      .day14-stage-content {
        font-size: 14px;
      }


      .day14-memory p,
      .day14-adventure p {
        font-size: 13px;
      }


      .day14-secret-message {
        padding:
          25px 15px;
      }


      .day14-secret-message h3 {
        font-size: 18px;
      }

    }

  `;


  document.head.appendChild(
    style
  );

}


// =========================================================
// INYECTAR ESTILOS AL CARGAR
// =========================================================

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    injectDay14Styles
  );

}
else {

  injectDay14Styles();

}


// =========================================================
// VARIABLES INICIALES
// =========================================================

window.day14CurrentStep = 0;

window.currentTextSlides = [];

window.currentTextCarouselIndex = 0;

window.lastKnownDay =
  getCurrentDay();


// =========================================================
// FIN DEL SCRIPT
// =========================================================
