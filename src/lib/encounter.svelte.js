// TODO: Make the parsing function here and cleanup the file.
// TODO: Think about Archived Encounters later on once the simple overlay functionality is done.

import { processFloat, processName } from './utils';

let currentEnc = $state({
	id: 0,
	encounter: {
		formattedDuration: '',
		duration: '',
		damage: '',
		dps: '',
		deaths: '',
		zoneName: ''
	},
	combatants: []
});

// This variable is used to show an Encounter from the saved History.
let temporaryEnc = $state({
	id: 0,
	encounter: {
		formattedDuration: '',
		duration: '',
		damage: '',
		dps: '',
		deaths: '',
		zoneName: ''
	},
	combatants: [],
	isExist: false,
	index: 0
});

let isActive = $state('false');

let lastEncounter = $state(false);

let encHistory = $state([]);

function getEncObject(encounter) {
	return {
		formattedDuration: encounter.duration,
		duration: +encounter.DURATION,
		damage: encounter.damage,
		dps: +encounter.dps,
		deaths: encounter.deaths,
		zoneName: encounter.CurrentZoneName
	};
}

function isNewEncounter(encounter) {
	let trueOrFalse =
		!lastEncounter ||
		lastEncounter.zoneName !== encounter.CurrentZoneName ||
		lastEncounter.duration > +encounter.DURATION;

	updateLastEncounter(encounter);

	return trueOrFalse;
}

function updateLastEncounter(encounter) {
	lastEncounter = getEncObject(encounter);
}

export function addTestEncounter() {
	console.log('--Added Test Encounter--', temporaryEnc);
	return {
		id: 10,
		encounter: {
			formattedDuration: '05:00',
			duration: '3600',
			dps: '1236874',
			deaths: '10',
			zoneName: 'Testing'
		},
		combatants: [
			{
				name: 'DPS',
				job: 'Vpr',
				dps: '30069',
				damage: '6000000',
				damagePct: '60%',
				critHitPct: '30%',
				directHitPct: '10%',
				critDirectHitPct: '0%',
				biggestHit: 'smthing-100k',
				deaths: '0'
			},
			{
				name: 'TANK',
				job: 'War',
				dps: '20000',
				damage: '2000000',
				damagePct: '20%',
				critHitPct: '30%',
				directHitPct: '10%',
				critDirectHitPct: '0%',
				biggestHit: 'smthing-25k',
				deaths: '1'
			},
			{
				name: 'HEALER',
				job: 'Whm',
				dps: '15000',
				damage: '2000000',
				damagePct: '20%',
				critHitPct: '30%',
				directHitPct: '10%',
				critDirectHitPct: '0%',
				biggestHit: 'smthing-20k',
				deaths: '3'
			},
			{
				name: 'MISC',
				job: 'LMB',
				dps: '30069',
				damage: '6000000',
				damagePct: '60%',
				critHitPct: '30%',
				directHitPct: '10%',
				critDirectHitPct: '0%',
				biggestHit: 'smthing-6000000',
				deaths: '0'
			}
		],
		isExist: true,
		index: 0
	};
}

export function parseCombatData(data) {
	if (data.Encounter.DURATION === '0') return;
	if (data.Encounter.damage === '0') return;

	isActive = data.isActive;
	let encounter = data.Encounter;

	let newCombatants = [];
	let combatants = Object.values(data.Combatant);

	for (let i = 0; i < combatants.length; i++) {
		let combatant = combatants[i];
		let dps = processFloat(combatant.encdps);
		let name = processName(combatant.name);

		let newCombatant = {
			name: name,
			job: combatant.Job,
			dps: dps.formatted,
			damage: combatant.damage,
			damagePct: combatant['damage%'],
			critHitPct: combatant['crithit%'],
			directHitPct: combatant.DirectHitPct,
			critDirectHitPct: combatant.CritDirectHitPct,
			biggestHit: combatant.maxhit,
			deaths: combatant.deaths
		};

		if (combatant.name === 'Limit Break') {
			newCombatant.job = 'LMB';
			newCombatant.name = 'LMB';
		}
		newCombatants.push(newCombatant);
	}

	currentEnc.id = Date.now();
	currentEnc.encounter = getEncObject(encounter);
	currentEnc.combatants = newCombatants;

	// Redirect the UI to the Active Encounter and clear up the variables associated with it.
	if ($state.snapshot(isActive) === 'true') {
		clearTempEnc();
	}

	if (isNewEncounter(encounter)) {
		// Filter out accidental wipes.
		if (+encounter.DURATION > 5) {
			console.log('---PUSHING TO HISTORY---');

			encHistory.push({
				id: Date.now(),
				encounter: getEncObject(encounter),
				combatants: newCombatants
			});

			console.log($state.snapshot(encHistory));
			console.log('---PUSHED TO HISTORY---');
		}
	}

	let result = [
		$state.snapshot(currentEnc),
		$state.snapshot(isActive),
		$state.snapshot(encHistory)
	];

	return result;
}

export function getEncData() {
	return currentEnc;
}

export function getIsActive() {
	return $state.snapshot(isActive);
}

export function getEncHistory() {
	return encHistory;
}

export function getTempEnc() {
	let derived = $derived(temporaryEnc);
	return derived;
}

export function clearTempEnc() {
	temporaryEnc.id = 0;
	temporaryEnc.encounter = {
		formattedDuration: '',
		duration: '',
		damage: '',
		dps: '',
		deaths: '',
		zoneName: ''
	};
	temporaryEnc.combatants = [];
	temporaryEnc.isExist = false;
	temporaryEnc.index = 0;
}
