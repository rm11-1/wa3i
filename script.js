

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 1000);
});
console.log("WA3I SCRIPT LOADED");
const translations = {
    ar: {
        nav: ["الرئيسية", "المبادرة", "المجالات", "النصائح", "الأثر", "الرحلة", "الفريق", "الاختبار", "تواصل"],
        heroTag: "مبادرة للتوعية الرقمية",
        heroTitle: 'مستقبلك الرقمي<br>يبدأ من <span>وعيك.</span>',
        heroDescription: "المعرفة الرقمية ليست خيارًا، بل مسؤولية. اكتشف كيف تحمي خصوصيتك، وتواجه التحديات الرقمية، وتستخدم التقنية بوعي وأمان.",
        heroButtons: ["اكتشف المجالات", "تعرّف على المبادرة"],
        heroNote: "وعي رقمي يصنع مستقبلًا أكثر أمانًا",
        sections: [
            ["01 / من نحن؟", 'الوعي هو <span>البداية.</span>', "نؤمن أن الاستخدام الآمن للتقنية يبدأ بالمعرفة، وأن كل خطوة واعية تصنع فرقًا في العالم الرقمي."],
            ["02 / تعلّم واكتشف", 'مجالات الوعي <span>الرقمي.</span>', "أربعة مجالات تساعدك على فهم التحديات الرقمية والتعامل معها بذكاء ومسؤولية."],
            ["03 / كن أكثر وعيًا", 'خطوات صغيرة، <span>حماية أكبر.</span>', "عادات رقمية بسيطة تساعدك على حماية نفسك."],
            ["04 / أثر المبادرة", 'وعي يصنع <span>الفرق.</span>', "نعمل على نشر الوعي الرقمي وبناء مجتمع أكثر أمانًا."],
            ["05 / من الفكرة إلى الأثر", 'رحلة <span>المبادرة.</span>', "أربع مراحل لتنفيذ مبادرة توعوية ذات أثر."],
            ["06 / فريق العمل", 'خلف كل إنجاز <span>فريق.</span>', "فريق يعمل بشغف لنشر الوعي الرقمي وتعزيز الاستخدام الآمن للتقنية."],
            ["07 / اختبر معلوماتك", 'هل أنت واعٍ <span>رقميًا؟</span>', "اختبر معرفتك واكتشف مدى وعيك في التعامل مع العالم الرقمي."],
            ["08 / تواصل معنا", 'صوتك يصنع <span>فرقًا.</span>', "لديك استفسار أو اقتراح؟ يسعدنا الاستماع إليك."]
        ],
        aboutTitles: ["رؤيتنا", "رسالتنا", "أهدافنا"],
        aboutTexts: [
            "مجتمع رقمي أكثر وعيًا وأمانًا.",
            "نشر المعرفة الرقمية وتعزيز الاستخدام الآمن للتقنية.",
            "تعزيز الأمان الرقمي ومكافحة الاحتيال ونشر الوعي التقني."
        ],
        topicTitles: ["الأمان الرقمي", "الاحتيال الإلكتروني", "الذكاء الاصطناعي", "التحقق من الأخبار"],
        topicTexts: [
            "حافظ على خصوصيتك ولا تشارك كلمات المرور أو رموز التحقق مع الآخرين.",
            "انتبه للرسائل التي تطلب بياناتك أو تعدك بجوائز غير متوقعة.",
            "استفد من أدوات الذكاء الاصطناعي في التعلم والإبداع مع مراجعة نتائجها.",
            "لا تصدق كل ما تشاهده على الإنترنت، فقد تكون بعض المعلومات مضللة."
        ],
        topicTips: [
            "نصيحة: استخدم كلمة مرور قوية ومختلفة لكل حساب.",
            "نصيحة: تحقق من مصدر الرابط قبل الضغط عليه.",
            "نصيحة: لا تشارك معلوماتك الشخصية مع الأدوات الرقمية.",
            "نصيحة: ارجع إلى المصادر الموثوقة قبل نشر أي خبر."
        ],
        tipLabel: "نصيحة اليوم",
        newTip: "نصيحة جديدة",
        tipCards: ["احمِ كلمات مرورك", "تحقق قبل النقر", "فكر قبل النشر"],
        tipTexts: [
            "استخدم كلمات مرور قوية ولا تشاركها مع الآخرين.",
            "تأكد من موثوقية الروابط قبل فتحها.",
            "راجع المعلومات قبل مشاركتها مع الآخرين."
        ],
        stats: ["عدد المستفيدين", "الأنشطة التوعوية"],
        statsPending: ["سيُحدّث بعد تنفيذ النشاط", "سيُحدّث بعد تنفيذ الأنشطة"],
        journeyTitles: ["التخطيط", "التوعية", "التفاعل", "قياس الأثر"],
        journeyTexts: [
            "تحديد أهداف المبادرة واختيار موضوعات التوعية.",
            "تقديم محتوى وأنشطة تثقيفية حول السلامة الرقمية.",
            "إشراك المستفيدين من خلال الاختبارات والأنشطة.",
            "تقييم النتائج وتطوير المبادرة بناءً على الملاحظات."
        ],
        teamTitles: ["قائد المبادرة", "مسؤول المحتوى", "مسؤول التقنية"],
        teamTexts: [
            "الإشراف على المبادرة وتنظيم مراحل العمل.",
            "إعداد المعلومات والنصائح التوعوية.",
            "تطوير الموقع وإدارة الأدوات التفاعلية."
        ],
        contact: ["اكتب اسمك", "اكتب رسالتك أو اقتراحك", "إرسال الرسالة"],
        footer: "وَعْي © 2026 — نحو مجتمع رقمي واعٍ",
        questions: [
            {
                question: "هل من الآمن مشاركة كلمة المرور مع صديق؟",
                options: ["نعم", "لا"], correct: 1
            },
            {
                question: "ماذا تفعل إذا وصلك رابط من مصدر مجهول؟",
                options: ["أفتحه", "أتجاهله وأتحقق منه"], correct: 1
            },
            {
                question: "هل يجب التحقق من الأخبار قبل نشرها؟",
                options: ["نعم", "لا"], correct: 0
            },
            {
                question: "ما التصرف الصحيح عند طلب بياناتك البنكية برسالة مشبوهة؟",
                options: ["أرسل البيانات", "أتجاهل الرسالة وأبلغ عنها"], correct: 1
            },
            {
                question: "هل يمكن أن ينتج الذكاء الاصطناعي معلومات غير صحيحة؟",
                options: ["نعم", "لا"], correct: 0
            }
        ],
        correct: "إجابة صحيحة! أحسنت.",
        incorrect: "إجابة غير صحيحة، حاول الاستفادة من النصيحة.",
        next: "السؤال التالي",
        restart: "إعادة الاختبار",
        finished: "انتهى الاختبار!",
        score: "نتيجتك",
        tips: [
            "لا تشارك كلمات المرور مع الآخرين.",
            "فعّل التحقق بخطوتين لحساباتك.",
            "لا تفتح الروابط مجهولة المصدر.",
            "تحقق من صحة الأخبار قبل نشرها.",
            "لا تشارك معلوماتك الشخصية مع الغرباء.",
            "حدّث أجهزتك وتطبيقاتك باستمرار.",
            "استخدم كلمات مرور قوية ومختلفة."
        ],
        contactThanks: "شكرًا لك {name}، هذه رسالة تجريبية ولم يتم إرسالها فعليًا."
    },

    en: {
        nav: ["Home", "About", "Topics", "Tips", "Impact", "Journey", "Team", "Quiz", "Contact"],
        heroTag: "DIGITAL AWARENESS INITIATIVE",
        heroTitle: 'Your Digital Future<br>Starts with <span>Awareness.</span>',
        heroDescription: "Digital knowledge is not an option; it is a responsibility. Discover how to protect your privacy, face digital challenges, and use technology safely and wisely.",
        heroButtons: ["Explore Topics", "About the Initiative"],
        heroNote: "Digital awareness creates a safer future",
        sections: [
            ["01 / ABOUT US", 'Awareness is the <span>Beginning.</span>', "We believe safe technology use starts with knowledge, and every mindful step makes a difference in the digital world."],
            ["02 / LEARN & EXPLORE", 'Digital Awareness <span>Topics.</span>', "Four essential areas that help you understand digital challenges and deal with them wisely."],
            ["03 / STAY AWARE", 'Small Steps, <span>Greater Protection.</span>', "Simple digital habits that help keep you safe."],
            ["04 / OUR IMPACT", 'Awareness Makes a <span>Difference.</span>', "We work to spread digital awareness and build a safer community."],
            ["05 / FROM IDEA TO IMPACT", 'The Initiative <span>Journey.</span>', "Four stages for delivering an impactful awareness initiative."],
            ["06 / OUR TEAM", 'Behind Every Achievement is a <span>Team.</span>', "A team working passionately to promote digital awareness and safe technology use."],
            ["07 / TEST YOUR KNOWLEDGE", 'Are You Digitally <span>Aware?</span>', "Test your knowledge and discover how aware you are in the digital world."],
            ["08 / CONTACT US", 'Your Voice Makes a <span>Difference.</span>', "Have a question or suggestion? We would love to hear from you."]
        ],
        aboutTitles: ["Our Vision", "Our Mission", "Our Goals"],
        aboutTexts: [
            "A more aware and safer digital community.",
            "Sharing digital knowledge and promoting safe technology use.",
            "Promoting digital safety, preventing fraud, and spreading awareness."
        ],
        topicTitles: ["Digital Safety", "Online Fraud", "Artificial Intelligence", "News Verification"],
        topicTexts: [
            "Protect your privacy. Never share passwords or verification codes with others.",
            "Be careful with messages asking for your information or promising unexpected prizes.",
            "Use AI tools for learning and creativity, while reviewing their results.",
            "Do not believe everything you see online. Some information may be misleading."
        ],
        topicTips: [
            "TIP: Use a strong, unique password for every account.",
            "TIP: Check a link's source before clicking.",
            "TIP: Never share personal information with digital tools.",
            "TIP: Check reliable sources before sharing news."
        ],
        tipLabel: "TIP OF THE DAY",
        newTip: "New Tip",
        tipCards: ["Protect Your Passwords", "Think Before You Click", "Think Before You Share"],
        tipTexts: [
            "Use strong passwords and never share them with others.",
            "Make sure links are trustworthy before opening them.",
            "Review information before sharing it with others."
        ],
        stats: ["Beneficiaries", "Awareness Activities"],
        statsPending: ["To be updated after the activity", "To be updated after activities"],
        journeyTitles: ["Planning", "Awareness", "Engagement", "Impact Measurement"],
        journeyTexts: [
            "Set the initiative's goals and choose awareness topics.",
            "Deliver educational content and activities about digital safety.",
            "Engage participants through quizzes and activities.",
            "Evaluate results and improve the initiative based on feedback."
        ],
        teamTitles: ["Initiative Leader", "Content Manager", "Technical Manager"],
        teamTexts: [
            "Supervising the initiative and organizing its stages.",
            "Preparing educational information and awareness tips.",
            "Developing the website and managing interactive tools."
        ],
        contact: ["Enter your name", "Write your message or suggestion", "Send Message"],
        footer: "WA3I © 2026 — Towards a Digitally Aware Community",
        questions: [
            {
                question: "Is it safe to share your password with a friend?",
                options: ["Yes", "No"], correct: 1
            },
            {
                question: "What should you do if you receive a link from an unknown source?",
                options: ["Open it", "Ignore it and verify the source"], correct: 1
            },
            {
                question: "Should you verify news before sharing it?",
                options: ["Yes", "No"], correct: 0
            },
            {
                question: "What should you do if a suspicious message asks for your bank details?",
                options: ["Send the details", "Ignore and report the message"], correct: 1
            },
            {
                question: "Can artificial intelligence produce incorrect information?",
                options: ["Yes", "No"], correct: 0
            }
        ],
        correct: "Correct answer! Well done.",
        incorrect: "Incorrect answer. Learn from the tip and try again.",
        next: "Next Question",
        restart: "Restart Quiz",
        finished: "Quiz Completed!",
        score: "Your score",
        tips: [
            "Never share your passwords with others.",
            "Enable two-factor authentication on your accounts.",
            "Do not open links from unknown sources.",
            "Verify news before sharing it.",
            "Never share personal information with strangers.",
            "Keep your devices and apps updated.",
            "Use strong and unique passwords."
        ],
        contactThanks: "Thank you, {name}. This is a demo message and has not actually been sent."
    }
};

