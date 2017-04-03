'use strict';

import config      from '../config';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import browserSync from 'browser-sync';

const {media} = config;
gulp.task('media', function() {

  return gulp.src(media.src)
    .pipe(gulp.dest(global.isProd ? media.prodDest : media.dest))
    .pipe(browserSync.stream({ once: true }));

});