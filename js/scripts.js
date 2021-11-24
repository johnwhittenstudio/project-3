// Business Logic

function beepBoop(inputNumber) {
  let numberArray = [];
  for (let i = 0; i <= inputNumber; i++) {
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

$(document).ready(function() {
	$("#inputForm").submit(function(event) {
		event.preventDefault();
		$("#results").show();
		$("ul#numberList").empty();

		inputNumber = parseInt($("input#numberInput").val());
		
		const results = beepBoop(inputNumber);
		for (const result of results) {
			$("ul#numberList").append("<li>" + result + "</li>");
		}
	})
});

