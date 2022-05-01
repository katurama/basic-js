const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  const arrP = new Array(options.additionRepeatTimes);
  for(let i = 0; i < arrP.length; i++){
    if(typeof options.addition === 'string'){
      options.addition= options.addition;
    }else if(options.addition === undefined){
      options.addition === undefined;
    }else{
      options.addition= `${options.addition}`;
    }
   arrP[i] = options.addition;
  }
  const array = new Array(options.repeatTimes);
  if(options.additionSeparator == null){
    options.additionSeparator = '|'
  } else{
    options.additionSeparator === options.additionSeparator;
  }
  for(let i = 0; i < array.length; i++){
    array[i] = str + arrP.join(options.additionSeparator);
  }
  if(options.separator == null){
    options.separator = '+'
  } else{
    options.separator === options.separator;
  }
  return (array.join(options.separator));
}

module.exports = {
  repeater
};
