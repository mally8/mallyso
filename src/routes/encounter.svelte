<script>
	import { getOverlayData } from '../lib/encounter.svelte';

	let overlayData = getOverlayData();
	let players = $derived(overlayData.combatants);
</script>

<div class="bg-primarybg flex w-full flex-col text-sm">
	<div
		class="bg-sGreenPrimary text-sGreenDark flex flex-row items-center justify-between px-1 font-semibold"
	>
		<h1>{overlayData.encounter.zoneName}</h1>
		<p class="text-xs font-bold">{overlayData.encounter.duration}</p>
	</div>
	<span class="h-[1px]"></span>

	<div class="flex flex-col">
		{#each players as player, index}
			<div
				class="bg-sGreenDark9 text-sGreenPrimary flex flex-row items-center justify-between px-1"
			>
				<p class="w-[15ch] grow flex-nowrap overflow-x-hidden text-nowrap">
					{`${player.job.toUpperCase()} - ${player.name}`}
				</p>
				<span class="shrink-0 ps-1 text-xs">{`${player.dps}[${player.critHitPct}]`}</span>
			</div>
			<span class="bg-sGreenPrimary h-[1px] w-3/5"></span>
		{/each}
	</div>
</div>
