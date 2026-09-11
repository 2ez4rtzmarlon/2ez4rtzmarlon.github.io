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

      <br><br>

      No necesito una fecha especial para recordarte cuánto
      significas para mí.

      <br><br>

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

      <br><br>

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
      Cierra y usa el botón ♫ de abajo en la esquina derecha
      y ahora cada día puedes escucharla.
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

      <br><br>

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

      <br><br>

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
          Incluso cuando no estoy teniendo un buen día,
          siempre encuentras alguna forma de sacarme una sonrisa.

          <br><br>

          Gracias por hacerme sentir especial. ❤️
        `
      },

      {
        title: "Gracias por escucharme",

        text: `
          Gracias por escuchar mis historias del fútbol, de lo que me gusta,
          mis problemas, mis sueños y hasta mis cosas sin sentido o palabras inventadas.

          <br><br>

          Saber que puedo hablar contigo y sentirme escuchado
          significa muchísimo para mí. 💕
        `
      },

      {
        title: "Gracias por confiar en mí",

        text: `
          Gracias por confiar en mí,
          por contarme tus cosas y por dejarme conocer
          cada vez más de ti.

          <br><br>

          Quiero seguir siendo esa persona
          en la que puedas confiar. 🤍
        `
      },

      {
        title: "Gracias por dejarme formar parte de tu vida",

        text: `
          Gracias por dejarme compartir contigo
          tantos momentos, aventuras, risas y recuerdos.

          <br><br>

          Me hace feliz saber que nuestras vidas
          se encontraron y que ahora tenemos
          nuestra propia historia. 🥹❤️
        `
      },

      {
        title: "Lo que nunca te digo suficiente",

        text: `
          Quizá no te lo diga todos los días,
          pero hay muchas cosas que siento por ti
          que nunca quiero que olvides.

          <br><br>

          Gracias por estar,
          gracias por quererme,
          gracias por hacerme parte de tu mundo
          y gracias por ser tú.

          <br><br>

          <strong>
            Te amo mucho con montón. 🌻❤️
          </strong>
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

      <div class="day10-polaroid">

        <div class="day10-photo-wrapper">

          <img
            src="images/dia10.jpeg"
            alt="Un recuerdo nuestro"
            class="day10-photo"
          >

        </div>

        <div class="day10-photo-caption">
          Un momento que parecía sencillo...
        </div>

      </div>


      <div class="day10-message">

        <p>
          Si pudiera regresar al momento en que comenzó
          nuestra historia, volvería a elegir conocerte.
        </p>

        <p>
          Volvería a elegir cada conversación,
          cada detalle y cada momento que poco a poco
          nos fue acercando.
        </p>

        <p>
          Quizá en ese momento no sabía todo lo que
          vendría después, pero ahora sé que conocerte
          fue una de las cosas más bonitas que me pudo pasar.
        </p>

        <p class="day10-final-message">
          Y sí… volvería a elegirte. ❤️
        </p>

      </div>


      <div class="day10-sunflower-message">
        🌻 Algunas historias empiezan sin saber
        lo importantes que llegarán a ser.
      </div>

    `
  },


  // =======================================================
  // DÍA 11
  // =======================================================

  {
    icon: "🔎",

    title: "Encuentra nuestros nombres",

    wordSearch: true,

    words: [
      "MARLON",
      "ANDREA",
      "ALMA",
      "MARALU",
      "MUU",
      "SULLY",
      "LUXANDER",
      "LOKI"
    ]
  },


 // =======================================================
// DÍA 12
// =======================================================

{
  icon: "✈️",

  title: "Pasaporte para nuestro futuro",

  passport: true,

  destinations: [

    {
      number: "01",
      icon: "✈️",
      title: "Viajar juntos",
      stamp: "DESTINO: AVENTURA",

      text: `
        Quiero conocer nuevos lugares contigo,
        perdernos un poquito, descubrir algo inesperado
        y terminar diciendo:

        <br><br>

        <strong>
          "Valió la pena venir."
        </strong>
      `
    },


    {
      number: "02",
      icon: "🗺️",
      title: "Conocer lugares nuevos",
      stamp: "NUEVO DESTINO ❤️",

      text: `
        Quiero que algún día podamos mirar un mapa
        y decir:

        <br><br>

        <strong>
          "Aquí todavía no hemos estado."
        </strong>

        <br><br>

        Y convertirlo en nuestro próximo plan.
      `
    },


    {
      number: "03",
      icon: "❤️",
      title: "Celebrar muchos aniversarios",
      stamp: "AÑO 01 ❤️",

      text: `
        No quiero que este sea nuestro único aniversario especial.

        <br><br>

        Quiero que existan muchos más números,
        muchas más velas, muchas más fotos
        y muchas más razones para decir:

        <br><br>

        <strong>
          "Lo logramos otro año más."
        </strong>
      `
    },


    {
      number: "04",
      icon: "😂",
      title: "Reírnos hasta que nos duela el estómago",
      stamp: "REÍR SIN LÍMITES",

      text: `
        Porque seguramente seguiremos haciendo
        cosas que nadie más entendería.

        <br><br>

        Y probablemente seguiremos riéndonos
        de cosas que solo nosotros encontramos graciosas. 😂

        <br><br>

        Y sinceramente...

        <strong>
          no quiero que eso cambie.
        </strong>
      `
    },


    {
      number: "05",
      icon: "📸",
      title: "Tener muchas más fotos juntos",
      stamp: "RECUERDO GUARDADO",

      text: `
        Tenemos fotografías de muchos momentos.

        <br><br>

        Pero quiero que algún día tengamos tantas
        que sea difícil escoger cuáles son nuestras favoritas.

        <br><br>

        Quiero llenar una vida contigo
        de recuerdos que podamos volver a mirar.
      `
    },


    {
      number: "06",
      icon: "🥂",
      title: "Crear nuestras propias tradiciones",
      stamp: "TRADICIÓN NUEVA",

      text: `
        Quiero que tengamos cosas que solamente sean nuestras.

        <br><br>

        Planes, lugares, fechas, bromas, costumbres
        y pequeños rituales que con el tiempo podamos decir:

        <br><br>

        <strong>
          "Esto empezó con nosotros."
        </strong>
      `
    },


    {
      number: "07",
      icon: "🌱",
      title: "Apoyarnos en nuestros sueños",
      stamp: "MISIÓN: APOYARNOS",

      text: `
        Quiero estar cuando tengas un sueño nuevo.

        <br><br>

        Quiero verte intentarlo, apoyarte cuando sea difícil
        y celebrar contigo cuando finalmente lo consigas.

        <br><br>

        Y espero que tú también quieras estar
        en mis sueños. ❤️
      `
    },


    {
      number: "08",
      icon: "🌅",
      title: "Ver amaneceres juntos",
      stamp: "AMANECER COMPARTIDO",

      text: `
        Quiero algún día estar contigo viendo amanecer
        y pensar que no necesitamos hacer nada extraordinario.

        <br><br>

        <strong>
          Que estar juntos ya sea suficiente.
        </strong>
      `
    },


    {
      number: "09",
      icon: "🎉",
      title: "Celebrar nuestros logros",
      stamp: "OBJETIVO CUMPLIDO ❤️",

      text: `
        Quiero estar para aplaudir
        tus pequeñas victorias y tus grandes logros.

        <br><br>

        Porque voy a querer verte crecer,
        avanzar y cumplir todo aquello
        que te propongas.
      `
    },


    {
      number: "10",
      icon: "🤝",
      title: "Superar los días difíciles",
      stamp: "EQUIPO MARLON & ANDREA",

      text: `
        No todo será perfecto.

        <br><br>

        Habrá días complicados, cansancio,
        preocupaciones y momentos difíciles.

        <br><br>

        Pero quiero que incluso en esos días
        podamos seguir diciendo:

        <br><br>

        <strong>
          "Estamos juntos en esto."
        </strong>
      `
    },


    {
      number: "11",
      icon: "🥰",
      title: "Seguir conociéndonos",
      stamp: "NUEVO RECUERDO",

      text: `
        Aunque llevemos tiempo juntos,
        todavía quiero descubrir nuevas cosas de ti.

        <br><br>

        Nuevas historias, nuevas costumbres,
        nuevas formas de hacerte reír
        y todas esas pequeñas cosas
        que hacen que sigas sorprendiéndome.
      `
    },


    {
      number: "12",
      icon: "❤️",
      title: "Seguir eligiéndonos",
      stamp: "DESTINO: NOSOTROS",

      final: true,

      text: `
        De todas las cosas que quiero vivir contigo,
        hay una que quiero por encima de todas.

        <br><br>

        <strong>
          Seguir eligiéndonos.
        </strong>

        <br><br>

        Elegirte cuando todo vaya bien.
        Elegirte cuando las cosas sean difíciles.
        Elegirte en los días normales.
        Elegirte en los días especiales.

        <br><br>

        Porque después de todo lo que hemos vivido,
        hay algo que tengo muy claro:

        <br><br>

        <strong>
          volvería a elegirte.
        </strong>

        <br><br>

        Hoy.
        <br>
        Mañana.
        <br>
        Y en todos los capítulos
        que todavía nos falten escribir. ❤️
      `
    }

  ]
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
    `
  },


  // =======================================================
  // DÍA 14
  // =======================================================

  {
    icon: "💗",
    title: "Lo que me haces sentir",

    text: `
      Escribe aquí, con tus propias palabras,
      cómo cambia tu día cuando estás con ella.

      <br><br>

      Hazlo personal:
      habla de algo que solo ustedes dos entienden.
    `
  },


  // =======================================================
  // DÍA 15
  // =======================================================

  {
    icon: "🎶",
    title: "Una playlist para nosotros",

    text: `
      Puedes reemplazar este texto por 5 canciones
      que representen diferentes momentos de nuestra relación.
    `
  },


  // =======================================================
  // DÍA 16
  // =======================================================

  {
    icon: "📝",
    title: "Una promesa",

    text: `
      No prometo que todos los días serán perfectos.

      <br><br>

      Sí quiero prometerte que seguiré valorando nuestra historia,
      escuchándote y cuidando cada momento que construyamos juntos.
    `
  },


  // =======================================================
  // DÍA 17
  // =======================================================

  {
    icon: "🌟",
    title: "Lo que quiero que nunca olvides",

    text: `
      <div class="quote">

        Nunca olvides que eres importante para mí.

        <br><br>

        Incluso en los días en que no pueda estar cerca,
        quiero que recuerdes que tienes un lugar enorme
        en mi corazón.

      </div>
    `
  },


  // =======================================================
  // DÍA 18
  // =======================================================

  {
    icon: "📸",
    title: "Un recuerdo que quiero repetir",

    text: `
      Hay momentos que no solamente quiero recordar.

      <br><br>

      Quiero volver a vivirlos contigo.
    `,

    image: "images/foto03.jpg"
  },


  // =======================================================
  // DÍA 19
  // =======================================================

  {
    icon: "❤️",
    title: "Ya casi llega nuestro día",

    text: `
      Faltan muy pocos días.

      <br><br>

      Gracias por haber llegado hasta aquí conmigo.

      <br><br>

      Mañana habrá otro pequeño detalle para ti. ❤️
    `
  },


  // =======================================================
  // DÍA 20
  // =======================================================

  {
    icon: "💌",
    title: "La víspera",

    text: `
      Mañana es nuestro día.

      <br><br>

      Pero quería que supieras algo:

      <br><br>

      Para mí, nuestra historia no se celebra solamente
      en una fecha.

      <br><br>

      Se celebra en cada conversación,
      cada abrazo, cada risa y cada momento
      en que seguimos eligiéndonos.
    `
  },


  // =======================================================
  // DÍA 21
  // =======================================================

  {
    icon: "🥹",
    title: "Mañana...",

    text: `
      Mañana llega el día 22.

      <br><br>

      Guarda este momento,
      porque todo lo que hemos preparado hasta aquí
      nos lleva a nuestra sorpresa final.

      <br><br>

      ❤️
    `
  },


  // =======================================================
  // DÍA 22
  // =======================================================

  {
    icon: "💖",
    title: "Feliz aniversario, mi amor",

    text: `
      <img
        src="images/foto-final.jpg"
        alt="Nuestro recuerdo"
        class="final-photo"
      >

      <div class="quote">

        Hoy, 22 de septiembre,
        celebro nuestra historia.

        <br><br>

        Gracias por cada momento,
        por cada sonrisa y por formar parte de mi vida.

        <br><br>

        Si pudiera volver al principio,
        volvería a elegirte.

        <br><br>

        <strong>
          Feliz aniversario.
          Te amo. ❤️
        </strong>

      </div>
    `
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

  const formatter = new Intl.DateTimeFormat(
    "en-CA",
    {
      timeZone: ECUADOR_TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }
  );

  return formatter.format(
    new Date()
  );

}


