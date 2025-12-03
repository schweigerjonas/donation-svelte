<script>
	import { resolve } from '$app/paths';

	const resolvedRoot = resolve('/');
	const resolvedLogin = resolve('/login');
	const resolvedSignup = resolve('/signup');
</script>

<div class="container">
	<div class="tabs notification is-primary">
		<ul>
			<li><a href={resolvedRoot}>Start</a></li>
			<li><a href={resolvedLogin}>Login</a></li>
			<li><a href={resolvedSignup}>Signup</a></li>
		</ul>
	</div>
	<slot />
</div>
