<script lang="ts">
	export let active: boolean = false;
	export let href = '';
	export let text = '';
</script>

<div
	class:active
	class="navlink relative text-primary dark:text-white transition-all ease-out duration-200"
>
	<a {href} class="px-4 py-0.5 text-inherit w-full block" on:click>
		{text}
	</a>
</div>

<style lang="postcss">
	.navlink.active {
		@apply translate-x-4;
	}
	@screen sm {
		.navlink:last-child,
		.navlink:first-child {
			@apply ml-auto;
		}
		.navlink.active {
			@apply translate-x-0 text-accent-light dark:text-accent font-medium;
		}
	}
</style>
