var gulp     = require('gulp');

//gulp.task('watch', ['watchify','browserSync'], function() {
gulp.task('watch', ['watchify'], function() {
  gulp.watch('./src/scss/app.scss',   ['sass']);
  //gulp.watch(config.images.src, ['images']);
  gulp.watch('./src/index.html', ['markup']);
  gulp.watch('./src/templates/*.*', ['templates']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
