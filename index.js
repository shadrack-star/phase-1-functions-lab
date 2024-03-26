// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    const distance = Math.abs(pickupLocation - 42);
    return distance;
  }
  function distanceFromHqInFeet(pickupLocation) {
    // Calculate the distance in blocks from Scuber headquarters
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    
    // Convert the distance from blocks to feet (each block is 264 feet long)
    const distanceInFeet = distanceInBlocks * 264;
    
    // Return the distance in feet
    return distanceInFeet;
  }
  function distanceTravelledInFeet(start, destination) {
    // Calculate the difference between the start and destination blocks
    const blockDifference = Math.abs(destination - start);
    
    // Calculate the distance travelled in feet by multiplying the block difference by the length of each block (264 feet)
    const distanceInFeet = blockDifference * 264;
    
    // Return the distance travelled in feet
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination){
  
  
        // Calculate the distance travelled in feet
        const distanceInFeet = distanceTravelledInFeet(start, destination);
        
        // Check if the distance is over 2500 feet
        if (distanceInFeet > 2500) {
          return 'cannot travel that far';
        }
        
        // Calculate the fare based on the distance
        if (distanceInFeet <= 400) {
          return 0; // First 400 feet are free
        } else if (distanceInFeet <= 2000) {
          return (distanceInFeet - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
        } else if (distanceInFeet <= 2500) {
          return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
        }
      }
  
 
