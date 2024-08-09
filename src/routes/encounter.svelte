<script>
	import { getOverlayData } from '../lib/encounter.svelte';

	let overlayData = getOverlayData();
	let players = $derived(overlayData.combatants);
</script>

<div class="flex w-full flex-col bg-primarybg text-sm">
	<div
		class="bg-primaryBg9 flex flex-row items-center justify-between px-1 font-semibold text-black"
	>
		<h1>{overlayData.encounter.zoneName}</h1>
		<p class="text-xs">{overlayData.encounter.duration}</p>
	</div>
	<div class="flex flex-col">
		{#each players as player}
			<div
				class="bg-primaryBg5 flex flex-row items-center justify-between border-b border-b-primary px-1 text-primary"
			>
				<p class="grow">{`${player.job.toUpperCase()} / ${player.name}`}</p>
				<span class="shrink-0 text-xs">{`${player.dps}[${player.critHitPct}]`}</span>
			</div>
		{/each}
	</div>
</div>
