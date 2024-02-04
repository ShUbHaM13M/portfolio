<script lang="ts">
	import type { Blog } from '$lib/utils/types';
	export let data: { blog: Blog };
	$: ({ blog } = data);
</script>

{#key blog}
	<div class="flex text-white flex-col gap-4">
		<h1 class="text-2xl">{blog.title}</h1>
	</div>
{/key}
