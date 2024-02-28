import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createTheme() {
	let currentTheme;
	if (browser) {
		currentTheme = localStorage.getItem('sm-theme');
	}

	const { subscribe, set } = writable<string | null>(currentTheme);

	return {
		subscribe,
		set: (value: string | null) => {
			if (browser && value) {
				localStorage.setItem('sm-theme', value);
				document.firstElementChild?.setAttribute('data-theme', value)
			} else {
				localStorage.removeItem('sm-theme');
				document.firstElementChild?.removeAttribute('data-theme')
			}
			set(value);
		}
	};
}

export const theme = createTheme();
