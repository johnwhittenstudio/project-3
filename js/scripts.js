// Business Logic


function beepBoop(number) {
  // const numberArray = number.toString().split("");
  if (isNaN(number)) {
      return alert("Please enter a number from 1-100")
  }
  if (number > 100) {
    return alert("Please enter a number from 1-100")
  }
  for (let i = 0; i <=number; i++) {
      if (i === 3 || i === 13 || i === 23 || i === 30 || i === 31 || i === 32 || i === 33 || i === 34 || i === 35 || i === 36 || i === 37 || i === 38 || i === 39 || i === 43  || i === 53  || i === 63  || i === 73  || i === 83 || i === 93) console.log("Won't you be my neighbor?");
      else if (i === 1 || i === 10 || i === 11 || i === 14 || i === 15 || i === 16 || i === 17 || i === 18 || i === 19 || i === 41  || i === 51  || i === 61 || i === 71 || i === 81 || i === 91 || i === 100) console.log("Beep!");
      else if (i === 2 || i === 12 || i === 20 || i === 21 || i === 22 || i === 23 || i === 24 || i === 25 || i === 26 || i === 27 || i === 28 || i === 29 || i === 42 || i === 52 || i === 62 || i === 72 || i === 82 || i === 92) console.log("Boop!");
      else console.log(i);
  }
  };


// UI Logic

$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    $("#beep-boop").submit(beepBoop);
  });
});