<script>
	import HistoryList from '../components/historyList.svelte';
	import Players from '../components/players.svelte';
	import MenuArrow from '../components/svgs/menuArrow.svelte';
	import { getOverlayData } from '../lib/encounter.svelte';

	let { encounter, combatants } = getOverlayData();
	let topDamage = $derived(console.log(combatants));

	let boleanOpen = $state(false);
</script>

<div class="flex w-full flex-col text-sm">
	<div
		class="flex flex-row items-center justify-between bg-sGreenDark9 px-1 pt-[1px] font-medium text-sGreenPrimary"
	>
		<h2>{encounter.zoneName}</h2>
		<div class="flex shrink-0 flex-row items-center">
			<span class="text-xs">{encounter.duration}</span>
			<MenuArrow bind:isOpen={boleanOpen} />
		</div>
	</div>
	<span class="h-[1px]"></span>
	{#if boleanOpen}
		<HistoryList />
	{/if}

	<div class="flex flex-col pb-1">
		{#each combatants as player}
			<Players playerData={player} top_Damage={topDamage} />
		{/each}
	</div>
</div>
