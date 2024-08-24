<script>
	import Encounter from '../components/encounter.svelte';

	let settingsBolean = $state(false);
	let config = $state({
		theme: {
			currentTheme: 'pink',
			allThemes: ['pink', 'orange', 'green']
		},
		player: {
			// 0 -> 24500 | 1 -> 24.5k
			dpsFormat: 0,
			nameFormat: 0
		}
	});

	$effect(() => {
		let storedTheme = localStorage.getItem('theme');

		if (!storedTheme) {
			localStorage.setItem('theme', 'pink');
		} else {
			config.theme.currentTheme = storedTheme;
		}
	});

	$effect(() => {
		let storedDpsFormat = localStorage.getItem('playerDpsFormat');

		if (!storedDpsFormat) {
			localStorage.setItem('playerDpsFormat', 0);
		} else {
			config.player.dpsFormat = storedDpsFormat;
		}
	});
</script>

<!-- <h1 class="text-center text-4xl font-bold">Yo! This is the Home page!</h1> -->
<div class="h-full w-full" data-theme={config.theme.currentTheme}>
	<Encounter bind:configState={config} bind:settingsOpen={settingsBolean} />
</div>
