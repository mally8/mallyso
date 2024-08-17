<script>
	let { encounterHistory = $bindable(), temporaryEnc = $bindable() } = $props();

	function handleClick(id) {
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
	}
</script>

<ul class="flex flex-col items-center bg-sGreenDark9 px-1 text-sGreenPrimary">
	<h3 class="w-full border-b border-b-sGreenPrimary text-center">Encounter History List</h3>
	{#each encounterHistory as enc, index}
		<li class="group w-full pt-1 hover:bg-sGreenPrimary hover:text-sGreenDark">
			<button
				class="flex w-full flex-row justify-between"
				onclick={() => {
					handleClick(enc.id);
				}}
			>
				<h4 class="overflow-x-hidden text-nowrap">
					<span
						class="bg-sGreenPrimary px-1 text-sGreenDark group-hover:bg-sGreenDark9 group-hover:text-sGreenPrimary"
						>{index + 1}:</span
					>
					{enc.encounter.zoneName}
				</h4>
				<span class="text-xs">{enc.encounter.formattedDuration}</span>
			</button>
		</li>
	{/each}
</ul>
<span class="h-[1px]"></span>
