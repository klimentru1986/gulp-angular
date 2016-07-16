(function () {
	'use strict';
	
	var G = require('../gulpplugins.js'),
		paths = require('../paths.js'),
		options = require('../comandline.js'),
		env = options.env;

	var html =  function() {
		
		var YOUR_LOCALS = {};

		if(env === 'dev'){
			return G.gulp.src(paths.html)
			.pipe(G.plumber())
			.pipe(G.gulp.dest(paths.dev))

		}else if(env === 'dist'){ 
			return G.gulp.src(paths.html)
			.pipe(G.plumber())
			.pipe(G.uglify().on('error', function(e) {
				console.log(e);
			}))
			.pipe(G.gulp.dest(paths.dist))
		}
	};

	module.exports = html
})()