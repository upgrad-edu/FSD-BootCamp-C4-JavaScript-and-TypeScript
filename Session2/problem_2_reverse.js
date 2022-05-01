function ReverseString(str) {
  
    // Check input
    if(!str || str.length < 2 || 
            typeof str!== 'string') {
        return 'Not valid'; 
    }
      
    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;
      
    // Looping from the end
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
      
    // Joining the array elements
    return revArray.join('');
}

console.log(ReverseString("Hello World"));

/** This method uses JS build in method to reverse a string */
function reverseWithBuildInMethods(str){
    //split() inbuilt function in JavaScript to split string into array of characters.
    //Use reverse() function in JavaScript to reversal the array of characters.
    //Use join() function in JavaScript to join the elements of an array into a string.
   return str.split('').reverse().join('')
}

console.log(reverseWithBuildInMethods("Hello World"));



