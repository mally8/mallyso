// TODO: Make the parsing function here and cleanup the file.
// TODO: Think about Archived Encounters later on once the simple overlay functionality is done.

import { processFloat } from './utils';

class ClientData {
	encounter = $state({
		duration: '',
		damage: '',
		dps: '',
		deaths: '',
		zoneName: ''
	});
	combatants = $state();
	lastEncounter = $state(false);
	history = $state([]);

	constructor() {}

	logger() {
		console.log('Encounter: ', this.encounter);
		console.log('Combatants: ', this.combatants);
	}

	updateEncounter(duration, damage, dps, deaths, zoneName) {
		this.encounter.duration = duration;
		this.encounter.damage = damage;
		this.encounter.dps = processFloat(dps);
		this.encounter.deaths = deaths;
		this.encounter.zoneName = zoneName;
	}

	updateCombatants(newCombatants) {
		this.combatants = newCombatants;
	}

	isNewEncounter(encounter) {
		let trueOrFalse =
			!this.lastEncounter ||
			this.lastEncounter.region !== encounter.CurrentZoneName ||
			this.lastEncounter.duration > +encounter.DURATION;

		this.updateLastEncounter(encounter);

		return trueOrFalse;
	}

	updateLastEncounter(encounter) {
		this.lastEncounter = {
			region: encounter.CurrentZoneName,
			damage: encounter.damage,
			duration: +encounter.DURATION,
			formattedDuration: +encounter.duration
		};
	}

	historyPush(encounter, combatants) {
		this.history.push({ id: Date.now(), encounter: encounter, combatants: combatants });
	}
}

let overlayData = new ClientData();

export function parseCombatData(data) {
	if (data.Encounter.DURATION === '0') return;
	if (data.Encounter.damage === '0') return;

	let encounter = data.Encounter;

	overlayData.updateEncounter(
		encounter.duration,
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
			dps: dps.sanitized,
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

	if (overlayData.isNewEncounter(encounter)) {
		if (+encounter.DURATION > 5) {
			overlayData.historyPush(encounter, newCombatants);
		}
	}

	return overlayData.encounter;
}

export function getOverlayData() {
	return { encounter: overlayData.encounter, combatants: overlayData.combatants };
}

export function getCombatHistory() {
	return overlayData.history;
}

export function combatHistoryLogger() {
	return console.log(overlayData.history);
}
