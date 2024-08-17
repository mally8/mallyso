<script>
	import HistoryList from '../components/historyList.svelte';
	import Players from '../components/players.svelte';
	import MenuArrow from '../components/svgs/menuArrow.svelte';
	import { getEncData, getEncHistory, getTempEnc } from '../lib/encounter.svelte';

	let overlay = getEncData();
	let tempEnc = getTempEnc();
	let encHistory = getEncHistory();

	let topDamageCombatant = $derived(overlay.combatants[0].damage);
	let historyOpen = $state(false);

	let tempTopDamage = $derived(tempEnc.combatants[0]);
</script>

<div class="flex w-full flex-col text-sm">
	{#if tempEnc.isExist === false}
		<div
			class="flex flex-row items-center justify-between bg-sGreenDark9 px-1 pt-[1px] font-medium text-sGreenPrimary"
		>
			<div class="w-full grow overflow-x-auto">
				<h2 class="text-nowrap">{overlay.encounter.zoneName}</h2>
			</div>

			<div class="flex shrink-0 flex-row items-center ps-1">
				<span class="text-xs">{overlay.encounter.formattedDuration}</span>
				<MenuArrow bind:isOpen={historyOpen} />
			</div>
		</div>

		<span class="h-[1px]"></span>
		{#if historyOpen}
			<HistoryList encounterHistory={encHistory} temporaryEnc={tempEnc} />
		{/if}

		<div class="flex flex-col pb-1">
			{#each overlay.combatants as player}
				<Players playerData={player} top_Damage={topDamageCombatant} />
			{/each}
		</div>
	{:else if tempEnc.isExist === true}
		<div
			class="flex flex-row items-center justify-between bg-sGreenDark9 px-1 pt-[1px] font-medium text-pink-400"
		>
			<div class="w-full grow overflow-x-auto">
				<h2 class="text-nowrap">{tempEnc.encounter.zoneName}</h2>
			</div>

			<div class="flex shrink-0 flex-row items-center ps-1">
				<span class="text-xs">{tempEnc.encounter.formattedDuration}</span>
				<MenuArrow bind:isOpen={historyOpen} />
			</div>
		</div>

		<span class="h-[1px]"></span>
		{#if historyOpen}
			<HistoryList encounterHistory={encHistory} temporaryEnc={tempEnc} />
		{/if}

		<div class="flex flex-col pb-1">
			{#each tempEnc.combatants as tempPlayer}
				<Players playerData={tempPlayer} top_Damage={tempTopDamage} />
			{/each}
		</div>
	{/if}
</div>
