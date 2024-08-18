export function parseSeconds(sec) {
	let minutes = `${Math.floor(sec / 60)}`.padStart(2, '0');
	let seconds = `${sec - minutes * 60}`.padStart(2, '0');
	return `${minutes}:${seconds}`;
}

export function processFloat(number) {
	if (!number) return;
	let result = {};
	result.sanitized = parseFloat(number.replace(',', '.')).toFixed(0);
	result.formatted = processNumber(result.sanitized);
	return result;
}

function processNumber(number) {
	if (!number) return;

	let num = number.toString().split('');
	let formattedNumber;

	if (num.length <= 3) return number;

	if (num.length > 3) {
		num.splice(-3, 3);
		num.push('K');
		formattedNumber = num.join('');
	} else {
		console.log('Exceptioning!');
	}

	return formattedNumber;
}

export function getWidthPercentage(number, topNumber) {
	let result;

	if (+number === +topNumber) {
		result = 100;
	} else {
		result = (+number / +topNumber) * 100;
	}

	return result.toFixed(2);
}

export function getNumberByK(number) {
	let num = +number;

	if (num >= 1000) {
		let result = (num / 1000).toFixed(1);
		result = `${result}K`;
		return result;
	}
	return num;
}
