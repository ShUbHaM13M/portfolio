import type { Palette } from '$lib/utils/types';
import { writable } from 'svelte/store';

function createSwatch() {
	const { set, subscribe } = writable<Palette | null>(null);

	return {
		subscribe,
		set
	};
}

export const swatch = createSwatch();
