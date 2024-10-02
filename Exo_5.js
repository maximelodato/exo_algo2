function hasPairWithSum(arr, k) {
    const seenNumbers = new Set(); 
  
    for (let number of arr) {
      const complement = k - number; 
      if (seenNumbers.has(complement)) {
        return true; 
      }
      seenNumbers.add(number); 
    }
  
    return false; 
  }
  
 
  console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true
  console.log(hasPairWithSum([1, 8, 10, 21], 19)); // false
  