let language = "ar";
let currentQuestion = 0;
let score = 0;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function setTexts(selector, values) {
    $$(selector).forEach((element, index) => {
        if (values[index] !== undefined) element.textContent = values[index];
    });
}

function setHTML(selector, value) {
    const element = $(selector);
    if (element) element.innerHTML = value;
}

function applyLanguage() {
    const t = translations[language];
    const isEnglish = language === "en";

    document.documentElement.lang = language;
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
    document.body.classList.toggle("english-mode", isEnglish);
    document.title = isEnglish ? "WA3I | Digital Awareness" : "وعي | WA3I";

    setTexts(".site-header nav a", t.nav);
    $("#languageToggle").textContent = isEnglish ? "🇸🇦 العربية" : "🇬🇧 English";

    setTexts(".hero-copy .tag", [t.heroTag]);
    setHTML(".hero h1", t.heroTitle);
    setTexts(".hero-copy .description", [t.heroDescription]);
    setTexts(".hero-actions a", t.heroButtons);
    setTexts(".hero-note p", [t.heroNote]);

    $$(".section-heading").forEach((heading, index) => {
        const section = t.sections[index];
        if (!section) return;
        heading.querySelector(".tag").textContent = section[0];
        heading.querySelector("h2").innerHTML = section[1];
        heading.querySelector(".section-description").textContent = section[2];
    });

    setTexts("#about .card h3", t.aboutTitles);
    setTexts("#about .card p", t.aboutTexts);

    setTexts("#topics .card h3", t.topicTitles);
    setTexts("#topics .card p", t.topicTexts);
    setTexts("#topics .card-tip", t.topicTips);

    setTexts(".tip-label", [t.tipLabel]);
    setTexts("#newTip", [t.newTip]);
    setTexts("#tips .cards .card h3", t.tipCards);
    setTexts("#tips .cards .card p", t.tipTexts);

    setTexts("#stats .stat-card h3", t.stats);
    setTexts("#stats .stat-card:nth-child(2) h3", [t.stats[1]]);
    setTexts("#stats .stat-card:nth-child(2) p", [t.statsPending[1]]);

   document.querySelector("#stats .stat-card:first-child h3").textContent = t.stats[0];
   document.querySelector("#beneficiariesCaption").textContent =
    isEnglish
        ? "Visits that contributed to spreading digital awareness"
        : "زيارة ساهمت في نشر الوعي الرقمي";
    setTexts("#journey .card h3", t.journeyTitles);
    setTexts("#journey .card p", t.journeyTexts);

    setTexts("#team .card h3", t.teamTitles);
    setTexts("#team .card p", t.teamTexts);

    $("#contactName").placeholder = t.contact[0];
    $("#contactMessage").placeholder = t.contact[1];
    $("#contactForm button").textContent = t.contact[2];

    $("footer p").textContent = t.footer;

    $("#quizNext").textContent = t.next;
    $("#quizRestart").textContent = t.restart;

    currentQuestion = 0;
    score = 0;
    showQuestion();
}

