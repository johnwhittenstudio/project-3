<!-- Mr. Roboger's Neighborhood

GOAL: Create a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

The number 13 should be replaced with "Won't you be my neighbor?"
The number 21 should be replaced with "Boop".
The number 32 should be replaced with "Won't you be my neighbor?"
A user should be able to enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5 -->


______________________________________________________________________

Describe: beepBoop(theArgument)

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(theArgument);
theArgument = 0

    function beepBoop(theArgument) {
    if (theArgument === 0) {
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
Code: beepBoop(theArgument);
theArgument = 4
Expected Output: false
<!-- Test Passed! -->


Test: "It should return "Beep!" when user enters a 1"
Code: beepBoop(theArgument);
theArgument = 1
Expected Output: "BEEP!"

    function beepBoop(theArgument) {
      if (theArgument === 1) {
        console.log "Beep!";
      } else {
        return false;
      }
    }
    beepBoop(1);
<!-- Test Passed! -->