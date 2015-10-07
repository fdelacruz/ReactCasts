var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var server = require('gulp-server-livereload');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

var bundler = watchify(browserify({
	entries: ['./src/app.jsx'],
	transform: [reactify],
	extensions: ['.jsx'],
	debug: true,
	cache: {},
	packageCache: {},
	fullPaths: true
}));

function bundle() {
	return bundler
		.bundle()
		.on('error', console.error.bind(console)) 
		.pipe(source('main.js'))
		.pipe(gulp.dest('./'))
}
bundler.on('update', bundle)

gulp.task('build', function() {
	bundle()
});

gulp.task('serve', function(done) {
	gulp.src('')
		.pipe(server({
			livereload: {
				enable: true,
				filter: function(filePath, cb) {
					if(/main.js/.test(filePath)) {
						cb(true)
					} else if(/style.css/.test(filePath)){
						cb(true)
					}
				}
			},
			open: true
		}));
});

gulp.task('sass', function () {
	return sass('source/')
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'serve', 'sass', 'watch']);

gulp.task('watch', function () {
	gulp.watch('source/**/*.scss', ['sass']);
});
