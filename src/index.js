module.exports = function toReadable (number) {
    const numbers = ['', 'one', 'two',
    'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let decimal = ['', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numToString = number.toString()

if (number === 0) return 'zero';
if (number < 20) return numbers[number];
if (numToString .length === 2) {
    if (number % 10 === 0) {
        return decimal[(number / 10)]
    } else {
        return `${decimal[numToString[0]]} ${numbers[numToString[1]]}`
    }
}

if (numToString.length === 3) {
    if (numToString[1] === '0' && numToString[2] === '0') {
        return `${numbers[numToString[0]]} hundred`
    } else if (numToString[1] === '0') {
        return `${numbers[numToString[0]]} hundred ${numbers[numToString[2]]}`
    } else if (numToString[1] === '1') {
        return `${numbers[numToString[0]]} hundred ${numbers[numToString[1] + numToString[2]]}`
    } else if (numToString[2] === '0') {
        return `${numbers[numToString[0]]} hundred ${decimal[numToString[1]]}`
    } else {
        return `${numbers[numToString[0]]} hundred ${decimal[numToString[1]]} ${numbers[numToString[2]]}`
    }
}

}
