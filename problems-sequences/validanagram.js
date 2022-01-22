/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//No real trick here, I just used strings over maps as strings let you change repeat letters, and used substrings for the replacing.
//This question kinda sucks tbh and took a lot of time and my solution isnt even that efficient.
//I use indexOf and substring to mimic map.get and map.delete to get rid of the letter if it has been used before.
var isAnagram = function(s, t) {
    let count = 0;
    let tval = t.length;
    let j = 0;
    for(let i = 0; i < s.length; i++){
        if(t.includes(s[i])){
            j = t.indexOf(s[i]);
            t = t.substring(0,j) + t.substring(j+1,);
        
            count++;
           }
    }
    if(s.length === count && count === tval){
    return true;
       }else{
           console.log(count);
           return false;
           
       }

    
    
};
