<script>
	import './app.css';
	import {
		addCombatDataListener,
		addPrimaryPlayerListener,
		getLanguageId,
		startOverlay
	} from '../lib/overlay';

	// Starting the ACT Overlay Connection.
	addCombatDataListener();
	addPrimaryPlayerListener();
	getLanguageId();
	startOverlay();
</script>

<slot />

<style lang="postcss">
	:global(:root) {
		background-color: transparent;
	}
	:global(html) {
		background-color: transparent;
		color: theme(colors.slate.200);
		font-family: var(--source-code);
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
	}
	:global(*) {
		scrollbar-width: none;
	}
	:global(*)::-webkit-scrollbar {
		display: none;
	}
	:global(body) {
		background-color: transparent;
	}
	:global(h1, h2, h3, h4) {
		font-family: var(--roboto);
	}
</style>
