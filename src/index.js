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
    let len = expr.length / 10;
    for(let i = 0; i < len; i++) {
        let letter = expr.substring(i*10, i*10 + 10);
        if(letter != '**********') {
            let bin_to_morse = '';
            for(let j = 0; j < 5; j++) {
                let pair = letter.substring(j*2, j*2 + 2);
                if(pair == '10')  bin_to_morse += '.';
                else if (pair == '11') bin_to_morse += '-';
            }
            arr.push(MORSE_TABLE[bin_to_morse]);
        }
        else arr.push(' ');
    }
    return arr.join('');
}

module.exports = {
    decode
}
