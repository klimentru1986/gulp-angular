(function () {
'use strict';

var paths = {
	html: 'app/**/*.html',
	sass: ['app/sass/*.scss', '!app/sass/_*.scss'],
	js: 'app/app/**/*.js',
	img: ['app/img/*.jpg', 'app/img/*.png', 'app/img/*.ico', '!app/img/sprites'],
	sprites: 'app/img/sprites/*.png',
	fonts: 'app/fonts/*',
	extras: ['app/*.*', '!app/**/*.html'],
//=========================== 
	dist: 'dist',
	dev: 'dev',
};

	module.exports = paths
})()