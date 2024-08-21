<script>
	import Encounter from '../components/encounter.svelte';

	let settingsBolean = $state(false);
	let currentTheme = $state('pink');
	let allThemes = $state(['pink', 'orange', 'green']);

	$effect(() => {
		let storedTheme = localStorage.getItem('theme');

		if (!storedTheme) {
			localStorage.setItem('theme', 'pink');
		} else {
			currentTheme = storedTheme;
		}
	});
</script>

<!-- <h1 class="text-center text-4xl font-bold">Yo! This is the Home page!</h1> -->
<div class="h-full w-full" data-theme={currentTheme}>
	<Encounter
		bind:themeState={currentTheme}
		bind:settingsOpen={settingsBolean}
		bind:themes={allThemes}
	/>
</div>
