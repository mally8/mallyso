<script>
	import { getWidthPercentage } from '../lib/utils';
	import { getJobIcon } from '../lib/jobs';
	import Svgs from './svgs.svelte';

	let { playerData, top_Damage } = $props();
</script>

<div class="flex flex-row items-center justify-between bg-sGreenDark9 px-1 text-sGreenPrimary">
	<div class="flex w-[15ch] grow flex-row items-center gap-1 overflow-x-hidden text-nowrap">
		<Svgs jobSVG={getJobIcon(playerData.job)} />
		<p>{playerData.name}</p>
	</div>
	<span class="shrink-0 ps-1 text-xs">{`${playerData.dps}[${playerData.critHitPct}]`}</span>
</div>
<span
	class="h-[1px] bg-sGreenPrimary"
	style={`width: ${getWidthPercentage(playerData.damage, top_Damage)}%;`}
></span>
