import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify-es';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

const sass = gulpSass(dartSass);
const styles = 'styles/**/*.scss';
const scripts = 'scripts/**/*.js';

const scriptsEntry = 'scripts/main.min.js';

gulp.task('css', function () {
	return gulp
		.src(styles)
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				loadPaths: ['./node_modules'],
				quietDeps: true
			})
		)
		.pipe(cleanCSS())
		.pipe(sourcemaps.write(''))
		.pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
	return browserify({
		entries: [scriptsEntry],
		debug: true,
		transform: [['babelify', { presets: ['@babel/env'] }]]
	})
		.bundle()
		.pipe(source('main.min.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify.default())
		.pipe(sourcemaps.write(''))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch(styles, gulp.series('css'));
	gulp.watch(scripts, gulp.series('js'));
});
