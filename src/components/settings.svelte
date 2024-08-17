<script>
	let { currentTheme = $bindable(), allThemes = $bindable() } = $props();

	function handleClick(theme) {
		currentTheme = theme;
	}
</script>

<div class="flex flex-col">
	<!-- Themes -->
	<div
		class="flex flex-col items-center justify-between border-primary bg-bgt pt-[1px] text-primary"
	>
		<h3 class="w-full shrink-0 ps-1 font-normal">THEME</h3>
		<ul class="flex w-full list-none flex-row items-center justify-between p-1">
			{#each allThemes as theme}
				<li>
					<button
						onclick={() => {
							handleClick(theme);
						}}
						class={`${
							theme === 'pink'
								? 'text-pinkPrimary border-pinkPrimary hover:bg-pinkPrimary hover:text-neutral'
								: theme === 'orange'
									? 'text-orangePrimary border-orangePrimary hover:bg-orangePrimary hover:text-neutral'
									: theme === 'green'
										? 'text-greenPrimary border-greenPrimary hover:bg-greenPrimary hover:text-neutral'
										: 'border-primary text-primary'
						} rounded-btn border px-2`}
					>
						{theme.toUpperCase()}
					</button>
				</li>
			{/each}
		</ul>
	</div>
	<span class="h-[1px]"></span>
</div>
