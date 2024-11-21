//Original Version//
const questions = [


    {
        question: "Translate *Angry", //1//
        answers: [
            { text: "Lapar", correct: false },
            { text: "Senang", correct: false },
            { text: "Marah", correct: true },
            { text: "Ramah", correct: false },
            { text: "Sopan", correct: false },
        ],
    },

    {
        question: "Translate *Hungry*", //2//
        answers: [
            { text: "Malas", correct: false },
            { text: "Senang", correct: false },
            { text: "Sakit", correct: false },
            { text: "Lapar", correct: true },
            { text: "Memperkuat", correct: false },
        ],
    },
    {
        question: "Translate *Tired*", //3//
        answers: [
            { text: "Bahagia", correct: false},
            { text: "Lelah", correct: true },
            { text: "Bersemangat", correct: false },
            { text: "Bingung", correct: false },
            { text: "Sedih", correct: false },
        ],
    },

    {
        question: "Translate *Comfortable*", //4//
        answers: [
            { text: "Nyaman", correct: true },
            { text: "Marah", correct: false },
            { text: "Lapar", correct: false },
            { text: "Sedih", correct: false },
            { text: "Panas", correct: false },
        ],
    },

    {
        question: "Translate *Uncomfortable*", //5//
        answers: [
            { text: " Nyaman", correct: false },
            { text: "Takut", correct: false },
            { text: "Tidak nyaman", correct: true },
            { text: "Sakit", correct: false },
            { text: "Cantik", correct: false },
        ],
    },

    {
        question: "Translate *Young*", //6//
        answers: [
            { text: "Muda", correct: true },
            { text: "Tua", correct: false },
            { text: "Besar", correct: false },
            { text: "Kecil", correct: false },
            { text: "Tinggi", correct: false },
            
        ],
    },

    {
        question: "Translate *Old*", //7//
        answers: [
            { text: "Cepat", correct: false },
            { text: "Baru", correct: false },
            { text: "Tua", correct: true },
            { text: "Muda", correct: false },
            { text: "Sulit", correct: false },
           
        ],
    },

    {
        question: "Translate *Fresh*", //8//
        answers: [
            { text: "Panas", correct: false },
            { text: "Segar", correct: true },
            { text: "Kotor", correct: false },
            { text: "Sulit", correct: false },
            { text: "Sakit", correct: false },
            
        ],
    },

    {
        question: "Translate *Rotten*", //9//
        answers: [
            { text: "Sulit", correct: false },
            { text: "Keras", correct: false },
            { text: "Busuk", correct: true },
            { text: "Baik", correct: false },
            { text: "Segar", correct: false },
        
        ],
    },

    {
        question: "Translate *Full*", //10//
        answers: [
            { text: "Kosong", correct: false },
            { text: "Sempit", correct: false },
            { text: "Penuh", correct: true },
            { text: "Kecil", correct: false },
            { text: "Lemah", correct: false },
            
        ],
    },

let currentQuestionIndex = 0;
let userScore = 0;
let restartAttempts = 0;
const maxRestarts = 2;

const startButtonEl = document.querySelector(".start-btn");
const welcomeScreenEl = document.querySelector(".welcome-screen");
const quizScreenEl = document.querySelector(".quiz-screen");
const questionEl = document.querySelector(".question");
const answersButtons = document.querySelector(".answers-container");
const nextButtonEl = document.querySelector(".next-btn");

startButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    if (restartAttempts < maxRestarts) {
        welcomeScreenEl.style.display = "none";
        quizScreenEl.style.display = "flex";
        currentQuestionIndex = 0;
        userScore = 0;
        nextButtonEl.innerHTML = "Next";
        nextButtonEl.style.display = "none";
        displayQuestion();
    } else {
        alert("You have reached the maximum number of restarts. Please re-authenticate.");
        authenticateNewPassword();
    }
}

function displayQuestion() {
    resetContainer();
    questionEl.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach((answer) => {
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = answer.text;
        buttonEl.classList.add("ans-btn");
        answersButtons.appendChild(buttonEl);

        if (answer.correct) {
            buttonEl.dataset.correctAns = answer.correct;
        }

        buttonEl.addEventListener("click", checkAnswer);
    });
}

