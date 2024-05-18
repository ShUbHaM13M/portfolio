import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const CODEBLOCK_THEME_KEY = 'sm-codeblock-theme';

function createCodeblockTheme() {
	let currentTheme = 'catppuccin-frappe';
	if (browser) {
		currentTheme = localStorage.getItem(CODEBLOCK_THEME_KEY) || currentTheme;
	}

	const { subscribe, set } = writable<string>(currentTheme);

	return {
		subscribe,
		set: (value: string) => {
			if (browser) {
				localStorage.setItem(CODEBLOCK_THEME_KEY, value);
			}
			set(value);
		}
	};
}

export const codeblockTheme = createCodeblockTheme();
