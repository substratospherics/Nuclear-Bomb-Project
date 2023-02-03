// Scripted By Eli Taurel (ECHS)
const startBtn = document.getElementById("quizStart");
const questions = document.getElementsByClassName("questionHolder");
const trueQuestions = document.getElementsByClassName("true");
const falseQuestions = document.getElementsByClassName("false");
const changeThis = document.getElementById("lastOne")
let currentQuestion = 1;
let answerChoice;
let numberOfAnswersRight = 0;
let numberOfAnswersWrong = 0;
let grade;


startBtn.addEventListener("click", startQuiz);

//Add events for true questions
trueQuestions[0].addEventListener("click", answerTrue);
trueQuestions[1].addEventListener("click", answerTrue);
trueQuestions[2].addEventListener("click", answerTrue);
trueQuestions[3].addEventListener("click", answerTrue);
trueQuestions[4].addEventListener("click", answerTrue);
trueQuestions[5].addEventListener("click", answerTrue);
trueQuestions[6].addEventListener("click", answerTrue);
trueQuestions[7].addEventListener("click", answerTrue);
trueQuestions[8].addEventListener("click", answerTrue);
trueQuestions[9].addEventListener("click", answerTrue);

//Add events for false questions
falseQuestions[0].addEventListener("click", answerFalse);
falseQuestions[1].addEventListener("click", answerFalse);
falseQuestions[2].addEventListener("click", answerFalse);
falseQuestions[3].addEventListener("click", answerFalse);
falseQuestions[4].addEventListener("click", answerFalse);
falseQuestions[5].addEventListener("click", answerFalse);
falseQuestions[6].addEventListener("click", answerFalse);
falseQuestions[7].addEventListener("click", answerFalse);
falseQuestions[8].addEventListener("click", answerFalse);
falseQuestions[9].addEventListener("click", answerFalse);

function startQuiz() {
	startBtn.style.display = "none";
  questions[0].style.display = "block";
}

function answerTrue() {
	answerChoice = true;
  switch (true) {
  	case currentQuestion === 1:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[0].style.display = "none";
    	questions[1].style.display = "block";
      break;
    case currentQuestion === 2:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[1].style.display = "none";
    	questions[2].style.display = "block";
      break;
    case currentQuestion === 3:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[2].style.display = "none";
    	questions[3].style.display = "block";
      break;
    case currentQuestion === 4:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[3].style.display = "none";
    	questions[4].style.display = "block";
      break;
    case currentQuestion === 5:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[4].style.display = "none";
    	questions[5].style.display = "block";
      break;
    case currentQuestion === 6:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[5].style.display = "none";
    	questions[6].style.display = "block";
      break;
    case currentQuestion === 7:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[6].style.display = "none";
    	questions[7].style.display = "block";
      break;
    case currentQuestion === 8:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[7].style.display = "none";
    	questions[8].style.display = "block";
      break;
    case currentQuestion === 9:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[8].style.display = "none";
    	questions[9].style.display = "block";
      break;
     case currentQuestion === 10:
   		currentQuestion++;
      numberOfAnswersRight++;
      checkGrade();
      break;
  }
}

function answerFalse() {
	answerChoice = false;
  switch (true) {
  	case currentQuestion === 1:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[0].style.display = "none";
    	questions[1].style.display = "block";
      break;
    case currentQuestion === 2:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[1].style.display = "none";
    	questions[2].style.display = "block";
      break;
    case currentQuestion === 3:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[2].style.display = "none";
    	questions[3].style.display = "block";
      break;
    case currentQuestion === 4:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[3].style.display = "none";
    	questions[4].style.display = "block";
      break;
    case currentQuestion === 5:
   		currentQuestion++;
      numberOfAnswersWrong++;
    	questions[4].style.display = "none";
    	questions[5].style.display = "block";
      break;
    case currentQuestion === 6:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[5].style.display = "none";
    	questions[6].style.display = "block";
      break;
    case currentQuestion === 7:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[6].style.display = "none";
    	questions[7].style.display = "block";
      break;
    case currentQuestion === 8:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[7].style.display = "none";
    	questions[8].style.display = "block";
      break;
    case currentQuestion === 9:
   		currentQuestion++;
      numberOfAnswersRight++;
    	questions[8].style.display = "none";
    	questions[9].style.display = "block";
      break;
     case currentQuestion === 10:
   		currentQuestion++;
      numberOfAnswersWrong++;
      checkGrade();
      break;
  }
}

function checkGrade() {
  falseQuestions[9].style.display = "none";
  trueQuestions[9].style.display = "none";
  let grade = (numberOfAnswersRight / 10) * 100;
  let roundedGrade = Math.round(grade * 100) / 100;
  changeThis.textContent = `You got a ${roundedGrade}%`
}

