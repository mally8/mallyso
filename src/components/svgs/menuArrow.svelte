<script>
	let { isOpen = $bindable() } = $props();
</script>

<button
	class="grid h-5 w-5 place-items-center ps-1 text-primary"
	onclick={() => {
		isOpen = !isOpen;
	}}
>
	{#if !isOpen}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
			<path
				fill-rule="evenodd"
				d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
	{#if isOpen}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
			<path
				fill-rule="evenodd"
				d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
</button>
