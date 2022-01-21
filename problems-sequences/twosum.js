/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Use a map and store the value of each nums with there corresponding index into the map, with the key being the num value. 
//Check the map with a get each index with target - nums[i] and see if it exists, u have to make two conditions on the if statement due to 0 being false as well.


var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        console.log(map.get(target - nums[i]))
        if(map.get(target - nums[i]) === 0 || map.get(target - nums[i])){
            return([i,map.get(target - nums[i])]);
        }
        
        map.set(nums[i], i);
    }
    return map.get(target);

    
    
};
