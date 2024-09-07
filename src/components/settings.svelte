<script>
	import changeLog from '../lib/changeLog';
	import { addTestEncounter } from '../lib/encounter.svelte';

	let { config = $bindable(), temp } = $props();
	let nameOpen = $state(false);

	function handleClickTest() {
		temp.encounter = {
			formattedDuration: '05:00',
			duration: '3600',
			dps: '1236874',
			deaths: '10',
			zoneName: 'Testing'
		};
		temp.isExist = true;
		temp.id = 10;
		temp.index = 1;
		temp.combatants = [
			{
				name: 'DPS',
				job: 'Vpr',
				dps: '30069',
				damage: '6000000',
				damagePct: '60%',
				critHitPct: '30%',
				directHitPct: '10%',
				critDirectHitPct: '0%',
				biggestHit: 'smthing-100000',
				deaths: '0'
			},
			{
				name: 'TANK',
				job: 'War',
				dps: '20000',
				damage: '2000000',
				damagePct: '20%',
				critHitPct: '30%',
				directHitPct: '10%',
				critDirectHitPct: '0%',
				biggestHit: 'smthing-250000',
				deaths: '1'
			},
			{
				name: 'HEALER',
				job: 'Whm',
				dps: '15000',
				damage: '2000000',
				damagePct: '20%',
				critHitPct: '30%',
				directHitPct: '10%',
				critDirectHitPct: '0%',
				biggestHit: 'smthing-200000',
				deaths: '3'
			},
			{
				name: 'MISC',
				job: 'LMB',
				dps: '30069',
				damage: '6000000',
				damagePct: '60%',
				critHitPct: '30%',
				directHitPct: '10%',
				critDirectHitPct: '0%',
				biggestHit: 'smthing-6000000',
				deaths: '0'
			}
		];
	}

	function handleClickTheme(theme) {
		config.theme.currentTheme = theme;
		localStorage.setItem('theme', theme);
	}

	function handleClickRoleBg(color) {
		config.player.bgColor = color;
		localStorage.setItem('playerBgColor', color);
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
	<div class="flex flex-col items-center justify-center bg-bgt pb-1 pt-[1px] text-primary">
		<button
			class="rounded-primary border border-primary px-2 hover:bg-primary hover:text-neutral"
			onclick={() => {
				handleClickTest();
			}}
		>
			Show Test Combatants
		</button>
	</div>
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
		<!-- Color -->
		<div class="flex w-full flex-row justify-between px-1 pt-1">
			<p class="text-sm">Color:</p>
			<ul class="flex list-none flex-row items-center rounded-primary border border-primary">
				<li>
					<button
						class={`${config.player.bgColor == 0 ? 'bg-primary text-neutral' : 'bg-transparent text-primary'} px-2 hover:bg-primary hover:text-neutral`}
						onclick={() => {
							handleClickRoleBg(0);
						}}
					>
						Theme
					</button>
				</li>
				<li>
					<button
						class={`${config.player.bgColor == 1 ? 'bg-primary text-neutral' : 'bg-transparent text-primary'} px-2 hover:bg-primary hover:text-neutral`}
						onclick={() => {
							handleClickRoleBg(1);
						}}
					>
						Role
					</button>
				</li>
			</ul>
		</div>
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
