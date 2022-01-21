/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Use a map and store the value of each of the nums with there corresponding index into the map, with the key being the num value.
// Check the map with a get each index with just nums[i] just to see if it exists, u have to make two conditions on the if statement due to 0 being false as well.
var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i]) === 0 || map.get(nums[i])){
            return true;
           }
        
        map.set(nums[i],i);
    }
    return false;
       
};
