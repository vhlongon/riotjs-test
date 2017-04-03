'use strict';

export default {

	browserPort: 3000,
	UIPort: 3001,

	sourceDir: './app/',
	buildDir: './build/',
	prodDir: './dist/',

	styles: {
		src: 'app/styles/**/*.scss',
		dest: 'build/css',
		prodDest: 'dist/css',
		prodSourcemap: false,
		sassIncludePaths: []
	},
	components: {
		src: 'app/components/**/*.html'
	},
	scripts: {
		src: 'app/js/**/*.js',
		baseUrl: './app/js',
		dest: 'build/js',
		prodDest: 'dist/js',
		entryFile: './app/js/app.js',
		outputFile: 'app.js',
		sourceMapDest: 'build/js/app.js.map'
	},

 	images: {
		src: 'app/images/**/*',
		dest: 'build/images',
		prodDest: 'dist/images'
	},

	media: {
		src: 'app/media/**/*',
		dest: 'build/media',
		prodDest: 'dist/media'
	},

	fonts: {
		src: ['app/fonts/**/*'],
		dest: 'build/fonts',
		prodDest: 'dist/fonts'
	},

	view: {
		src: 'app/**/*.hbs',
		dest: 'build/',
		prodDest: 'dist/'
	},

	init: function () {
		return this;
	}

}.init();
