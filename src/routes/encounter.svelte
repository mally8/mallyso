<script>
	import Players from '../components/players.svelte';
	import { getOverlayData } from '../lib/encounter.svelte';

	let overlayData = getOverlayData();
	let topDamage = $derived(overlayData.combatants[0].damage);
</script>

<div class="flex w-full flex-col text-sm">
	<div
		class="flex flex-row items-center justify-between bg-sGreenDark9 px-1 pt-[1px] font-medium text-sGreenPrimary"
	>
		<h2>{overlayData.encounter.zoneName}</h2>
		<p class="text-xs">{overlayData.encounter.duration}</p>
	</div>
	<span class="h-[1px]"></span>

	<div class="flex flex-col pb-1">
		{#each overlayData.combatants as player}
			<Players playerData={player} top_Damage={topDamage} />
		{/each}
	</div>
</div>
