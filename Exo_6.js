function countBuildingsWithSunsetView(buildings) {
    let count = 0; 
    let maxHeight = 0; 
  
    
    for (let i = 0; i < buildings.length; i++) {
      const currentHeight = buildings[i];
  
      
      if (currentHeight > maxHeight) {
        count++; 
        maxHeight = currentHeight; 
      }
    }
  
    return count; 
  }
  
 
  console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // 3
  console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // 1
  console.log(countBuildingsWithSunsetView([5, 4, 3, 2, 1])); // 1
  console.log(countBuildingsWithSunsetView([1, 2, 3, 4, 5])); // 5
  