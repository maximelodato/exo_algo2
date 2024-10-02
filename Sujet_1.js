function hasPairWithSum(arr, k) {
    const seenNumbers = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      const complement = k - arr[i];
      if (seenNumbers.has(complement)) {
        return true;
      }
      seenNumbers.add(arr[i]);
    }
  
    return false;
  }
  
 
  console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true
  console.log(hasPairWithSum([1, 8, 10, 21], 19)); // false
  