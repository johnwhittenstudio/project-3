// Business Logic


function beepBoop(num) {
  let numberArray = [];
  for (let i = 0; i <= num; i++) {
  if (i.toString().includes('3') === true) {
    numberArray.push("Won't you be my neighbor?"); 
  }
  else if  
  (i.toString().includes('2') === true) {
  numberArray.push("Boop!");
} 
else if 
   (i.toString().includes('1') === true) {
  numberArray.push("Beep!");
}
else { numberArray.push(i);
}
}
return numberArray;
}


// UI Logic

$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
    event.preventDefault();
    // const results = $("#beepBoop").val();
    $("#beep-boop").html(beepBoop(event));
    // $("#beep-boop").show();
  });
});

