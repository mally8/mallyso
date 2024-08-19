<script>
	import { getNumberByK, getWidthPercentage } from '../lib/utils';
	import { getJobIcon } from '../lib/jobs';
	import JobIcon from './jobIcon.svelte';

	let { playerData, top_Damage } = $props();
	let isOpen = $state(false);
</script>

<button
	onclick={() => {
		isOpen = !isOpen;
	}}
>
	<div class="flex cursor-pointer flex-row items-center justify-between bg-bgt px-1 text-primary">
		<div class="flex w-[15ch] grow flex-row items-center gap-1 overflow-x-hidden text-nowrap">
			<JobIcon jobSVG={getJobIcon(playerData.job)} />
			<p>{playerData.name}</p>
		</div>
		<span class="shrink-0 ps-1 text-xs">{playerData.dps}</span>
	</div></button
>
{#if isOpen}
	<div class="flex w-full flex-col bg-bgt px-1 text-xs text-primary">
		<div class="flex grow flex-row justify-between">
			<p>DAMAGE: <span>{getNumberByK(playerData.damage)}</span></p>
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
	</div>
{/if}
<span
	class="h-[1px] bg-primary"
	style={`width: ${getWidthPercentage(playerData.damage, top_Damage)}%;`}
></span>
