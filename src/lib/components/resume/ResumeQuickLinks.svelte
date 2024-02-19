<script lang="ts">
	import IconLocation from '$lib/icons/IconLocation.svelte';
	import IconPhone from '$lib/icons/IconPhone.svelte';
	import IconChat from '$lib/icons/IconChat.svelte';
	import IconMail from '$lib/icons/IconMail.svelte';
	import IconGithub from '$lib/icons/IconGithub.svelte';
	import IconLinkedIn from '$lib/icons/IconLinkedIn.svelte';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-y-1 sm:gap-y-2 text-lg mt-4 w-fit">
	<div class="flex gap-1 items-center">
		<IconLocation />
		<p>Mumbai, India</p>
	</div>
	<div class="flex gap-1 items-center">
		<IconMail classes="h-6 w-6 text-accent" />
		<a href="mailto:shubham.heeralal@gmail.com?subject=Let’s Discuss about My Exciting Project!">
			shubham.heeralal@gmail.com
		</a>
	</div>
	<div class="flex gap-1 items-center">
		<IconPhone classes="h-6 w-6 text-accent" />
		<a href="tel:+919004890938">+91 9004890938</a>
	</div>
	<div class="flex gap-1 items-center">
		<IconGithub classes="h-6 w-6 text-accent" />
		<a href="https://www.github.com/ShUbHaM13M" target="_blank">Github Profile</a>
	</div>
	<div class="flex gap-1 items-center">
		<IconChat />
		<p>English, Hindi</p>
	</div>
	<div class="flex gap-1 items-center">
		<IconLinkedIn classes="h-6 w-6 text-accent" />
		<a href="https://linkedin.com/in/shubham-maurya-37b7491a3/" target="_blank">
			LinkedIn Profile
		</a>
	</div>
</div>

<style scoped>
	a {
		text-decoration: underline;
	}
</style>
