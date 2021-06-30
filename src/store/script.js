var questions = [
  {
    question:
      "Find the third side of a right angle triangle with legs 6cm and 8cm?",
    choices: ["10", "6", "4", "12"],
    correctAnswer: 0,
  },
  {
    question: "A slope of 1 makes and angle of what size?",
    choices: ["45", "60", "90", "270"],
    correctAnswer: 0,
  },
  {
    question: "Vertical lines like the y-axis have a slope of...?",
    choices: ["0", "undefined", "1", "-1"],
    correctAnswer: 1,
  },
  {
    question: "Which is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0,
  },
  {
    question:
      "Which of the following football legends never played for Barcelona?",
    choices: ["Ronaldo", "Maldini", "Maradona", "De-stefano"],
    correctAnswer: 1,
  },
  {
    question:
      "The following countries have the same name as their capital cities except?",
    choices: ["Luxembourg", "Panama", "Vatican city", "Switzerland"],
    correctAnswer: 3,
  },
  {
    question:
      "The probability of rolling a die and landing on a number less than 7 is?",
    choices: ["0", "1", "6", "7"],
    correctAnswer: 1,
  },
  {
    question: "If xy = 1, what fact can be deduced from the equation?",
    choices: [
      "Both x and y can be 1",
      "x and y are reciprocals",
      "Neigther can be zero",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: "The following countries are located in east africa except?",
    choices: ["Namibia", "Djibouti", "somalia", "Seychelles"],
    correctAnswer: 0,
  },
  {
    question: "Which is the most populated country Asia?",
    choices: ["India", "Indonesia", "China", "Japan"],
    correctAnswer: 2,
  },
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function() {
  // Display the first question
  displayCurrentQuestion();
  $(this)
    .find(".quizMessage")
    .hide();

  // On clicking next, display the next question
  $(this)
    .find(".nextButton")
    .on("click", function() {
      if (!quizOver) {
        value = $("input[type='radio']:checked").val();

        if (value == undefined) {
          $(document)
            .find(".quizMessage")
            .text("Please select an answer");
          $(document)
            .find(".quizMessage")
            .show();
        } else {
          // TODO: Remove any message -> not sure if this is efficient to call this each time....
          $(document)
            .find(".quizMessage")
            .hide();

          if (value == questions[currentQuestion].correctAnswer) {
            correctAnswers++;
          }

          currentQuestion++; // Since we have already displayed the first question on DOM ready
          if (currentQuestion < questions.length) {
            displayCurrentQuestion();
          } else {
            displayScore();
            //                    $(document).find(".nextButton").toggle();
            //                    $(document).find(".playAgainButton").toggle();
            // Change the text in the next button to ask if user wants to play again
            $(document)
              .find(".nextButton")
              .text("Play Again?");
            quizOver = true;
          }
        }
      } else {
        // quiz is over and clicked the next button (which now displays 'Play Again?'
        quizOver = false;
        $(document)
          .find(".nextButton")
          .text("Next Question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
      }
    });
});

// This displays the current question AND the choices
function displayCurrentQuestion() {
  console.log("In display current Question");

  var question = questions[currentQuestion].question;
  var questionClass = $(document).find(".quizContainer > .question");
  var choiceList = $(document).find(".quizContainer > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;

  // Set the questionClass text to the current question
  $(questionClass).text(question);

  // Remove all current <li> elements (if any)
  $(choiceList)
    .find("li")
    .remove();

  var choice;
  for (i = 0; i < numChoices; i++) {
    choice = questions[currentQuestion].choices[i];
    $(
      '<li><input type="radio" value=' +
        i +
        ' name="dynradio" />' +
        choice +
        "</li>"
    ).appendTo(choiceList);
  }
}

function resetQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  hideScore();
}

function displayScore() {
  $(document)
    .find(".quizContainer > .result")
    .text("You score is: " + correctAnswers * 10 + "%");
  $(document)
    .find(".quizContainer > .result")
    .show();
  if (correctAnswers * 10 >= 80) {
    $(document)
      .find(".quizContainer > .animate")
      .animate("excellent") +
      "you are an avenger" +
      displayScore;
  } else if (correctAnswers * 10 <= 75) {
    $(document)
      .find(".quizContainer > .animate")
      .animate("Poor poor poor") +
      "This is why you are not an avenger" +
      displayScore;
  }
}
function animate() {
  $(document)
    .find(".quizContainer > .animate")
    .animate("excellent") + displayScore;
}

function hideScore() {
  $(document)
    .find(".result")
    .hide();
}

// {
//     "status": "success",
//     "message": "Questions fetched successfully",
//     "code": 200,
//     "data": [
//         {
//             "id": 1,
// "question_number": "1",
// "question_text": "Find the third side of a right angle triangle with legs 6cm and 8cm?",
// "answerA": "4",
// "answerB": "6",
// "answerC": "10",
// "answerD": "12",
// "correct_answer": "10",
//             "created_at": "2021-06-29T19:13:11.458Z",
//             "updated_at": "2021-06-29T19:13:11.458Z"
//         },
//         {
//             "id": 2,
// "question_number": "2",
// "question_text": "A slope of 1 makes and angle of what size?",
// "answerA": "45",
// "answerB": "60",
// "answerC": "90",
// "answerD": "270",
// "correct_answer": "45",
//             "created_at": "2021-06-29T19:14:37.131Z",
//             "updated_at": "2021-06-29T19:14:37.131Z"
//         },
//         {
//             "id": 3,
// "question_number": "3",
// "question_text": "The probability of rolling a die and landing on a number less than 7 is?",
// "answerA": "0",
// "answerB": "1",
// "answerC": "6",
// "answerD": "7",
// "correct_answer": "1",
//             "created_at": "2021-06-29T19:17:44.545Z",
//             "updated_at": "2021-06-29T19:17:44.545Z"
//         },
//         {
//             "id": 4,
// "question_number": "4",
// "question_text": "If xy = 1, what fact can be deduced from the equation?",
// "answerA": "Both x and y can be 1",
// "answerB": "x and y are reciprocals",
// "answerC": "Neigther can be zero",
// "answerD": "All of the above",
// "correct_answer": "All of the above",
//             "created_at": "2021-06-29T19:21:40.971Z",
//             "updated_at": "2021-06-29T19:21:40.971Z"
//         },
//         {
//             "id": 5,
// "question_number": "5",
// "question_text": "Which is the most populated country Asia?",
// "answerA": "India",
// "answerB": "china",
// "answerC": "Japan",
// "answerD": "Indonesia",
// "correct_answer": "China",
//             "created_at": "2021-06-29T19:23:15.679Z",
//             "updated_at": "2021-06-29T19:23:15.679Z"
//         },
//         {
//             "id": 6,
// "question_number": "6",
// "question_text": "All of the following are integers except",
// "answerA": "whole numbers",
// "answerB": "negative numbers",
// "answerC": "0",
// "answerD": "fractions",
// "correct_answer": "fractions",
//             "created_at": "2021-06-29T19:24:59.314Z",
//             "updated_at": "2021-06-29T19:24:59.314Z"
//         },
//         {
//             "id": 7,
// "question_number": "7",
// "question_text": "What is the true value of pi",
// "answerA": "22/7",
// "answerB": "3.145",
// "answerC": "3.14",
// "answerD": "3.412",
// "correct_answer": "22/7",
//             "created_at": "2021-06-29T19:27:35.434Z",
//             "updated_at": "2021-06-29T19:27:35.434Z"
//         },
//         {
//             "id": 8,
// "question_number": "8",
// "question_text": "The following are data types except",
// "answerA": "Object",
// "answerB": "Numbers",
// "answerC": "strings",
// "answerD": "Array",
// "correct_answer": "Array",
//             "created_at": "2021-06-29T19:29:17.701Z",
//             "updated_at": "2021-06-29T19:29:17.701Z"
//         },
//         {
//             "id": 9,
// "question_number": "9",
// "question_text": "=== can best be intepreted as",
// "answerA": "an operator",
// "answerB": "Use to compare type",
// "answerC": "Used to compare value",
// "answerD": "comparing value and type",
// "correct_answer": "comparing value and type",
//             "created_at": "2021-06-29T19:36:34.754Z",
//             "updated_at": "2021-06-29T19:36:34.754Z"
//         },
//         {
//             "id": 10,
// "question_number": "10",
// "question_text": "How many colors are in a rainbow?",
// "answerA": "4",
// "answerB": "7",
// "answerC": "9",
// "answerD": "13",
// "correct_answer": "7",
//             "created_at": "2021-06-29T19:38:24.691Z",
//             "updated_at": "2021-06-29T19:38:24.691Z"
//         }
//     ]
// }
