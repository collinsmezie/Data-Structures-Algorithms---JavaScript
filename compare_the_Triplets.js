
/*
-----------DETAILS-------------

Title: compare the Triplets

Source link: https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

Difficulty: Easy

Category: Algorithms


------------PSEUDOCODE---------

SET aliceInitialScore to 0
SET bobInitialScore to 0


FOR each score in Alice's score array

  IF each score is greater than bob's score in the same position as Alice's THEN
     INCREMENT aliceInitialScore

  ELSE IF score is less than bob's score in the same position as Alice's THEN
     INCREMENT bobInitialScore

  END IF

END FOR

PRINT aliceInitialScore, bobInitialScore


*/






//----------IMPLEMENTATION-------

function compareTriplets(a, b){
    let pointA = 0, pointB = 0;
    for(let i = 0; i < a.length; i++){
  
      (a[i] > b[i]) ? pointA += 1 : 
      
      (a[i] < b[i]) ? pointB += 1 : "continue"
   }
      return [pointA, pointB]
  }