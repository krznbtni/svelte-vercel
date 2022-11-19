<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import { browser } from '$app/environment';

	import { partytownSnippet } from '@builder.io/partytown/integration';

	const snippetText = partytownSnippet({
		debug: true,
		logCalls: true,
		logGetters: true,
		logImageRequests: true,
		logMainAccess: true,
		logScriptExecution: true,
		logSendBeaconRequests: true,
		logSetters: true,
		logStackTraces: true,
		forward: ['dataLayer.push']
	});

	if (browser) {
		window.partytown = {};
		window.partytown = {
			debug: true,
			forward: ['dataLayer.push']
		};
	}
</script>

<svelte:head>
	{@html `<script>${snippetText}</script>`}
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
