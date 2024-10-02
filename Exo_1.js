function hasPairWithSumQuadratic(arr, k) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === k) {
          return true; 
        }
      }
    }
    return false; 
  }
  
  // Test de la fonction
  console.log(hasPairWithSumQuadratic([10, 15, 3, 7], 17)); // true
  console.log(hasPairWithSumQuadratic([1, 8, 10, 21], 19)); // false