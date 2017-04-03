'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['cleanProd'], function(cb) {

  global.isProd = true;

  runSequence(['styles', 'images', 'fonts', 'scripts', 'media', 'view'], 'watch', cb);

});