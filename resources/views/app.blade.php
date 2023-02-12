<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title inertia>{{ config('app.name', 'Laravel') }}</title>
		<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/img/apple-touch-icon.png') }}">
		<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('/img/favicon-32x32.png') }}">
		<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/img/favicon-16x16.png') }}">
		<link rel="manifest" href="{{ asset('/img/site.webmanifest') }}">
		<!-- Scripts -->
		<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		@routes
		@viteReactRefresh
		@vite('resources/js/app.jsx')
		@inertiaHead
	</head>
	<body>
		@inertia
	</body>
</html>