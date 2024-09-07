<script>
	import { formatBigHit, formatNumbers, getWidthPercentage } from '../lib/utils';
	import { getJobIcon, getJobRole } from '../lib/jobs';
	import JobIcon from './jobIcon.svelte';

	let { playerData, top_Damage, config } = $props();
	let isOpen = $state(false);
	let isRole = $derived(config.player.bgColor);
	let color = getJobRole(playerData.job);
</script>

<button
	class="text-primary"
	style={`${isRole == 1 ? `color: var(--${color})` : ''}`}
	onclick={() => {
		isOpen = !isOpen;
	}}
>
	<div class="flex cursor-pointer flex-row items-center justify-between bg-bgt px-1">
		<div class="flex w-[15ch] grow flex-row items-center gap-1 overflow-x-hidden text-nowrap">
			<JobIcon
				jobSVG={getJobIcon(playerData.job)}
				style={`${isRole == 1 ? `fill: var(--${color}) !important; color: var(--${color}) !important` : ''}`}
			/>
			<p>{playerData.name}</p>
		</div>
		<span class="shrink-0 ps-1 text-xs">{playerData.dps}</span>
	</div>
</button>
{#if isOpen}
	<div class="flex w-full flex-col bg-bgt px-1 text-xs text-primary">
		<div class="flex grow flex-row justify-between">
			<p>DAMAGE: <span>{formatNumbers(playerData.damage)}</span></p>
			<p>DAMAGE%: <span>{playerData.damagePct}</span></p>
		</div>
		<div class="flex grow flex-row justify-between">
			<p>CRIT%: <span>{playerData.critHitPct}</span></p>
			<p>DIRECTHIT%: <span>{playerData.directHitPct}</span></p>
		</div>
		<div class="flex grow flex-row justify-between">
			<p>CDHIT%: <span>{playerData.critDirectHitPct}</span></p>
			<p>DEATHS: <span>{playerData.deaths}</span></p>
		</div>
		<div class="flex grow flex-row justify-between gap-2">
			<p class="shrink-0">MAX HIT:</p>
			<span>{formatBigHit(playerData.biggestHit)}</span>
		</div>
	</div>
{/if}
<span
	class="h-[1px] bg-primary"
	style={`width: ${getWidthPercentage(playerData.damage, top_Damage)}%; ${isRole == 1 ? `background-color: var(--${color});` : ''}`}
></span>
