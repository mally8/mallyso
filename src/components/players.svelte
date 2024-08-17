<script>
	import { getWidthPercentage } from '../lib/utils';
	import { getJobIcon } from '../lib/jobs';
	import JobIcon from './jobIcon.svelte';

	let { playerData, top_Damage } = $props();
</script>

<div class="flex flex-row items-center justify-between bg-bgt px-1 text-primary">
	<div class="flex w-[15ch] grow flex-row items-center gap-1 overflow-x-hidden text-nowrap">
		<JobIcon jobSVG={getJobIcon(playerData.job)} />
		<p>{playerData.name}</p>
	</div>
	<span class="shrink-0 ps-1 text-xs">{playerData.dps}</span>
</div>
<span
	class="h-[1px] bg-primary"
	style={`width: ${getWidthPercentage(playerData.damage, top_Damage)}%;`}
></span>
