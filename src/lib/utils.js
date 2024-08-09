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

function shouldAbbreviate(number) {
	return number >= 1000;
}

function abbreviateNumber(number) {}
