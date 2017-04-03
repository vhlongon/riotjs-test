'use strict';

import config from '../config';
import gulp   from 'gulp';

const {scripts, styles, images, media, fonts, view} = config;

gulp.task('watch', ['browserSync'], function() {

  gulp.watch(scripts.src, ['scripts']);
  gulp.watch(styles.src,  ['styles']);
  gulp.watch(images.src,  ['images']);
  gulp.watch(media.src,  ['media']);
  gulp.watch(fonts.src,   ['fonts']);
  gulp.watch(view.src,   ['view']);
});
