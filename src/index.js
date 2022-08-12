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
    const res = [];
    let chunk;
    for (let i = 0; i < expr.length; i = i + 10) {
        chunk = [expr.substr(i, 10)];
        res.push(chunk);
    }

    let result = [];
    res.forEach((element, index) => {
        result[index] = '';
        for (let i = 0; i < 10; i = i + 2) {
            chunk = element[0].substr(i, 2);
            if (chunk === "10") {
                result[index] += ".";
            }
            if (chunk === "11") {
                result[index] += "-";
            }
        }
    });
    return result
        .map((element) => (element !== "" ? MORSE_TABLE[element] : " "))
        .join("");
}

module.exports = {
    decode
}