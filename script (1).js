let questions = [
    {
        question: "Which Skin Has A Built-In Emote?",
        answers: ["Brite Bomber", "Nog Ops", "Isabella", "Mogul Master"],
        correct: "Isabella"
    },
    {
        question: "Which Skin Was Apart Of A Twitch Pack?",
        answers: ["Havoc", "Stealth Reflex", "Rook", "Leviathan"],
        correct: "Havoc"
    },
    {
        question: "What Skin Came In The First Starter Pack?",
        answers: ["Funk Ops", "Zoe", "Rook", "Rogue Agent"],
        correct: "Rogue Agent"
    },
    {
        question: "What Skin Came From Save The World?",
        answers: ["Battle Hawk", "Cloaked Star", "Disco Diva", "Bunker Jonesy"],
        correct: "Cloaked Star"
    },
    {
        question: "What Color Did OG's Get For Ghoul Trooper?",
        answers: ["Green", "Purple", "Gray", "Pink"],
        correct: "Pink"
    },
    {
        question: "What Skin Did You Get From The Discovery Challenge In Season 8?",
        answers: ["Ruin", "Lynx", "Zenith", "Trog"],
        correct: "Ruin"
    },
    {
        question: "What Was The First Skin To Have The Durr Burger Head?",
        answers: ["Grill Seargent", "Onsie", "Tomato Head", "Beef Boss"],
        correct: "Beef Boss"
    },
    {
        question: "What Skin Was Remade In The Season X Battle Pass?",
        answers: ["Rust Lord", "Renegade Raider", "John Wick", "Royal Knight"],
        correct: "Rust Lord"
    },
    {
        question: "What Skin Rifted From The Real World With A Durr Burger?",
        answers: ["Kevin The Cube", "Ice King", "Drift", "Dusk"],
        correct: "Drift"
    },
    {
        question: "What Skin Did You Get From Collecting All Battle Stars In Season 4?",
        answers: ["Visitor", "Nog Ops", "Recon Expert", "Red Knight"],
        correct: "Visitor"
    }
];

let current = 0;
let score = 0;

let questionText = document.getElementById("question");
let questionNumber = document.getElementById("question-number");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let result = document.getElementById("result");
let imageContainer = document.getElementById("image-container");

let allButtons = [answer1, answer2, answer3, answer4];

function showQuestion() {
    result.textContent = "";
    allButtons.forEach(button => {
        button.disabled = false;
        button.style.display = "inline-block";
    });

    let q = questions[current];
    questionText.textContent = q.question;

    //AI helped with this
    questionNumber.textContent = `Question ${current + 1} of ${questions.length}`;

    answer1.textContent = q.answers[0];
    answer2.textContent = q.answers[1];
    answer3.textContent = q.answers[2];
    answer4.textContent = q.answers[3];
}

function checkAnswer(answer) {
    let correct = questions[current].correct;

    allButtons.forEach(button => button.disabled = true);

    if (answer === correct) {
        result.textContent = "✅ Correct!";
        score++;
    } else {
        result.textContent = "❌ Wrong! The right answer was " + correct;
    }

    setTimeout(() => {
        current++;
        if (current < questions.length) {
            showQuestion();
        } else {
            showFinalScore();
        }
    }, 1000);
}

function showFinalScore() {
    questionText.textContent = "🎉 You're done!";
    questionNumber.textContent =""
    result.textContent = `You got ${score} out of ${questions.length} correct.`;

    allButtons.forEach(button => button.style.display = "none");

    imageContainer.innerHTML = `
        <img src="images/skin.jpg" alt="Fortnite Logo" width="300">
    `;
}

answer1.onclick = () => checkAnswer(answer1.textContent);
answer2.onclick = () => checkAnswer(answer2.textContent);
answer3.onclick = () => checkAnswer(answer3.textContent);
answer4.onclick = () => checkAnswer(answer4.textContent);

showQuestion();
