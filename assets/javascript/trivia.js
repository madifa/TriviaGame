function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
  this.questionIndex++;

  if(this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
}



/*function populate() {
  if(trivia.isEnded()) {
    showScores();
   //display score count
  }

  else {
    var element = document.getElementById("question");
    element.innerHTML = trivia.getQuestionIndex().text;

    var choices = trivia.getQuestionIndex().choices;
    for(var i = 0; i< choices.length; i++) {
        var element = document.getElementById("pick01" + i);
        element.innerHTML = choices[i];
        guess("button" + i, choices[i]);

    }
    //display question
  }

}
*/
/*function guess(id, guess) {
  var button = document.getElementById(id);
  trivia.guess(guess);
  populate();
}

function showScores() {
  var gameOverHhtml = "<h1>Result</h1>";
      gameOverHhtml += "<h2 id='score'> Your Scores:" +trivia.score + "</h2>";
      var element = document.getElementById("trivia");
      element.innerHTML = gameOverHhtml;
}
// starting my questions

//create timer


var timer = setTimeout(stuffToDo, 1000);

function stuffToDo(){
  var d = new Date();
  d.setSeconds(10);

document.getElementById("stuffToDO").onclick = stuffToDo; 
document.getElementById("questions").innerHTML = questions;
*/