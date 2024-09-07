<script>
	let { jobSVG, style } = $props();
</script>

<div class="grid aspect-square h-5 w-5 place-items-center fill-primary text-primary" {style}>
	{@html jobSVG}
</div>