// =========================================================
// CONVERTIR FECHA YYYY-MM-DD A UTC
// =========================================================

function dateToUTC(
  dateString
) {

  const [y, m, d] =
    dateString
      .split("-")
      .map(Number);

  return Date.UTC(
    y,
    m - 1,
    d
  );

}


// =========================================================
// DÍA ACTUAL DEL CALENDARIO
// =========================================================

function getCurrentDay() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const previewDay =
    Number(
      params.get("preview")
    );


  if (
    Number.isInteger(previewDay) &&
    previewDay >= 1 &&
    previewDay <= TOTAL_DAYS
  ) {

    return previewDay;

  }


  const today =
    getEcuadorDate();


  const difference =
    Math.floor(

      (
        dateToUTC(today) -
        dateToUTC(START_DATE)

      ) / 86400000

    );


  return Math.min(

    Math.max(
      difference + 1,
      0
    ),

    TOTAL_DAYS

  );

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

  const now =
    new Date();

  const anniversary =
    getAnniversaryDate();

  const diff =
    anniversary.getTime() -
    now.getTime();


  if (
    diff <= 0
  ) {

    document.getElementById(
      "countdown-label"
    ).textContent =
      "❤️ Hoy es nuestro día ❤️";


    document.getElementById(
      "days"
    ).textContent =
      "00";

    document.getElementById(
      "hours"
    ).textContent =
      "00";

    document.getElementById(
      "minutes"
    ).textContent =
      "00";

    document.getElementById(
      "seconds"
    ).textContent =
      "00";


    return;

  }


  const days =
    Math.floor(
      diff / 86400000
    );


  const hours =
    Math.floor(
      (diff % 86400000) /
      3600000
    );


  const minutes =
    Math.floor(
      (diff % 3600000) /
      60000
    );


  const seconds =
    Math.floor(
      (diff % 60000) /
      1000
    );


  document.getElementById(
    "days"
  ).textContent =
    String(days).padStart(
      2,
      "0"
    );


  document.getElementById(
    "hours"
  ).textContent =
    String(hours).padStart(
      2,
      "0"
    );


  document.getElementById(
    "minutes"
  ).textContent =
    String(minutes).padStart(
      2,
      "0"
    );


  document.getElementById(
    "seconds"
  ).textContent =
    String(seconds).padStart(
      2,
      "0"
    );

}


