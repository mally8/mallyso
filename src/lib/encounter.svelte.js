// TODO: Make the parsing function here and cleanup the file.
// TODO: Think about Archived Encounters later on once the simple overlay functionality is done.

import { parseSeconds, processFloat } from './utils';

class Client {
	encounter = $state({
		duration: '',
		damage: '',
		dps: '',
		deaths: '',
		zoneName: ''
	});
	combatants = $state();

	constructor() {}

	logger() {
		console.log('Encounter: ', this.encounter);
		console.log('Combatants: ', this.combatants);
	}

	updateEncounter(duration, damage, dps, deaths, zoneName) {
		this.encounter.duration = parseSeconds(duration);
		this.encounter.damage = damage;
		this.encounter.dps = processFloat(dps);
		this.encounter.deaths = deaths;
		this.encounter.zoneName = zoneName;
	}

	updateCombatants(newCombatants) {
		this.combatants = newCombatants;
	}
}

let overlayData = new Client();

export function parseCombatData(data) {
	if (data.Encounter.DURATION === '0') return;
	if (data.Encounter.damage === '0') return;

	let encounter = data.Encounter;

	overlayData.updateEncounter(
		encounter.DURATION,
		encounter.damage,
		encounter.dps,
		encounter.deaths,
		encounter.CurrentZoneName
	);

	let newCombatants = [];
	let combatants = data.Combatant;

	for (let i = 0; i < Object.values(combatants).length; i++) {
		let combatant = Object.values(combatants)[i];
		let dps = processFloat(combatant.encdps);

		let newCombatant = {
			name: combatant.name,
			job: combatant.Job,
			dps: dps.formatted,
			damage: combatant.damage,
			damagePct: combatant['damage%'],
			critHitPct: combatant['crithit%'],
			directHitPct: combatant.DirectHitPct,
			critDirectHitPct: combatant.CritDirectHitPct,
			deaths: combatant.deaths
		};

		if (combatant.name === 'Limit Break') {
			newCombatant.job = 'LMB';
			newCombatant.name = 'LMB';
		}

		newCombatants.push(newCombatant);
	}
	overlayData.updateCombatants(newCombatants);

	return overlayData.encounter;
}

export function getOverlayData() {
	return overlayData;
}
