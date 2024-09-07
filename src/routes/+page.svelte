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
			// 0 -> First Last | 1 -> F. Last | 2 -> First L. | 3 -> F. L.
			nameFormat: 0,
			allNameFormats: ['First Last', 'F. Last', 'First L.', 'F. L.'],
			// 0 -> Theme color | 1 -> Role Color
			bgColor: 0
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

	$effect(() => {
		let storedNameFormat = localStorage.getItem('playerNameFormat');

		if (!storedNameFormat) {
			localStorage.setItem('playerNameFormat', 0);
		} else {
			config.player.nameFormat = storedNameFormat;
		}
	});

	$effect(() => {
		let storedPlayerBgColor = localStorage.getItem('playerBgColor');

		if (!storedPlayerBgColor) {
			localStorage.setItem('playerBgColor', 0);
		} else {
			config.player.bgColor = storedPlayerBgColor;
		}
	});
</script>

<!-- <h1 class="text-center text-4xl font-bold">Yo! This is the Home page!</h1> -->
<div class="h-full w-full" data-theme={config.theme.currentTheme}>
	<Encounter bind:configState={config} bind:settingsOpen={settingsBolean} />
</div>
