function parseMorse(signal) {

  let ones = 0;
  let zeros = 0;
  let result = "";

  let alphabet = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "SP" : " "
    };

  for (let i = 0; i < signal.length; i++) {
    if (signal[i] === 1) {
      ones += 1;
      if (signal[i+1] === 0 || i === signal.length - 1) {
        if (ones <= 2) result += '.'
        if (ones > 2) result += '-'
        ones = 0;
      }
    } else {
      zeros += 1;
      if (signal[i+1] === 1) {
        if (zeros === 6) result += " SP ";
        if (zeros <= 2) result += "";
        if (zeros > 2 && zeros < 6) result += " ";
        zeros = 0;
      }
    }

  }

  const resultArray = result.split(' ');
  let finalResult = "";

  for (const codedLetter of resultArray) {
    finalResult += alphabet[codedLetter];
    console.log(codedLetter);
  }

  return finalResult;
}

let signal = [0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0,
  1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0,
  0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0];

console.log('parseMorse(signal):', parseMorse(signal));