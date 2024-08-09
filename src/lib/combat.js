import { ArchivedEncounters } from './encounter.svelte';
import { processFloat } from './numbers';

let archivedEncounters = new ArchivedEncounters();

export function combatDataType() {
	return {
		encounter: {
			duration: '',
			dps: '',
			damage: '',
			deaths: ''
		},
		combatants: [{}]
	};
}

function parseCombatData(data) {
	if (data.Encounter.DURATION === '0') return;
	if (data.Encounter.damage === '0') return;
	let encounter = data.Encounter;
	let combatData = combatDataType();
	combatData.encounter.duration = encounter.DURATION;
	combatData.encounter.dps = processFloat(encounter.dps);
	combatData.encounter.damage = encounter.damage;
	combatData.encounter.deaths = encounter.deaths;

	let newCombatants = [];

	for (let i = 0; i < Object.values(encounter.Combatant).length; i++) {
		let combatant = Object.values(encounter.Combatant)[i];
		let dps = processFloat(processFloat(combatant.dps));
	}
}
