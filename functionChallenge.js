//Challenge
/*
--Building a quiz game!--
1.  Build a function constructor called Question to describe a question.  A question should include:
a)question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2.  Create a couple of questions using the constructor
3.  Store them all into an array
4.  Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task)
5. Use the 'prompt' function to ask the user for the correct answer.  The user should input the number of the correct answer such as you displayed on task 4.
6.  Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)
7. Suppose this code would be a plugin for other programmers to use in their code.  Make sure that all your code is private and doesn;t interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var Question = function(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
        var displayOptions = function() {
        for (var i = 0; i < options.length; i++) {
            console.log(options[i]);
        }
    }
//    console.log(question);
//    displayOptions();
//    var opinion = prompt(question);
//    if (opinion == answer) {
//        console.log('You are correct!');
//    } else {
//        console.log('There is a better answer!');
//    }
};

var question1 = new Question('Did this work?', ['0:yes', '1:no'], 0);

var question2 = new Question('Who wrote this function constructor?', ['0: Jackie', '1: Mitch',
'2: Greg'], 2);

var question3 = new Question('Do you think this was easy to make?', ['0:yes', '1:no'], 1);
var questionBank = [question1, question2, question3];

var questionNumber = Math.floor(Math.random() * questionBank.length);
