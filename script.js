//Version 2//
const questions = [
    {
        question: "Perkembangan komputer pribadi seperti IBM PC pada tahun 1980-an memberikan akses kepada masyarakat untuk:", //1//
        answers: [
            { text: "Terhubung dengan antariksa", correct: false },
            { text: "Menjalankan bisnis besar", correct: false },
            { text: "Mengakses informasi dan komunikasi pribadi", correct: true },
            { text: "Menjadi lebih terisolasi secara sosial", correct: false },
            { text: "Mempertahankan gaya hidup tradisional", correct: false },
        ],
    },

    {
        question: "Peran internet dalam komunikasi sosial ditandai oleh:", //2//
        answers: [
            { text: " Munculnya surat kabar cetak", correct: false },
            { text: "Pertumbuhan media sosial dan jejaring online", correct: true },
            { text: "Penurunan minat dalam budaya populer", correct: false },
            { text: "Penurunan penggunaan perangkat lunak komputer", correct: false },
            { text: "Peningkatan dalam perdagangan luar negeri", correct: false },
        ],
    },
    {
        question: "Bagaimana perkembangan komputer telah mengubah cara pendidikan disampaikan dan diterima di masyarakat?", //3//
        answers: [
            { text: "Mendorong pembelajaran berbasis teknologi", correct: true },
            { text: "Mengurangi akses ke informasi", correct: false },
            { text: "Meningkatkan ketidaksetaraan pendidikan", correct: false },
            { text: "Menghambat kemampuan siswa untuk berkolaborasi", correct: false },
            { text: "Meningkatkan kecenderungan plagiarisme", correct: false },
        ],
    },

    {
        question: "Apa dampak positif dari peningkatan aksesibilitas internet di masyarakat?",  //4//
        answers: [
            { text: "Peningkatan kolaborasi global", correct: true },
            { text: "Peningkatan isolasi sosial", correct: false },
            { text: "Penurunan keterampilan teknologi", correct: false },
            { text: "Perubahan signifikan dalam kebiasaan makan", correct: false },
            { text: "Penurunan minat dalam berolahraga", correct: false },
        ],
    },

    {
        question: "Bagaimana komputer telah mempengaruhi industri hiburan dan budaya populer?", //5//
        answers: [
            { text: "Mengurangi variasi dalam bentuk hiburan", correct: false },
            { text: "Meningkatkan partisipasi dalam olahraga", correct: false },
            { text: "Memberdayakan seniman untuk bereksperimen", correct: true },
            { text: "Mempercepat hilangnya bahasa dan budaya lokal", correct: false },
            { text: "Meningkatkan minat dalam pertunjukan langsung", correct: false },
        ],
    },

    {

        question: "Siapakah ilmuwan yang dikenal karena perannya dalam memecahkan kode Enigma Jerman selama Perang Dunia II dan kontribusinya dalam pengembangan komputer modern yang digunakan banyak orang-orang saat ini?", //6//
        answers: [
            { text: "Charles Babbage", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Grace Hopper", correct: false },
            { text: " Joseph Oppenheimer", correct: false },
            { text: "Alan Turing", correct: true },
        ],
    },

    {

        question: "Manakah dari berikut ini yang bukan dampak positif perkembangan komputer terhadap kehidupan sosial?", //7//
        answers: [
            { text: "Meningkatkan akses informasi dan komunikasi", correct: false },
            { text: "Mempermudah transaksi keuangan dan perdagangan ", correct: false },
            { text: "Mempercepat proses belajar dan mengajar ", correct: false },
            { text: "Meningkatkan keterpencilan dan isolasi sosial ", correct: true },
            { text: "Membuka peluang kerja baru di bidang teknologi", correct: false },
        ],
    },

    {
        question: "Bagaimana perkembangan komputer memengaruhi cara kita berinteraksi satu sama lain?", //8//
        answers: [
            { text: "Mengurangi interaksi tatap muka dan meningkatkan interaksi online ", correct: false },
            { text: "Mempermudah komunikasi jarak jauh dan memperkuat hubungan antar individu ", correct: false },
            { text: "Memicu cyberbullying dan pelecehan online ", correct: false },
            { text: "Semua jawaban benar ", correct: false },
            { text: " Hanya jawaban A dan B yang benar", correct: true },
        ],
    },

   

    {
        question: " Bagaimana perkembangan komputer memengaruhi cara kita mengonsumsi informasi?", //9//
        answers: [
            { text: "Meningkatkan akses ke berbagai sumber informasi ", correct: false },
            { text: " Memudahkan verifikasi kebenaran informasi ", correct: false },
            { text: "Meningkatkan risiko penyebaran informasi palsu ", correct: false },
            { text: "Semua jawaban benar ", correct: true },
            { text: "Hanya jawaban A dan B yang benar", correct: false },
        ],
    },


    {
        question: "Bagaimana perkembangan komputer memengaruhi cara masyarakat berbelanja?", //10//
        answers: [
            { text: "Mempermudah perbandingan harga dan produk ", correct: false },
            { text: "Semua jawaban benar ", correct: true },
            { text: "Munculnya e-commerce dan platform belanja online ", correct: false },
            { text: " Meningkatkan risiko penipuan online ", correct: false },
            { text: "Hanya jawaban A dan B yang benar", correct: false },
        ],
    },

    {

        question: ". Apa yang dimaksud dengan hak kekayaan intelektual (HKI) dalam konteks produk informatika?", //11//
        answers: [
            { text: "Hak untuk mengakses internet gratis", correct: false },
            { text: "Hak untuk mengekspor perangkat lunak", correct: false },
            { text: "Hak untuk mengklaim kepemilikan atas karya kreatif", correct: true },
            { text: "Hak untuk menghapus data pribadi dari internet", correct: false },
            { text: " Hak untuk menyalin dan mendistribusikan konten tanpa izin", correct: false },
        ],
    },

    {

        question: "Bagaimana produk informatika berkontribusi terhadap pertumbuhan ekonomi?", //12//
        answers: [
            { text: "Dengan menciptakan lapangan kerja baru", correct: true },
            { text: "Dengan membatasi akses informasi", correct: false },
            { text: "Dengan meningkatkan biaya produksi", correct: false },
            { text: " Dengan mengurangi investasi dalam teknologi ", correct: false },
            { text: "Dengan meningkatkan kebutuhan akan bahan bakar fosil", correct: false },
        ],
    },

    {
        question: "Apa yang dimaksud dengan perangkat lunak sumber terbuka (open source software) dalam konteks ekonomi produk informatika?", //13//
        answers: [
            { text: "Perangkat lunak yang hanya bisa diakses oleh pembeli berlangganan", correct: false },
            { text: "Perangkat lunak yang hanya tersedia untuk perusahaan besar", correct: false },
            { text: "Perangkat lunak yang tidak dapat diakses secara online", correct: false },
            { text: "Perangkat lunak yang hanya bisa diinstal pada satu perangkat saja", correct: false },
            { text: " Perangkat lunak yang dapat dimodifikasi dan didistribusikan secara bebas", correct: true },
        ],
    },

   

    {
        question: "Mengapa perlindungan data pribadi merupakan isu penting dalam hukum produk informatika?", //14//
        answers: [
            { text: "Untuk membatasi akses pengguna internet", correct: false },
            { text: " Untuk mempromosikan pelanggaran privasi ", correct: false },
            { text: "Untuk meningkatkan risiko keamanan siber", correct: false },
            { text: "Untuk melindungi informasi pribadi pengguna ", correct: true },
            { text: "Untuk membatasi inovasi teknologi", correct: false },
        ],
    },


    {
        question: "Apa peran hukum dalam mengatur keamanan produk informatika?", //15//
        answers: [
            { text: "Memperketat kontrol atas konten internet", correct: false },
            { text: "Menetapkan standar untuk perlindungan data dan privasi", correct: true },
            { text: "Meningkatkan biaya produksi perangkat lunak", correct: false },
            { text: "Mengurangi inovasi dalam teknologi digital", correct: false },
            { text: "Meniadakan akses internet di wilayah tertentu", correct: false },
        ],
    },
];

let currentQuestionIndex = 0;
let userScore = 0;
let restartAttempts = 0;
const maxRestarts = 3;

let firstPassword = generateRandomPassword();
let secondPassword = generateRandomPassword();
let singlePassword = generateRandomPassword();

console.log("First Password:", firstPassword); // Display the first password in the console
console.log("Second Password:", secondPassword); // Display the second password in the console

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
        authenticateSinglePassword();
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

function generateRandomPassword() {
    return Math.random().toString(36).slice(-8);
}

function authenticate() {
    let passwordAttempts = 3;
    const delayTime = 3000;
    let firstPasswordEntered = false;
    let secondPasswordEntered = false;

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

function authenticateSinglePassword() {
    let passwordAttempts = 3;
    const delayTime = 3000;

    while (passwordAttempts > 0) {
        const inputPassword = prompt("Masukkan kata sandi baru:");

        if (inputPassword === singlePassword) {
            unlockWebsite();
            return;
        } else {
            passwordAttempts--;
            alert("Kata sandi salah. Sisa percobaan: " + passwordAttempts);

            if (passwordAttempts === 0) {
                alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                setTimeout(authenticateSinglePassword, delayTime);
                return;
            }
        }
    }
}

function unlockWebsite() {
    document.body.classList.remove("locked");
    restartAttempts = 0;
    firstPassword = generateRandomPassword();
    secondPassword = generateRandomPassword();
    singlePassword = generateRandomPassword();
    console.log("First Password:", firstPassword); // Display the first password in the console
    console.log("Second Password:", secondPassword); // Display the second password in the console
    console.log("Single Password:", singlePassword);
}

document.addEventListener("DOMContentLoaded", function() {
    authenticate();
});

