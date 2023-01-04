
/*
-----------DETAILS-------------

Title: Diagonal Difference

Source link: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

Difficulty: Easy

Category: Algorithms


------------PSEUDOCODE---------

 FOR each sub array in the input array
   FOR each element in the sub array

        

SET aliceInitialScore to 0
SET bobInitialScore to 0


FOR each score in Alice's score array

  IF score is greater than bob's score in the same array position as Alice's THEN
     INCREMENT aliceInitialScore

  ELSE IF score is less than bob's score in the same array position as Alice's THEN
     INCREMENT bobInitialScore

  END IF

END FOR

PRINT aliceInitialScore, bobInitialScore


*/




//----------IMPLEMENTATION-------

function diagonalDifference(arr) {
   let left_to_right = 0;
   let right_to_left = 0;
   for (let i = 0; i < arr.length; i++) {
       for (let j = i; j < arr.length; j++) {
           left_to_right += arr[i][j];
           right_to_left += arr[i][arr[i].length-j-1]
           break;
       }
   }
return Math.abs(left_to_right - right_to_left)

}