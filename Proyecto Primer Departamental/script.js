const questions = [
    // Índice 0 (12 preguntas)
    {
      question: "¿Qué es un árbol binario?",
      options: [
        "Una estructura de datos no lineal", // Correcta (índice 0)
        "Una base de datos",
        "Un tipo de grafo",
        "Un algoritmo de ordenación"
      ],
      answer: 0,
      difficulty: 5
    },
    {
      question: "¿Qué es la encapsulación en POO?",
      options: [
        "Ocultar los detalles de implementación", // Correcta (índice 0)
        "Un tipo de herencia",
        "Un método estático",
        "Un patrón de diseño"
      ],
      answer: 0,
      difficulty: 8
    },
    {
      question: "¿Qué es un bucle 'for'?",
      options: [
        "Una estructura de control que repite un bloque de código", // Correcta (índice 0)
        "Una función matemática",
        "Un tipo de dato",
        "Un operador lógico"
      ],
      answer: 0,
      difficulty: 1
    },
    {
      question: "¿Qué es un compilador?",
      options: [
        "Un programa que traduce código fuente a código máquina", // Correcta (índice 0)
        "Un tipo de dato",
        "Un sistema operativo",
        "Un lenguaje de programación"
      ],
      answer: 0,
      difficulty: 6
    },
    {
      question: "¿Qué es la programación orientada a objetos (POO)?",
      options: [
        "Un paradigma de programación basado en objetos", // Correcta (índice 0)
        "Un lenguaje de programación",
        "Un tipo de base de datos",
        "Un sistema operativo"
      ],
      answer: 0,
      difficulty: 7
    },
    {
      question: "¿Qué es un bucle 'while'?",
      options: [
        "Una estructura de control que repite un bloque de código mientras se cumpla una condición", // Correcta (índice 0)
        "Un tipo de dato",
        "Un operador lógico",
        "Una función"
      ],
      answer: 0,
      difficulty: 2
    },
    {
      question: "¿Qué es un array?",
      options: [
        "Un tipo de dato que almacena una colección de elementos", // Correcta (índice 0)
        "Un operador lógico",
        "Una función",
        "Un lenguaje de programación"
      ],
      answer: 0,
      difficulty: 3
    },
    {
      question: "¿Qué es un objeto en JavaScript?",
      options: [
        "Un tipo de dato que almacena pares clave-valor", // Correcta (índice 0)
        "Un operador lógico",
        "Una función",
        "Un lenguaje de programación"
      ],
      answer: 0,
      difficulty: 4
    },
    {
      question: "¿Qué es un callback?",
      options: [
        "Una función que se pasa como argumento a otra función", // Correcta (índice 0)
        "Un tipo de dato",
        "Un operador lógico",
        "Un lenguaje de programación"
      ],
      answer: 0,
      difficulty: 5
    },
    {
      question: "¿Qué es una promesa en JavaScript?",
      options: [
        "Un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca", // Correcta (índice 0)
        "Un tipo de dato",
        "Un operador lógico",
        "Una función"
      ],
      answer: 0,
      difficulty: 6
    },
    {
      question: "¿Qué es un módulo en Node.js?",
      options: [
        "Un archivo que contiene código reutilizable", // Correcta (índice 0)
        "Un tipo de dato",
        "Un operador lógico",
        "Una función"
      ],
      answer: 0,
      difficulty: 7
    },
    {
      question: "¿Qué es un closure en JavaScript?",
      options: [
        "Una función que recuerda su ámbito léxico", // Correcta (índice 0)
        "Un tipo de dato",
        "Un operador lógico",
        "Una función"
      ],
      answer: 0,
      difficulty: 8
    },
  
    // Índice 1 (12 preguntas)
    {
      question: "¿Qué es un algoritmo?",
      options: [
        "Un lenguaje de programación",
        "Un conjunto de pasos para resolver un problema", // Correcta (índice 1)
        "Un tipo de dato",
        "Una estructura de datos"
      ],
      answer: 1,
      difficulty: 1
    },
    {
      question: "¿Qué estructura de datos es FIFO?",
      options: [
        "Pila",
        "Cola", // Correcta (índice 1)
        "Lista",
        "Árbol"
      ],
      answer: 1,
      difficulty: 2
    },
    {
      question: "¿Qué es un puntero en C++?",
      options: [
        "Un tipo de dato",
        "Una variable que almacena una dirección de memoria", // Correcta (índice 1)
        "Un operador lógico",
        "Una función"
      ],
      answer: 1,
      difficulty: 7
    },
    {
      question: "¿Qué es un deadlock?",
      options: [
        "Un error de sintaxis",
        "Un problema de concurrencia", // Correcta (índice 1)
        "Un tipo de virus",
        "Un algoritmo de búsqueda"
      ],
      answer: 1,
      difficulty: 9
    },
    {
      question: "¿Qué es un hashmap?",
      options: [
        "Una lista enlazada",
        "Una estructura de datos que mapea claves a valores", // Correcta (índice 1)
        "Un árbol binario",
        "Un grafo dirigido"
      ],
      answer: 1,
      difficulty: 10
    },
    {
      question: "¿Qué es Git?",
      options: [
        "Un lenguaje de programación",
        "Un sistema de control de versiones", // Correcta (índice 1)
        "Un framework de JavaScript",
        "Una base de datos"
      ],
      answer: 1,
      difficulty: 2
    },
    {
      question: "¿Qué es la memoria RAM?",
      options: [
        "Un tipo de almacenamiento permanente",
        "Memoria de acceso aleatorio", // Correcta (índice 1)
        "Un procesador",
        "Un disco duro"
      ],
      answer: 1,
      difficulty: 3
    },
    {
      question: "¿Qué es un framework?",
      options: [
        "Un lenguaje de programación",
        "Un conjunto de herramientas y librerías para desarrollar software", // Correcta (índice 1)
        "Un sistema operativo",
        "Un tipo de base de datos"
      ],
      answer: 1,
      difficulty: 4
    },
    {
      question: "¿Qué es un API?",
      options: [
        "Un lenguaje de programación",
        "Una interfaz de programación de aplicaciones", // Correcta (índice 1)
        "Un sistema operativo",
        "Un tipo de base de datos"
      ],
      answer: 1,
      difficulty: 5
    },
    {
      question: "¿Qué es un IDE?",
      options: [
        "Un lenguaje de programación",
        "Un entorno de desarrollo integrado", // Correcta (índice 1)
        "Un sistema operativo",
        "Un tipo de base de datos"
      ],
      answer: 1,
      difficulty: 3
    },
    {
      question: "¿Qué es la herencia en POO?",
      options: [
        "Un tipo de dato",
        "Un mecanismo para reutilizar código", // Correcta (índice 1)
        "Un operador lógico",
        "Una función"
      ],
      answer: 1,
      difficulty: 7
    },
    {
      question: "¿Qué es un servidor web?",
      options: [
        "Un tipo de base de datos",
        "Un programa que responde a solicitudes HTTP", // Correcta (índice 1)
        "Un lenguaje de programación",
        "Un sistema operativo"
      ],
      answer: 1,
      difficulty: 4
    },
  
    // Índice 2 (12 preguntas)
    {
      question: "¿Qué lenguaje es interpretado?",
      options: [
        "C++",
        "Java",
        "Python", // Correcta (índice 2)
        "C#"
      ],
      answer: 2,
      difficulty: 3
    },
    {
      question: "¿Qué es JSON?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Un formato de intercambio de datos basado en texto", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 4
    },
    {
      question: "¿Qué es AJAX?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una técnica para realizar solicitudes asíncronas en JavaScript", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 6
    },
    {
      question: "¿Qué es un middleware en Express.js?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función que procesa solicitudes HTTP", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 8
    },
    {
      question: "¿Qué es un hook en React?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función que permite usar estado en componentes funcionales", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 7
    },
    {
      question: "¿Qué es un componente en React?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una pieza de código reutilizable para la interfaz", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 6
    },
    {
      question: "¿Qué es el estado en React?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Un objeto que almacena datos dinámicos", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 7
    },
    {
      question: "¿Qué es un prop en React?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Un argumento pasado a un componente", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 6
    },
    {
      question: "¿Qué es un ciclo de vida en React?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Métodos que se ejecutan en etapas del componente", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 8
    },
    {
      question: "¿Qué es un evento en JavaScript?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una acción en el navegador", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 4
    },
    {
      question: "¿Qué es el DOM?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una representación de un documento HTML", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 5
    },
    {
      question: "¿Qué es una API REST?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Un estilo de arquitectura para APIs", // Correcta (índice 2)
        "Una función"
      ],
      answer: 2,
      difficulty: 7
    },
  
    // Índice 3 (14 preguntas)
    {
      question: "¿Qué es la recursión?",
      options: [
        "Un bucle infinito",
        "Un tipo de dato",
        "Un error de compilación",
        "Una función que se llama a sí misma" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 4
    },
    {
      question: "¿Qué es un firewall?",
      options: [
        "Un tipo de base de datos",
        "Un lenguaje de programación",
        "Un sistema operativo",
        "Un sistema de seguridad de red" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 6
    },
    {
      question: "¿Qué es un DNS?",
      options: [
        "Un lenguaje de programación",
        "Un tipo de base de datos",
        "Un sistema operativo",
        "Un traductor de nombres de dominio a IP" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 5
    },
    {
      question: "¿Qué es un sistema operativo?",
      options: [
        "Un lenguaje de programación",
        "Un tipo de base de datos",
        "Un framework",
        "Software que gestiona recursos de hardware" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 2
    },
    {
      question: "¿Qué es Redux?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Una librería para gestión de estado" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 9
    },
    {
      question: "¿Qué es un reducer en Redux?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Función que cambia el estado" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 9
    },
    {
      question: "¿Qué es una acción en Redux?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Objeto que describe un cambio" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 8
    },
    {
      question: "¿Qué es un store en Redux?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Almacén del estado global" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 9
    },
    {
      question: "¿Qué es un thunk en Redux?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Función que retrasa acciones" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 10
    },
    {
      question: "¿Qué es un servicio en Angular?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Clase con funcionalidad específica" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 7
    },
    {
      question: "¿Qué es un pipe en Angular?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Transformador de datos para la vista" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 6
    },
    {
      question: "¿Qué es un módulo en Angular?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Contenedor de componentes y servicios" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 7
    },
    {
      question: "¿Qué es un decorador en Angular?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Función que modifica clases" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 8
    },
    {
      question: "¿Qué es un observable en RxJS?",
      options: [
        "Un tipo de dato",
        "Un operador lógico",
        "Una función",
        "Secuencia de valores asíncronos" // Correcta (índice 3)
      ],
      answer: 3,
      difficulty: 9
    }
  ];
  // Variables globales para controlar el estado del juego
let currentQuestionIndex = 0; // Índice de la pregunta actual
let score = 0; // Puntuación del jugador
let timeLeft = 10; // Tiempo restante para responder la pregunta actual
let timer; // Variable para almacenar el temporizador
let selectedQuestions = []; // Array para almacenar las preguntas seleccionadas aleatoriamente

// Referencias a elementos del DOM
const startScreen = document.getElementById("start-screen"); // Pantalla de inicio
const gameScreen = document.getElementById("game-screen"); // Pantalla del juego
const questionContainer = document.getElementById("question-container"); // Contenedor de la pregunta
const questionElement = document.getElementById("question"); // Elemento que muestra la pregunta
const optionsElement = document.getElementById("options"); // Contenedor de las opciones de respuesta
const timerElement = document.getElementById("time"); // Elemento que muestra el tiempo restante
const scoreElement = document.getElementById("points"); // Elemento que muestra la puntuación
const startButton = document.getElementById("start-button"); // Botón de inicio
const exitButton = document.getElementById("exit-button"); // Botón de salida
const leaderboardList = document.getElementById("leaderboard-list"); // Lista del leaderboard

// Sonidos del juego
const correctSound = new Audio("correct.mp3"); // Sonido de respuesta correcta
const incorrectSound = new Audio("incorrect.mp3"); // Sonido de respuesta incorrecta
const backgroundMusic = new Audio("background-music.mp3"); // Música de fondo

// Mostrar pantalla de inicio y ocultar la pantalla del juego al cargar la página
startScreen.style.display = "block";
gameScreen.style.display = "none";

// Iniciar el juego al hacer clic en el botón de inicio
startButton.addEventListener("click", () => {
  startScreen.style.display = "none"; // Ocultar pantalla de inicio
  gameScreen.style.display = "block"; // Mostrar pantalla del juego
  startGame(); // Llamar a la función para iniciar el juego
});

// Función para obtener el Leaderboard desde localStorage
function getLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || []; // Obtener el leaderboard o un array vacío si no existe
  return leaderboard;
}

// Función para guardar el Leaderboard en localStorage
function saveLeaderboard(leaderboard) {
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard)); // Guardar el leaderboard en localStorage
}