$("#languageToggle").addEventListener("click", () => {
    language = language === "ar" ? "en" : "ar";
    applyLanguage();
});

function showQuestion() {
    const t = translations[language];
    const q = t.questions[currentQuestion];

    $("#quizProgress").textContent = language === "en"
        ? `Question ${currentQuestion + 1} of ${t.questions.length}`
        : `السؤال ${currentQuestion + 1} من ${t.questions.length}`;

    $("#quizQuestion").textContent = q.question;
    $("#quizOptions").innerHTML = "";
    $("#quizFeedback").textContent = "";
    $("#quizResult").textContent = "";
    $("#quizNext").hidden = true;
    $("#quizRestart").hidden = true;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;

       
button.addEventListener("click", () => {
    $$("#quizOptions button").forEach(btn => btn.disabled = true);

    const feedback = $("#quizFeedback");

    if (index === q.correct) {
        score++;
        button.classList.add("answer-correct");
        feedback.textContent = "✓ " + t.correct;
        feedback.className = "quiz-feedback success";
    } else {
        button.classList.add("answer-wrong");
        $$("#quizOptions button")[q.correct].classList.add("answer-correct");
        feedback.textContent = "✕ " + t.incorrect;
        feedback.className = "quiz-feedback error";
    }

    feedback.classList.remove("feedback-animate");
    void feedback.offsetWidth;
    feedback.classList.add("feedback-animate");

    $("#quizNext").hidden = false;
});


        $("#quizOptions").appendChild(button);
    });
}

