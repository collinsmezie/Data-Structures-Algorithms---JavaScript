
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

  IF score is greater than bob's score in the same array position as Alice's THEN
     INCREMENT aliceInitialScore

  ELSE IF score is less than bob's score in the same array position as Alice's THEN
     INCREMENT bobInitialScore

  END IF

END FOR

PRINT aliceInitialScore, bobInitialScore


*/




//----------IMPLEMENTATION-------

function compareTriplets(aliceArray, bobArray){
    let aliceInitialScore = 0, bobInitialScore = 0;
    for(let i = 0; i < aliceArray.length; i++){
  
      (aliceArray[i] > bobArray[i]) ? aliceInitialScore += 1 : 
      
      (aliceArray[i] < bobArray[i]) ? bobInitialScore += 1 : "continue"
   }
      return [aliceInitialScore, bobInitialScore]
  }