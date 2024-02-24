<script>
	import Section from '../atoms/Section.svelte';
	import IconPhone from '$lib/icons/IconPhone.svelte';
	import IconMail from '$lib/icons/IconMail.svelte';
	import IconGithub from '$lib/icons/IconGithub.svelte';
	import IconLinkedIn from '$lib/icons/IconLinkedIn.svelte';
	import IconRss from '$lib/icons/IconRss.svelte';
</script>

<Section
	id="contact"
	title="Contact"
	additionalClass="flex flex-col gap-0 min-h-screen md:pr-20 pb-10"
>
	<slot name="description">
		<h2 class="leading-6 sm:leading-10 text-gray-600 dark:text-subtitle text-lg md:text-2xl mt-4">
			I am open to full-time, or contract work and actively seeking freelance opportunities,
			particularly those that involves ambitious or large-scale projects.
		</h2>
		<h2 class="leading-6 sm:leading-10 text-gray-600 dark:text-subtitle text-lg md:text-2xl">
			If you have any other requests or questions, please feel free to reach out. I am open to
			exploring various types of collaborations and would be thrilled to discuss how I can
			contribute to your project.
		</h2>
		<span class="text-accent-light dark:text-accent text-2xl md:text-3xl font-medium mt-2">
			Let's connect and bring your ideas to life!
		</span>
	</slot>
	<div class="flex gap-4 md:gap-6 mt-6 md:mt-12">
		<a href="tel:+919004890938">
			<IconPhone classes="icon-link h-9 w-9 md:h-12 md:w-12 " />
		</a>
		<a href="mailto:shubham.heeralal@gmail.com?subject=Let’s Discuss about My Exciting Project!">
			<IconMail classes="icon-link h-9 w-9 md:h-12 md:w-12 " />
		</a>
		<a href="https://www.github.com/ShUbHaM13M" target="_blank">
			<IconGithub classes="icon-link h-9 w-9 md:h-12 md:w-12 opacity-40 hover:opacity-100" />
		</a>
		<a href="https://linkedin.com/in/shubham-maurya-37b7491a3/" target="_blank">
			<IconLinkedIn classes="icon-link h-9 w-9 md:h-12 md:w-12 " />
		</a>
		<a href="/rss.xml">
			<IconRss classes="icon-link h-9 w-9 md:h-12 md:w-12 " />
		</a>
	</div>
</Section>
