<script lang="ts">
	export let active: boolean = false;
	export let href = '';
	export let text = '';
</script>

<div class:active class="navlink relative text-current transition-all ease-out duration-200">
	<a {href} class="px-4 py-0.5 text-inherit w-full block" on:click>
		{text}
	</a>
</div>

<style lang="postcss">
	.navlink.active {
		@apply translate-x-4;
	}
	@screen sm {
		:global(div:has(.navlink)),
		.navlink:first-child {
			@apply ml-auto;
		}
		.navlink.active {
			@apply translate-x-0 text-accent-light dark:text-accent font-medium;
		}
	}
	:global(header.has-custom-colours:has(.navlink)) {
		color: var(--color-text);
	}
</style>
