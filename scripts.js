// This section should be very similar to what you'll write 
// for adding/removing items to cart in homework
var cart = [{name: "yes"}, {name: "no"}]

function clicker(fortune){
  
  var i = cart.findIndex(function(el){
    return el.name.toLowerCase() == fortune 
  });
  
  // if i >= 0 
  // splice to get it out of the array
  // else 
  // push it into the array
  
  console.log(i);
}

// More general add, removal, and retrieval from arrays
var fortunes = ["yes", "no", "only on full moons"];

function removeAnswer(){
  var remv = document.removalForm.remove.value;
  
  var index = fortunes.indexOf(remv);
  
  if(index >= 0){
    fortunes.splice(index, 1)
  }
  console.log(fortunes); 
  event.preventDefault();
}

function insertAnswer(){
  var answer = document.answerForm.answer.value;
  fortunes.push(answer);
  console.log(fortunes);
  event.preventDefault(); 
}

function magicAnswer(){
  var q = document.questionForm.question.value;
  // We're just copying this rando code from the book :) 
  var rando = Math.floor(Math.random() * fortunes.length);
  var answer = fortunes[rando];
  var output = "So you want to know " + q + "... Well I think... " + answer;
  
  console.log(output);
  
  event.preventDefault();
}

