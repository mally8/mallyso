<script>
	import changeLog from '../lib/changeLog';

	let { config = $bindable() } = $props();
	let nameOpen = $state(false);

	function handleClickTheme(theme) {
		config.theme.currentTheme = theme;
		localStorage.setItem('theme', theme);
	}

	function handleClickNameFormat(index) {
		config.player.nameFormat = index;
		localStorage.setItem('playerNameFormat', index);
		nameOpen = false;
	}

	function handleClickDpsFormat(format) {
		config.player.dpsFormat = format;
		localStorage.setItem('playerDpsFormat', format);
	}
</script>

<div class="flex flex-col">
	<!-- Themes -->
	<div class="flex flex-col items-center bg-bgt pb-1 pt-[1px] text-primary">
		<h3 class="w-full shrink-0 text-center font-normal">THEME</h3>
		<ul
			class="flex list-none flex-row items-center justify-between overflow-hidden rounded-primary border border-primary"
		>
			{#each config.theme.allThemes as theme}
				<li data-theme={theme}>
					<button
						onclick={() => {
							handleClickTheme(theme);
						}}
						class={`${
							config.theme.currentTheme === theme
								? 'bg-primary text-neutral hover:bg-transparent hover:text-primary'
								: 'bg-transparent text-primary hover:bg-primary hover:text-neutral'
						} px-2`}
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
		<div class="flex w-full flex-row justify-between px-1 pb-1 pt-1">
			<p class="text-sm">DPS:</p>
			<ul class="flex flex-row items-center rounded-primary border border-primary">
				<li>
					<button
						class={`${
							config.player.dpsFormat == 0
								? 'bg-primary text-neutral hover:bg-transparent hover:text-primary'
								: 'bg-transparent text-primary hover:bg-primary hover:text-neutral'
						} px-1`}
						onclick={() => {
							handleClickDpsFormat(0);
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
							handleClickDpsFormat(1);
						}}
					>
						24.5K
					</button>
				</li>
			</ul>
		</div>
		<!-- Name -->
		<div class="flex w-full flex-row items-center justify-between px-1">
			<p class="text-sm">Name:</p>
			<div class="group relative rounded-primary border border-primary">
				<button
					class="w-24 bg-primary text-center text-neutral"
					onclick={() => {
						nameOpen = !nameOpen;
					}}
				>
					{config.player.allNameFormats[config.player.nameFormat]}
				</button>
				{#if nameOpen}
					<div
						class="absolute -end-[1px] -start-[1px] top-[100%] z-10 inline-flex flex-col border-x border-b border-primary bg-bgt-alt"
					>
						{#each config.player.allNameFormats as nameFormat, index}
							<button
								class={`${
									config.player.nameFormat == index
										? 'hidden'
										: 'bg-transparent text-primary hover:bg-primary hover:text-neutral'
								} ps-1`}
								onclick={() => {
									handleClickNameFormat(index);
								}}
							>
								{nameFormat}
							</button>
						{/each}
					</div>
				{/if}
			</div>
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
					{#each log.changes as change}
						<p class="ps-1 text-xs">
							{change}
						</p>
					{/each}
				</li>
			{/each}
		</ul>
	</div>
</div>
