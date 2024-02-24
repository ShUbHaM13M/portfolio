<script lang="ts">
	import { HttpRegex } from '$lib/utils/regex';
	import Image from '../atoms/Image.svelte';

	export let title: string | undefined;
	export let text: string;
	export let href: string;
	export const raw = '';

	if (!HttpRegex.test(href) && !href.startsWith('/images')) {
		href = `/images/${href}`;
	}

	if (text) {
		text = text.replace(/(&#(\d+);)/g, (_match, _capture, charCode) =>
			String.fromCharCode(charCode)
		);
	}
</script>

<Image
	src={href}
	alt={text}
	figcaption={title}
	additionalClasses="rounded-xl text-slate-600 dark:text-subtitle"
/>
