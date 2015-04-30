var gulp     = require('gulp');
var config = require('../config');

//gulp.task('watch', ['watchify','browserSync'], function() {
gulp.task('watch', ['watchify'], function() {
  gulp.watch('./src/scss/app.scss',   ['sass']);
  //gulp.watch(config.images.src, ['images']);
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.templates.src, ['templates']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
