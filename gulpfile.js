var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    stylus = require('gulp-stylus');

var config = {
  html: {
    main: './*.html',
    watch: './*.html',
    output: './'
  },
  styles: {
    main: './stylus/*.styl',
    watch: './stylus/*.styl',
    output: './css'
  }
}
gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      host: 'localhost',
      port: 3232,
      livereload: true
    }));
});
gulp.task('build:css', function() {
  gulp.src(config.styles.main)
  .pipe(stylus({
    'include css': true
  }))
  .pipe(gulp.dest(config.styles.output));
});
gulp.task('build:html', function() {
  gulp.src(config.html.main)
});

gulp.task('watch', function() {
  gulp.watch(config.styles.watch, ['build:css']);
  gulp.watch(config.html.watch, ['build']);
});

gulp.task('build', ['build:css','build:html']);

gulp.task('serverGulp', ['server', 'watch', 'build']);
