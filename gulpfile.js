'use strict';

const babel = require('gulp-babel');
const child_process = require('child_process');
const clean = require('gulp-clean');
const gulp = require('gulp');
const mkdirp = require('mkdirp');
const path = require('path');
const sass = require('gulp-sass');


gulp.task('clean-js', () => {
  return gulp.src('_tmp/js')
    .pipe(clean());
});

gulp.task('babel', ['clean-js'], () => {
  return gulp.src('js/**/*.js')
    .pipe(babel({presets: ['env', 'minify']}))
    .pipe(gulp.dest('_tmp/js'));
});

gulp.task('clean-css', () => {
  return gulp.src('_tmp/css')
    .pipe(clean());
});

gulp.task('sass', ['clean-css'], () => {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('_tmp/css'));
});

gulp.task('clean-dist', () => {
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('build', ['babel', 'sass', 'clean-dist'], () => {
  if (['darwin', 'linux', 'win32'].indexOf(process.platform) === -1) {
    console.error('Unknown architecture.');
  }
  else {
    const ext = process.platform === 'win32' ? '.exe' : '';
    const filename = `tweego_${process.platform}_${process.arch}${ext}`;

    mkdirp.sync(path.join(__dirname, 'dist'));

    child_process.spawn(path.join(__dirname, 'bin', filename),
      [
          '-o',
          path.join(__dirname, 'dist', 'game.html'),
          path.join(__dirname, 'src'),
          path.join(__dirname, '_tmp')
      ],
      {stdio: 'inherit'});
  }
});

gulp.task('watch', () => {
  gulp.watch(['./js/**/*.js', './scss/**/*.scss', './src/**/*'], ['build']);
});

gulp.task('default', ['build']);