// =========================================================
// RENDERIZAR CALENDARIO
// =========================================================

function renderCalendar() {

  const calendar =
    document.getElementById(
      "calendar"
    );


  const currentDay =
    getCurrentDay();


  if (
    currentDay === 0
  ) {

    document.getElementById(
      "status-text"
    ).textContent =
      "La cuenta regresiva comienza el 1 de septiembre ❤️";

  }

  else if (
    currentDay >= TOTAL_DAYS
  ) {

    document.getElementById(
      "status-text"
    ).textContent =
      "Hoy es nuestro día. ❤️";

  }

  else {

    document.getElementById(
      "status-text"
    ).textContent =
      `Hoy está disponible el detalle del día ${currentDay}. Los demás se desbloquearán automáticamente.`;

  }


  calendar.innerHTML =
    "";


  for (
    let day = 1;
    day <= TOTAL_DAYS;
    day++
  ) {

    const unlocked =
      day <= currentDay;


    const isToday =
      day === currentDay;


    const card =
      document.createElement(
        "button"
      );


    card.className =
      `day-card ${
        unlocked
          ? "unlocked"
          : "locked"
      } ${
        isToday
          ? "today"
          : ""
      }`;


    const date =
      new Date(

        dateToUTC(
          START_DATE
        ) +

        (day - 1) *
        86400000

      );


    const dateText =
      date.toLocaleDateString(
        "es-EC",
        {
          day: "numeric",
          month: "short",
          timeZone: "UTC"
        }
      );


    if (
      unlocked
    ) {

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


      card.onclick =
        () =>
          openSurprise(day);

    }

    else {

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


      card.onclick =
        () =>
          showLockedMessage(day);

    }


    calendar.appendChild(
      card
    );

  }

}


// =========================================================
// NORMALIZAR SLIDES
// =========================================================

