<script lang="ts">
	import ResumeSection from './ResumeSection.svelte';

	type Skill = {
		text: string;
		primary: boolean;
	};

	const skills = [{}];
</script>

<ResumeSection title="Skills">
	<p class="text-base"></p>
</ResumeSection>
