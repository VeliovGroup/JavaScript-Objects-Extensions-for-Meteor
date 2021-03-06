'use strict';
/*
 * @function
 * @namespace String.prototype
 * @name clone
 * 
 * @description Clone (a.k.a. create singleton) of String object
 * This method allows to resolve issue with variable's referencing
 * See performance here: http://jsperf.com/clone-create-singleton-for-string-object
 * 
 * @param {boolean} asObject - If true returns String object, if false returns literal
 * 
 * @example
 * var str = new String('abc');
 * var str2 = str.clone();
 * str = new String('cde');
 * console.log(str2); //-> 'abc'
 */
Object.defineProperty(String.prototype, 'clone', {
  value: function(asObject){ return (asObject) ? new String(this.toString()) : (new String(this.toString())).toString(); }
});


/*
 * @function
 * @namespace String
 * @name generate
 * 
 * @description generate random string from 1 to 10 symbols length
 * 
 * @param {int} length - Set length of string
 * @param {string} symbols - Symbols to be used
 * 
 */
String.generate = function(length, symbols){
  length = length || 10;

  symbols = symbols || '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
  var max = symbols.length - 1;
  var x = '';

  for (var i = 0; i < length; i++) {
    x = x + symbols[(max === 0) ? 0 : Math.getRandom(0, max)];
  }

  return x;
};

/*
 * @function
 * @namespace String
 * @name random
 * 
 * @description generate random string from 2 to 111 symbols length
 * 
 * @param {int} length - Set length of string
 * @param {string} symbols - Symbols to be used
 * 
 */
String.rand = function(length, symbols){
  if(typeof length === 'boolean' && length === true){
    length = Math.getRandom(2,111);
    symbols = undefined;
  }else{
    length = length || Math.getRandom(2,111);
    symbols = symbols || '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm\..\\/\/?._+=-[]{}()*&^%$#@!±§,<>~`\'":;|';
  }
  
  return String.generate(length, symbols);
};