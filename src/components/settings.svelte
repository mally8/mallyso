<script>
	import changeLog from '../lib/changeLog';
	let { config = $bindable() } = $props();

	function handleThemeClick(theme) {
		config.theme.currentTheme = theme;
		localStorage.setItem('theme', theme);
	}

	function handleDpsFormatClick(format) {
		config.player.dpsFormat = format;
		localStorage.setItem('playerDpsFormat', format);
	}
</script>

<div class="flex flex-col">
	<!-- Themes -->
	<div class="flex flex-col items-center bg-bgt pt-[1px] text-primary">
		<h3 class="w-full shrink-0 text-center font-normal">THEME</h3>
		<ul class="flex w-full list-none flex-row items-center justify-between p-1">
			{#each config.theme.allThemes as theme}
				<li>
					<button
						onclick={() => {
							handleThemeClick(theme);
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
	<!-- Player Stat Settings -->
	<div class="flex flex-col bg-bgt pb-1 pt-[1px] text-primary">
		<h3 class="w-full shrink-0 text-center font-normal">PLAYERS</h3>
		<!-- DPS -->
		<div class="flex w-full flex-row justify-between px-1">
			<p class="text-sm">DPS FORMAT:</p>
			<ul class="flex flex-row items-center rounded-primary border border-primary">
				<li>
					<button
						class={`${
							config.player.dpsFormat == 0
								? 'bg-primary text-neutral hover:bg-transparent hover:text-primary'
								: 'bg-transparent text-primary hover:bg-primary hover:text-neutral'
						} px-1`}
						onclick={() => {
							handleDpsFormatClick(0);
						}}
					>
						24500
					</button>
				</li>
				<li>
					<button
						class={`${
							config.player.dpsFormat == 1
								? 'bg-primary text-neutral hover:bg-transparent hover:text-primary'
								: 'bg-transparent text-primary hover:bg-primary hover:text-neutral'
						} border-s border-s-primary px-1`}
						onclick={() => {
							handleDpsFormatClick(1);
						}}
					>
						24.5K
					</button>
				</li>
			</ul>
		</div>
	</div>
	<span class="h-[1px]"></span>
	<!-- ChangeLog -->
	<div class="flex flex-col items-center bg-bgt pt-[1px] text-primary">
		<h3 class="w-full shrink-0 text-center font-normal">CHANGELOG</h3>
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
