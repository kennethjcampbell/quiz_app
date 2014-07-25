$(document).ready(function() {

  $('.answers').on('click','button',function(){
    var picked = $(this).html();
    if (document.getElementById("button1").innerText == ariel.answer1) {
        ariel.compare(picked);
        $(".ariel").hide();
        belle.change();
        $(".belle").fadeIn(1000);
      } else if (document.getElementById("button1").innerText == belle.answer1) {
        belle.compare(picked);
        $(".belle").hide();
        tiana.change();
        $(".tiana").fadeIn(1000);
      } else if (document.getElementById("button1").innerText == tiana.answer1) {
        tiana.compare(picked);
        $(".tiana").hide();
        rap.change();
        $(".rap").fadeIn(1000);
      } else if (document.getElementById("button1").innerText == rap.answer1) {
        rap.compare(picked);
        $(".rap").hide();
        elsa.change();
        $(".elsa").fadeIn(1000);
      } else if (document.getElementById("button1").innerText == elsa.answer1) {
        elsa.compare(picked);
        $(".elsa").hide();
        $(".header").hide();
        $('button').hide();
        $('.footer').hide();
        $('span').text(count)
        $(".final").fadeIn(1000);
      };
  });

});

/* Questions Lsit */
var questions = ["Where does Ariel live", 
                  "Who does Belle fall in love with?",
                  "What is this Characters name?",
                  "What is Rapunzel's original natural hair color?",
                  "What is Elsa's special power?"];
var airelAnswers = ["Under the Sea", "On the Beach", "In the Sky", "In the Forest"]
var belleAnswers = ["Cogsworth", "Gaston", "The Candlestick", "The Beast"]
var tianaAnswers = ["Tammy", "Theresa", "Tiana", "Tina"]
var rapAnswers = ["Purple", "Blonde", "Red", "Brown"]
var elsaAnswers = ["Invisibility", "Freeze", "Fly", "Fire"]
var count = 0;

function Character(answer1, answer2, answer3, answer4, correct, question){
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.correct = correct;
  this.question = question;
    this.compare = function(selected) {
      if (selected == this.correct) {
        count++;
    };
  };
    this.change = function() {
      document.getElementById("button1").innerText = this.answer1;
      document.getElementById("button2").innerText = this.answer2;
      document.getElementById("button3").innerText = this.answer3;
      document.getElementById("button4").innerText = this.answer4;
      document.getElementById("qHeader").innerText = this.question;   
  };
};

var ariel = new Character(airelAnswers[0], airelAnswers[1], airelAnswers[2], airelAnswers[3], airelAnswers[0], questions[0]);
var belle = new Character(belleAnswers[0], belleAnswers[1], belleAnswers[2], belleAnswers[3], belleAnswers[3], questions[1]);
var tiana = new Character(tianaAnswers[0], tianaAnswers[1], tianaAnswers[2], tianaAnswers[3], tianaAnswers[2], questions[2]);
var rap = new Character(rapAnswers[0], rapAnswers[1], rapAnswers[2], rapAnswers[3], rapAnswers[3], questions[3]);
var elsa = new Character(elsaAnswers[0], elsaAnswers[1], elsaAnswers[2], elsaAnswers[3], elsaAnswers[1], questions[4]);

/*
  $(".buttonDiv > button").click(function(){
      
      if($(this).val() == "airelCorrect") {
        alert("Correct");
      } else {
        alert("Wrong");
      };
      /*$(".ariel").hide();
      $(".belle").fadeIn(1000);
      alert(document.getElementById("test").value);
      document.getElementById("test").value=ariel.answer1;
      alert(document.getElementById("test").value);
  });

 /* $(".belle > button").click(function(){
      $(".belle").hide();
      $(".tiana").fadeIn(1000);
  });

  $(".tiana > button").click(function(){
      $(".tiana").hide();
      $(".rap").fadeIn(1000);
  });

  $(".rap > button").click(function(){
      $(".rap").hide();
      $(".elsa").fadeIn(1000);
  });*/