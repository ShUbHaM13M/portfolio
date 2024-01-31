<script lang="ts">
	import Section from '$lib/components/atoms/Section.svelte';
	import SkillCard from '$lib/components/molecules/SkillCard.svelte';
	import IconSoftwareDevelopement from '$lib/icons/IconSoftwareDevelopement.svelte';
	import IconWebDevelopement from '$lib/icons/IconWebDevelopment.svelte';
	import IconAppDevelopement from '$lib/icons/IconAppDevelopment.svelte';

	const skills = [
		{
			index: '02',
			icon: IconSoftwareDevelopement,
			title: 'Software Development',
			description: `Experienced in OOP as well as Functional programming Using various languages like: Python, C, Rust, Java, TypeScript, C#.`,
			tagBegin: '{',
			tagEnd: '}',
			containerClasses: 'order-1 lg:order-0'
		},
		{
			index: '01',
			icon: IconWebDevelopement,
			title: 'Web Development',
			description: `Passionate about UI/UX and building web apps using many tools like React, Vue, NextJS, SvelteKit, Django, FastAPI.`,
			tagBegin: '<h3>',
			tagEnd: '</h3>',
			descriptionClasses: '-ml-9',
			containerClasses: 'order-0 lg:order-1'
		},
		{
			index: '03',
			icon: IconAppDevelopement,
			title: 'App Development',
			description: `Developing Cross platform apps using React Native or Flutter, from development and animation to ensuring the platform specific features.`,
			tagBegin: '<View>',
			tagEnd: '</View>',
			descriptionClasses: '-ml-14',
			containerClasses: 'order-2'
		}
	];
</script>

<Section id="expertise" additionalClass="flex flex-col gap-4 bg-grey min-h-screen md:pr-20 pb-10">
	<h1 class="mt-2 text-white text-4xl sm:text-6xl">Expertise</h1>
	<h2 class="leading-6 sm:leading-10 text-subtitle text-2xl sm:text-3xl">
		Tech Polyglot with expertise across technology domains.
	</h2>
	<div class="flex flex-col lg:flex-row gap-6 mt-2 sm:mt-4">
		{#each skills as skill}
			<!-- @ts-ignore -->
			<SkillCard {...skill} />
			<!-- TODO: Check if this can be fixed or ignore -->
		{/each}
	</div>
</Section>

<style lang="postcss">
	:global(.skill-icon) {
		--size: 38px;
		width: var(--size);
		height: var(--size);
	}
	@screen sm {
		:global(.skill-icon) {
			--size: 50px;
		}
	}
</style>
