<script lang="ts">
	import ResumeSection from './ResumeSection.svelte';
</script>

<ResumeSection title="Education" containerClasses="order-0 md:order-1">
	<div class="flex gap-4">
		<div class="flex flex-col items-center h-full relative">
			<div
				class="grid place-items-center border-accent border-2 border-opacity-50 rounded-full h-5 w-5 mt-2"
			>
				<div class="bg-accent rounded-full h-2.5 w-2.5"></div>
			</div>
			<p class="text-subtitle text-xs">2023</p>
			<div
				style="height: 50%"
				class="absolute hidden sm:block top-12 border border-dashed border-accent border-opacity-80"
			></div>
		</div>
		<div class="flex flex-col">
			<p class="font-semibold text-lg leading-tight">Masters of Computer Application</p>
			<div class="flex flex-col sm:flex-row gap-1 text-subtitle text-sm sm:items-center">
				<p>Manipal University</p>
				<p class="hidden sm:block">&bull;</p>
				<p>Aug 2023 - Ongoing</p>
			</div>
		</div>
	</div>

	<div class="flex gap-4">
		<div class="flex flex-col items-center h-full relative">
			<div
				class="grid place-items-center border-accent border-2 border-opacity-80 rounded-full h-5 w-5 mt-2"
			></div>
			<p class="text-subtitle text-xs">2019</p>
		</div>
		<div class="flex flex-col">
			<p class="font-semibold text-lg">Bachelors of Computer Science</p>
			<div class="flex flex-col sm:flex-row gap-1 text-subtitle text-sm sm:items-center">
				<p>Mumbai University</p>
				<p class="hidden sm:block">&bull;</p>
				<p>Nov 2019 - Apr 2022</p>
			</div>
		</div>
	</div>
</ResumeSection>
