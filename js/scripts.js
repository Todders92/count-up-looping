$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var multiplier = parseInt($("input#multiplier").val());
    console.log(multiplier, number);
    if (number === 0 || multiplier === 0){
      alert("can't enter 0 as a number")
    }
    else if (isNaN(number) || isNaN(multiplier)) {
      alert("Make sure you're entering numbers into both fields")
    }
    else if ((multiplier < 0 && number > 0) || (multiplier > 0 && number < 0)){
      alert("Both numbers must be negative or positive")
    }
    else if (multiplier > number && number >0){
      alert("multiplier can't be larger then number you're counting to")
    }
    else if (multiplier < number && number  < 0){
      alert("multiplier can't be smaller then number you're counting to when using negative numbers")
    }
    else if ( multiplier < 0 && number < 0){
      for (var i = 0; i >= number; i += multiplier){
        $(".results ul").append("<li>" + i +"</li>")
        $(".results").removeClass("none");
      }
    }
    else {
      for (var i = 0; i <= number; i += multiplier){
        $(".results ul").append("<li>" + i +"</li>")
        $(".results").removeClass("none");
      }
    }
  });
});