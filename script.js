const questions = [
    {
        category: "Космос 🌌",
        question: "Яка планета в Сонячній системі має найбільше супутників?",
        answers: ["Юпітер", "Сатурн", "Марс", "Земля"],
        correct: 1
    },
    {
        category: "Космос 🌌",
        question: "Як називається космічне явище, коли зірка вибухає в кінці свого життєвого циклу?",
        answers: ["Сверхнова", "Чорна діра", "Пульсар", "Нова"],
        correct: 0
    },
    {
        category: "Космос 🌌",
        question: "Яка планета відома своїми кільцями?",
        answers: ["Юпітер", "Сатурн", "Нептун", "Уран"],
        correct: 1
    },
    {
        category: "Космос 🌌",
        question: "Який супутник Землі впливає на приливи та відливи?",
        answers: ["Малий супутник", "Місяць", "Фобос", "Ганімед"],
        correct: 1
    },
    {
        category: "Космос 🌌",
        question: "Як називається космічна станція, на якій працюють астронавти з 1998 року?",
        answers: ["Міжнародна космічна станція", "Скайлеб", "Союз", "Алмаз"],
        correct: 0
    },
    {
        category: "Географія 🌍",
        question: "Яка країна має найвищий середній рівень життя за індексом людського розвитку?",
        answers: ["Норвегія", "Швейцарія", "Ісландія", "Сінгапур"],
        correct: 0
    },
    {
        category: "Географія 🌍",
        question: "В якій країні знаходиться найбільший кораловий риф у світі?",
        answers: ["Австралія", "Філіппіни", "Єгипет", "Мальдівські острови"],
        correct: 0
    },
    {
        category: "Географія 🌍",
        question: "Яке місто є столицею Японії?",
        answers: ["Токіо", "Осака", "Кіото", "Хоккайдо"],
        correct: 0
    },
    {
        category: "Географія 🌍",
        question: "Який океан є найбільш глибоким?",
        answers: ["Тихий", "Атлантичний", "Індійський", "Північний Льодовитий"],
        correct: 0
    },
    {
        category: "Географія 🌍",
        question: "Яке озеро є найбільш глибоким на планеті?",
        answers: ["Лахтанг", "Байкал", "Каспійське море", "Вікторія"],
        correct: 1
    },
    {
        category: "Техніка 🔧",
        question: "Яка технологія використовується в сучасних смартфонах для сканування відбитків пальців?",
        answers: ["Сканер відбитків пальців", "Розпізнавання по обличчю", "Голосове розпізнавання", "Сканер райдужки ока"],
        correct: 0
    },
    {
        category: "Техніка 🔧",
        question: "Що таке IoT (Інтернет речей)?",
        answers: ["Інтернет-платформа для мобільних пристроїв", "Система з'єднання фізичних об'єктів з інтернетом", "Технологія для підвищення швидкості інтернету", "Цифрова валюта"],
        correct: 1
    },
    {
        category: "Техніка 🔧",
        question: "Що таке блокчейн?",
        answers: ["Система для зберігання великих даних", "Цифрова валюта", "Технологія для безпеки даних", "Тип операційної системи"],
        correct: 2
    },
    {
        category: "Техніка 🔧",
        question: "Яка компанія відома в галузі відеокарт?",
        answers: ["Intel", "NVIDIA", "Apple", "Microsoft"],
        correct: 1
    },
    {
        category: "Техніка 🔧",
        question: "Яка компанія є найбільшим виробником мобільних процесорів?",
        answers: ["Intel", "AMD", "Qualcomm", "Samsung"],
        correct: 2
    },
    {
        category: "ПК 🖥️",
        question: "Що таке RAID-масив у комп'ютерах?",
        answers: ["Покращення процесора", "Резервне копіювання", "Об’єднання жорстких дисків", "Тип відеокарти"],
        correct: 2
    },
    {
        category: "ПК 🖥️",
        question: "Який компонент відповідає за графіку?",
        answers: ["ЦП", "Відеокарта", "Оперативна пам’ять", "Жорсткий диск"],
        correct: 1
    },
    {
        category: "ПК 🖥️",
        question: "Що таке FPS в іграх?",
        answers: ["Частота кадрів", "Формат гри", "Тип джойстика", "Швидкість інтернету"],
        correct: 0
    },
    {
        category: "ПК 🖥️",
        question: "Яка система охолодження використовується в ПК?",
        answers: ["Радіатор", "Кулер", "Термопаста", "Параметризація"],
        correct: 1
    },
    {
        category: "ПК 🖥️",
        question: "Яка пам’ять зберігає дані надовго?",
        answers: ["Оперативна", "Кеш", "SSD", "Жорсткий диск"],
        correct: 3
    },
    {
        category: "Автомобілі 🚗",
        question: "Яка система запобігає ковзанню на мокрій дорозі?",
        answers: ["ABS", "ESP", "ASR", "TCS"],
        correct: 1
    },
    {
        category: "Автомобілі 🚗",
        question: "Як називається система автоматичного паркування?",
        answers: ["Парковочний асистент", "Автопілот", "Lane Assist", "Автопарковка"],
        correct: 0
    },
    {
        category: "Автомобілі 🚗",
        question: "Яка з технологій є основою електромобілів?",
        answers: ["Електродвигун", "Бензиновий двигун", "Турбіна", "Гідравліка"],
        correct: 0
    },
    {
        category: "Автомобілі 🚗",
        question: "Яка компанія відома електромобілями з автопілотом?",
        answers: ["Tesla", "BMW", "Ford", "Audi"],
        correct: 0
    },
    {
        category: "Автомобілі 🚗",
        question: "Що таке гібридний автомобіль?",
        answers: ["З двома двигунами", "Тільки електричний", "Дизельний", "Автономний"],
        correct: 0
    },
    {
        category: "Автомобілі 🚗",
        question: "Яка система запобігає ковзанню на мокрій дорозі?",
        answers: ["ABS", "ESP", "ASR", "TCS"],
        correct: 1
    },
    {
        category: "Їжа",
        question: "Що з цього — овоч?",
        answers: ["Яблуко", "Капуста", "Груша", "Абрикос"],
        correct: 1
    },
    {
        category: "Їжа",
        question: "З чого традиційно виготовляють хліб?",
        answers: ["з молока", "з м'яса", "з борошна", "з сиру"],
        correct: 2
    },
    {
        category: "Їжа",
        question: "Який продукт виготовляють з какао-бобів?",
        answers: ["масло", "шоколад", "сир", "варення"],
        correct: 1
    },
    {
        category: "Їжа",
        question: "Яка їжа багата на білки?",
        answers: ["рис", "м'ясо", "цукор", "масло"],
        correct: 1
    },
    {
        category: "Їжа",
        question: "Який з цих продуктів є ягодою?",
        answers: ["полуниця", "морква", "капуста", "хліб"],
        correct: 0
    }
];


