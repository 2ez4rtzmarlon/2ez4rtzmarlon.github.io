
 
/*
  =========================================================
  22 DÍAS PARA NOSOTROS
  =========================================================
 
  Fecha de inicio: 1 de septiembre de 2026
  Aniversario:     22 de septiembre de 2026
 
  Zona horaria:
  Quito, Ecuador = UTC-5
  America/Guayaquil
*/
 
 
// =========================================================
// CONFIGURACIÓN
// =========================================================
 
const START_DATE = "2026-09-01";
const ANNIVERSARY_DATE = "2026-09-22";
const TOTAL_DAYS = 23;
 
const DEFENSE_DATE = "2026-09-23";
const DEFENSE_TIME = "10:15";
const POST_DEFENSE_TIME = "11:00";
 
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
      eres importante para mí.
 
      <br><br>
 
      Gracias por compartir tus gustos y hacerme recordarte
      a ti en cada segundo de la canción.
 
      <br><br>
 
      Antes de darle play piensa en algo lindo que hemos vivido.
 
      <br><br>
 
      Te amo. ❤️
 
      <br><br>
 
      <strong>Tip:</strong>
      Usa el botón ♫ de abajo en la esquina derecha
      para escucharla.
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
          Gracias por escuchar mis historias del fútbol,
          de lo que me gusta, mis problemas, mis sueños
          y hasta mis cosas sin sentido o palabras inventadas.
 
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
  // PASAPORTE INTERACTIVO
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
          Quiero que algún día podamos salir a un nuevo lugar
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
        stamp: "AÑO 03 ❤️",
 
        text: `
          No quiero que este sea nuestro último aniversario especial.
 
          <br><br>
 
          Quiero que existan muchos más números,
          muchas más fotos oficiales
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
          Tenemos fotografías de muchas chocoaventuras.
 
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
          Estamos cerca de celebrar uno.
 
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
 
          Habrá días complicados,
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
  // AVENTURA
  // =======================================================
 
  {
    icon: "🧭",
 
    title: "Elige una aventura conmigo",
 
    text: `
 
      <div class="day13-adventure">
 
        <div class="day13-intro">
 
          <div class="day13-sunflower">
            🌻
          </div>
 
          <h3>
            Hoy no quiero contarte un recuerdo...
          </h3>
 
          <p>
            Hoy quiero imaginar uno contigo. ❤️
          </p>
 
          <p class="day13-small-text">
            Elige una de estas aventuras
            que te gustaría vivir conmigo.
          </p>
 
        </div>
 
 
        <div class="day13-options">
 
 
          <button
            type="button"
            class="day13-option"
            onclick="selectAdventure(1)"
          >
 
            <div class="day13-option-icon">
              🌅
            </div>
 
            <div class="day13-option-content">
 
              <h4>
                Una escapada
              </h4>
 
              <p>
                Perdernos juntos.
              </p>
 
              <span>
                Un lugar nuevo, sin preocuparnos
                demasiado por el destino.
              </span>
 
            </div>
 
            <div class="day13-option-arrow">
              →
            </div>
 
          </button>
 
 
          <button
            type="button"
            class="day13-option"
            onclick="selectAdventure(2)"
          >
 
            <div class="day13-option-icon">
              ❤️
            </div>
 
            <div class="day13-option-content">
 
              <h4>
                Un día solo para nosotros
              </h4>
 
              <p>
                Sin apuros.
              </p>
 
              <span>
                Comer algo rico, caminar,
                conversar de cualquier cosa
                y terminar abrazados.
              </span>
 
            </div>
 
            <div class="day13-option-arrow">
              →
            </div>
 
          </button>
 
 
          <button
            type="button"
            class="day13-option"
            onclick="selectAdventure(3)"
          >
 
            <div class="day13-option-icon">
              🗺️
            </div>
 
            <div class="day13-option-content">
 
              <h4>
                Una nueva aventura
              </h4>
 
              <p>
                Hagamos algo que nunca hemos hecho.
              </p>
 
              <span>
                Elegir un lugar al azar
                y descubrir juntos qué nos espera.
              </span>
 
            </div>
 
            <div class="day13-option-arrow">
              →
            </div>
 
          </button>
 
 
        </div>
 
 
        <div
          id="day13-result"
          class="day13-result"
        >
 
          <div class="day13-result-icon">
            💖
          </div>
 
          <h3>
            Entonces queda decidido...
          </h3>
 
          <p
            id="day13-result-title"
            class="day13-result-title"
          ></p>
 
          <p>
            Aunque todavía no sepamos cuándo
            ni dónde será...
          </p>
 
          <p class="day13-final-message">
            quiero que seas tú
            quien esté a mi lado. ❤️
          </p>
 
 
          <div class="day13-ticket">
 
            <div class="day13-ticket-top">
 
              <span>
                🎫 VIAJE PARA DOS
              </span>
 
              <span>
                DÍA 13
              </span>
 
            </div>
 
 
            <div class="day13-ticket-line"></div>
 
 
            <div class="day13-ticket-body">
 
              <div>
                <small>
                  DESTINO
                </small>
 
                <strong>
                  Por descubrir
                </strong>
              </div>
 
 
              <div>
                <small>
                  COMPAÑERA
                </small>
 
                <strong>
                  Andrea ❤️
                </strong>
              </div>
 
 
              <div>
                <small>
                  ACOMPAÑANTE
                </small>
 
                <strong>
                  Marlon
                </strong>
              </div>
 
 
              <div>
                <small>
                  EQUIPAJE
                </small>
 
                <strong>
                  Muchas ganas de estar juntos
                </strong>
              </div>
 
            </div>
 
 
            <div class="day13-ticket-line"></div>
 
 
            <div class="day13-ticket-footer">
 
              <span>
                DESTINO CONFIRMADO
              </span>
 
              <span>
                ❤️
              </span>
 
            </div>
 
          </div>
 
 
          <button
            type="button"
            class="day13-again"
            onclick="resetAdventure()"
          >
            🔄 Elegir otra aventura
          </button>
 
        </div>
 
 
        <div class="day13-decoration">
 
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
          <span>❤️</span>
          <span>🌻</span>
 
        </div>
 
      </div>
 
    `
  },
 
 
  // =======================================================
  // DÍA 14
  // =======================================================
 
  {
    icon: "💗",
    title: "Lo que me haces sentir",
 
    text: `
      Gracias por hacerme sentir amado, se que mi caracter no ayuda
      pero espero de todo corazón que podamos seguir juntos mucho tiempo amor,
      gracias por ser mia, te amo mucho mi pandita, me encantas, te deseo,
      gracias amor de mi vida
 
      <br><br>
 
      Hazlo personal:
      Te amo mi Sucubo personal
      Te amo mi pandita preciosa peach
      Te amo mi Andrea
      Te amo mi Carrión
      Te amo de todas las formas y amo todo de ti.
    `
  },
 
 
  // =======================================================
// DÍA 15
// =======================================================
 
{
  icon: "🌻",
 
  title: "Si pudiera regalarte el mundo…",
 
  petals: true,
 
  text: `
    Si pudiera regalarte el mundo,
    probablemente empezaría por regalarte
    todos los amaneceres bonitos,
    todos los lugares que todavía nos faltan conocer
    y todos los momentos que aún nos quedan por vivir.
    
    <br><br>
 
    Pero después pensaría que nada de eso tendría sentido
    si no pudiera compartirlo contigo.
    
    <br><br>
 
    Así que mejor te regalo algo mucho más sencillo:
    
    <br><br>
 
    <strong>mi tiempo, mis abrazos,
    mis locuras y todos los días que pueda vivir a tu lado.</strong>
    
    <br><br>
 
    Porque si pudiera pedir algo para nuestro futuro,
    pediría que sigamos encontrándonos,
    riéndonos y eligiéndonos una y otra vez.
    
    <br><br>
 
    <strong>Y si pudiera regalarte el mundo…
    te llevaría conmigo a recorrerlo. 🌻❤️</strong>
  `
},
 
  
 
 
    // =======================================================
  // DÍA 16 - TESIS
  // =======================================================
  {
    icon: "🎓",
    title: "Estoy muy orgulloso de ti mi vida",
    text: `
      <div class="special-day thesis-day">
 
        <div class="thesis-icon">🎓</div>
 
        <h2>Hoy quiero hablar de ti</h2>
 
        <p>
          Sé que detrás de tu tesis hay mucho más que páginas,
          malas noches, deberes, trabajos y una defensa.
        </p>
 
        <div class="thesis-words">
          <span>Esfuerzo</span>
          <span>Desvelo</span>
          <span>Dudas</span>
          <span>Paciencia</span>
          <span>Perseverancia</span>
        </div>
 
        <p>
          Y a pesar de todo, seguiste adelante.
        </p>
 
        <button class="special-btn" onclick="revealThesisMessage()">
          🎓 Tengo algo que decirte mi pandita peach
        </button>
 
        <div id="thesis-message" class="hidden-message">
          <strong>Estoy muy orgulloso de ti. ❤️</strong>
 
          <br><br>
 
          Tu tesis es solamente una parte de todo lo que has hecho y
          lo que eres capaz de conseguir.
 
          <br><br>
 
          Quiero verte cumplir tus sueños,
          celebrar tus logros y estar ahí cuando
          llegues a una nueva meta.
 
          <br><br>
 
          <strong>
            Tú puedes con esto y con muchísimo más mi amor, eres brillante como el sol. 🌟
          </strong>
        </div>
 
      </div>
    `
  },
 
 
  // =======================================================
  // DÍA 17 - PANDA Y LOBO
  // =======================================================
  {
    icon: "🐼",
    title: "Tú y yo",
    text: `
      <div class="special-day us-day">
 
        <div class="animals">
          <div class="animal panda">🐼</div>
          <div class="heart-between">❤️</div>
          <div class="animal wolf">🐺</div>
        </div>
 
        <h2>Tú y yo</h2>
 
        <p>
          Dos personas diferentes.
        </p>
 
        <p>
          Dos formas de ser.
        </p>
 
        <p>
          Dos historias que algún día se encontraron entre los deberes.
        </p>
 
        <button class="special-btn" onclick="joinUs()">
          ❤️ Juntar nuestras vidas e historias
        </button>
 
        <div id="us-message" class="hidden-message">
          <strong>Y de alguna manera...</strong>
 
          <br><br>
 
          terminamos construyendo algo
          que solamente nosotros entendemos.
 
          <br><br>
 
          <span class="big-love">
            Nosotros. ❤️
          </span>
 
          <br><br>
 
          Una pandita preciosa peach y un lobo poco salvaje. 🐼🐺
        </div>
 
      </div>
    `
  },
 
 
  // =======================================================
// DÍA 18 - MINI QUIZ ❤️
// =======================================================
 
{
  icon: "🎮",
  title: "¿Cuánto sabes de nosotros?",
  text: `
    <div class="quiz18">
 
      <div class="quiz18-intro">
 
        <div class="quiz18-big-heart">❤️</div>
 
        <h2>¿Cuánto sabes de nosotros?</h2>
 
        <p>
          Llegaste al Día 18...
        </p>
 
        <p>
          Ahora quiero ponerte a prueba. 😏
        </p>
 
        <p>
          Responde 5 preguntas sobre nuestra historia.
        </p>
 
        <button
          class="quiz18-start"
          onclick="startQuiz18()">
          💕 Comenzar
        </button>
 
      </div>
 
      <div
        id="quiz18-game"
        class="quiz18-game"
        style="display:none;">
 
        <div class="quiz18-progress">
          <span id="quiz18-number">1</span> / 5
        </div>
 
        <div class="quiz18-progress-bar">
          <div id="quiz18-progress-fill"></div>
        </div>
 
        <h3 id="quiz18-question"></h3>
 
        <div id="quiz18-answers"></div>
 
        <div
          id="quiz18-feedback"
          class="quiz18-feedback">
        </div>
 
      </div>
 
      <div
        id="quiz18-result"
        class="quiz18-result"
        style="display:none;">
 
        <div id="quiz18-result-icon">
          ❤️
        </div>
 
        <h2 id="quiz18-result-title"></h2>
 
        <p id="quiz18-result-text"></p>
 
        <div
          id="quiz18-score"
          class="quiz18-score">
        </div>
 
        <button
          class="quiz18-restart"
          onclick="startQuiz18()">
          🔄 Intentarlo otra vez
        </button>
 
      </div>
 
    </div>
  `
},
 
  // =======================================================
  // DÍA 19 - FUTURO
  // =======================================================
  {
    icon: "🚪",
    title: "Tu próxima aventura",
    text: `
      <div class="special-day future-day">
 
        <div class="future-door" id="future-door">
          🚪
        </div>
 
        <h2>Has llegado muy lejos...</h2>
 
        <p>
          Pero esto no termina aquí.
        </p>
 
        <p>
          Después de todo el esfuerzo,
          vienen nuevas etapas, nuevos sueños
          y nuevas aventuras.
        </p>
 
        <button class="special-btn" onclick="openFutureDoor()">
          🚪 Abrir la puerta
        </button>
 
        <div id="future-message" class="hidden-message">
 
          <div class="future-items">
            <span>✨ Nuevos sueños</span>
            <span>🌎 Nuevos lugares</span>
            <span>🌟 Nuevos logros</span>
            <span>❤️ Nuevos recuerdos</span>
          </div>
 
          <br>
 
          Y si tú quieres...
 
          <br><br>
 
          <strong>
            quiero estar ahí para acompañarte. ❤️
          </strong>
 
        </div>
 
      </div>
    `
  },
 
 
  // =======================================================
  // DÍA 20 - 10 RAZONES
  // =======================================================
  {
    icon: "❤️",
    title: "10 razones para elegirte",
    text: `
      <div class="special-day reasons-day">
 
        <h2>Hay 10 cosas que quiero recordarte</h2>
 
        <p>
          Toca cada corazón para descubrirlas.
        </p>
 
        <div class="reasons-grid">
 
          <button onclick="showReason(1)">❤️</button>
          <button onclick="showReason(2)">❤️</button>
          <button onclick="showReason(3)">❤️</button>
          <button onclick="showReason(4)">❤️</button>
          <button onclick="showReason(5)">❤️</button>
          <button onclick="showReason(6)">❤️</button>
          <button onclick="showReason(7)">❤️</button>
          <button onclick="showReason(8)">❤️</button>
          <button onclick="showReason(9)">❤️</button>
          <button onclick="showReason(10)">❤️</button>
 
        </div>
 
        <div id="reason-text" class="reason-text">
          Elige un corazón ❤️
        </div>
 
      </div>
    `
  },
 
 
  // =======================================================
  // DÍA 21 - FLORES AMARILLAS
  // =======================================================
  {
    icon: "🌻",
    title: "Un jardín para ti",
    text: `
      <div class="special-day flowers-day">
 
        <div id="flower-garden" class="flower-garden">
 
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
          <span>🌻</span>
 
        </div>
 
        <h2>Mañana es nuestro día...</h2>
 
        <p>
          Pero no quería esperar hasta mañana
          para darte algo.
        </p>
 
        <p>
          Sé cuánto te gustan las flores amarillas. 🌻
        </p>
 
        <button class="special-btn" onclick="growFlowers()">
          🌻 Recibir mis flores
        </button>
 
        <div id="flower-message" class="hidden-message">
 
          <strong>
            Así que hoy quiero regalarte un jardín entero. 🌻
          </strong>
 
          <br><br>
 
          Porque cada vez que veo una flor amarilla
          pienso en ti.
 
          <br><br>
 
          Las flores pueden marchitarse...
 
          <br><br>
 
          <strong>
            pero todo lo que siento por ti
            sigue creciendo. ❤️
          </strong>
 
          <br><br>
 
          <span class="flower-final">
            Esta es para ti. 🌻
          </span>
 
          <br><br>
 
          Mañana te entregaré la más importante.
 
        </div>
 
      </div>
    `
  },
 
 
  // =======================================================
  // DÍA 22 - GRAN FINAL INTERACTIVO
  // =======================================================
  {
    icon: "💖",
    title: "Feliz aniversario, mi amor",
    day22: true
  },
 
  // =======================================================
  // DÍA 23 - EL GRAN DÍA DE ANDREA
  // =======================================================
  {
    icon: "🎓",
    title: "Hoy es tu gran día, Andrea",
    day23: true
  }
 
];
 
 
// =========================================================
// VARIABLES GLOBALES
// =========================================================
 
window.currentCarouselSlides = [];
window.currentCarouselIndex = 0;
 
window.passportState = {
  page: 0,
  opened: false,
  stamped: false
};
 
window.wordSearchState = null;
 
 
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
 
  return formatter.format(new Date());
 
}
 
 
// =========================================================
// CONVERTIR FECHA A UTC
// =========================================================
 
function dateToUTC(dateString) {
 
  const [y, m, d] =
    dateString.split("-").map(Number);
 
  return Date.UTC(
    y,
    m - 1,
    d
  );
 
}
 
 
// =========================================================
// DÍA ACTUAL
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
// FECHA ANIVERSARIO
// =========================================================
 
function getAnniversaryDate() {
 
  return new Date(
    `${ANNIVERSARY_DATE}T00:00:00-05:00`
  );
 
}
 
 
// =========================================================
// CONTADOR
// =========================================================
 
function updateCountdown() {
 
  const now =
    new Date();
 
  const anniversary =
    getAnniversaryDate();
 
  const diff =
    anniversary.getTime() -
    now.getTime();
 
 
  const label =
    document.getElementById(
      "countdown-label"
    );
 
  const days =
    document.getElementById(
      "days"
    );
 
  const hours =
    document.getElementById(
      "hours"
    );
 
  const minutes =
    document.getElementById(
      "minutes"
    );
 
  const seconds =
    document.getElementById(
      "seconds"
    );
 
 
  if (
    !label ||
    !days ||
    !hours ||
    !minutes ||
    !seconds
  ) {
 
    return;
 
  }
 
 
  if (diff <= 0) {
 
    label.textContent =
      "❤️ Hoy es nuestro día ❤️";
 
    days.textContent =
      "00";
 
    hours.textContent =
      "00";
 
    minutes.textContent =
      "00";
 
    seconds.textContent =
      "00";
 
    return;
 
  }
 
 
  const d =
    Math.floor(
      diff / 86400000
    );
 
  const h =
    Math.floor(
      (diff % 86400000) /
      3600000
    );
 
  const m =
    Math.floor(
      (diff % 3600000) /
      60000
    );
 
  const s =
    Math.floor(
      (diff % 60000) /
      1000
    );
 
 
  days.textContent =
    String(d).padStart(
      2,
      "0"
    );
 
  hours.textContent =
    String(h).padStart(
      2,
      "0"
    );
 
  minutes.textContent =
    String(m).padStart(
      2,
      "0"
    );
 
  seconds.textContent =
    String(s).padStart(
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
 
 
  if (!calendar) {
    return;
  }
 
 
  const currentDay =
    getCurrentDay();
 
 
  const status =
    document.getElementById(
      "status-text"
    );
 
 
  if (status) {
 
    if (currentDay === 0) {
 
      status.textContent =
        "La cuenta regresiva comienza el 1 de septiembre ❤️";
 
    }
 
    else if (
      currentDay >= TOTAL_DAYS
    ) {
 
      status.textContent =
        "Hoy es nuestro día. ❤️";
 
    }
 
    else {
 
      status.textContent =
        `Hoy está disponible el detalle del día ${currentDay}. Los demás se desbloquearán automáticamente.`;
 
    }
 
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
 
 
    card.type =
      "button";
 
 
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
 
 
    calendar.appendChild(card);
 
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
        image,
 
        title: "",
 
        text: ""
      })
    );
 
  }
 
 
  if (surprise.image) {
 
    return [
      {
        image:
          surprise.image,
 
        title: "",
 
        text: ""
      }
    ];
 
  }
 
 
  return [];
 
}
 
 
// =========================================================
// ABRIR SORPRESA
// =========================================================
 
function openSurprise(day) {
 
  const currentDay =
    getCurrentDay();
 
 
  if (
    day > currentDay
  ) {
 
    showLockedMessage(day);
 
    return;
 
  }
 
 
  const surprise =
    surprises[day - 1];
 
 
  if (!surprise) {
    return;
  }
 
 
  const modalDay =
    document.getElementById(
      "modal-day"
    );
 
  const modalTitle =
    document.getElementById(
      "modal-title"
    );
 
  const modalIcon =
    document.getElementById(
      "modal-icon"
    );
 
  const modalBody =
    document.getElementById(
      "modal-body"
    );
 
 
  if (
    !modalDay ||
    !modalTitle ||
    !modalIcon ||
    !modalBody
  ) {
 
    console.error(
      "No se encontraron los elementos del modal."
    );
 
    return;
 
  }
 
 
  modalDay.textContent =
    `Día ${String(day).padStart(2, "0")} · ${getDayLabel(day)}`;
 
  modalTitle.textContent =
    surprise.title;
 
  modalIcon.textContent =
    surprise.icon;
 
 
  // -------------------------------------------------------
  // REINICIAR ESTADOS
  // -------------------------------------------------------
 
  window.currentCarouselSlides =
    [];
 
  window.currentCarouselIndex =
    0;
 
 
  window.passportState = {
    page: 0,
    opened: false,
    stamped: false
  };
 
 
  window.wordSearchState =
    null;
 
 
  let body =
    "";
 
 
  const slides =
    normalizeSlides(
      surprise
    );
 
 
  window.currentCarouselSlides =
    slides;
 
 
  // =======================================================
  // DÍA 22 - GRAN FINAL INTERACTIVO
  // =======================================================
 
  if (surprise.day22) {
 
    body = `
      <div id="day22" class="day22-container"></div>
    `;
 
  }
 
 
  // =======================================================
  // DÍA 23 - DEFENSA DE ANDREA
  // =======================================================
 
  else if (surprise.day23) {
 
    body = `
      <div id="day23" class="day23-container"></div>
    `;
 
  }
 
 
  // =======================================================
  // DÍA 12 - PASAPORTE
  // =======================================================
 
  else if (surprise.passport) {
 
    body = `
 
      <div
        id="passport-container"
        class="passport-container"
      >
 
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
            type="button"
            class="passport-open-button"
            onclick="openPassport()"
          >
            ✈️ ABRIR PASAPORTE
          </button>
 
        </div>
 
 
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
              INTRO
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
 
 
          <div class="passport-controls">
 
            <button
              type="button"
              id="passport-prev"
              class="passport-nav-button"
              onclick="changePassportPage(-1)"
              disabled
            >
              ← Anterior
            </button>
 
 
            <button
              type="button"
              id="passport-next"
              class="passport-nav-button primary"
              onclick="changePassportPage(1)"
            >
              COMENZAR →
            </button>
 
          </div>
 
 
          <div
            id="passport-final-button"
            class="passport-final-button"
            style="display:none;"
          >
 
            <button
              type="button"
              onclick="stampPassport()"
            >
              ❤️ ESTAMPAR NUESTRO PASAPORTE
            </button>
 
          </div>
 
 
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
 
 
  // =======================================================
  // DÍA 9 - CARRUSEL DE TEXTO
  // =======================================================
 
  else if (
    surprise.textCarousel &&
    slides.length > 0
  ) {
 
    body += `
 
      <div class="text-carousel">
 
        <button
          type="button"
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
 
            <span id="text-carousel-counter">
              1 / ${slides.length}
            </span>
 
          </div>
 
 
          <div class="text-carousel-content">
 
            <div class="text-carousel-icon">
              💛
            </div>
 
            <h3 id="text-carousel-title">
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
          type="button"
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
      (slide, index) => {
 
        body += `
 
          <button
            type="button"
            class="carousel-dot ${
              index === 0
                ? "active"
                : ""
            }"
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
 
 
  // =======================================================
  // DÍA 11 - SOPA DE LETRAS
  // =======================================================
 
  if (surprise.wordSearch) {
 
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
 
          <span>/</span>
 
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
        ></div>
 
 
        <div class="word-search-board-container">
 
          <div
            id="word-search-board"
            class="word-search-board"
            aria-label="Sopa de letras"
          ></div>
 
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
 
 
  // =======================================================
  // FOTOS
  // =======================================================
 
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
 
 
      if (slides[0].text) {
 
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
            type="button"
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
            type="button"
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
        (slide, index) => {
 
          body += `
 
            <button
              type="button"
              class="carousel-dot ${
                index === 0
                  ? "active"
                  : ""
              }"
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
 
 
  // =======================================================
  // TEXTO PRINCIPAL
  // =======================================================
 
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
 
 
  // =======================================================
  // INSERTAR
  // =======================================================
 
  modalBody.innerHTML =
    body;
 
 
  // =======================================================
  // ABRIR MODAL
  // =======================================================
 
  const modal =
    document.getElementById(
      "modal"
    );
 
 
  if (!modal) {
 
    console.error(
      "No existe #modal en el HTML."
    );
 
    return;
 
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
 
 
  // =======================================================
  // INICIAR SOPA
  // =======================================================
 
  if (surprise.wordSearch) {
 
    setTimeout(
      initializeWordSearch,
      100
    );
 
  }
 
 
  // =======================================================
  // DÍA 22 - INICIAR GRAN FINAL
  // =======================================================
 
  if (day === 22) {
 
    const audio =
      document.getElementById("bg-music");
 
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
 
    setTimeout(
      initDay22,
      100
    );
 
  }
 
  // =======================================================
  // DÍA 23 - INICIAR DEFENSA DE ANDREA
  // =======================================================
 
  if (day === 23) {
 
    const audio =
      document.getElementById("bg-music");
 
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
 
    setTimeout(
      initDay23,
      100
    );
 
  }
 
  // =====================================================
// PÉTALOS DEL DÍA 15
// =====================================================
 
if (day === 15) {
 
  const audio = document.getElementById("bg-music");
 
  if (audio) {
    audio.pause();
  }
 
  createPetals(35);
}
 
}
 
 
// =========================================================
// DÍA 22 — NUESTRO GRAN FINAL
// =========================================================
 
function initDay22() {
 
  const container =
    document.getElementById("day22");
 
  if (!container) return;
 
  container.innerHTML = `
 
    <section class="d22-screen d22-active" id="d22-screen-1">
      <div class="d22-flower">🌻</div>
      <p class="d22-date">22 DE SEPTIEMBRE</p>
      <h2>Después de 22 días...</h2>
      <p class="d22-subtitle">llegaste hasta aquí. ❤️</p>
      <button class="d22-btn" onclick="day22Next(2)">
        Toca para continuar ❤️
      </button>
    </section>
 
    <section class="d22-screen" id="d22-screen-2">
      <p class="d22-small-title">NUESTRA HISTORIA</p>
      <h2>22 días...</h2>
      <div class="d22-days" id="d22-days"></div>
      <p>22 días. 22 recuerdos.</p>
      <button class="d22-btn" onclick="day22Next(3)">
        Continuar ❤️
      </button>
    </section>
 
    <section class="d22-screen" id="d22-screen-3">
      <div class="d22-big-heart">❤️</div>
      <h2>22 días.</h2>
      <p>22 recuerdos.</p>
      <p>Una historia.</p>
      <div class="d22-divider">✦</div>
      <h3>Y todavía nos quedan muchísimos capítulos.</h3>
      <button class="d22-btn" onclick="day22Next(4)">
        Quiero seguir ❤️
      </button>
    </section>
 
    <section class="d22-screen d22-letter-screen" id="d22-screen-4">
      <p class="d22-small-title">PARA TI</p>
      <h2>Una última carta 💌</h2>
 
      <div class="d22-letter">
        <p><strong>Andrea:</strong></p>
        <p>Si llegaste hasta aquí, quiero que sepas algo.</p>
        <p>
          Estos 22 días fueron mi pequeña manera de recordarte
          todas esas cosas que a veces no digo lo suficiente.
        </p>
        <p>
          Recordarte nuestras risas, nuestras locuras, nuestros
          momentos simples y todos esos recuerdos que poco a poco
          se fueron convirtiendo en nuestra historia.
        </p>
        <p>
          Recuerdo nuestro primer viaje juntos
          nuestras aventuras, nuestras bromas y todas esas pequeñas
          cosas que quizás para cualquier otra persona no significarían
          demasiado.
        </p>
        <p>Pero para mí significan muchísimo, porque las viví contigo mi Andrea.</p>
        <p>
          El rojo, compartir el número 21 en nuestros uniformes, los momentos tomando juntos 
          , nuestras chocoaventuras y todas esas pequeñas cosas
          que solamente nosotros entendemos.
        </p>
        <p>Todo eso forma parte de nosotros.</p>
        <p>
          También quiero que sepas que admiro todo lo que estás haciendo
          y todo lo que estás a punto de conseguir.
        </p>
        <p>
          Estás cerca de defender tu tesis y quiero que nunca olvides
          lo capaz que eres.
        </p>
        <p>Hoy no quiero solamente celebrar nuestro aniversario.</p>
        <p>Quiero celebrar a la persona que eres.</p>
        <p class="d22-emphasis">La mujer que amo.</p>
        <p>
          La persona con quien quiero seguir compartiendo viajes, risas,
          problemas, logros, planes y muchísimas aventuras más.
        </p>
        <p>Porque estos 22 días no son el final.</p>
        <p class="d22-final-text">
          Son solamente el comienzo de todos los días que todavía nos quedan.
        </p>
        <p>
          Y si pudiera volver al primer día en que comenzamos nuestra historia,
          volvería a elegirte.
        </p>
        <p>Una vez.</p>
        <p>Y otra.</p>
        <p>Y otra.</p>
        <p class="d22-always">Siempre tú. ❤️</p>
        <p>Feliz aniversario, Mi Andrea.</p>
        <p class="d22-love">Te amo.</p>
        <p class="d22-signature">— Marlon ❤️</p>
      </div>
 
      <button class="d22-btn" onclick="day22Next(5)">
        Todavía falta algo... 🌻
      </button>
    </section>
 
    <section class="d22-screen" id="d22-screen-5">
      <p class="d22-small-title">UNA ÚLTIMA SORPRESA</p>
      <h2>Pero todavía me falta darte algo...</h2>
      <div class="d22-seed" id="d22-seed">🌱</div>
      <p class="d22-flower-text">Algo que me recuerda mucho a ti.</p>
      <button class="d22-btn" onclick="growDay22Flower()">
        Descubrir 🌱
      </button>
    </section>
 
    <section class="d22-screen" id="d22-screen-6">
      <div class="d22-sunflower">🌻</div>
      <h2>Para ti.</h2>
      <p class="d22-flower-message">Porque sé cuánto te gustan. 💛</p>
      <img
        src="images/foto-final.jpg"
        class="d22-final-image"
        alt="Nuestro recuerdo"
      >
      <button class="d22-btn" onclick="day22Next(7)">
        Una última pregunta... ❤️
      </button>
    </section>
 
    <section class="d22-screen" id="d22-screen-7">
      <div class="d22-question-heart">❤️</div>
      <p class="d22-small-title">Y AHORA SÍ...</p>
      <h2>Tengo una última pregunta para ti.</h2>
      <button class="d22-btn d22-ready" onclick="day22ShowQuestion()">
        Estoy lista ❤️
      </button>
    </section>
 
    <section class="d22-screen" id="d22-screen-8">
      <div class="d22-big-heart">❤️</div>
      <h2>¿Quieres seguir escribiendo esta historia conmigo?</h2>
      <div class="d22-question-buttons">
        <button class="d22-choice" onclick="day22Final()">
          ❤️ Sí
        </button>
        <button class="d22-choice" onclick="day22Final()">
          🥰 Obviamente
        </button>
      </div>
    </section>
 
    <section class="d22-screen d22-final-screen" id="d22-screen-9">
      <div class="d22-petals-final"></div>
      <div class="d22-final-content">
        <div class="d22-final-flower">🌻</div>
        <p class="d22-final-name">ANDREA</p>
        <p class="d22-thanks">Gracias por estos años.</p>
        <p class="d22-thanks">Gracias por cada recuerdo.</p>
        <p class="d22-thanks">Gracias por cada aventura.</p>
        <p class="d22-thanks">Gracias por cada risa.</p>
        <div class="d22-final-line"></div>
        <h2>Feliz aniversario</h2>
        <p class="d22-date-final">22 • 09 • 2026</p>
        <div class="d22-couple">MARLON ❤️ ANDREA</div>
        <p class="d22-continue">Nuestra historia continúa...</p>
        <div class="d22-i-love-you">TE AMO ❤️</div>
      </div>
    </section>
 
  `;
 
  createDay22Days();
}
 
 
// =========================================================
// CREAR LOS 22 DÍAS
// =========================================================
 
function createDay22Days() {
 
  const container =
    document.getElementById("d22-days");
 
  if (!container) return;
 
  container.innerHTML = "";
 
  for (let i = 1; i <= 22; i++) {
 
    const item =
      document.createElement("span");
 
    item.className = "d22-day";
 
    if (i === 22) {
 
      item.innerHTML = "22 🌻";
      item.classList.add("d22-last-day");
 
    } else {
 
      item.innerHTML =
        String(i).padStart(2, "0") + " ❤️";
 
    }
 
    container.appendChild(item);
 
    setTimeout(() => {
      item.classList.add("d22-day-show");
    }, i * 120);
  }
}
 
 
// =========================================================
// CAMBIAR PANTALLA
// =========================================================
 
function day22Next(number) {
 
  document
    .querySelectorAll(".d22-screen")
    .forEach(screen => {
      screen.classList.remove("d22-active");
    });
 
  const next =
    document.getElementById(
      "d22-screen-" + number
    );
 
  if (!next) return;
 
  setTimeout(() => {
    next.classList.add("d22-active");
  }, 100);
 
  if (number === 2) {
    createHearts(8);
  }
 
  if (number === 5) {
    createDay22Petals(12);
  }
}
 
 
// =========================================================
// HACER CRECER EL GIRASOL
// =========================================================
 
function growDay22Flower() {
 
  const seed =
    document.getElementById("d22-seed");
 
  if (!seed) return;
 
  seed.classList.add("d22-growing");
 
  setTimeout(() => {
    createDay22Petals(18);
  }, 500);
 
  setTimeout(() => {
    day22Next(6);
  }, 1300);
}
 
 
// =========================================================
// MOSTRAR PREGUNTA
// =========================================================
 
function day22ShowQuestion() {
 
  day22Next(8);
 
  setTimeout(() => {
    createHearts(12);
  }, 300);
}
 
 
// =========================================================
// FINAL
// =========================================================
 
function day22Final() {
 
  day22Next(9);
 
  createDay22Petals(35);
  createHearts(18);
 
  setTimeout(() => {
    createDay22Petals(35);
  }, 1500);
 
  setTimeout(() => {
    createDay22Petals(35);
  }, 3000);
}
 
 
// =========================================================
// PÉTALOS DEL DÍA 22
// =========================================================
 
function createDay22Petals(amount = 20) {
 
  const containers =
    document.querySelectorAll(".d22-petals-final");
 
  if (!containers.length) return;
 
  const container =
    containers[containers.length - 1];
 
  for (let i = 0; i < amount; i++) {
 
    const petal =
      document.createElement("span");
 
    petal.className = "d22-petal";
    petal.innerHTML = "🌻";
 
    petal.style.left =
      Math.random() * 100 + "%";
 
    petal.style.animationDuration =
      (4 + Math.random() * 5) + "s";
 
    petal.style.animationDelay =
      Math.random() * 2 + "s";
 
    petal.style.fontSize =
      (12 + Math.random() * 15) + "px";
 
    container.appendChild(petal);
 
    setTimeout(() => {
      petal.remove();
    }, 10000);
  }
}
 
 
// =========================================================
// DÍA 23 — EL GRAN DÍA DE ANDREA
// =========================================================
 
window.day23Interval = null;
 
 
// =========================================================
// INICIAR DÍA 23
// =========================================================
 
function initDay23() {
 
  const container =
    document.getElementById("day23");
 
  if (!container) return;
 
 
  if (window.day23Interval) {
 
    clearInterval(
      window.day23Interval
    );
 
  }
 
 
  container.innerHTML = `
 
    <style>
 
      .day23-container {
        width: 100%;
        min-height: 620px;
        position: relative;
        overflow: hidden;
        border-radius: 25px;
        background:
          radial-gradient(
            circle at top,
            rgba(255, 215, 80, 0.16),
            transparent 45%
          ),
          linear-gradient(
            145deg,
            #111111,
            #1b1b1b 50%,
            #101010
          );
        color: white;
        padding: 25px;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
      }
 
      .d23-screen {
        min-height: 570px;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        z-index: 2;
        animation: d23Fade 0.8s ease;
      }
 
      .d23-screen.d23-active {
        display: flex;
      }
 
      @keyframes d23Fade {
        from {
          opacity: 0;
          transform: translateY(20px) scale(.98);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
 
      .d23-graduation-icon {
        font-size: 75px;
        margin-bottom: 15px;
        animation: d23Float 3s ease-in-out infinite;
      }
 
      @keyframes d23Float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
 
      .d23-date {
        letter-spacing: 4px;
        font-size: 13px;
        font-weight: bold;
        opacity: .75;
        margin-bottom: 12px;
      }
 
      .d23-title {
        font-size: clamp(30px, 6vw, 52px);
        margin: 0 0 15px;
        line-height: 1.1;
      }
 
      .d23-subtitle {
        max-width: 650px;
        font-size: 18px;
        line-height: 1.7;
        opacity: .9;
      }
 
      .d23-highlight {
        font-size: 28px;
        font-weight: bold;
        margin: 20px 0;
      }
 
      .d23-countdown {
        margin: 25px 0;
        padding: 20px 30px;
        border-radius: 20px;
        background: rgba(255,255,255,.07);
        border: 1px solid rgba(255,255,255,.12);
        backdrop-filter: blur(8px);
      }
 
      .d23-countdown-label {
        display: block;
        font-size: 12px;
        letter-spacing: 3px;
        opacity: .7;
        margin-bottom: 8px;
      }
 
      .d23-countdown-time {
        font-size: clamp(32px, 7vw, 58px);
        font-weight: bold;
        letter-spacing: 3px;
        font-variant-numeric: tabular-nums;
      }
 
      .d23-btn {
        border: none;
        border-radius: 999px;
        padding: 14px 28px;
        margin-top: 20px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        background: linear-gradient(135deg, #ffd95a, #f2b93f);
        color: #161616;
        box-shadow: 0 10px 30px rgba(0,0,0,.3);
        transition: transform .2s ease, box-shadow .2s ease;
      }
 
      .d23-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 14px 35px rgba(0,0,0,.4);
      }
 
      .d23-moment {
        max-width: 650px;
      }
 
      .d23-moment-icon {
        font-size: 70px;
        margin-bottom: 15px;
      }
 
      .d23-breathe {
        margin-top: 25px;
        padding: 20px;
        border-radius: 18px;
        background: rgba(255,255,255,.06);
        line-height: 1.8;
      }
 
      .d23-dashboard {
        width: 100%;
        max-width: 800px;
        margin-top: 20px;
      }
 
      .d23-status {
        display: inline-block;
        padding: 8px 15px;
        border-radius: 999px;
        font-size: 12px;
        letter-spacing: 2px;
        background: rgba(255,255,255,.08);
        margin-bottom: 12px;
      }
 
      .d23-dashboard h2 {
        font-size: clamp(28px, 5vw, 44px);
        margin: 5px 0 10px;
      }
 
      .d23-degree {
        font-size: 18px;
        line-height: 1.6;
        max-width: 650px;
        margin: 0 auto 25px;
      }
 
      .d23-data-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 12px;
        width: 100%;
      }
 
      .d23-data-card {
        padding: 18px 12px;
        border-radius: 18px;
        background: rgba(255,255,255,.06);
        border: 1px solid rgba(255,255,255,.08);
      }
 
      .d23-data-number {
        display: block;
        font-size: 27px;
        font-weight: bold;
        margin-bottom: 6px;
      }
 
      .d23-data-label {
        font-size: 11px;
        letter-spacing: 1px;
        opacity: .65;
        text-transform: uppercase;
      }
 
      .d23-message {
        max-width: 680px;
        margin-top: 25px;
        padding: 22px;
        border-radius: 20px;
        background: rgba(255,255,255,.06);
        line-height: 1.8;
        font-size: 16px;
      }
 
      .d23-message strong {
        font-size: 20px;
      }
 
      .d23-analysis {
        width: 100%;
        max-width: 700px;
        margin-top: 25px;
        padding: 25px;
        border-radius: 22px;
        background: rgba(255,255,255,.06);
        text-align: left;
        line-height: 1.8;
        display: none;
        animation: d23Fade .8s ease;
      }
 
      .d23-analysis.show {
        display: block;
      }
 
      .d23-analysis-title {
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 18px;
      }
 
      .d23-result {
        text-align: center;
        margin-top: 20px;
        padding: 20px;
        border-radius: 18px;
        background: rgba(255,255,255,.05);
      }
 
      .d23-result-main {
        font-size: 30px;
        font-weight: bold;
        margin: 12px 0;
      }
 
      .d23-heart {
        position: absolute;
        bottom: -30px;
        font-size: 25px;
        opacity: .35;
        animation: d23Heart linear infinite;
        pointer-events: none;
      }
 
      @keyframes d23Heart {
        from {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        20% { opacity: .45; }
        to {
          transform: translateY(-700px) rotate(25deg);
          opacity: 0;
        }
      }
 
      @media (max-width: 600px) {
        .day23-container { padding: 15px; }
        .d23-screen { min-height: 600px; }
        .d23-title { font-size: 32px; }
        .d23-subtitle { font-size: 16px; }
        .d23-countdown-time { font-size: 34px; }
      }
 
    </style>
 
    <!-- PARTE 1 — ANTES DE LA DEFENSA -->
    <section class="d23-screen d23-active" id="d23-before">
 
      <div class="d23-graduation-icon">🎓</div>
 
      <div class="d23-date">
        23 DE SEPTIEMBRE DE 2026
      </div>
 
      <h2 class="d23-title">
        Hoy es tu gran día, Andrea.
      </h2>
 
      <p class="d23-subtitle">
        Después de tantos deberes,
        noches largas, dudas, cansancio,
        trabajo y esfuerzo...
        <br><br>
        llegó el momento de demostrar
        todo lo que has aprendido.
      </p>
 
      <div class="d23-highlight">
        Tecnóloga en Big Data e Inteligencia de Negocios. ❤️
      </div>
 
      <div class="d23-countdown">
        <span class="d23-countdown-label">
          FALTAN PARA TU DEFENSA
        </span>
        <div id="d23-countdown" class="d23-countdown-time">
          00:00:00
        </div>
      </div>
 
      <p class="d23-subtitle">
        Tu defensa es a las <strong>10:15</strong>.
        <br><br>
        Confía en todo lo que sabes.
        Confía en todo lo que has construido.
        <br><br>
        Yo estoy muy orgulloso de ti. ❤️
      </p>
 
    </section>
 
    <!-- PARTE 1B — 10:15 -->
    <section class="d23-screen" id="d23-defense">
 
      <div class="d23-moment">
 
        <div class="d23-moment-icon">🎓</div>
 
        <div class="d23-date">
          10:15 · ES TU MOMENTO
        </div>
 
        <h2 class="d23-title">
          Es tu momento, Andrea.
        </h2>
 
        <p class="d23-subtitle">
          Guarda el teléfono.
          <br><br>
          Respira.
          <br><br>
          Entra.
          <br><br>
          Y demuestra todo lo que sabes.
        </p>
 
        <div class="d23-breathe">
          No necesitas demostrarle a nadie
          algo que tú no hayas demostrado
          ya con todo el camino que recorriste.
          <br><br>
          <strong>Tú puedes. ❤️</strong>
          <br><br>
          Aunque hoy no pueda estar físicamente
          ahí contigo, estoy acompañándote desde aquí.
        </div>
 
      </div>
 
    </section>
 
    <!-- PARTE 2 — DESPUÉS DE LAS 11:00 -->
    <section class="d23-screen" id="d23-after">
 
      <div class="d23-dashboard">
 
        <div class="d23-status">
          ANÁLISIS COMPLETADO · 100%
        </div>
 
        <h2>🎓 ¡LO LOGRASTE, ANDREA!</h2>
 
        <p class="d23-degree">
          Has cerrado una etapa enorme de tu vida.
          <br><br>
          <strong>
            Tecnóloga en Big Data e Inteligencia de Negocios
          </strong>
        </p>
 
        <div class="d23-data-grid">
 
          <div class="d23-data-card">
            <span class="d23-data-number">100%</span>
            <span class="d23-data-label">Conocimiento</span>
          </div>
 
          <div class="d23-data-card">
            <span class="d23-data-number">100%</span>
            <span class="d23-data-label">Perseverancia</span>
          </div>
 
          <div class="d23-data-card">
            <span class="d23-data-number">∞</span>
            <span class="d23-data-label">Esfuerzo</span>
          </div>
 
          <div class="d23-data-card">
            <span class="d23-data-number">∞</span>
            <span class="d23-data-label">Orgullo</span>
          </div>
 
        </div>
 
        <div class="d23-message">
          <strong>Mi Andrea:</strong>
          <br><br>
          Sé que hoy no pude estar ahí contigo.
          <br><br>
          Me hubiera encantado verte entrar,
          verte defender tu tesis y estar ahí
          cuando terminara todo.
          <br><br>
          Pero quiero que sepas que desde aquí
          estoy celebrando contigo.
          <br><br>
          Estoy muy orgulloso de ti, mi pandita.
          <br><br>
          <strong>Lo lograste. ❤️</strong>
        </div>
 
        <button class="d23-btn" onclick="analyzeOurFuture()">
          📊 ANALIZAR NUESTRO FUTURO
        </button>
 
        <div id="d23-analysis" class="d23-analysis">
 
          <div class="d23-analysis-title">
            📊 ANÁLISIS DE DATOS
          </div>
 
          <div>✓ Recuerdos encontrados</div>
          <div>✓ Aventuras encontradas</div>
          <div>✓ Risas encontradas</div>
          <div>✓ Amor encontrado</div>
          <div>✓ Andrea encontrada</div>
          <div>✓ Marlon encontrado</div>
 
          <div class="d23-result">
            <div>RESULTADO DEL ANÁLISIS</div>
 
            <div class="d23-result-main">
              MARLON ❤️ ANDREA
            </div>
 
            <div>
              DATOS INSUFICIENTES PARA DETERMINAR
              CUÁNTAS AVENTURAS NOS FALTAN.
              <br><br>
              PERO HAY ALGO SEGURO:
              <br><br>
              <strong>QUIERO ESTAR EN TODAS. ❤️</strong>
            </div>
          </div>
 
        </div>
 
      </div>
 
    </section>
 
    <div class="d23-heart" style="left:10%;animation-duration:9s;">❤️</div>
    <div class="d23-heart" style="left:30%;animation-duration:12s;">🌻</div>
    <div class="d23-heart" style="left:55%;animation-duration:10s;">❤️</div>
    <div class="d23-heart" style="left:80%;animation-duration:13s;">💛</div>
 
  `;
 
  updateDay23();
 
  window.day23Interval =
    setInterval(
      updateDay23,
      1000
    );
 
}
 
 
// =========================================================
// ACTUALIZAR ETAPA DEL DÍA 23
// =========================================================
 
function updateDay23() {
 
  const before =
    document.getElementById("d23-before");
 
  const defense =
    document.getElementById("d23-defense");
 
  const after =
    document.getElementById("d23-after");
 
  const countdown =
    document.getElementById("d23-countdown");
 
  if (!before || !defense || !after) {
    return;
  }
 
  const params =
    new URLSearchParams(
      window.location.search
    );
 
  const previewPhase =
    params.get("phase");
 
  let phase = "";
 
  if (
    getCurrentDay() === 23 &&
    previewPhase
  ) {
 
    if (previewPhase === "before") {
      phase = "before";
    }
    else if (previewPhase === "defense") {
      phase = "defense";
    }
    else if (previewPhase === "after") {
      phase = "after";
    }
 
  }
 
  if (!phase) {
 
    const now =
      new Date();
 
    const defenseTime =
      new Date(
        `${DEFENSE_DATE}T${DEFENSE_TIME}:00-05:00`
      );
 
    const postDefenseTime =
      new Date(
        `${DEFENSE_DATE}T${POST_DEFENSE_TIME}:00-05:00`
      );
 
    if (
      now.getTime() <
      defenseTime.getTime()
    ) {
      phase = "before";
    }
    else if (
      now.getTime() <
      postDefenseTime.getTime()
    ) {
      phase = "defense";
    }
    else {
      phase = "after";
    }
 
  }
 
  before.classList.remove("d23-active");
  defense.classList.remove("d23-active");
  after.classList.remove("d23-active");
 
  if (phase === "before") {
 
    before.classList.add("d23-active");
 
    if (countdown) {
 
      const now =
        new Date();
 
      const target =
        new Date(
          `${DEFENSE_DATE}T${DEFENSE_TIME}:00-05:00`
        );
 
      let difference =
        target.getTime() -
        now.getTime();
 
      if (difference < 0) {
        difference = 0;
      }
 
      const totalSeconds =
        Math.floor(
          difference / 1000
        );
 
      const hours =
        Math.floor(
          totalSeconds / 3600
        );
 
      const minutes =
        Math.floor(
          (totalSeconds % 3600) / 60
        );
 
      const seconds =
        totalSeconds % 60;
 
      countdown.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
 
    }
 
  }
  else if (phase === "defense") {
 
    defense.classList.add("d23-active");
 
  }
  else {
 
    after.classList.add("d23-active");
 
  }
 
}
 
 
// =========================================================
// ANALIZAR NUESTRO FUTURO
// =========================================================
 
function analyzeOurFuture() {
 
  const analysis =
    document.getElementById(
      "d23-analysis"
    );
 
  if (!analysis) return;
 
  analysis.classList.add("show");
 
  analysis.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
 
}
 
 
// =========================================================
// DÍA 13 — AVENTURA
// =========================================================
 
function selectAdventure(option) {
 
  const result =
    document.getElementById(
      "day13-result"
    );
 
  const resultTitle =
    document.getElementById(
      "day13-result-title"
    );
 
 
  if (
    !result ||
    !resultTitle
  ) {
 
    return;
 
  }
 
 
  let title =
    "";
 
 
  if (option === 1) {
 
    title =
      "🌅 Nuestra escapada juntos";
 
  }
 
  else if (option === 2) {
 
    title =
      "❤️ Un día solamente para nosotros";
 
  }
 
  else if (option === 3) {
 
    title =
      "🗺️ Nuestra próxima aventura";
 
  }
 
 
  resultTitle.textContent =
    title;
 
 
  result.classList.add(
    "show"
  );
 
 
  const options =
    document.querySelector(
      ".day13-options"
    );
 
 
  if (options) {
 
    options.classList.add(
      "hidden"
    );
 
  }
 
 
  createHearts(10);
 
 
  setTimeout(
    () => {
 
      result.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
 
    },
    200
  );
 
}
 
 
// =========================================================
// VOLVER A ELEGIR DÍA 13
// =========================================================
 
function resetAdventure() {
 
  const result =
    document.getElementById(
      "day13-result"
    );
 
  const options =
    document.querySelector(
      ".day13-options"
    );
 
 
  if (result) {
 
    result.classList.remove(
      "show"
    );
 
  }
 
 
  if (options) {
 
    options.classList.remove(
      "hidden"
    );
 
  }
 
 
  const adventure =
    document.querySelector(
      ".day13-adventure"
    );
 
 
  if (adventure) {
 
    adventure.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
 
  }
 
}
 
 
// =========================================================
// CARRUSEL DE FOTOS
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
// IR A FOTO
// =========================================================
 
function goToCarousel(index) {
 
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
// ACTUALIZAR FOTO
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
 
 
  if (!image) {
    return;
  }
 
 
  const index =
    window.currentCarouselIndex;
 
  const slides =
    window.currentCarouselSlides;
 
  const currentSlide =
    slides[index];
 
 
  if (!currentSlide) {
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
 
 
  if (counter) {
 
    counter.textContent =
      `${index + 1} / ${slides.length}`;
 
  }
 
 
  if (description) {
 
    description.innerHTML =
      currentSlide.text || "";
 
  }
 
 
  dots.forEach(
    (dot, i) => {
 
      dot.classList.toggle(
        "active",
        i === index
      );
 
    }
  );
 
}
 
 
// =========================================================
// CARRUSEL DÍA 9
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
// IR A CONFESIÓN
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
 
 
  if (content) {
 
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
 
 
  if (counter) {
 
    counter.textContent =
      `${window.currentCarouselIndex + 1} / ${window.currentCarouselSlides.length}`;
 
  }
 
 
  dots.forEach(
    (dot, index) => {
 
      dot.classList.toggle(
        "active",
        index ===
        window.currentCarouselIndex
      );
 
    }
  );
 
}
 
 
// =========================================================
// PASAPORTE DÍA 12
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
 
    console.error(
      "No se encontró el contenido del pasaporte."
    );
 
    return;
 
  }
 
 
  window.passportState = {
    page: 0,
    opened: true,
    stamped: false
  };
 
 
  cover.classList.add(
    "passport-cover-opening"
  );
 
 
  setTimeout(
    () => {
 
      cover.style.display =
        "none";
 
      inside.style.display =
        "block";
 
      renderPassportPage();
 
    },
    550
  );
 
}
 
 
// =========================================================
// RENDERIZAR PASAPORTE
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
    !Array.isArray(
      surprise.destinations
    )
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
 
 
  if (!content) {
    return;
  }
 
 
  // =======================================================
  // INTRO
  // =======================================================
 
  if (
    state.page === 0
  ) {
 
    if (intro) {
 
      intro.style.display =
        "block";
 
    }
 
 
    content.innerHTML =
      "";
 
 
    if (stamp) {
 
      stamp.innerHTML =
        "";
 
      stamp.classList.remove(
        "passport-stamp-visible"
      );
 
    }
 
 
    if (counter) {
 
      counter.textContent =
        "INTRO";
 
    }
 
 
    if (previous) {
 
      previous.disabled =
        true;
 
    }
 
 
    if (next) {
 
      next.style.display =
        "inline-flex";
 
      next.textContent =
        "COMENZAR →";
 
    }
 
 
    if (finalButton) {
 
      finalButton.style.display =
        "none";
 
    }
 
 
    return;
 
  }
 
 
  // =======================================================
  // DESTINO
  // =======================================================
 
  const destination =
    surprise.destinations[
      state.page - 1
    ];
 
 
  if (!destination) {
    return;
  }
 
 
  if (intro) {
 
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
            🌻 ❤️ 🌻
          </div>
        `
        : `
          <div class="passport-destination-decoration">
            ✈️ 🌍 ❤️
          </div>
        `
    }
 
  `;
 
 
  // =======================================================
  // CONTADOR
  // =======================================================
 
  if (counter) {
 
    counter.textContent =
      `${state.page} / 12`;
 
  }
 
 
  // =======================================================
  // SELLO
  // =======================================================
 
  if (stamp) {
 
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
 
 
  // =======================================================
  // ANTERIOR
  // =======================================================
 
  if (previous) {
 
    previous.disabled =
      state.page <= 1;
 
  }
 
 
  // =======================================================
  // SIGUIENTE
  // =======================================================
 
  if (next) {
 
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
 
 
  // =======================================================
  // BOTÓN FINAL
  // =======================================================
 
  if (finalButton) {
 
    finalButton.style.display =
      state.page === 12
        ? "block"
        : "none";
 
  }
 
}
 
 
// =========================================================
// CAMBIAR PÁGINA DEL PASAPORTE
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
    state.page + direction;
 
 
  if (
    nextPage < 0 ||
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
 
 
  if (!finalMessage) {
    return;
  }
 
 
  window.passportState.stamped =
    true;
 
 
  if (finalButton) {
 
    finalButton.style.display =
      "none";
 
  }
 
 
  if (controls) {
 
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
 
 
  createHearts(18);
 
  createPassportFlowers();
 
}
 
 
// =========================================================
// FLORES DEL PASAPORTE
// =========================================================
 
function createPassportFlowers() {
 
  const container =
    document.getElementById(
      "hearts"
    );
 
 
  if (!container) {
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
      () => flower.remove(),
      12000
    );
 
  }
 
}
 
 
// =========================================================
// SOPA DE LETRAS
// =========================================================
 
const WORD_SEARCH_DIRECTIONS = [
 
  {
    row: 0,
    col: 1
  },
 
  {
    row: 0,
    col: -1
  },
 
  {
    row: 1,
    col: 0
  },
 
  {
    row: -1,
    col: 0
  },
 
  {
    row: 1,
    col: 1
  },
 
  {
    row: 1,
    col: -1
  },
 
  {
    row: -1,
    col: 1
  },
 
  {
    row: -1,
    col: -1
  }
 
];
 
 
// =========================================================
// GENERAR SOPA
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
 
 
  const placements = {};
 
 
  function shuffledDirections() {
 
    return [
      ...WORD_SEARCH_DIRECTIONS
    ].sort(
      () =>
        Math.random() - 0.5
    );
 
  }
 
 
  const sortedWords =
    [...cleanWords].sort(
      (a, b) =>
        b.length - a.length
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
            Math.random() * size
          );
 
 
        const startCol =
          Math.floor(
            Math.random() * size
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
            direction.row * i;
 
          const col =
            startCol +
            direction.col * i;
 
 
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
            direction.row * i;
 
          const col =
            startCol +
            direction.col * i;
 
 
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
    words: cleanWords,
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
 
 
    if (cell) {
 
      cell.classList.add(
        "word-search-selected"
      );
 
    }
 
 
    return;
 
  }
 
 
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
 
 
    if (cell) {
 
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
 
 
  if (foundWord) {
 
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
// CELDAS ENTRE DOS PUNTOS
// =========================================================
 
function getCellsBetween(
  startRow,
  startCol,
  endRow,
  endCol
) {
 
  const rowDifference =
    endRow - startRow;
 
  const colDifference =
    endCol - startCol;
 
 
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
 
 
  if (!straightLine) {
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
        rowStep * i,
 
      col:
        startCol +
        colStep * i
 
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
    ({ row, col }) => {
 
      const element =
        getWordSearchCell(
          row,
          col
        );
 
 
      if (element) {
 
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
 
 
  if (wordElement) {
 
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
// CONTADOR SOPA
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
 
 
  if (!board) {
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
 
  if (!element) {
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
// ÉXITO SOPA
// =========================================================
 
function showWordSearchSuccess() {
 
  const success =
    document.getElementById(
      "word-search-success"
    );
 
 
  if (!success) {
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
 
 
  createHearts(18);
 
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
 
 
  if (!container) {
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
// DÍA BLOQUEADO
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
 
  const modal =
    document.getElementById(
      "modal"
    );
 
 
  if (
    !modalDay ||
    !modalIcon ||
    !modalTitle ||
    !modalBody ||
    !modal
  ) {
 
    return;
 
  }
 
 
  modalDay.textContent =
    "🔒 Sorpresa bloqueada";
 
 
  modalIcon.textContent =
    "🤫";
 
 
  modalTitle.textContent =
    "Todavía no...";
 
 
  modalBody.innerHTML = `
 
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
// ETIQUETA DÍA
// =========================================================
 
function getDayLabel(
  day
) {
 
  if (day === 22) {
 
    return "Nuestro día";
 
  }
 
 
  if (day === 23) {
 
    return "El gran día de Andrea";
 
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
 
 
  if (!modal) {
    return;
  }
 
 
  if (window.day23Interval) {
 
    clearInterval(
      window.day23Interval
    );
 
    window.day23Interval = null;
 
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
// IR AL CALENDARIO
// =========================================================
 
function scrollToCalendar() {
 
  const section =
    document.getElementById(
      "calendar-section"
    );
 
 
  if (!section) {
    return;
  }
 
 
  section.scrollIntoView({
    behavior: "smooth"
  });
 
}
 
// =========================================================
// PÉTALOS - DÍA 15
// =========================================================
 
function createPetals(amount = 35) {
 
  if (!document.getElementById("petal-style")) {
 
    const style = document.createElement("style");
 
    style.id = "petal-style";
 
    style.textContent = `
      .floating-petal {
        position: fixed;
        top: -40px;
        z-index: 9999;
        pointer-events: none;
        animation: fallingPetal linear forwards;
      }
 
      @keyframes fallingPetal {
        0% {
          transform: translateY(-40px) rotate(0deg);
          opacity: 0;
        }
 
        10% {
          opacity: 1;
        }
 
        50% {
          transform: translateY(50vh) translateX(40px) rotate(180deg);
        }
 
        100% {
          transform: translateY(110vh) translateX(-50px) rotate(360deg);
          opacity: 0;
        }
      }
    `;
 
    document.head.appendChild(style);
  }
 
  for (let i = 0; i < amount; i++) {
 
    const petal = document.createElement("span");
 
    petal.className = "floating-petal";
    petal.textContent = "🌻";
 
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.fontSize = `${12 + Math.random() * 18}px`;
    petal.style.animationDuration = `${6 + Math.random() * 7}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
 
    document.body.appendChild(petal);
 
    setTimeout(() => petal.remove(), 15000);
  }
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
 
 
  if (!container) {
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
// FUNCIONES DÍAS 16 - 22
// =========================================================
 
function revealThesisMessage() {
  const box = document.getElementById("thesis-message");
  if (box) box.classList.add("show");
}
 
 
function joinUs() {
  const animals = document.querySelector(".animals");
  const message = document.getElementById("us-message");
 
  if (animals) animals.classList.add("joined");
  if (message) message.classList.add("show");
}
 
 
function openFutureDoor() {
  const door = document.getElementById("future-door");
  const message = document.getElementById("future-message");
 
  if (door) door.classList.add("open-door");
  if (message) message.classList.add("show");
}
 
 
function showReason(number) {
 
  const reasons = {
    1: "Porque amo tu forma de querer. ❤️",
 
    2: "Porque contigo puedo ser yo mismo. 🥰",
 
    3: "Porque tu sonrisa puede cambiar completamente mi día. 😊",
 
    4: "Porque amo cómo tratas a los animales y el corazón tan bonito que tienes. 🐾",
 
    5: "Porque incluso tus chistes de doble sentido terminan haciéndome reír. 😂",
 
    6: "Porque admiro la mujer que eres y todo lo que has conseguido. 🌟",
 
    7: "Porque amo compartir contigo mis momentos buenos y malos. 🤍",
 
    8: "Porque contigo he creado recuerdos que no cambiaría por nada. 📸",
 
    9: "Porque todavía quiero vivir muchísimas cosas contigo. 🌎",
 
    10: "Porque entre tantas personas en el mundo, te elegiría a ti una y otra vez. ❤️"
  };
 
  const box = document.getElementById("reason-text");
 
  if (!box) return;
 
  box.classList.remove("reason-show");
 
  void box.offsetWidth;
 
  box.innerHTML = reasons[number];
 
  box.classList.add("reason-show");
}
 
 
function growFlowers() {
 
  const garden = document.getElementById("flower-garden");
  const message = document.getElementById("flower-message");
 
  if (garden) {
    garden.classList.add("garden-grow");
  }
 
  if (message) {
    setTimeout(() => {
      message.classList.add("show");
    }, 700);
  }
 
  createFlowers();
}
 
 
function createFlowers() {
 
  const container = document.getElementById("flower-garden");
 
  if (!container) return;
 
  for (let i = 0; i < 15; i++) {
 
    const flower = document.createElement("span");
 
    flower.textContent = "🌻";
 
    flower.className = "extra-flower";
 
    flower.style.left = Math.random() * 100 + "%";
 
    flower.style.animationDelay =
      Math.random() * 1.5 + "s";
 
    container.appendChild(flower);
  }
}
 
 
function startFinalStory() {
 
  const start = document.getElementById("final-start");
  const story = document.getElementById("final-story");
 
  if (start) start.style.display = "none";
 
  if (story) {
    story.classList.add("show-final");
  }
 
  createHearts(30);
}
 
 
function showFinalMessage() {
 
  const story = document.getElementById("final-story");
  const message = document.getElementById("final-message");
 
  if (story) story.style.display = "none";
 
  if (message) {
    message.classList.add("show-final");
  }
 
  createHearts(45);
}
// =========================================================
// DÍA 18 - QUIZ
// =========================================================
 
const quiz18Questions = [
 
  {
    question: "¿Cómo comenzó nuestra historia?",
    answers: [
      "En una fiesta",
      "Con deberes, pequeñas notitas y luego clases",
      "Por redes sociales",
      "Jugando juntos"
    ],
    correct: 1
  },
 
  {
    question: "¿Cuál fue nuestro primer viaje juntos?",
    answers: [
      "Baños",
      "Papallacta",
      "Montañita",
      "Cuenca"
    ],
    correct: 1
  },
 
  {
    question: "¿Qué color nos representa?",
    answers: [
      "Rojo",
      "Amarrillo",
      "Negro",
      "Azul"
    ],
    correct: 0
  },
 
  {
    question: "¿Qué número usamos en nuestros uniformes de fútbol?",
    answers: [
      "22",
      "20",
      "7",
      "21"
    ],
    correct: 3
  },
 
  {
    question: "¿Qué quiero seguir haciendo contigo?",
    answers: [
      "Vivir solamente momentos tranquilos",
      "Perdernos juntos, descubrir lugares y crear nuevos recuerdos",
      "Viajar únicamente cuando tengamos vacaciones",
      "Dejar de hacer planes"
    ],
    correct: 1
  }
 
];
 
let quiz18Current = 0;
let quiz18Score = 0;
 
 
// =========================================================
// COMENZAR QUIZ
// =========================================================
 
function startQuiz18() {
 
  quiz18Current = 0;
  quiz18Score = 0;
 
  document.querySelector(".quiz18-intro").style.display = "none";
 
  document.getElementById("quiz18-result").style.display = "none";
 
  document.getElementById("quiz18-game").style.display = "block";
 
  showQuiz18Question();
 
}
 
 
// =========================================================
// MOSTRAR PREGUNTA
// =========================================================
 
function showQuiz18Question() {
 
  const q = quiz18Questions[quiz18Current];
 
  document.getElementById("quiz18-number").textContent =
    quiz18Current + 1;
 
  document.getElementById("quiz18-progress-fill").style.width =
    ((quiz18Current + 1) / quiz18Questions.length * 100) + "%";
 
  document.getElementById("quiz18-question").textContent =
    q.question;
 
  const answers =
    document.getElementById("quiz18-answers");
 
  answers.innerHTML = "";
 
  document.getElementById("quiz18-feedback").textContent = "";
 
  q.answers.forEach((answer, index) => {
 
    const button =
      document.createElement("button");
 
    button.className = "quiz18-answer";
 
    button.textContent = answer;
 
    button.onclick = () => checkQuiz18(index);
 
    answers.appendChild(button);
 
  });
 
}
 
 
// =========================================================
// COMPROBAR RESPUESTA
// =========================================================
 
function checkQuiz18(selected) {
 
  const q = quiz18Questions[quiz18Current];
 
  const buttons =
    document.querySelectorAll(".quiz18-answer");
 
  buttons.forEach(button => {
    button.disabled = true;
  });
 
  const selectedButton = buttons[selected];
 
  const feedback =
    document.getElementById("quiz18-feedback");
 
  if (selected === q.correct) {
 
    quiz18Score++;
 
    selectedButton.classList.add("correct");
 
    feedback.innerHTML =
      "✨ ¡Correcto! Sabía que lo recordarías ❤️";
 
    createHearts(5);
 
  } else {
 
    selectedButton.classList.add("wrong");
 
    buttons[q.correct].classList.add("correct");
 
    feedback.innerHTML =
      "💕 Casi... pero nuestra historia dice otra cosa.";
 
  }
 
  setTimeout(() => {
 
    quiz18Current++;
 
    if (quiz18Current < quiz18Questions.length) {
 
      showQuiz18Question();
 
    } else {
 
      finishQuiz18();
 
    }
 
  }, 1400);
 
}
 
 
// =========================================================
// RESULTADO FINAL
// =========================================================
 
function finishQuiz18() {
 
  document.getElementById("quiz18-game").style.display =
    "none";
 
  document.getElementById("quiz18-result").style.display =
    "block";
 
  const icon =
    document.getElementById("quiz18-result-icon");
 
  const title =
    document.getElementById("quiz18-result-title");
 
  const text =
    document.getElementById("quiz18-result-text");
 
  const score =
    document.getElementById("quiz18-score");
 
  score.textContent =
    quiz18Score + " / 5 ❤️";
 
 
  if (quiz18Score === 5) {
 
    icon.textContent = "🥰";
 
    title.textContent =
      "¡Perfecto!";
 
    text.innerHTML =
      "Parece que todavía recuerdas cada pequeño detalle de nosotros.<br><br>" +
      "<strong>Y eso me encanta. ❤️</strong>";
 
    createHearts(15);
 
  }
 
  else if (quiz18Score >= 3) {
 
    icon.textContent = "❤️";
 
    title.textContent =
      "¡Muy bien!";
 
    text.innerHTML =
      "Conoces nuestra historia bastante bien... " +
      "aunque todavía tenemos muchos recuerdos por crear. 🥰";
 
    createHearts(10);
 
  }
 
  else {
 
    icon.textContent = "😏";
 
    title.textContent =
      "Tenemos que repasar nuestra historia";
 
    text.innerHTML =
      "Creo que necesitamos repetir algunas de nuestras aventuras... " +
      "así tendrás otra oportunidad de recordarlas. ❤️";
 
    createHearts(5);
 
  }
 
}
// =========================================================
// ANIMACIÓN CORAZONES
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
 
  catch (error) {
 
    console.error(
      "No se pudo reproducir la música:",
      error
    );
 
 
    alert(
      "No se pudo reproducir la música. Revisa que el archivo exista y que la ruta del audio en tu HTML sea correcta."
    );
 
  }
 
}
 
 
// =========================================================
// ESCAPE
// =========================================================
 
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
 
 
// =========================================================
// INICIAR
// =========================================================
 
document.addEventListener(
  "DOMContentLoaded",
  () => {
 
    renderCalendar();
 
    updateCountdown();
 
    startHeartAnimation();
 
  }
);
 
 
// =========================================================
// ACTUALIZAR CONTADOR
// =========================================================
 
setInterval(
  updateCountdown,
  1000
);
 
 
// =========================================================
// ACTUALIZAR CALENDARIO
// =========================================================
 
setInterval(
  renderCalendar,
  30000
);
