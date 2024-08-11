<script>
	import { getWidthPercentage } from '../lib/utils';

	let { playerData, top_Damage } = $props();
</script>

<div class="flex flex-row items-center justify-between bg-sGreenDark9 px-1 text-sGreenPrimary">
	<p class="w-[15ch] grow flex-nowrap overflow-x-hidden text-nowrap">
		{`${playerData.job.toUpperCase()} ${playerData.name}`}
	</p>
	<span class="shrink-0 ps-1 text-xs">{`${playerData.dps}[${playerData.critHitPct}]`}</span>
</div>
<span
	class="h-[1px] bg-sGreenPrimary"
	style={`width: ${getWidthPercentage(playerData.damage, top_Damage)}%;`}
></span>
