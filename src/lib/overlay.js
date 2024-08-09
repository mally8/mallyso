import { parseCombatData } from './encounter.svelte';

export async function addCombatDataListener() {
	console.log('adding combatData overlay listener');
	addOverlayListener('CombatData', (data) => {
		console.log('raw CombatData: ', data);
		let parsedData = parseCombatData(data);
		console.log('Parsed Data: ', parsedData);
	});
}

export async function addPrimaryPlayerListener() {
	console.log('adding primary player listener');
	addOverlayListener('ChangePrimaryPlayer', (data) => {
		console.log('raw ChangePrimaryPlayer: ', data);
	});
}

export async function getLanguageId() {
	const language = await callOverlayHandler({ call: 'getLanguage' });
	return language.languageId;
}

export async function startOverlay() {
	console.log('starting overlay events');
	startOverlayEvents();
}
