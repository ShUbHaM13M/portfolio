<script lang="ts">
	export let copied: boolean = false;
</script>

<div class="relative size-6 hover:scale-110 transition-transform ease-in-out duration-200">
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-dasharray="50"
		stroke-dashoffset={copied ? -50 : 0}
		class="absolute inset-0 transition-all ease-in-out duration-300"
	>
		<path d="M7.1875 5.9375H12.8125V2.1875H7.1875V5.9375Z" />
		<path
			d="M4.0625 3.60474C3.68887 3.82086 3.4375 4.22484 3.4375 4.68751V16.5625C3.4375 17.2529 3.99715 17.8125 4.6875 17.8125H15.3125C16.0029 17.8125 16.5625 17.2529 16.5625 16.5625V4.68751C16.5625 4.22484 16.3111 3.82086 15.9375 3.60474"
		/>
	</svg>

	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-dasharray="50"
		stroke-dashoffset={copied ? 0 : -50}
		class="absolute inset-0 transition-all ease-in-out duration-300 stroke-accent"
	>
		<path d="M16.5625 5.9375L7.5 15L3.4375 10.9375" />
	</svg>
</div>