$("#quizNext").addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < translations[language].questions.length) {
        showQuestion();
    } else {
        const t = translations[language];
        const total = t.questions.length;
        const percentage = Math.round((score / total) * 100);

        let message;

        if (percentage === 100) {
            message = language === "en"
                ? "Outstanding! Perfect score!"
                : "مذهل! حصلت على الدرجة الكاملة!";
        } else if (percentage >= 60) {
            message = language === "en"
                ? "Great work! Keep learning."
                : "أحسنت! واصل تطوير معرفتك.";
        } else {
            message = language === "en"
                ? "Keep learning. You can do better!"
                : "لا تستسلم! تعلّم أكثر وحاول مجددًا.";
        }

        $("#quizProgress").textContent = t.finished;
        $("#quizQuestion").textContent = "";
        $("#quizOptions").innerHTML = "";
        $("#quizFeedback").textContent = "";
        $("#quizNext").hidden = true;
        $("#quizRestart").hidden = false;

        $("#quizResult").innerHTML = `
            <div class="result-card">
                <div class="result-circle" style="--progress: ${percentage * 3.6}deg">
                    <div class="result-circle-inner">
                        <strong>${percentage}%</strong>
                        <span>${t.score}</span>
                    </div>
                </div>
                <h3>${score} / ${total}</h3>
                <p>${message}</p>
            </div>
        `;
    }
});


