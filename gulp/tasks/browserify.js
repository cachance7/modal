'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var sourcemaps = require('gulp-sourcemaps');
var _ = require('lodash');

var browserifyTask = function(devMode) {

  var browserifyThis = function(bundleConfig) {

    if(devMode) {
      // Add watchify args and debug (sourcemaps) option
      _.extend(bundleConfig, watchify.args, { debug: true });
      // A watchify require/external bug that prevents proper recompiling,
      // so (for now) we'll ignore these options during development. Running
      // `gulp browserify` directly will properly require and externalize.
      bundleConfig = _.omit(bundleConfig, ['external', 'require']);
    }

    var b = browserify(bundleConfig);

    var bundle = function() {
      // Log when bundling starts
      //bundleLogger.start(bundleConfig.outputName);

      return b
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specify the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest));
        //.pipe(browserSync.reload({
        //  stream: true
        //}));
    };

    if(devMode) {
      // Wrap with watchify and rebundle on changes
      b = watchify(b);
      // Rebundle on update
      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      // Sort out shared dependencies.
      // b.require exposes modules externally
      if(bundleConfig.require) b.require(bundleConfig.require);
      // b.external excludes modules from the bundle, and expects
      // they'll be available externally
      if(bundleConfig.external) b.external(bundleConfig.external);
    }

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  //return mergeStream.apply(gulp, _.map(config.bundleConfigs, browserifyThis));
  return browserifyThis({
      entries: './src/js/app.js',
         dest: './dist/',
         outputName: 'bundle.js',
  });
};

gulp.task('browserify', function(){
    return browserifyTask();
});

module.exports = browserifyTask;
