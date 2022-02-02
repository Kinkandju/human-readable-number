module.exports = function toReadable (number) {
  const TEN = 10;
	const NINETEEN = 19;
	const HUNDRED = 100;
	const upToTwenty = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen"
	};
	const upToHundred = {
		2: "twenty",
		3: "thirty",
		4: "forty",
		5: "fifty",
		6: "sixty",
		7: "seventy",
		8: "eighty",
		9: "ninety"
	};
	let result = "";

	//Math.floor(num) - округляет число вниз и возвращает наибольшее целое число
	let hundreds = Math.floor(number / HUNDRED); //Например, число 837 станет 8, то есть 8 сотнями
	let dozens = Math.floor(number / TEN) - hundreds * TEN; //В данном случае получится 83 - 80 = 3, то есть 3 десятка
	let units = number - hundreds * HUNDRED - dozens * TEN; //Чтобы найти единицы из числа вычитаем сотни и десятки, тут просто
	let twoDigitNumber = dozens * TEN + units; //Двузначное число это сумма десятков и единиц

	//Если число меньше 19
	if (number >= 0 && number <= NINETEEN) {
		result = upToTwenty[number];
	}

	//Если число от 20 до 99
	if (number > NINETEEN && number < HUNDRED) {
		//Тернарный оператор. Сначала вычисляется условие(units !== 0): если оно истинно,
		//тогда возвращается значение1(dozens + blank + units), в противном случае – значение2(upToHundred[dozens]).
		result = (units !== 0) ? (upToHundred[dozens] + " " + upToTwenty[units]) : upToHundred[dozens];
	}

	//Если число больше 100
	if (number >= HUNDRED) {
		//Проверка в диапазоне от _21 до  _99, при этом последняя цифра !== 0
		if (units !== 0 && twoDigitNumber > NINETEEN && twoDigitNumber < HUNDRED) {
			result = upToTwenty[hundreds] + " " + "hundred" + " " + upToHundred[dozens] + " " + upToTwenty[units];
		}
		//Проверка в диапазоне от _21 до  _99, при этом последняя цифра === 0
		else if (units === 0 && twoDigitNumber > NINETEEN && twoDigitNumber < HUNDRED) {
			result = upToTwenty[hundreds] + " " + "hundred" + " " + upToHundred[dozens];
		}
		//Проверка в диапазоне от __0 до  _19, при этом последние 2 цифры !== 0
		else if (0 < twoDigitNumber && twoDigitNumber <= NINETEEN) {
			result = upToTwenty[hundreds] + " " + "hundred" + " " + upToTwenty[twoDigitNumber];
		}
		//Проверка сотен, при этом последние 2 цифры === 0
		else {
			result = upToTwenty[hundreds] + " " + "hundred";
		}
	}

	return result;
}
