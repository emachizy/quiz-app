const questions = [
  {
    question: "In Nigeria, democracy day is celebrated on?",
    answers: [
      { text: "May 29", correct: false },
      { text: "June 12", correct: true },
      { text: "October 1", correct: false },
      { text: "January 1", correct: false },
    ],
  },
  {
    question: "Which is the most populated country in the world?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "USA", correct: false },
      { text: "Indonesia", correct: false },
    ],
  },
  {
    question: "Who is the current chief justice of Nigeria?",
    answers: [
      { text: "Justice Tanko Muhammad", correct: true },
      { text: "Justice Amina Adamu", correct: false },
      { text: "Justice Ibrahim Tanko", correct: false },
      { text: "Justice Olukayode Ariwoola", correct: false },
    ],
  },
  {
    question: "Who is the current chairman of ECOWAS?",
    answers: [
      { text: "Nana Akufo-Addo", correct: false },
      { text: "Roch Marc Christian Kaboré", correct: false },
      { text: "George Weah", correct: false },
      { text: "Mahamadou Issoufou", correct: true },
    ],
  },
  {
    question:
      " The seperation of power is a concept in which the government is divided into three branches, the executive, the legislative and the judiciary. This concept was propounded by?",
    answers: [
      { text: "Montesquieu", correct: true },
      { text: "John Locke", correct: false },
      { text: "Thomas Hobbes", correct: false },
      { text: "Rousseau", correct: false },
    ],
  },
  {
    question: "which is the highest mountain in Africa?",
    answers: [
      { text: "Mount Kilimanjaro", correct: true },
      { text: "Mount Kenya", correct: false },
      { text: "Mount Elgon", correct: false },
      { text: "Mount Stanley", correct: false },
    ],
  },
  {
    question: "Who is Nigerian's current senate president?",
    answers: [
      { text: "Senator Godswill Obot Akpabio", correct: true },
      { text: "Senator Bukola Saraki", correct: false },
      { text: "Senator David Mark", correct: false },
      { text: "Senator Ike Ekweremadu", correct: false },
    ],
  },
  {
    question: "People who live by selling their labour are called?",
    answers: [
      { text: "Capitalist", correct: false },
      { text: "Proletariat", correct: true },
      { text: "Bourgeoisie", correct: false },
      { text: "Social", correct: false },
    ],
  },
  {
    question:
      "Which state in Nigeria has the highest number of local government areas?",
    answers: [
      { text: "Kano", correct: true },
      { text: "Lagos", correct: false },
      { text: "Ogun", correct: false },
      { text: "Oyo", correct: false },
    ],
  },
  {
    question: "A country made up of semi-autonomous units is called?",
    answers: [
      { text: "Federal State", correct: true },
      { text: "Unitary State", correct: false },
      { text: "Confederal State", correct: false },
      { text: "Autonomous State", correct: false },
    ],
  },
];

const questionEl = document.querySelector(".question");
const answerEl = document.querySelector(".answers");
// const button = document.querySelector(".btn");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const showMore = document.getElementById("showmore");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = `${questionNo}. ${currentQestion.question}`;

  currentQestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerEl.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

let resetState = () => {
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    var cColor = (selectedBtn.style.backgroundColor = "green");
    score++;
  } else {
    var iColor = (selectedBtn.style.backgroundColor = "red");
  }
  Array.from(answerEl.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = cColor;
      button.style.color = "white";
    }
    button.disabled = true;
  });
  if (!selectedBtn) {
    // nextBtn.style.backgroundColor = "gray";
    return;
  } else {
    nextBtn.style.backgroundColor = "green";
  }
};

function showScore() {
  resetState();
  window.location.href = "result.html";
  //   for (let i = 0; i < questions.length; i++) {
  //     if (answers[i] === questions[i].correct) {
  //         score++;
  //         // console.log(score++);
  //     }

  // }

  // Display the score
  scoreEl.innerText = "Your score is: " + score + "/" + questions.length;

  console.log(score);
}

function handleNextButton() {
  nextBtn.style.backgroundColor = "gray";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener(
  "click",
  handleNextButton
  // if (currentQuestionIndex < questions.length) {
  //   handleNextButton();
  // }
  // showQuestion();
);

// showMore.addEventListener('click', () => {

// })

function handleShowMore() {
  showMore.addEventListener("click", () => {});
}

startQuiz();
