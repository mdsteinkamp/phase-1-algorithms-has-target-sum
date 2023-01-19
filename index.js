function hasTargetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const complementNum = target - arr[i];
      for (let j = i+ 1; j < arr.length; j++) {
        if (arr[j] === complementNum) return true
      }
    }
    return false
}

/* 
  
*/

/* 
Write function that takes in the array & target as arguments
    iterate over the array
      for current index, determine the complement number that adds to the target
      iterate over the remaining numbers in the array
        if any of the remaining numbers is the complement number return true
    Return false if reach end of the array and complement number is not found*/

/*
  Add written explanation of your solution here
  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 6, 80, -7, 0, 0], 0));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([25, 30, -25, 75], 50));
}

module.exports = hasTargetSum;
