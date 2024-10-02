function countBuildingsWithWestView(heights) {
    let count = 0;
    let maxHeight = 0; 
  
    
    for (let i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > maxHeight) {
        count++; 
        maxHeight = heights[i]; 
      }
    }
  
    return count; 
  }
  
  console.log(countBuildingsWithWestView([3, 7, 8, 3, 6, 1])); // 3
  console.log(countBuildingsWithWestView([1, 4, 5, 8])); // 1
  