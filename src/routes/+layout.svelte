<script lang="ts">
	import { browser } from "$app/environment";
	import { loggedInUser } from "$lib/runes.svelte";
	import Heading from "$lib/ui/Heading.svelte";
	import Menu from "$lib/ui/Menu.svelte";

	if (browser) {
		const savedLoggedInUser = localStorage.donation;
		if (savedLoggedInUser) {
			const session = JSON.parse(savedLoggedInUser);
			loggedInUser.name = session.name;
			loggedInUser.email = session.email;
			loggedInUser.token = session.token;
			loggedInUser._id = session._id;
		}
	}
</script>

<div class="container">
	{#if loggedInUser.email}
		<Menu />
		<Heading />
	{/if}
	<slot />
</div>
