/*
Summary:
Every JS object has a prototype property, which makes inhertinace possible in JS

The prototype property s an object where we put methods and properties that we want other objects to inherit

The constructor's prototype property is not the prototype of the constructor itself, it's the prototype of ALL instances that are created through it

When a certain method is called, the search starts in the object itself.  If not found, search moves on to the objet's prototype, this continues until the method is ound (prototype chain - imporant)
*/

//Function constructor
/*
//Just one object
var john =  {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

//Constructor object
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//inheritance at it's finest
Person.prototype.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
  };

Person.prototype.lastName = 'Rubin';

//Creating john using constructor
var john = new Person('John', 1990, 'teacher');
john.calculateAge();
var jane = new Person('Jane', 1969, 'designer');
jane.calculateAge();
var mark = new Person('Mark', 1948, 'retired');
mark.calculateAge();
*/
/////////////////////////////////////////////////////////////////////////
//object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2017 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {value: 'Jane' },
  yearOfBirth: {value: 1969 },
  job: {value: 'designer' }
});
*/

//Primitives vs objects
/*
//primitives
var a = 23;
var b = a;
a = 46;

var obj1 = {
  name: 'John',
  age: 26
};

//obj2 just points to obj1, so they are the same object no matter what
var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Function
var age =27;
var obj ={
  name: 'Greg',
  city: 'Brooklyn'
};

function change(a,b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

//Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1988];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2017 - el;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);

function fullAge(el) {
  return el >= 18;
}
var fullAges = arrayCalc(ages, fullAge);
console.log(fullAges);

function maxHeartRate(el) {
  if(el >= 18 && el <=81) {
  return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var heartRates = arrayCalc(ages, maxHeartRate);
console.log(heartRates);
*/
////////////////////////////////////////////////////////////////
//Functions returning functions
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('Greg');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jackie');
interviewQuestion('Human Resources')('Jackie');
*/
/////////////////////////////////////////////////////////////////
//IIFE

/*function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();


//How IIFE works, invisible!
(function () {
    var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/
//////////////////////////////////////
//Closures: innter functions always has access to variables from outter function

/*function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1990);
*/
/////////////////////////////////////////////////////
//Bind, call, and apply

/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentlement! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I am' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey, what's up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I am' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal',  'morning');

//Method borrowing
john.presentation.call(emily, 'friendly', 'afternoon');

//Apply method (function needs to accept arrays)
//john.presentation.apply(emily, ['friendly','afternoon']);

//Binds
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning')
*/

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

EXPERT MODE
8.  After the result is displayed, present thenext random question so the game never ends
*/


(function(){
  var Question = function(question, options, answer, wrongAnswer, rightAnswer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.wrongAnswer = wrongAnswer;
    this.rightAnswer = rightAnswer;
    };


Question.prototype.displayQuestion = function() {
      console.log(this.question);
      for (var i = 0; i < this.options.length; i++) {
      console.log(this.options[i]);
      }
      var opinion = prompt(this.question);
      if (opinion == this.answer) {
        console.log(this.rightAnswer);
        nextQuestion();
      } else  if (opinion === 'exit') {
        console.log('Thank you for playing!');
        } else {
        console.log(this.wrongAnswer);
        nextQuestion();
      }
};

var question1 = new Question('Did this work?', ['0:yes', '1:no'], 0, 'You lied! This did work!', 'YAY! WE DID IT!');

var question2 = new Question('Who wrote this function constructor?', ['0: Jackie', '1: Mitch',
'2: Greg'], 2, 'Come on! Give credit where credit is due!', 'You are right! He is a great learner!');

var question3 = new Question('Do you think this was easy to make?', ['0:yes', '1:no'], 1, 'Obviously you do not know me very well.', 'Thank you for understanding what I went through!');


function nextQuestion() {
  var questionBank = [question1, question2, question3];

questionBank.displayQuestion = function(){
  var questionNumber = Math.floor(Math.random() * questionBank.length);
  this[questionNumber].displayQuestion();
};
questionBank.displayQuestion();
nextQuestion();
}
nextQuestion();
})();


