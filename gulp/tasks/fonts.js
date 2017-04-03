'use strict';

import config     from '../config';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

const {fonts} = config;

gulp.task('fonts', function() {

  return gulp.src(fonts.src)
    .pipe(gulp.dest(global.isProd ? fonts.prodDest : fonts.dest))
    .pipe(browserSync.stream({ once: true }));

});
