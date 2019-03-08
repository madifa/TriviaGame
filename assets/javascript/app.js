function populate() {
    if(quiz.isEnded()) {
      showScores();
     //display score count
    }
  
    else {
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;
  
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i< choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("button" + i, choices[i]);
  
      }

      showProgress();
      //display question
    }
  
  };

  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}


  function showScores() {
    var gameOverHtml = "<h1>help</h1>";
        gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score  + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
    
  }


var questions = [
    new Question("What is the oldest Dynasty in Chinese History?", ["Western Zhou", "Zhou", "Shang", "Xia"], "Xia"),
    new Question("In what year was the Xia Dynasty?", ["21st-17th century BC", "1046 BC-771 BC", "17th century BC-1046 BC", "1046-256 BC"], "1046-256 BC"),
    new Question("Which of these is not a Founder of Shang Dynasty?", ["Yu the Great", "Tang", "King Wu, Madison"], "Madison"),
    new Question("what is the population in China", ["1.3 billion, 1 billion, 2 billion, 1.5 billion"], "1.3 billion")
  ];
  
  var quiz = new Quiz(questions);
  
  populate();



  