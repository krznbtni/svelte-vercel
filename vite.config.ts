import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';
import path from 'path';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		partytownVite({
			dest: path.join(__dirname, 'static', '~partytown'),
			debug: true
		})
	]
};

export default config;