function normalizeSlides(
  surprise
) {

  if (
    Array.isArray(
      surprise.slides
    ) &&
    surprise.slides.length > 0
  ) {

    return surprise.slides.map(
      slide => ({

        image:
          slide.image || null,

        title:
          slide.title || "",

        text:
          slide.text || ""

      })
    );

  }


  if (
    Array.isArray(
      surprise.images
    ) &&
    surprise.images.length > 0
  ) {

    return surprise.images.map(
      image => ({

        image:
          image,

        title:
          "",

        text:
          ""

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

        title:
          "",

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

  const currentDay =
    getCurrentDay();


  if (
    day > currentDay
  ) {

    showLockedMessage(
      day
    );

    return;

  }


  const surprise =
    surprises[
      day - 1
    ];


  document.getElementById(
    "modal-day"
  ).textContent =
    `Día ${String(day).padStart(2, "0")} · ${getDayLabel(day)}`;


  document.getElementById(
    "modal-title"
  ).textContent =
    surprise.title;


  document.getElementById(
    "modal-icon"
  ).textContent =
    surprise.icon;


  let body =
    "";


  const slides =
    normalizeSlides(
      surprise
    );


  window.currentCarouselSlides =
    slides;


  window.currentCarouselIndex =
    0;

  // =====================================================
  // PASAPORTE INTERACTIVO - DÍA 12
  // =====================================================

  if (
    surprise.passport
  ) {

    body += `

      <div
        id="passport-container"
        class="passport-container"
      >

        <!-- =========================================
             PORTADA
             ========================================= -->

        <div
          id="passport-cover"
          class="passport-cover"
        >

          <div class="passport-sunflowers">
            🌻
          </div>

          <div class="passport-small-title">
            PASAPORTE
          </div>

          <div class="passport-main-title">
            PARA NUESTRO
            <br>
            FUTURO
          </div>

          <div class="passport-heart">
            ❤️
          </div>

          <div class="passport-names">
            MARLON
            <span>♥</span>
            ANDREA
          </div>

          <div class="passport-destination">
            DESTINO:
            <strong>NOSOTROS</strong>
          </div>

          <div class="passport-number">
            Nº 22 · 2026
          </div>

          <button
            class="passport-open-button"
            onclick="openPassport()"
          >
            ✈️ ABRIR PASAPORTE
          </button>

        </div>


        <!-- =========================================
             CONTENIDO INTERIOR
             ========================================= -->

        <div
          id="passport-inside"
          class="passport-inside"
          style="display:none;"
        >

          <div class="passport-page-header">

            <span>
              PASAPORTE PARA NUESTRO FUTURO
            </span>

            <span id="passport-page-counter">
              1 / 12
            </span>

          </div>


          <div class="passport-page">

            <div
              id="passport-page-intro"
              class="passport-page-intro"
            >

              <div class="passport-intro-icon">
                🌍
              </div>

              <h3>
                Nuestro próximo destino
              </h3>

              <p>
                Ya tenemos muchos recuerdos que guardar,
                muchas historias que contar y momentos
                que nunca quiero olvidar.
              </p>

              <p>
                Pero todavía hay algo que me gusta más:
              </p>

              <strong>
                todo lo que todavía nos falta vivir. ❤️
              </strong>

              <p>
                Este pasaporte guarda sueños,
                aventuras y pequeños momentos
                que quiero compartir contigo.
              </p>

            </div>


            <div
              id="passport-destination-content"
              class="passport-destination-content"
            >
            </div>


            <div
              id="passport-stamp"
              class="passport-stamp"
            >
            </div>

          </div>


          <!-- =====================================
               CONTROLES
               ===================================== -->

          <div class="passport-controls">

            <button
              id="passport-prev"
              class="passport-nav-button"
              onclick="changePassportPage(-1)"
            >
              ← Anterior
            </button>


            <button
              id="passport-next"
              class="passport-nav-button primary"
              onclick="changePassportPage(1)"
            >
              Siguiente →
            </button>

          </div>


          <div
            id="passport-final-button"
            class="passport-final-button"
            style="display:none;"
          >

            <button
              onclick="stampPassport()"
            >
              ❤️ ESTAMPAR NUESTRO PASAPORTE
            </button>

          </div>


          <!-- =====================================
               SELLO FINAL
               ===================================== -->

          <div
            id="passport-final-message"
            class="passport-final-message"
            style="display:none;"
          >

            <div class="final-passport-stamp">

              <div>
                ❤️ VISADO
              </div>

              <strong>
                APROBADO
              </strong>

              <span>
                DESTINO:
              </span>

              <b>
                NOSOTROS
              </b>

              <small>
                MARLON ♥ ANDREA
              </small>

              <small>
                2026
              </small>

            </div>


            <div class="passport-final-text">

              <p>
                Este viaje todavía no termina.
              </p>

              <strong>
                Apenas estamos empezando. 🌻
              </strong>

            </div>

          </div>

        </div>

      </div>

    `;

  }

  // =====================================================
  // CARRUSEL DE TEXTO - DÍA 9
  // =====================================================

  if (
    surprise.textCarousel &&
    slides.length > 0
  ) {
  // =====================================================
  // CARRUSEL DE TEXTO - DÍA 9
  // =====================================================

  if (
    surprise.textCarousel &&
    slides.length > 0
  ) {

    body += `

      <div class="text-carousel">

        <button
          class="carousel-button carousel-prev"
          onclick="changeTextCarousel(-1)"
          aria-label="Confesión anterior"
        >
          ‹
        </button>


        <div class="text-carousel-card">

          <div class="text-carousel-flower flower-one">
            🌻
          </div>

          <div class="text-carousel-flower flower-two">
            🌻
          </div>

          <div class="text-carousel-small-flower flower-three">
            🌻
          </div>

          <div class="text-carousel-small-flower flower-four">
            🌼
          </div>


          <div class="text-carousel-number">

            <span
              id="text-carousel-counter"
            >
              1 / ${slides.length}
            </span>

          </div>


          <div class="text-carousel-content">

            <div class="text-carousel-icon">
              💛
            </div>

            <h3
              id="text-carousel-title"
            >
              ${slides[0].title}
            </h3>

            <div
              id="text-carousel-text"
              class="text-carousel-message"
            >
              ${slides[0].text}
            </div>

            <div class="text-carousel-heart">
              ♡
            </div>

          </div>

        </div>


        <button
          class="carousel-button carousel-next"
          onclick="changeTextCarousel(1)"
          aria-label="Siguiente confesión"
        >
          ›
        </button>

      </div>


      <div class="carousel-dots text-carousel-dots">
    `;


    slides.forEach(
      (
        slide,
        index
      ) => {

        body += `

          <button
            class="
              carousel-dot
              ${
                index === 0
                  ? "active"
                  : ""
              }
            "
            onclick="goToTextCarousel(${index})"
            aria-label="Ir a confesión ${index + 1}"
          >
          </button>

        `;

      }
    );


    body += `

      </div>

    `;

  }


  // =====================================================
  // SOPA DE LETRAS - DÍA 11
  // =====================================================

  if (
    surprise.wordSearch
  ) {

    body += `

      <div class="word-search-wrapper">

        <div class="word-search-intro">

          <div class="word-search-sunflowers">
            🌻 🌻 🌻
          </div>

          <p class="word-search-instruction">
            Hay 8 palabras escondidas.
            Encuéntralas todas y descubre
            el mensaje final. ❤️
          </p>

        </div>


        <div class="word-search-counter">

          <span id="word-search-found">
            0
          </span>

          <span>
            /
          </span>

          <span id="word-search-total">
            ${surprise.words.length}
          </span>

          <span class="word-search-counter-label">
            encontradas
          </span>

        </div>


        <div
          id="word-search-word-list"
          class="word-search-word-list"
        >
        </div>


        <div class="word-search-board-container">

          <div
            id="word-search-board"
            class="word-search-board"
            aria-label="Sopa de letras"
          >
          </div>

        </div>


        <div class="word-search-help">

          💡 Selecciona la primera y la última
          letra de cada palabra.

        </div>


        <div
          id="word-search-success"
          class="word-search-success"
          style="display:none;"
        >

          <div class="success-sunflowers">
            🌻 🌻 🌻
          </div>

          <div class="success-heart">
            ❤️
          </div>

          <h3>
            ¡Encontraste todas!
          </h3>

          <p>
            Entre todos estos nombres,
            recuerdos y pequeños pedacitos
            de nuestra historia,
            hay algo que quiero que nunca olvides.
          </p>

          <p>

            <strong>
              Tú eres una de las partes
              más bonitas de mi vida.
            </strong>

          </p>

          <p>
            Gracias por compartir conmigo
            tantos momentos y por formar
            parte de mi historia.
          </p>

          <div class="success-final-message">
            Te amo, Andrea. ❤️🌻
          </div>

        </div>

      </div>

    `;

  }


  // =====================================================
  // CARRUSEL NORMAL DE FOTOS
  // =====================================================

  else if (
    slides.length > 0
  ) {

    if (
      slides.length === 1
    ) {

      body += `

        <div class="single-photo">

          <img
            src="${slides[0].image}"
            alt="${surprise.title}"
            class="surprise-image"
          >

        </div>

      `;


      if (
        slides[0].text
      ) {

        body += `

          <div class="photo-description">

            ${slides[0].text}

          </div>

        `;

      }

    }


    else {

      body += `

        <div class="photo-carousel">

          <button
            class="carousel-button carousel-prev"
            onclick="changeCarousel(-1)"
            aria-label="Foto anterior"
          >
            ‹
          </button>


          <div class="carousel-image-container">

            <img
              id="carousel-image"
              src="${slides[0].image}"
              alt="Recuerdo 1"
            >

          </div>


          <button
            class="carousel-button carousel-next"
            onclick="changeCarousel(1)"
            aria-label="Foto siguiente"
          >
            ›
          </button>

        </div>


        <div class="carousel-counter">

          <span id="carousel-counter">
            1 / ${slides.length}
          </span>

        </div>


        <div
          class="carousel-dots"
          id="carousel-dots"
        >
      `;


      slides.forEach(
        (
          slide,
          index
        ) => {

          body += `

            <button
              class="
                carousel-dot
                ${
                  index === 0
                    ? "active"
                    : ""
                }
              "
              onclick="goToCarousel(${index})"
              aria-label="Ir a foto ${index + 1}"
            >
            </button>

          `;

        }
      );


      body += `

        </div>


        <div
          id="carousel-description"
          class="photo-description"
        >

          ${slides[0].text || ""}

        </div>

      `;

    }

  }


  // =====================================================
  // TEXTO PRINCIPAL
  // =====================================================

  if (
    surprise.text &&
    !surprise.textCarousel
  ) {

    body += `

      <div class="surprise-text">

        ${surprise.text}

      </div>

    `;

  }


  // =====================================================
  // INSERTAR CONTENIDO
  // =====================================================

  document.getElementById(
    "modal-body"
  ).innerHTML =
    body;


  // =====================================================
  // ABRIR MODAL
  // =====================================================

  const modal =
    document.getElementById(
      "modal"
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


  // =====================================================
  // INICIAR SOPA DE LETRAS
  // =====================================================

  if (
    surprise.wordSearch
  ) {

    setTimeout(
      initializeWordSearch,
      100
    );

  }


  // =====================================================
  // CORAZONES DEL DÍA 22
  // =====================================================

  if (
    day === 22
  ) {

    createHearts(
      28
    );

  }

}


// =========================================================
// CAMBIAR FOTO DEL CARRUSEL
// =========================================================

function changeCarousel(
  direction
) {

  if (
    !window.currentCarouselSlides ||
    window.currentCarouselSlides.length <= 1
  ) {

    return;

  }


  const total =
    window.currentCarouselSlides.length;


  window.currentCarouselIndex +=
    direction;


  if (
    window.currentCarouselIndex >=
    total
  ) {

    window.currentCarouselIndex =
      0;

  }


  if (
    window.currentCarouselIndex < 0
  ) {

    window.currentCarouselIndex =
      total - 1;

  }


  updateCarousel();

}


// =========================================================
// IR DIRECTAMENTE A UNA FOTO
// =========================================================

function goToCarousel(
  index
) {

  if (
    !window.currentCarouselSlides ||
    window.currentCarouselSlides.length === 0
  ) {

    return;

  }


  if (
    index < 0 ||
    index >=
      window.currentCarouselSlides.length
  ) {

    return;

  }


  window.currentCarouselIndex =
    index;


  updateCarousel();

}


// =========================================================
// ACTUALIZAR CARRUSEL DE FOTOS
// =========================================================

function updateCarousel() {

  const image =
    document.getElementById(
      "carousel-image"
    );


  const counter =
    document.getElementById(
      "carousel-counter"
    );


  const description =
    document.getElementById(
      "carousel-description"
    );


  const dots =
    document.querySelectorAll(
      ".carousel-dots .carousel-dot"
    );


  if (
    !image
  ) {

    return;

  }


  const index =
    window.currentCarouselIndex;


  const slides =
    window.currentCarouselSlides;


  const currentSlide =
    slides[index];


  if (
    !currentSlide
  ) {

    return;

  }


  image.classList.remove(
    "carousel-fade"
  );


  void image.offsetWidth;


  image.src =
    currentSlide.image;


  image.alt =
    `Recuerdo ${index + 1}`;


  image.classList.add(
    "carousel-fade"
  );


  if (
    counter
  ) {

    counter.textContent =
      `${index + 1} / ${slides.length}`;

  }


  if (
    description
  ) {

    description.innerHTML =
      currentSlide.text || "";

  }


  dots.forEach(
    (
      dot,
      i
    ) => {

      dot.classList.toggle(
        "active",
        i === index
      );

    }
  );

}


// =========================================================
// CARRUSEL DE CONFESIONES - DÍA 9
// =========================================================

function changeTextCarousel(
  direction
) {

  if (
    !window.currentCarouselSlides ||
    window.currentCarouselSlides.length <= 1
  ) {

    return;

  }


  const total =
    window.currentCarouselSlides.length;


  window.currentCarouselIndex +=
    direction;


  if (
    window.currentCarouselIndex >=
    total
  ) {

    window.currentCarouselIndex =
      0;

  }


  if (
    window.currentCarouselIndex < 0
  ) {

    window.currentCarouselIndex =
      total - 1;

  }


  updateTextCarousel();

}


// =========================================================
// IR A UNA CONFESIÓN
// =========================================================

function goToTextCarousel(
  index
) {

  if (
    !window.currentCarouselSlides ||
    window.currentCarouselSlides.length === 0
  ) {

    return;

  }


  if (
    index < 0 ||
    index >=
      window.currentCarouselSlides.length
  ) {

    return;

  }


  window.currentCarouselIndex =
    index;


  updateTextCarousel();

}


// =========================================================
// ACTUALIZAR CONFESIÓN
// =========================================================

function updateTextCarousel() {

  const title =
    document.getElementById(
      "text-carousel-title"
    );


  const text =
    document.getElementById(
      "text-carousel-text"
    );


  const counter =
    document.getElementById(
      "text-carousel-counter"
    );


  const dots =
    document.querySelectorAll(
      ".text-carousel-dots .carousel-dot"
    );


  const slide =
    window.currentCarouselSlides[
      window.currentCarouselIndex
    ];


  if (
    !slide ||
    !title ||
    !text
  ) {

    return;

  }


  const content =
    document.querySelector(
      ".text-carousel-content"
    );


  if (
    content
  ) {

    content.classList.remove(
      "text-carousel-animation"
    );


    void content.offsetWidth;


    content.classList.add(
      "text-carousel-animation"
    );

  }


  title.textContent =
    slide.title || "";


  text.innerHTML =
    slide.text || "";


  if (
    counter
  ) {

    counter.textContent =
      `${window.currentCarouselIndex + 1} / ${window.currentCarouselSlides.length}`;

  }


  dots.forEach(
    (
      dot,
      index
    ) => {

      dot.classList.toggle(
        "active",
        index ===
          window.currentCarouselIndex
      );

    }
  );

}

// =========================================================
// ✈️ PASAPORTE INTERACTIVO - DÍA 12
// =========================================================

window.passportState = {

  page: 0,

  opened: false,

  stamped: false

};


// =========================================================
// ABRIR PASAPORTE
// =========================================================

function openPassport() {

  const cover =
    document.getElementById(
      "passport-cover"
    );


  const inside =
    document.getElementById(
      "passport-inside"
    );


  if (
    !cover ||
    !inside
  ) {

    return;

  }


  cover.classList.add(
    "passport-cover-opening"
  );


  setTimeout(
    () => {

      cover.style.display =
        "none";


      inside.style.display =
        "block";


      window.passportState.page =
        0;


      window.passportState.opened =
        true;


      renderPassportPage();

    },
    550
  );

}


// =========================================================
// RENDERIZAR PÁGINA
// =========================================================

function renderPassportPage() {

  const state =
    window.passportState;


  if (
    !state ||
    !state.opened
  ) {

    return;

  }


  const surprise =
    surprises[11];


  if (
    !surprise ||
    !surprise.destinations
  ) {

    return;

  }


  const content =
    document.getElementById(
      "passport-destination-content"
    );


  const intro =
    document.getElementById(
      "passport-page-intro"
    );


  const counter =
    document.getElementById(
      "passport-page-counter"
    );


  const stamp =
    document.getElementById(
      "passport-stamp"
    );


  const previous =
    document.getElementById(
      "passport-prev"
    );


  const next =
    document.getElementById(
      "passport-next"
    );


  const finalButton =
    document.getElementById(
      "passport-final-button"
    );


  if (
    !content
  ) {

    return;

  }


  // =====================================================
  // PORTADA INTERIOR
  // =====================================================

  if (
    state.page === 0
  ) {

    if (
      intro
    ) {

      intro.style.display =
        "block";

    }


    content.innerHTML =
      "";


    if (
      stamp
    ) {

      stamp.innerHTML =
        "";

      stamp.classList.remove(
        "passport-stamp-visible"
      );

    }


    if (
      counter
    ) {

      counter.textContent =
        "INTRO";

    }


    if (
      previous
    ) {

      previous.disabled =
        true;

    }


    if (
      next
    ) {

      next.style.display =
        "inline-flex";

      next.textContent =
        "COMENZAR →";

    }


    if (
      finalButton
    ) {

      finalButton.style.display =
        "none";

    }


    return;

  }


  // =====================================================
  // DESTINO
  // =====================================================

  const destination =
    surprise.destinations[
      state.page - 1
    ];


  if (
    !destination
  ) {

    return;

  }


  if (
    intro
  ) {

    intro.style.display =
      "none";

  }


  content.classList.remove(
    "passport-page-animation"
  );


  void content.offsetWidth;


  content.classList.add(
    "passport-page-animation"
  );


  content.innerHTML = `

    <div class="passport-destination-number">

      DESTINO
      ${destination.number}
      / 12

    </div>


    <div class="passport-destination-icon">

      ${destination.icon}

    </div>


    <h3 class="passport-destination-title">

      ${destination.title}

    </h3>


    <div class="passport-destination-line">
    </div>


    <div class="passport-destination-text">

      ${destination.text}

    </div>


    ${
      destination.final
        ? `
          <div class="passport-final-decoration">
            🌻
            ❤️
            🌻
          </div>
        `
        : `
          <div class="passport-destination-decoration">
            ✈️
            🌍
            ❤️
          </div>
        `
    }

  `;


  // =====================================================
  // CONTADOR
  // =====================================================

  if (
    counter
  ) {

    counter.textContent =
      `${state.page} / 12`;

  }


  // =====================================================
  // SELLO
  // =====================================================

  if (
    stamp
  ) {

    stamp.innerHTML = `

      <span>
        ${destination.stamp}
      </span>

    `;


    stamp.classList.remove(
      "passport-stamp-visible"
    );


    setTimeout(
      () => {

        stamp.classList.add(
          "passport-stamp-visible"
        );

      },
      250
    );

  }


  // =====================================================
  // BOTÓN ANTERIOR
  // =====================================================

  if (
    previous
  ) {

    previous.disabled =
      state.page <= 1;

  }


  // =====================================================
  // BOTÓN SIGUIENTE
  // =====================================================

  if (
    next
  ) {

    if (
      state.page >= 12
    ) {

      next.style.display =
        "none";

    }

    else {

      next.style.display =
        "inline-flex";

      next.textContent =
        "Siguiente →";

    }

  }


  // =====================================================
  // BOTÓN FINAL
  // =====================================================

  if (
    finalButton
  ) {

    if (
      state.page === 12
    ) {

      finalButton.style.display =
        "block";

    }

    else {

      finalButton.style.display =
        "none";

    }

  }

}


// =========================================================
// CAMBIAR PÁGINA
// =========================================================

function changePassportPage(
  direction
) {

  const state =
    window.passportState;


  if (
    !state ||
    !state.opened
  ) {

    return;

  }


  const nextPage =
    state.page +
    direction;


  if (
    nextPage < 0
  ) {

    return;

  }


  if (
    nextPage > 12
  ) {

    return;

  }


  state.page =
    nextPage;


  renderPassportPage();

}


// =========================================================
// ESTAMPAR PASAPORTE
// =========================================================

function stampPassport() {

  const finalMessage =
    document.getElementById(
      "passport-final-message"
    );


  const finalButton =
    document.getElementById(
      "passport-final-button"
    );


  const controls =
    document.querySelector(
      ".passport-controls"
    );


  const state =
    window.passportState;


  if (
    !finalMessage
  ) {

    return;

  }


  state.stamped =
    true;


  if (
    finalButton
  ) {

    finalButton.style.display =
      "none";

  }


  if (
    controls
  ) {

    controls.style.display =
      "none";

  }


  finalMessage.style.display =
    "block";


  setTimeout(
    () => {

      finalMessage.classList.add(
        "passport-final-show"
      );

    },
    100
  );


  createHearts(
    18
  );


  createPassportFlowers();

}


// =========================================================
// GIRASOLES FINALES
// =========================================================

function createPassportFlowers() {

  const container =
    document.getElementById(
      "hearts"
    );


  if (
    !container
  ) {

    return;

  }


  for (
    let i = 0;
    i < 8;
    i++
  ) {

    const flower =
      document.createElement(
        "span"
      );


    flower.className =
      "floating-passport-flower";


    flower.textContent =
      "🌻";


    flower.style.left =
      `${Math.random() * 100}%`;


    flower.style.fontSize =
      `${18 + Math.random() * 18}px`;


    flower.style.animationDuration =
      `${5 + Math.random() * 5}s`;


    flower.style.animationDelay =
      `${Math.random() * 1.5}s`;


    container.appendChild(
      flower
    );


    setTimeout(
      () =>
        flower.remove(),
      12000
    );

  }

}
// =========================================================
// 🔎 SOPA DE LETRAS - DÍA 11
// =========================================================

window.wordSearchState =
  null;


const WORD_SEARCH_DIRECTIONS = [

  { row: 0, col: 1 },
  { row: 0, col: -1 },

  { row: 1, col: 0 },
  { row: -1, col: 0 },

  { row: 1, col: 1 },
  { row: 1, col: -1 },

  { row: -1, col: 1 },
  { row: -1, col: -1 }

];


// =========================================================
// GENERAR SOPA DE LETRAS
// =========================================================

function generateWordSearch(
  words,
  size = 12
) {

  const cleanWords =
    words
      .map(
        word =>
          word
            .toUpperCase()
            .normalize("NFD")
            .replace(
              /[\u0300-\u036f]/g,
              ""
            )
            .replace(
              /[^A-Z]/g,
              ""
            )
      )
      .filter(
        word =>
          word.length > 0 &&
          word.length <= size
      );


  const board =
    Array.from(
      {
        length: size
      },
      () =>
        Array(size).fill("")
    );


  const placements =
    {};


  function shuffledDirections() {

    return [
      ...WORD_SEARCH_DIRECTIONS
    ].sort(
      () =>
        Math.random() -
        0.5
    );

  }


  const sortedWords =
    [
      ...cleanWords
    ].sort(
      (
        a,
        b
      ) =>
        b.length -
        a.length
    );


  sortedWords.forEach(
    word => {

      let placed =
        false;


      for (
        let attempt = 0;
        attempt < 1500 &&
        !placed;
        attempt++
      ) {

        const direction =
          shuffledDirections()[0];


        const startRow =
          Math.floor(
            Math.random() *
            size
          );


        const startCol =
          Math.floor(
            Math.random() *
            size
          );


        const endRow =
          startRow +
          direction.row *
          (word.length - 1);


        const endCol =
          startCol +
          direction.col *
          (word.length - 1);


        if (
          endRow < 0 ||
          endRow >= size ||
          endCol < 0 ||
          endCol >= size
        ) {

          continue;

        }


        let valid =
          true;


        for (
          let i = 0;
          i < word.length;
          i++
        ) {

          const row =
            startRow +
            direction.row *
            i;


          const col =
            startCol +
            direction.col *
            i;


          const current =
            board[row][col];


          if (
            current !== "" &&
            current !== word[i]
          ) {

            valid =
              false;

            break;

          }

        }


        if (!valid) {

          continue;

        }


        const cells =
          [];


        for (
          let i = 0;
          i < word.length;
          i++
        ) {

          const row =
            startRow +
            direction.row *
            i;


          const col =
            startCol +
            direction.col *
            i;


          board[row][col] =
            word[i];


          cells.push(
            `${row}-${col}`
          );

        }


        placements[word] =
          cells;


        placed =
          true;

      }

    }
  );


  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  for (
    let row = 0;
    row < size;
    row++
  ) {

    for (
      let col = 0;
      col < size;
      col++
    ) {

      if (
        board[row][col] === ""
      ) {

        board[row][col] =
          letters[
            Math.floor(
              Math.random() *
              letters.length
            )
          ];

      }

    }

  }


  return {

    board,

    placements,

    words:
      cleanWords,

    size

  };

}


// =========================================================
// INICIALIZAR SOPA
// =========================================================

function initializeWordSearch() {

  const surprise =
    surprises[10];


  if (
    !surprise ||
    !surprise.wordSearch
  ) {

    return;

  }


  const boardElement =
    document.getElementById(
      "word-search-board"
    );


  const listElement =
    document.getElementById(
      "word-search-word-list"
    );


  if (
    !boardElement ||
    !listElement
  ) {

    return;

  }


  const state =
    generateWordSearch(
      surprise.words,
      12
    );


  window.wordSearchState = {

    ...state,

    selectedStart:
      null,

    foundWords:
      new Set()

  };


  renderWordSearchBoard();

  renderWordSearchWordList();

  updateWordSearchCounter();

}


// =========================================================
// RENDERIZAR TABLERO
// =========================================================

function renderWordSearchBoard() {

  const boardElement =
    document.getElementById(
      "word-search-board"
    );


  const state =
    window.wordSearchState;


  if (
    !boardElement ||
    !state
  ) {

    return;

  }


  boardElement.innerHTML =
    "";


  boardElement.style.gridTemplateColumns =
    `repeat(${state.size}, 1fr)`;


  for (
    let row = 0;
    row < state.size;
    row++
  ) {

    for (
      let col = 0;
      col < state.size;
      col++
    ) {

      const cell =
        document.createElement(
          "button"
        );


      cell.type =
        "button";


      cell.className =
        "word-search-cell";


      cell.textContent =
        state.board[row][col];


      cell.dataset.row =
        row;


      cell.dataset.col =
        col;


      cell.setAttribute(
        "aria-label",
        `Fila ${row + 1}, columna ${col + 1}, letra ${state.board[row][col]}`
      );


      cell.addEventListener(
        "click",
        () =>
          handleWordSearchCell(
            row,
            col
          )
      );


      boardElement.appendChild(
        cell
      );

    }

  }

}


// =========================================================
// LISTA DE PALABRAS
// =========================================================

function renderWordSearchWordList() {

  const listElement =
    document.getElementById(
      "word-search-word-list"
    );


  const state =
    window.wordSearchState;


  if (
    !listElement ||
    !state
  ) {

    return;

  }


  listElement.innerHTML =
    "";


  state.words.forEach(
    word => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "word-search-word";


      item.dataset.word =
        word;


      item.innerHTML = `

        <span class="word-search-word-icon">
          🌻
        </span>

        <span class="word-search-word-text">
          ${word}
        </span>

        <span class="word-search-word-check">
          ✓
        </span>

      `;


      listElement.appendChild(
        item
      );

    }
  );

}


// =========================================================
// MANEJAR SELECCIÓN
// =========================================================

function handleWordSearchCell(
  row,
  col
) {

  const state =
    window.wordSearchState;


  if (!state) {

    return;

  }


  // -------------------------------------------------------
  // PRIMERA LETRA
  // -------------------------------------------------------

  if (
    !state.selectedStart
  ) {

    state.selectedStart = {

      row,
      col

    };


    clearWordSearchSelection();


    const cell =
      getWordSearchCell(
        row,
        col
      );


    if (
      cell
    ) {

      cell.classList.add(
        "word-search-selected"
      );

    }


    return;

  }


  // -------------------------------------------------------
  // SEGUNDA LETRA
  // -------------------------------------------------------

  const start =
    state.selectedStart;


  const selectedCells =
    getCellsBetween(
      start.row,
      start.col,
      row,
      col
    );


  if (
    selectedCells.length === 0
  ) {

    state.selectedStart = {

      row,
      col

    };


    clearWordSearchSelection();


    const cell =
      getWordSearchCell(
        row,
        col
      );


    if (
      cell
    ) {

      cell.classList.add(
        "word-search-selected"
      );

    }


    return;

  }


  const selectedWord =
    selectedCells
      .map(
        cell =>
          state.board[
            cell.row
          ][
            cell.col
          ]
      )
      .join("");


  const reversedWord =
    selectedWord
      .split("")
      .reverse()
      .join("");


  let foundWord =
    null;


  state.words.forEach(
    word => {

      if (
        state.foundWords.has(
          word
        )
      ) {

        return;

      }


      if (
        word === selectedWord ||
        word === reversedWord
      ) {

        foundWord =
          word;

      }

    }
  );


  if (
    foundWord
  ) {

    markFoundWord(
      selectedCells,
      foundWord
    );

  }

  else {

    showInvalidWord();

  }


  state.selectedStart =
    null;

}


// =========================================================
// OBTENER CELDAS
// =========================================================

function getCellsBetween(
  startRow,
  startCol,
  endRow,
  endCol
) {

  const rowDifference =
    endRow -
    startRow;


  const colDifference =
    endCol -
    startCol;


  const rowStep =
    rowDifference === 0
      ? 0
      : rowDifference > 0
        ? 1
        : -1;


  const colStep =
    colDifference === 0
      ? 0
      : colDifference > 0
        ? 1
        : -1;


  const straightLine =
    rowDifference === 0 ||
    colDifference === 0 ||
    Math.abs(
      rowDifference
    ) ===
      Math.abs(
        colDifference
      );


  if (
    !straightLine
  ) {

    return [];

  }


  const steps =
    Math.max(
      Math.abs(
        rowDifference
      ),
      Math.abs(
        colDifference
      )
    );


  const cells =
    [];


  for (
    let i = 0;
    i <= steps;
    i++
  ) {

    cells.push({

      row:
        startRow +
        rowStep *
        i,

      col:
        startCol +
        colStep *
        i

    });

  }


  return cells;

}


// =========================================================
// MARCAR PALABRA
// =========================================================

function markFoundWord(
  cells,
  word
) {

  const state =
    window.wordSearchState;


  if (!state) {

    return;

  }


  state.foundWords.add(
    word
  );


  cells.forEach(
    (
      {
        row,
        col
      }
    ) => {

      const element =
        getWordSearchCell(
          row,
          col
        );


      if (
        element
      ) {

        element.classList.remove(
          "word-search-selected"
        );


        element.classList.add(
          "word-search-found"
        );


        createWordSearchSparkle(
          element
        );

      }

    }
  );


  const wordElement =
    document.querySelector(
      `.word-search-word[data-word="${word}"]`
    );


  if (
    wordElement
  ) {

    wordElement.classList.add(
      "found"
    );

  }


  updateWordSearchCounter();


  if (
    state.foundWords.size ===
    state.words.length
  ) {

    setTimeout(
      showWordSearchSuccess,
      500
    );

  }

}


// =========================================================
// ACTUALIZAR CONTADOR
// =========================================================

function updateWordSearchCounter() {

  const found =
    document.getElementById(
      "word-search-found"
    );


  const state =
    window.wordSearchState;


  if (
    found &&
    state
  ) {

    found.textContent =
      state.foundWords.size;

  }

}


// =========================================================
// LIMPIAR SELECCIÓN
// =========================================================

function clearWordSearchSelection() {

  document
    .querySelectorAll(
      ".word-search-selected"
    )
    .forEach(
      cell => {

        cell.classList.remove(
          "word-search-selected"
        );

      }
    );

}


// =========================================================
// PALABRA INCORRECTA
// =========================================================

function showInvalidWord() {

  const board =
    document.getElementById(
      "word-search-board"
    );


  if (
    !board
  ) {

    return;

  }


  board.classList.remove(
    "word-search-invalid"
  );


  void board.offsetWidth;


  board.classList.add(
    "word-search-invalid"
  );


  clearWordSearchSelection();


  setTimeout(
    () => {

      board.classList.remove(
        "word-search-invalid"
      );

    },
    500
  );

}


// =========================================================
// OBTENER CELDA
// =========================================================

function getWordSearchCell(
  row,
  col
) {

  return document.querySelector(
    `.word-search-cell[data-row="${row}"][data-col="${col}"]`
  );

}


// =========================================================
// DESTELLO
// =========================================================

function createWordSearchSparkle(
  element
) {

  if (
    !element
  ) {

    return;

  }


  const sparkle =
    document.createElement(
      "span"
    );


  sparkle.className =
    "word-search-sparkle";


  sparkle.textContent =
    "✨";


  element.appendChild(
    sparkle
  );


  setTimeout(
    () =>
      sparkle.remove(),
    800
  );

}


// =========================================================
// MENSAJE FINAL
// =========================================================

function showWordSearchSuccess() {

  const success =
    document.getElementById(
      "word-search-success"
    );


  if (
    !success
  ) {

    return;

  }


  success.style.display =
    "block";


  setTimeout(
    () => {

      success.classList.add(
        "show"
      );

    },
    50
  );


  createHearts(
    18
  );


  createSunflowerCelebration();

}


// =========================================================
// CELEBRACIÓN
// =========================================================

function createSunflowerCelebration() {

  const container =
    document.getElementById(
      "hearts"
    );


  if (
    !container
  ) {

    return;

  }


  for (
    let i = 0;
    i < 10;
    i++
  ) {

    const flower =
      document.createElement(
        "span"
      );


    flower.className =
      "floating-sunflower";


    flower.textContent =
      "🌻";


    flower.style.left =
      `${Math.random() * 100}%`;


    flower.style.fontSize =
      `${18 + Math.random() * 18}px`;


    flower.style.animationDuration =
      `${5 + Math.random() * 5}s`;


    flower.style.animationDelay =
      `${Math.random() * 1.5}s`;


    container.appendChild(
      flower
    );


    setTimeout(
      () =>
        flower.remove(),
      12000
    );

  }

}


// =========================================================
// MENSAJE DÍA BLOQUEADO
// =========================================================

function showLockedMessage(
  day
) {

  const date =
    new Date(

      dateToUTC(
        START_DATE
      ) +

      (day - 1) *
      86400000

    );


  const dateText =
    date.toLocaleDateString(
      "es-EC",
      {
        day: "numeric",
        month: "long",
        timeZone: "UTC"
      }
    );


  document.getElementById(
    "modal-day"
  ).textContent =
    "🔒 Sorpresa bloqueada";


  document.getElementById(
    "modal-icon"
  ).textContent =
    "🤫";


  document.getElementById(
    "modal-title"
  ).textContent =
    "Todavía no...";


  document.getElementById(
    "modal-body"
  ).innerHTML = `

    Este detalle está reservado para el
    <strong>${dateText}</strong>.

    <br><br>

    Ten paciencia, mi amor. ❤️

    <br><br>

    <em>
      Las sorpresas bonitas también necesitan
      esperar su momento.
    </em>

  `;


  const modal =
    document.getElementById(
      "modal"
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

}


// =========================================================
// ETIQUETA DEL DÍA
// =========================================================

function getDayLabel(
  day
) {

  if (
    day === 22
  ) {

    return "Nuestro día";

  }


  if (
    day === getCurrentDay()
  ) {

    return "Disponible hoy";

  }


  return "Un recuerdo para ti";

}


// =========================================================
// CERRAR MODAL
// =========================================================

function closeModal() {

  const modal =
    document.getElementById(
      "modal"
    );


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
// IR AL CALENDARIO
// =========================================================

function scrollToCalendar() {

  document.getElementById(
    "calendar-section"
  ).scrollIntoView({

    behavior:
      "smooth"

  });

}


// =========================================================
// CORAZONES
// =========================================================

function createHearts(
  amount = 8
) {

  const container =
    document.getElementById(
      "hearts"
    );


  if (
    !container
  ) {

    return;

  }


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const heart =
      document.createElement(
        "span"
      );


    heart.className =
      "floating-heart";


    heart.textContent =
      Math.random() > 0.25
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


    container.appendChild(
      heart
    );


    setTimeout(
      () =>
        heart.remove(),
      14000
    );

  }

}


// =========================================================
// ANIMACIÓN DE CORAZONES
// =========================================================

function startHeartAnimation() {

  setInterval(
    () =>
      createHearts(1),
    1800
  );

}


// =========================================================
// MÚSICA
// =========================================================

async function toggleMusic() {

  const audio =
    document.getElementById(
      "bg-music"
    );


  const button =
    document.getElementById(
      "music-btn"
    );


  if (
    !audio ||
    !button
  ) {

    return;

  }


  try {

    if (
      audio.paused
    ) {

      await audio.play();


      button.textContent =
        "❚❚";


      button.title =
        "Pausar música";

    }

    else {

      audio.pause();


      button.textContent =
        "♫";


      button.title =
        "Reproducir música";

    }

  }

  catch (
    error
  ) {

    alert(
      "Primero coloca tu canción en la carpeta music/nuestra-cancion.mp3"
    );

  }

}


// =========================================================
// TECLA ESCAPE
// =========================================================

document.addEventListener(
  "keydown",
  (
    event
  ) => {

    if (
      event.key ===
      "Escape"
    ) {

      closeModal();

    }

  }
);


// =========================================================
// INICIAR PÁGINA
// =========================================================

renderCalendar();

updateCountdown();

startHeartAnimation();


// =========================================================
// ACTUALIZAR CONTADOR CADA SEGUNDO
// =========================================================

setInterval(
  updateCountdown,
  1000
);


// =========================================================
// ACTUALIZAR CALENDARIO CADA 30 SEGUNDOS
// =========================================================

setInterval(
  renderCalendar,
  30000
);
