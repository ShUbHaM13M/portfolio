<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import Section from '../atoms/Section.svelte';
</script>

<Section id="sectionMain" additionalClass="bg-checkered pt-28">
	<div style="max-width: 900px;" class="flex flex-col">
		<span class="text-accent-light dark:text-accent text-2xl font-medium">Hi, I'm</span>
		<h1
			class="font-short-stack mt-2 mb-1 md:my-3 text-primary dark:text-white text-3xl md:text-6xl"
		>
			Shubham Maurya
		</h1>
		<h2 class="text-subtitle text-2xl md:text-4xl">
			I transform ideas into interactive reality <br /> by coding.
		</h2>
		<p class="description mt-4 md:mt-6 text-primary dark:text-secondary text-lg md:text-2xl">
			I relish solving problems and the creative art of software design. Thriving on complex
			challenges, I transform ideas into elegant solutions. A dedicated runner, I value a clear mind
			for innovation, always eager to explore new technologies and
			<span class="text-accent-light dark:text-accent"
				>push the boundaries of software development.</span
			>
		</p>
		<Button additionalClass="mt-6 md:mt-8" href="#contact">Contact me</Button>
	</div>
</Section>

<style lang="postcss">
	@screen md {
		.description {
			letter-spacing: 1px;
		}
	}
</style>
