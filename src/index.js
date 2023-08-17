module.exports = function toReadable (number) {
	const TEN = 10;
	const TWENTY = 20;
  	const HUNDRED = 100;
	const numbersUpToTen = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
	}

	const numbersUptoTwenty = {
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
	}

	const numbersDozens = {
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
	}

  	// 897 -> hundreds = Math.floor(897 / 100) = Math.floor(8,97) = 8
	let hundreds = Math.floor(number / HUNDRED); 
  	// 897 -> dozens = Math.floor(897 / 10) - (8 * 10) = Math.floor(89,7) - 80 = 89 - 80 = 9; 
	let dozens = Math.floor(number / TEN) - (hundreds * TEN);
	// Multiplying tens by ten to match the object values
	let numberDozens = dozens * TEN;
  	// 897 -> units = 897 - (8 * 100) - (9 * 10) = 7
	let units = number - (hundreds * HUNDRED) - (dozens * TEN);
  	// 817 -> twoNumbers = 817 - 800 = 17
  	let twoNumbers = number - (hundreds * HUNDRED);

  	let result = '';

	// 0 - 9
  	if (number >= 0 && number < TEN) {
    	return result = numbersUpToTen[number];
	// 10 - 19
  	} else if (number >= TEN && number < TWENTY) {
    	return result = numbersUptoTwenty[number];
	// 10 - 99, units === 0
  	} else if ((number >= TEN && number < HUNDRED) && (units === 0)) {
    	return result = numbersDozens[numberDozens];
	// 10 - 99, units !== 0
  	} else if ((number >= TEN && number < HUNDRED) && (units !== 0)) {
    	return result = numbersDozens[numberDozens] + ' ' + numbersUpToTen[units];
	// >= 100 && (dozens === 0) && (units === 0)
  	} else if ((number >= HUNDRED) && (dozens === 0) && (units === 0)) {
    	return result = numbersUpToTen[hundreds] + ' hundred';
	// > 100 && (dozens === 0) && (units > 0 && units < 10)
  	} else if ((number > HUNDRED) && (dozens === 0) && (units > 0 && units < TEN)) {
    	return result = numbersUpToTen[hundreds] + ' hundred ' + numbersUpToTen[units];
	// > 100 && (twoNumbers >= 10 && twoNumbers < 20)
  	} else if ((number > HUNDRED) && (twoNumbers >= TEN && twoNumbers < TWENTY)) {
    	return result = numbersUpToTen[hundreds] + ' hundred ' + numbersUptoTwenty[twoNumbers];
	// > 100 && (dozens > 0) && (units !== 0) && (twoNumbers >= 20 && twoNumbers < 100)
  	} else if ((number > HUNDRED) && (dozens > 0) && (units !== 0) && (twoNumbers >= TWENTY && twoNumbers < HUNDRED)) {
    	return result = numbersUpToTen[hundreds] + ' hundred ' + numbersDozens[numberDozens] + ' ' + numbersUpToTen[units];
	// > 100 && (dozens > 0) && (units === 0) && (twoNumbers >= 20 && twoNumbers < 100)
  	} else if ((number > HUNDRED) && (dozens > 0) && (units === 0) && (twoNumbers >= TWENTY && twoNumbers < HUNDRED)) {
    	return result = numbersUpToTen[hundreds] + ' hundred ' + numbersDozens[numberDozens];
  	}
}
