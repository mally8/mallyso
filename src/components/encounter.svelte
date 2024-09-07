<script>
	import HistoryList from './historyList.svelte';
	import Player from './player.svelte';
	import MenuArrow from './svgs/menuArrow.svelte';
	import Cogs from './svgs/cogs.svelte';
	import { getEncData, getEncHistory, getTempEnc } from '../lib/encounter.svelte';
	import Settings from './settings.svelte';
	import { formatNumbers } from '../lib/utils';

	let { settingsOpen = $bindable(), configState = $bindable() } = $props();

	let overlay = getEncData();
	let tempEnc = getTempEnc();
	let encHistory = getEncHistory();

	let topDamageCombatant = $derived(overlay.combatants[0].damage);
	let historyOpen = $state(false);

	let tempTopDamage = $derived(tempEnc.combatants[0].damage);
</script>

<div class="flex w-full flex-col text-sm">
	{#if settingsOpen === true}
		<div
			class="flex flex-row items-center justify-between bg-bgt px-1 pt-[1px] font-medium text-primary"
		>
			<div class="w-full grow overflow-x-hidden">
				<h2 class="text-ellipsis text-nowrap">SETTINGS</h2>
			</div>
			<div>
				<Cogs bind:isOpen={settingsOpen} />
			</div>
		</div>
		<span class="h-[1px]"></span>
		<Settings bind:config={configState} temp={tempEnc} />
	{:else if tempEnc.isExist === false}
		<div
			class="flex flex-row items-center justify-between bg-bgt px-1 pt-[1px] font-medium text-primary"
		>
			<div class="w-full grow overflow-x-hidden">
				<h2 class="text-ellipsis text-nowrap">
					{overlay.encounter.zoneName.length == 0
						? 'Waiting for Encounter...'
						: overlay.encounter.zoneName}
				</h2>
			</div>

			<div class="flex shrink-0 flex-row items-center justify-end ps-1">
				<span class="text-xs">{overlay.encounter.formattedDuration}</span>
				<MenuArrow bind:isOpen={historyOpen} />
				<Cogs bind:isOpen={settingsOpen} />
			</div>
		</div>

		<span class="h-[1px]"></span>
		{#if historyOpen}
			<HistoryList encounterHistory={encHistory} temporaryEnc={tempEnc} />
		{/if}

		<div class="flex flex-col pb-1">
			{#each overlay.combatants as player}
				<Player playerData={player} top_Damage={topDamageCombatant} config={configState} />
			{/each}
			{#if overlay.encounter.zoneName.length != 0}
				<div class="flex flex-row justify-between bg-bgt px-1 text-xs text-primary">
					<p>DEATHS: <span>{overlay.encounter.deaths}</span></p>
					<p>DPS: <span>{formatNumbers(overlay.encounter.dps)}</span></p>
				</div>
			{/if}
		</div>
	{:else if tempEnc.isExist === true}
		<div
			class="flex flex-row items-center justify-between bg-bgt px-1 pt-[1px] font-medium text-primary"
		>
			<div class="flex w-full grow flex-row flex-nowrap items-center gap-1 overflow-x-hidden">
				{#if tempEnc.encounter.index > 0}
					<span class="badge badge-primary badge-sm px-1 font-sourceCode font-bold"
						>{tempEnc.encounter.index}</span
					>
				{/if}
				<h2 class="text-nowrap">{tempEnc.encounter.zoneName}</h2>
			</div>

			<div class="flex shrink-0 flex-row items-center ps-1">
				<span class="text-xs">{tempEnc.encounter.formattedDuration}</span>
				<MenuArrow bind:isOpen={historyOpen} />
				<Cogs bind:isOpen={settingsOpen} />
			</div>
		</div>

		<span class="h-[1px]"></span>
		{#if historyOpen}
			<HistoryList encounterHistory={encHistory} temporaryEnc={tempEnc} />
		{/if}

		<div class="flex flex-col pb-1">
			{#each tempEnc.combatants as tempPlayer}
				<Player playerData={tempPlayer} top_Damage={tempTopDamage} config={configState} />
			{/each}
			<div class="flex flex-row justify-between bg-bgt px-1 text-xs text-primary">
				<p>DEATHS: <span>{formatNumbers(tempEnc.encounter.deaths)}</span></p>
				<p>DPS: <span>{formatNumbers(tempEnc.encounter.dps)}</span></p>
			</div>
		</div>
	{/if}
</div>
