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

export function processNumber(number) {
	const num = number;
	const storedDpsFormat = localStorage.getItem('playerDpsFormat');
	let result;

	if (!storedDpsFormat || storedDpsFormat == 0) {
		return +num;
	}

	if (storedDpsFormat == 1) {
		result = formatNumbers(num);
		return result;
	}
}

export function processName(name) {
	const splitName = name.split(' ');
	const storedNameFormat = localStorage.getItem('playerNameFormat');
	let result;

	if (name === 'YOU') return name;

	if (!storedNameFormat || storedNameFormat == 0) {
		result = name;
		return result;
	}

	if (storedNameFormat == 1) {
		result = `${splitName[0].split('')[0]}. ${splitName[1]}`;
		return result;
	}

	if (storedNameFormat == 2) {
		result = `${splitName[0]} ${splitName[1].split('')[0]}.`;
		return result;
	}

	if (storedNameFormat == 3) {
		result = `${splitName[0].split('')[0]}. ${splitName[1].split('')[0]}.`;
		return result;
	}

	return name;
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

export function formatNumbers(number) {
	let num = +number;
	let result;

	if (num >= 1000000) {
		result = (num / 1000000).toFixed(1);
		result = `${result}M`;
		return result;
	}

	if (num >= 1000) {
		result = (num / 1000).toFixed(1);
		result = `${result}K`;
		return result;
	}

	return num;
}

export function formatBigHit(string) {
	let hit = string.split('-');
	const result = `${hit[0]} ${formatNumbers(hit[1])}`;
	console.log(result);
	return result;
}
