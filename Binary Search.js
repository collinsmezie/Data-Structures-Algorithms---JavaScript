// Binary Search Algorithm:

// Start with a sorted array.
// Define two pointers, left and right, initially pointing to the first and last elements of the array, respectively.
// step 3 - Calculate the middle index as (left + right) / 2.
// Compare the middle element with the target value.
// If the middle element is equal to the target, you've found the value.
// If the middle element is greater than the target, update the right pointer to mid - 1, and repeat from step 3 with the updated pointers.
// step-7 If the middle element is less than the target, update the left pointer to mid + 1, and repeat from step 3 with the updated pointers.
// Repeat steps 3-7 until left is greater than right. If the target is not found, exit the loop.


function binarySearch(arr, item){
  
  let left = 0;

  let right = arr.length


  while(true){

    let mid = Math.floor((left + right) / 2)

    if(arr[mid] === item){

      return arr[mid]

    }else if(arr[mid] > item){

      right = mid - 1

    }else {

      left = mid + 1

    }

    if(left > right) return "Not Found"

  }

}

const array = [1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(array, 3))
