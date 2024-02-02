<script lang="ts">
	import Button from '../atoms/Button.svelte';
</script>

<div id="blog" class="px-6 md:pl-20 pt-10 min-h-screen flex flex-col lg:flex-row">
	<div class="flex flex-col gap-4">
		<h1 class="font-short-stack mt-2 text-white text-4xl sm:text-6xl">Recent Blogs</h1>
		<h2 class="leading-6 sm:leading-10 text-subtitle text-2xl">
			Every now and then I like to write about technology and experiences. Here are some of the
			recent blogs.
		</h2>
		<Button href="/blog" variant="outlined">View More</Button>
	</div>
	<div class="grid grid-cols-2 grid-rows-2"></div>
</div>
