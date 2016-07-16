(function () {
	'use strict';

	var G = {
		gulp: require('gulp'),
		//JS
		uglify: require('gulp-uglify'),
		modernizr: require('gulp-modernizr'),
		//HTML
		browserSync: require('browser-sync'),
		//CSS
		sass: require('gulp-sass'),
		autoprefixer: require('gulp-autoprefixer'),
		cssnano: require('gulp-cssnano'),
		//IMG
		spritesmith: require('gulp.spritesmith'),
		imagemin: require('gulp-imagemin'),
		//Build
		gulpif: require('gulp-if'),
		useref: require('gulp-useref'),
		sourcemaps: require('gulp-sourcemaps'),
		concat: require('gulp-concat'),
		plumber: require('gulp-plumber'),
		filter: require('gulp-filter'),
		rimraf: require('gulp-rimraf'),
		size: require('gulp-size'),
		minimist: require('minimist'),
	
	};

	module.exports = G
	
})()