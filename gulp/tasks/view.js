'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import browserSync  from 'browser-sync';
import rename       from 'gulp-rename';
import handlebars   from 'gulp-compile-handlebars';
import handleErrors from '../util/handleErrors';
import data         from '../../app/data/';
import merge        from 'gulp-merge';

const {view} = config;

console.log(data)

gulp.task('view', function() {
  const streams = data.map(({view: viewItem, data: viewData}) => {
    const fileName = `${viewItem}.html`;
    return gulp.src(view.src)
      .pipe(handlebars(viewData))
      .pipe(rename(fileName))
      .on('error', handleErrors)
      .pipe(gulp.dest(global.isProd ? view.prodDest : view.dest))
  });

  return merge(streams)
    .pipe(browserSync.stream({ once: true }));
});