function checkAnswer(e) {
    const selectedButton = e.target;
    if (selectedButton.dataset.correctAns) {
        userScore++;
        selectedButton.classList.add("correct-ans");
    } else {
        selectedButton.classList.add("wrong-ans");
    }

    Array.from(answersButtons.children).forEach((button) => {
        if (button.dataset.correctAns === "true") {
            button.classList.add("correct-ans");
        }
        button.disabled = true;
    });

    nextButtonEl.style.display = "block";
}

function displayResult() {
    resetContainer();
    questionEl.innerHTML = `Quiz is Completed! <br> Your Score: <span class="score">${userScore}/${questions.length}</span>`;
    nextButtonEl.innerHTML = "Restart Quiz";
    restartAttempts++;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButtonEl.style.display = "none";
    } else {
        displayResult();
    }
}

nextButtonEl.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        startQuiz();
    }
});

function resetContainer() {
    questionEl.textContent = "";
    answersButtons.innerHTML = "";
}

// Passwords list
const passwords = [
    { first: "sdx", second: "5" },
   
    // Add more passwords as needed
];

function getRandomPasswordSet() {
    const randomIndex = Math.floor(Math.random() * passwords.length);
    return passwords[randomIndex];
}

function authenticate() {
    let passwordAttempts = 3;
    const delayTime = 3000;
    let firstPasswordEntered = false;
    let secondPasswordEntered = false;
    const { first: firstPassword, second: secondPassword } = getRandomPasswordSet();

    while (passwordAttempts > 0) {
        if (!firstPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi pertama:");

            if (inputPassword === firstPassword) {
                firstPasswordEntered = true;
                alert("Kata sandi pertama benar. Masukkan kata sandi kedua.");
            } else {
                passwordAttempts--;
                alert("Kata sandi pertama salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticate, delayTime);
                    return;
                }
            }
        } else if (!secondPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi kedua:");

            if (inputPassword === secondPassword) {
                secondPasswordEntered = true;
                unlockWebsite();
                return;
            } else {
                passwordAttempts--;
                alert("Kata sandi kedua salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticate, delayTime);
                    return;
                }
            }
        }
    }
}

function authenticateNewPassword() {
    let passwordAttempts = 3;
    const delayTime = 3000;
    let firstPasswordEntered = false;
    let secondPasswordEntered = false;
    let thirdPasswordEntered = false;

    const newPasswords = [
        { 
        first: "newPassword1", 
        second: "newPassword2", 
        third: "newPassword3" },
        // Add more password sets as needed
    ];

    const { first: firstPassword, second: secondPassword, third: thirdPassword } = newPasswords[0];

    while (passwordAttempts > 0) {
        if (!firstPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi baru pertama:");

            if (inputPassword === firstPassword) {
                firstPasswordEntered = true;
                alert("Kata sandi pertama benar. Masukkan kata sandi kedua.");
            } else {
                passwordAttempts--;
                alert("Kata sandi pertama salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticateNewPassword, delayTime);
                    return;
                }
            }
        } else if (!secondPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi baru kedua:");

            if (inputPassword === secondPassword) {
                secondPasswordEntered = true;
                alert("Kata sandi kedua benar. Masukkan kata sandi ketiga.");
            } else {
                passwordAttempts--;
                alert("Kata sandi kedua salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticateNewPassword, delayTime);
                    return;
                }
            }
        } else if (!thirdPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi baru ketiga:");

            if (inputPassword === thirdPassword) {
                thirdPasswordEntered = true;
                unlockWebsite();
                return;
            } else {
                passwordAttempts--;
                alert("Kata sandi ketiga salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticateNewPassword, delayTime);
                    return;
                }
            }
        }
    }
}

function unlockWebsite() {
    document.body.classList.remove("locked");
    restartAttempts = 0;
}

document.addEventListener("DOMContentLoaded", function() {
    authenticate();
});
;

