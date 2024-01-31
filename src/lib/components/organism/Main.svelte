<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import Section from '../atoms/Section.svelte';
</script>

<Section style="max-width: 900px;" id="sectionMain" additionalClass="flex flex-col mt-20">
	<span class="text-accent text-2xl font-medium">Hi, I'm</span>
	<h1 class="font-short-stack mt-2 mb-1 text-white text-4xl md:text-6xl">Shubham Maurya</h1>
	<h2 class="text-subtitle text-2xl md:text-4xl">
		I transform ideas into interactive reality <br /> by coding.
	</h2>
	<p class="mt-4 text-secondary text-lg md:text-2xl">
		I relish solving problems and the creative art of software design. Thriving on complex
		challenges, I transform ideas into elegant solutions. A dedicated runner, I value a clear mind
		for innovation, always eager to explore new technologies and
		<span class="text-accent">push the boundaries of software development.</span>
	</p>
	<Button href="#contact">Contact me</Button>
</Section>
