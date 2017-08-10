$(document).ready(function() {
  var animal = prompt("Do you like honey bagers, squirrels, or dolphins?");
  // console.log(animal);
  if (animal === "honey badgers") {
    $('#honey-badger-hidden').show();
  }   else if (animal === "dolphins") {
    $('#dolphin-hidden').show();
  }   else if (animal === "squirrels") {
    $('#squirrel-hidden').show();
  }   else {
     alert("Why do you hate dolphins?");
     $('#dolphin-hidden, #honey-badger-hidden, #squirrel-hidden ').show();
  }
  $("#badgerClick").click(function(){
    $('#honey-badger-hidden2').show();
  });
  $("#dolphinClick").click(function(){
    $('#dolphin-hidden2').show();
  });
  $("#squirrelClick").click(function(){
    $('#squirrel-hidden2').show();
  });
});

// var over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");
//
//   if (over21) {
//     $('#drinks').show();
//   } else {
//     $('#under-21').show();
//   }
// });
