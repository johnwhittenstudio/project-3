# Mr. Roboger's Neighborhood

## by _**John Whitten**_

### _November 20, 2021_

#### _The third independent learning project from Epicodus._

## Technologies Used

- _HTML_
- _CSS_
- _Bootstrap_
- _Javascript_
- _jQuery-3.6.0_

## Description

Mr. Roboger's Neighborhood is a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. For example,

- The number 13 should be replaced with "Won't you be my neighbor?"
- The number 21 should be replaced with "Boop".
- The number 32 should be replaced with "Won't you be my neighbor?"
  A user should be able to enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

## Directions

Download this portfolio from GitHub and open in terminal.

...https://github.com/johnwhittenstudio/project-3...

Contents include the following html page:

- index.html

The html web form does not need a server to run and can be completed and interacted with by clicking on the "click here" button.

This html web form works on Chrome, Firefox, and Safari.

## Known Bugs

- _No known bugs._

## License

[MIT License](https://opensource.org/licenses/MIT)

_If you encounter any issues with this site, please contact John at [johnwhitten.studio@gmail.com](mailto:johnwhitten.studio@gmail.com)_

Published _2021_ _John Whitten_

<!-- Mr. Roboger's Neighborhood

GOAL: Create  -->

---

Describe: beepBoop(inputtedNumber)

Test: "It should return "Not a Number!" when the user enters something that isn't a number."
Code: beepBoop(inputtedNumber);
inputtedNumber = "A"
if (isNaN(number)) {
return 'Not a Number!';
}
Expected output" "Not a Number!"

<!-- Test Passed! -->

---

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(inputtedNumber);
inputtedNumber = 0

    function beepBoop(inputtedNumber) {
    if (inputtedNumber === 0) {
      console.log (Array.from("0"));
      } else {
        return false;
      }
    }
    beepBoop(0);

Expected Output: ['0']

<!-- Test Passed! -->

New test for beepBoop function with different outcome expected.

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(inputtedNumber);
inputtedNumber = 4
Expected Output: false

<!-- Test Passed! -->

---

Test: "It should return an array counting up to the number inputted"
Code: beepBoop(inputtedNumber);
inputtedNumber = 0

function beepBoop(number) {
let s = "";
let finalArray = [];
for (let i = 1; i <= number; i++) {
s += i;
if (i , (number)) {
s += ', ';
}
}
finalArray.push(s);
return finalArray;
}
beepBoop(15);
Expected Output: [ '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' ]

<!-- Test Passed! -->

---

Describe: numbersToDigits(inputtedNumber)

Test: "It should return a multi-digit number separated into individual digits in an array."
Code:
let inputtedNumber = 123456

let inputtedNumber = 123456;
let digits = inputtedNumber.toString().split("");
let digitsArray = digits.map(Number)
console.log(digitsArray);

Expected Output = [1, 2, 3, 4, 5, 6]

<!-- Test Passed! -->

Test these later, other tests needed first.

<!-- Test: "It should return "Beep!" when user enters a 1"
Code: beepBoop(inputtedNumber);
inputtedNumber = 1
Expected Output: "BEEP!"

    function beepBoop(inputtedNumber) {
      if (inputtedNumber === 1) {
        console.log "Beep!";
      } else {
        return false;
      }
    }
    beepBoop(1);
<!-- Test Passed! -->

<!-- Test: "It should return "Beep!" when user enters a number with more than one 1"
Code: beepBoop(theArgument);
theArgument = 11
Expected Output: "BEEP!"

    function beepBoop(inputtedNumber, String) {
      if (inputtedNumber === 1) {
        console.log "Beep!";
      } else {
        return false;
      }
    }
    beepBoop(1); -->
