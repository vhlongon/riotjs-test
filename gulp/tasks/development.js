'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', ['clean'], function(cb) {

  global.isProd = false;

  runSequence(['styles', 'images', 'fonts', 'scripts', 'media', 'view'], 'watch', cb);

});
