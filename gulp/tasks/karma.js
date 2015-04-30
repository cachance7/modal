var gulp = require('gulp');
var karma = require('karma');

var karmaTask = function(done) {
  karma.server.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, function(){
      done();
  });
};

gulp.task('karma', karmaTask);

module.exports = karmaTask;