let currentQuestion = 0;
let score = 0;
let totalTime = 0;
let totalAnswers = 0;
let timeLeft = 30;
let timer;
let startTime;

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionEl = document.getElementById("question");
const categoryEl = document.getElementById("category");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");
const avgTimeEl = document.getElementById("avg-time");
const accuracyEl = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");
const progressEl = document.getElementById("progress");
const questionCounterEl = document.getElementById("question-counter");
const startButton = document.getElementById("start-button");

startButton.onclick = () => {
    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
};

function startTimer() {
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    startTime = Date.now();
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timer);
    startTimer();

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    categoryEl.textContent = `Тематика: ${q.category}`;
    answersEl.innerHTML = "";
    questionCounterEl.textContent = `${currentQuestion + 1} / ${questions.length}`;

    const shuffledAnswers = [...q.answers];
    const correctAnswer = q.correct;
    shuffledAnswers.sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledAnswers.indexOf(q.answers[correctAnswer]);

    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.onclick = () => selectAnswer(index, newCorrectIndex);
        answersEl.appendChild(button);
    });

    updateProgress();
}

function selectAnswer(selected, correct) {
    clearInterval(timer);
    if (selected === correct) score++;

    const responseTime = (Date.now() - startTime) / 1000;
    totalTime += responseTime;
    totalAnswers++;

    highlightAnswers(selected, correct);
    setTimeout(nextQuestion, 1000);
}

function highlightAnswers(selected, correct) {
    const buttons = document.querySelectorAll(".answer-btn");
    buttons[selected].style.backgroundColor = selected === correct ? "#28a745" : "#dc3545";
    buttons[correct].style.backgroundColor = "#28a745";
}

function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const avgTime = totalTime / totalAnswers;
    const accuracy = (score / questions.length) * 100;

    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    scoreEl.textContent = score;
    totalEl.textContent = questions.length;
    avgTimeEl.textContent = avgTime.toFixed(2);
    accuracyEl.textContent = accuracy.toFixed(2);
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressEl.style.width = `${progress}%`;
}

restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    totalTime = 0;
    totalAnswers = 0;
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
};
