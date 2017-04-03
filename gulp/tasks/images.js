'use strict';

import config      from '../config';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';
import pngquant from 'imagemin-pngquant';

const {images} = config;

gulp.task('images', function() {

  return gulp.src(images.src)
    .pipe(gulpif(global.isProd, 
      imagemin(
        [pngquant({quality: '65-80'})],
        { progressive: true } 
      )
    )) // Optimize
    .pipe(gulp.dest(global.isProd ? images.prodDest : images.dest))
    .pipe(browserSync.stream({ once: true }));

});