$("#quizRestart").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    showQuestion();
});

$("#contactForm").addEventListener("submit", async event => {
    event.preventDefault();

    const form = $("#contactForm");
    const result = $("#contactResult");
    const button = form.querySelector("button");
    const t = translations[language];

    button.disabled = true;
    button.textContent = language === "en" ? "Sending..." : "جارٍ الإرسال...";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            result.textContent = language === "en"
                ? "Your message has been sent successfully!"
                : "تم إرسال رسالتك بنجاح!";

            form.reset();
        } else {
            result.textContent = language === "en"
                ? "Sending failed. Please try again."
                : "تعذر الإرسال، حاول مرة أخرى.";
        }
    } catch (error) {
        result.textContent = language === "en"
            ? "Connection error. Please try again."
            : "حدث خطأ في الاتصال، حاول مرة أخرى.";
    }

    button.disabled = false;
    button.textContent = t.contact[2];
});


$("#newTip").addEventListener("click", () => {
    const tips = translations[language].tips;
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tipElement = $("#randomTip");

    tipElement.classList.remove("tip-animate");

    void tipElement.offsetWidth;

    tipElement.textContent = tips[randomIndex];
    tipElement.classList.add("tip-animate");
});

applyLanguage();

// ===== BACK TO TOP =====

const backToTop = $("#backToTop");

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== DARK MODE =====

const themeToggle = $("#themeToggle");

function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = "◑";
    } else {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.textContent = "◐";
    }
}

// استرجاع آخر وضع محفوظ
const savedTheme = localStorage.getItem("wa3i-theme") || "light";
applyTheme(savedTheme);

// تبديل الوضع وحفظ الاختيار
themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    localStorage.setItem("wa3i-theme", newTheme);
    applyTheme(newTheme);
});


// ===== SCROLL REVEAL =====

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section-heading, .card, .topic-card, .stat-card, .hero-copy, .hero-visual"
).forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// ===== SCROLL PROGRESS =====

const scrollProgress = $("#scrollProgress");

window.addEventListener("scroll", () => {
    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    scrollProgress.style.width = `${progress}%`;
});


// ===== WA3I VISITORS COUNTER =====

const wa3iClient = window.supabase.createClient(
    "https://ygxaaugawwogennejvnq.supabase.co",
    "sb_publishable_gazoZ0NQtoUir4q-4WSmIQ_F-tzkpYL"
);

async function loadBeneficiaries() {
    const counter = document.getElementById("beneficiaries");

    const { data, error } = await wa3iClient.rpc(
        "increment_wa3i_visitors"
    );

    if (error) {
        console.error("Counter error:", error);
        counter.textContent = "تعذر تحميل العدد";
        return;
    }

    counter.textContent = Number(data).toLocaleString(
    language === "en" ? "en-US" : "ar-SA"
);
}

window.addEventListener("load", () => {
    loadBeneficiaries();
});


document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});