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

	let tempTopDamage = $derived(tempEnc.combatants[0].damage);
</script>

<div class="flex w-full flex-col text-sm">
	{#if tempEnc.isExist === false}
		<div
			class="text-primary bg-bgt flex flex-row items-center justify-between px-1 pt-[1px] font-medium"
		>
			<div class="w-full grow overflow-x-hidden">
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
			class="text-primary bg-bgt flex flex-row items-center justify-between px-1 pt-[1px] font-medium"
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
