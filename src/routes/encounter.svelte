<script>
	import { getOverlayData } from '../lib/encounter.svelte';
	import { getWidthPercentage } from '../lib/utils';

	let overlayData = getOverlayData();
	let players = $derived(overlayData.combatants);
	let topDamage = $derived(overlayData.combatants[0].damage);
</script>

<div class="bg-primarybg flex w-full flex-col text-sm">
	<div
		class="flex flex-row items-center justify-between bg-sGreenPrimary px-1 font-semibold text-sGreenDark"
	>
		<h1>{overlayData.encounter.zoneName}</h1>
		<p class="text-xs font-bold">{overlayData.encounter.duration}</p>
	</div>
	<span class="h-[1px]"></span>

	<div class="flex flex-col pb-1">
		{#each players as player}
			<div
				class="flex flex-row items-center justify-between bg-sGreenDark9 px-1 text-sGreenPrimary"
			>
				<p class="w-[15ch] grow flex-nowrap overflow-x-hidden text-nowrap">
					{`${player.job.toUpperCase()} ${player.name}`}
				</p>
				<span class="shrink-0 ps-1 text-xs">{`${player.dps}[${player.critHitPct}]`}</span>
			</div>
			<span
				class="h-[1px] bg-sGreenPrimary"
				style={`width: ${getWidthPercentage(player.damage, topDamage)}%;`}
			></span>
		{/each}
	</div>
</div>
