<script>
	import changeLog from '../lib/changeLog';
	let { currentTheme = $bindable(), allThemes = $bindable() } = $props();

	function handleClick(theme) {
		currentTheme = theme;
		localStorage.setItem('theme', theme);
	}
</script>

<div class="flex flex-col">
	<!-- Themes -->
	<div class="flex flex-col items-center justify-between bg-bgt pt-[1px] text-primary">
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
								? 'border-pinkPrimary text-pinkPrimary hover:bg-pinkPrimary hover:text-neutral'
								: theme === 'orange'
									? 'border-orangePrimary text-orangePrimary hover:bg-orangePrimary hover:text-neutral'
									: theme === 'green'
										? 'border-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-neutral'
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
	<div class="flex flex-col items-center justify-between bg-bgt pt-[1px] text-primary">
		<h3 class="w-full shrink-0 ps-1 font-normal">CHANGELOG</h3>
		<ul class="flex w-full flex-col gap-1 px-1 pb-1">
			{#each changeLog as log}
				<li class="text-start">
					<div class="flex flex-row justify-between text-sm">
						<h4>Version:</h4>
						<span class="badge badge-sm font-medium">{log.version}</span>
					</div>
					<p class="ps-1 text-xs">
						{log.changes}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
