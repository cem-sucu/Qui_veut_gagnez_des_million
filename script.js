const quizData = [
    {
        question:
            "Yedi renkten oluşan gökkuşağının ortasındaki renk hangisidir?",
        a: "Mavi",
        b: "Sarı",
        c: "Yeşil",
        d: "Kırmızı",
        correct: "c",
    },
    {
        question: "Dünyanın En Yüksek Dağsı hangisidir ?",
        a: "Makalu",
        b: "Everest",
        c: "Kanchenjunga",
        d: "Uludağ",
        correct: "b",
    },
    {
        question: "Ayın Dünyaya Uzaklığı Ne Kadar ?",
        a: "400.400km",
        b: "384.400 km",
        c: "250.300km",
        d: "840.100km",
        correct: "b",
    },
    {
        question: "Aspirinin ham maddesi olan ağaç hangisidir?",
        a: "Gülibirişim",
        b: "Sığla",
        c: "Çobanpüskülü",
        d: "Söğüt",
        correct: "d",
    },
    {
        question: "Türkiye’nin hangi ülkeye olan kara sınırı daha uzundur?",
        a: "Ermenistan",
        b: "Gürcistan",
        c: "Yunanistan",
        d: "Bulgaristan",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> 5 sorudan ${score} soru bildiniz</h2>
            <button onclick="location.reload()">Geri Başla</button>`;
        }
    }
});
