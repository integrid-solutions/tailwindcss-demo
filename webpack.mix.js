const mix = require("laravel-mix");
const path = require("path");
const tailwindCss = require("tailwindcss");

mix.sass("assets/scss/app.scss", "dist/css").options({
	processCssUrls: false,
	postCss: [tailwindCss("assets/js/tailwind.config.js")]
});
