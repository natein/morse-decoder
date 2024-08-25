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
    let morseStr = getMourseArr(expr)
  
    let textStr = ''
  
    morseStr.forEach(char => {
        textStr += MORSE_TABLE[char] || ' '
    })
    return textStr
  }
  
  function getMourseArr(expr) {
    const morse = []
    for (let i = 0; i < expr.length; i += 10) {
        let elem = expr.slice(i, i + 10)
  
        elem = elem.split('00').join('')
  
        elem = elem.split('11').join('-')
  
        elem = elem.split('10').join('.')
  
        morse.push(elem);
    }
  
    return morse
  }

module.exports = {
    decode
}
