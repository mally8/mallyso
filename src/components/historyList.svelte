<script>
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

<ul class="text-primary bg-bgt flex flex-col items-center pt-1">
	<h3 class="rounded-box w-full text-center">Encounter History List</h3>
	{#each encounterHistory as enc, index}
		<li class="hover:bg-primary hover:text-base-100 group w-full px-1 pt-1">
			<button
				class="flex w-full flex-row justify-between"
				onclick={() => {
					handleClick(enc.id, index);
				}}
			>
				<div class="flex flex-row gap-1">
					<span
						class="badge badge-primary badge-sm group-hover:text-primary group-hover:bg-base-100 px-1 font-sourceCode font-bold"
					>
						{index + 1}
					</span>
					<h4 class="overflow-x-hidden text-nowrap text-center">
						{enc.encounter.zoneName}
					</h4>
				</div>

				<span class="ps-1 text-xs">{enc.encounter.formattedDuration}</span>
			</button>
		</li>
	{/each}
</ul>
<span class="h-[1px]"></span>
