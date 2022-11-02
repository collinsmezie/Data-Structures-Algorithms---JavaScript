
/*
-----------DETAILS-------------

Title: compare the Triplets

Source link: https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

Difficulty: Easy

Category: Algorithms


------------PSEUDOCODE---------





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