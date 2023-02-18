const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let morse_code = '';
for (let j = 0; j< expr.length; j+=10) {
  let substr = expr.slice(j, j+10);
  // console.log(substr);
  arr.push('')

for (let i = 0; i < substr.length; i+=2) {
  if (substr[i] == 1) { 
    let position = substr.slice(i, i+2);
    if (position === '10') {
        arr[arr.length-1] +=  position.replace("10", ".") 
    }
   else if (position === '11') {
       arr[arr.length-1] += position.replace("11", "-")
      //  console.log(arr)
   }
  }
  
  }
} 
for (let el of arr) {
   morse_code += MORSE_TABLE[el] || ' '
  //  console.log(morse_code);
}
return morse_code;
}

console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"))

module.exports = {
    decode
}