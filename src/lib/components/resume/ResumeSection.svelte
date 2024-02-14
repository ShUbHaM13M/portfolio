<script lang="ts">
	export let title: string = '';
	export let containerClasses: string = '';
</script>

<div class={`flex flex-1 flex-col gap-5 ${containerClasses}`}>
	<h3
		class="font-semibold text-3xl relative w-full
        after:absolute after:h-0.5 after:w-full after:bg-accent
        after:bottom-0 after:left-0 after:rounded-full"
	>
		{title}
	</h3>
	<slot />
</div>
