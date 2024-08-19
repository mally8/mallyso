<script>
	let { currentTheme = $bindable(), allThemes = $bindable() } = $props();

	function handleClick(theme) {
		currentTheme = theme;
		localStorage.setItem('theme', theme);
	}
</script>

<div class="flex flex-col">
	<!-- Themes -->
	<div
		class="border-primary text-primary flex flex-col items-center justify-between bg-bgt pt-[1px]"
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
								? 'hover:text-neutral border-pinkPrimary text-pinkPrimary hover:bg-pinkPrimary'
								: theme === 'orange'
									? 'hover:text-neutral border-orangePrimary text-orangePrimary hover:bg-orangePrimary'
									: theme === 'green'
										? 'hover:text-neutral border-greenPrimary text-greenPrimary hover:bg-greenPrimary'
										: 'border-primary text-primary'
						} rounded-primary border px-2`}
					>
						{theme.toUpperCase()}
					</button>
				</li>
			{/each}
		</ul>
	</div>
	<span class="h-[1px]"></span>
</div>
