var gulp = require('gulp');
//var config = require('../config').markup;
//var browserSync  = require('browser-sync');

var config = {
    src: './src/templates/*.*',
    dest: './dist'
};

gulp.task('templates', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
    //.pipe(browserSync.reload({stream:true}));
});

