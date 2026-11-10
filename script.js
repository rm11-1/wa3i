const questions = [
    {
        question: "هل من الآمن مشاركة كلمة المرور مع صديق؟",
        options: ["نعم", "لا"],
        correct: 1
    },
    {
        question: "ماذا تفعل إذا وصلك رابط من مصدر مجهول؟",
        options: ["أفتحه", "أتجاهله وأتحقق منه"],
        correct: 1
    },
    {
        question: "هل يجب التحقق من الأخبار قبل نشرها؟",
        options: ["نعم", "لا"],
        correct: 0
    },
    {
        question: "ما التصرف الصحيح عند طلب بياناتك البنكية برسالة مشبوهة؟",
        options: ["أرسل البيانات", "أتجاهل الرسالة وأبلغ عنها"],
        correct: 1
    },
    {
        question: "هل يمكن أن ينتج الذكاء الاصطناعي معلومات غير صحيحة؟",
        options: ["نعم", "لا"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const progress = document.getElementById("quizProgress");
const questionText = document.getElementById("quizQuestion");
const optionsContainer = document.getElementById("quizOptions");
const feedback = document.getElementById("quizFeedback");
const nextButton = document.getElementById("quizNext");
const result = document.getElementById("quizResult");
const restartButton = document.getElementById("quizRestart");

function showQuestion() {
    const q = questions[currentQuestion];

    progress.textContent = `السؤال ${currentQuestion + 1} من ${questions.length}`;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    nextButton.hidden = true;
    restartButton.hidden = true;
result.textContent = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;

        button.addEventListener("click", () => {
            const buttons = optionsContainer.querySelectorAll("button");

            buttons.forEach(btn => btn.disabled = true);

            if (index === q.correct) {
                score++;
                feedback.textContent = "إجابة صحيحة! أحسنت.";
            } else {
                feedback.textContent = "إجابة غير صحيحة، حاول الاستفادة من النصيحة.";
            }

            nextButton.hidden = false;
        });

        optionsContainer.appendChild(button);
    });
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    result.textContent = "";
    showQuestion();
});
        showQuestion();
    } else {
        progress.textContent = "انتهى الاختبار!";
        questionText.textContent = "";
        optionsContainer.innerHTML = "";
        feedback.textContent = "";
        nextButton.hidden = true;
        restartButton.hidden = false;

        result.textContent = `نتيجتك: ${score} من ${questions.length}`;
    }
});

showQuestion();
const contactForm = document.getElementById("contactForm");
const contactResult = document.getElementById("contactResult");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value;
    const message = document.getElementById("contactMessage").value;

    contactResult.textContent =
        `شكرًا لك ${name}، تم استلام رسالتك التجريبية بنجاح.`;

    contactForm.reset();
});
const tips = [
    "لا تشارك كلمات المرور مع الآخرين.",
    "فعّل التحقق بخطوتين لحساباتك.",
    "لا تفتح الروابط مجهولة المصدر.",
    "تحقق من صحة الأخبار قبل نشرها.",
    "لا تشارك معلوماتك الشخصية مع الغرباء.",
    "حدّث أجهزتك وتطبيقاتك باستمرار.",
    "استخدم كلمات مرور قوية ومختلفة."
];

const randomTip = document.getElementById("randomTip");
const newTipButton = document.getElementById("newTip");

newTipButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    randomTip.textContent = tips[randomIndex];
});