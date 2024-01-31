<script lang="ts">
	export let additionalClass: string = '';
</script>

<section {...$$restProps} class={`px-6 md:pl-20 pt-10 min-h-screen ${additionalClass}`}>
	<slot />
</section>
