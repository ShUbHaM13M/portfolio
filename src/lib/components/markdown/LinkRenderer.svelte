<script lang="ts">
	export let text: string;
	export let href: string;

	const target = href.startsWith('#') ? '_self' : '_blank';
</script>

<a
	class="text-primary dark:text-white text-base md:text-xl border-b-2 border-accent-light dark:border-accent
	hover:text-accent-light dark:hover:text-accent transition-colors ease-out duration-200 block my-2 w-fit"
	{href}
	{target}
	rel="noopener noreferrer">{text}</a
>