// Función para mostrar el Leaderboard en la pantalla
function displayLeaderboard() {
  const leaderboard = getLeaderboard(); // Obtener el leaderboard
  leaderboardList.innerHTML = ""; // Limpiar la lista actual

  // Recorrer el leaderboard y agregar cada entrada a la lista
  leaderboard.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name}: ${entry.score} puntos`; // Mostrar nombre y puntuación
    leaderboardList.appendChild(li); // Agregar entrada a la lista
  });
}

// Función para agregar una nueva puntuación al Leaderboard
function addToLeaderboard(name, score) {
  const leaderboard = getLeaderboard(); // Obtener el leaderboard actual
  leaderboard.push({ name, score }); // Agregar la nueva puntuación

  // Ordenar el Leaderboard de mayor a menor puntuación
  leaderboard.sort((a, b) => b.score - a.score);

  // Mantener solo las 5 mejores puntuaciones
  if (leaderboard.length > 5) {
    leaderboard.length = 5;
  }

  saveLeaderboard(leaderboard); // Guardar el leaderboard actualizado
  displayLeaderboard(); // Mostrar el leaderboard actualizado
}

// Función para pedir el nombre del jugador al finalizar el juego
function promptPlayerName(score) {
  const name = prompt("¡Juego terminado! Ingresa tu nombre para guardar tu puntuación:"); // Pedir el nombre del jugador
  if (name) {
    addToLeaderboard(name, score); // Agregar la puntuación al leaderboard si se proporciona un nombre
  }
}

// Mostrar el Leaderboard al cargar la página
displayLeaderboard();

// Seleccionar 10 preguntas aleatorias
function selectRandomQuestions() {
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random()); // Mezclar las preguntas
  selectedQuestions = shuffledQuestions.slice(0, 10); // Seleccionar las primeras 10 preguntas
}

// Función para salir del juego
exitButton.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres salir? Tu progreso se perderá")) {
      forceExit();
    }
  });  

  function forceExit() {
    clearInterval(timer);
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reinicia la música
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
    
    // Restablece todos los elementos del juego
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 10;
    scoreElement.textContent = "0";
    timerElement.textContent = "10";
  }

// Función para iniciar el juego
function startGame() {
  selectRandomQuestions(); // Seleccionar 10 preguntas aleatorias
  currentQuestionIndex = 0; // Reiniciar el índice de la pregunta
  score = 0; // Reiniciar la puntuación
  timeLeft = 10; // Reiniciar el tiempo
  backgroundMusic.play(); // Reproducir música de fondo
  loadQuestion(); // Cargar la primera pregunta
  startTimer(); // Iniciar el temporizador
}

// Función para cargar la pregunta actual
function loadQuestion() {
  const currentQuestion = selectedQuestions[currentQuestionIndex]; // Obtener la pregunta actual

  // Aplicar efecto de desvanecimiento
  questionContainer.classList.add("fade-out");
  setTimeout(() => {
    questionElement.textContent = currentQuestion.question; // Mostrar la pregunta
    optionsElement.innerHTML = ""; // Limpiar las opciones anteriores

    // Crear botones para cada opción de respuesta
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option; // Mostrar el texto de la opción
      button.addEventListener("click", () => checkAnswer(index)); // Asignar evento al hacer clic
      optionsElement.appendChild(button); // Agregar el botón al contenedor
    });

    questionContainer.classList.remove("fade-out"); // Quitar el efecto de desvanecimiento
  }, 500); // Duración de la animación
}

// Función para verificar la respuesta seleccionada
function checkAnswer(selectedIndex) {
  const currentQuestion = selectedQuestions[currentQuestionIndex]; // Obtener la pregunta actual
  const selectedButton = optionsElement.children[selectedIndex]; // Obtener el botón seleccionado

  if (selectedIndex === currentQuestion.answer) {
    // Si la respuesta es correcta
    const pointsEarned = Math.floor((timeLeft / 10) * 10 * currentQuestion.difficulty); // Calcular puntos ganados
    score += pointsEarned; // Sumar puntos a la puntuación
    scoreElement.textContent = score; // Actualizar la puntuación en pantalla
    selectedButton.classList.add("correct"); // Aplicar estilo de respuesta correcta
    correctSound.play(); // Reproducir sonido de respuesta correcta
  } else {
    selectedButton.classList.add("incorrect"); // Aplicar estilo de respuesta incorrecta
    incorrectSound.play(); // Reproducir sonido de respuesta incorrecta
  }

  // Deshabilitar botones después de seleccionar una respuesta
  Array.from(optionsElement.children).forEach(button => {
    button.disabled = true;
  });

  clearInterval(timer); // Detener el temporizador actual
  setTimeout(() => {
    selectedButton.classList.remove("correct", "incorrect"); // Quitar estilos de respuesta
    nextQuestion(); // Pasar a la siguiente pregunta
  }, 1000);
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++; // Incrementar el índice de la pregunta
  if (currentQuestionIndex < selectedQuestions.length) {
    timeLeft = 10; // Reiniciar el tiempo
    loadQuestion(); // Cargar la siguiente pregunta
    startTimer(); // Iniciar un nuevo temporizador
  } else {
    endGame(); // Finalizar el juego si no hay más preguntas
  }
}

// Función para iniciar el temporizador
function startTimer() {
  clearInterval(timer); // Limpiar el intervalo anterior
  timer = setInterval(() => {
    timeLeft--; // Decrementar el tiempo restante
    timerElement.textContent = timeLeft; // Actualizar el tiempo en pantalla

    if (timeLeft <= 5) {
      timerElement.classList.add("pulse"); // Aplicar efecto de pulso si el tiempo es crítico
    } else {
      timerElement.classList.remove("pulse"); // Quitar el efecto de pulso
    }

    if (timeLeft <= 0) {
      clearInterval(timer); // Detener el temporizador
      alert("¡Tiempo agotado!"); // Mostrar alerta de tiempo agotado
      nextQuestion(); // Pasar a la siguiente pregunta
    }
  }, 1000); // Ejecutar cada segundo
}

// Función para finalizar el juego
function endGame() {
    clearInterval(timer);
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    questionElement.textContent = "¡Juego terminado!";
    optionsElement.innerHTML = "";
    promptPlayerName(score); // Solo se ejecuta aquí
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
  }

// Función para pedir el nombre del jugador al finalizar el juego
function promptPlayerName(score) {
  const name = prompt("¡Juego terminado! Ingresa tu nombre para guardar tu puntuación:"); // Pedir el nombre del jugador
  if (name) {
    addToLeaderboard(name, score); // Agregar la puntuación al leaderboard si se proporciona un nombre
  }

function exitGame() {
    clearInterval(timer);
    backgroundMusic.pause();
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
  }
}