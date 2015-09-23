var gulp = require('gulp'),
		gutil = require('gulp-util'),
		source = require('vinyl-source-stream'),
		browserify = require('browserify'),
		watchify = require('watchify'),
		reactify = require('reactify');

gulp.task('default', function () {
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		packageCache: {},
		fullPaths: true
	}));

	function build(file) {
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	}

	build();
	bundler.on('update', build);
});
