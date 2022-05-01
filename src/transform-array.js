const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
    
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let myArr = [];
    for (let i = 0; i < arr.length; i++){
      if(typeof arr[i] === 'number' && arr[i-1] !== '--discard-next' && arr[i+1] !== '--discard-prev'){
        myArr.push(arr[i])
      }
      if(arr[i] === '--double-next'){
        if(i === arr.length -1){
         myArr.splice(i,0)
         }else{
          myArr.push(+(arr.slice(i+1, i+2).join('')))
         }
      }
      if(arr[i] === '--double-prev'){
         if(i === 0){
         myArr.splice(i,0)
         }else{
          myArr.push(+(arr.slice(i-1, i).join('')))}
      }
    } 
  return(myArr);
 }
 transform( [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5] )

module.exports = {
  transform
};
