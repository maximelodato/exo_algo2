function countBuildingsWithSunsetView(heights) {
    let count = 0; 
  
    
    for (let i = 0; i < heights.length; i++) {
      let hasView = true; 
  
      
      for (let j = 0; j < i; j++) {
        if (heights[j] >= heights[i]) {
          hasView = false; 
          break; 
        }
      }
  
      
      if (hasView) {
        count++;
      }
    }
  
    return count; 
  }
  
  
  console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // 3
  console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // 1
  