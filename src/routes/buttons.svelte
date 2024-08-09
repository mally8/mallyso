<script>
	let { onclick: ONCLICK, ...props } = $props();
</script>

<button
	class="btn group my-10 flex flex-row gap-2 rounded-sm bg-primarybg px-2 py-2 font-medium text-primary outline outline-1 outline-primary focus-within:font-bold focus-within:outline-2 hover:bg-primarybg3"
	onclick={ONCLICK}
	{...props}
>
	<div
		class="icon h-6 w-6 rounded-[1px] bg-dark text-center font-normal outline outline-1 outline-primary group-focus-within:bg-primary group-focus-within:font-semibold group-focus-within:text-dark"
	>
		A
	</div>
	<p>DEBUG THIS</p>
</button>
