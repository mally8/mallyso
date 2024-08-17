<script>
	import Update from './svgs/update.svelte';

	let { encounterHistory = $bindable(), temporaryEnc = $bindable() } = $props();

	function handleClick(id, index) {
		if (encounterHistory.length === 0) return;

		let data;

		encounterHistory.map((enc) => {
			if (enc.id === id) {
				data = enc;
			}
			return;
		});

		if (data === undefined) return;

		temporaryEnc.isExist = true;
		temporaryEnc.encounter = data.encounter;
		temporaryEnc.combatants = data.combatants;
		temporaryEnc.id = data.id;

		temporaryEnc.encounter.index = index + 1;
	}
</script>

<ul class="flex flex-col items-center bg-bgt text-primary">
	<div class="flex w-full flex-row items-center justify-between px-1">
		<h3 class="text-ellipsis text-nowrap">Encounter History List</h3>
		<Update />
	</div>
	{#each encounterHistory as enc, index}
		<li class="group w-full px-1 pt-1 hover:bg-primary hover:text-base-100">
			<button
				class="flex w-full flex-row justify-between"
				onclick={() => {
					handleClick(enc.id, index);
				}}
			>
				<div class="flex grow flex-row gap-1 overflow-x-hidden">
					<span
						class="badge badge-primary badge-sm px-1 font-sourceCode font-bold group-hover:bg-base-100 group-hover:text-primary"
					>
						{index + 1}
					</span>
					<h4 class="overflow-x-hidden text-nowrap text-center">
						{enc.encounter.zoneName}
					</h4>
				</div>

				<span class="shrink-0 ps-1 text-xs">{enc.encounter.formattedDuration}</span>
			</button>
		</li>
	{/each}
</ul>
<span class="h-[1px]"></span>
