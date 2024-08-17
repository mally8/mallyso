<script>
	import Encounter from './encounter.svelte';

	let settingsBol = $state(false);
	let currentTheme = $state('pink');
	let allThemes = $state(['pink', 'orange', 'green']);
</script>

<!-- <h1 class="text-center text-4xl font-bold">Yo! This is the Home page!</h1> -->
<div class="h-full w-full" data-theme={currentTheme}>
	<Encounter
		bind:themeState={currentTheme}
		bind:settingsOpen={settingsBol}
		bind:themes={allThemes}
	/>
</div>
