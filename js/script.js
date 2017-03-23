$(document).ready(function(){
    $(".dropbtn").click(function(){
        $("#myDropdown").toggle();
    });           
});

var counter = 0;

var content = 
    [{"name":"Lightning never strikes in the same place twice. ","answer":"false"},
    {"name":"Humans can distinguish between over a trillion different smells.","answer":"true"},
    {"name":" Goldfish only have a memory of three seconds.","answer":"false"},
    {"name":"Your fingernails and hair keep growing after you die.","answer":"false"},{"name":"Humans can’t breathe and swallow at the same time. ","answer":"true"}];

var $name = $('.name'),
    $generate = $('.generate'),
    $result = $('.results'),
    $thanks = $('.thanks'),
    $options = $('.options');

var quizQuestions = {};

quizQuestions.init = function() {
  var selection = content[counter];
  type = selection["answer"];
  $name.html(selection["name"]);
  $generate.hide();
  $result.hide();
  $thanks.hide();
}

quizQuestions.generate = function() {
  
  if (counter < content.length) {
    var selection = content[counter];
    $name.html(selection["name"]);
    type = selection["answer"];  
    $result.hide();
    $name.show();
    $options.show();
    $generate.hide();
      
  } else {
    $thanks.show();
    $result.hide();
    $generate.hide();
  }
}

$('.choice').click(function(e) {
  var chosenAnswer = e.target.id;  
  $result.show();
  $name.hide();
  $options.hide();

  if (chosenAnswer == type) {
    $result.html("Great! You're right!"); 
  } else {
    $result.html("Oops...you're wrong :(");
  }
  counter++;
  $generate.show();
});

$(document).ready(function() {
  quizQuestions.init();
});

$generate.on('click', function() {
  quizQuestions.generate();
});
