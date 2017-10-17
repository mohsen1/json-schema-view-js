'use strict';

var KarmaServer = require('karma').Server;
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var gulp = require('gulp');
var header = require('gulp-header');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var connect = require('gulp-connect');
var gulpWebpack = require('webpack-stream');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpackConfig = require('./webpack.config');

var config = {
  pkg: require('./package.json'),
  banner:
  '/*!\n' +
  ' * <%= pkg.name %>\n' +
  ' * <%= pkg.homepage %>\n' +
  ' * Version: <%= pkg.version %> - <%= timestamp %>\n' +
  ' * License: <%= pkg.license %>\n' +
  ' */\n\n\n'
};

gulp.task('eslint', function () {
  return gulp.src(['src/**.js']).pipe(eslint());
});

gulp.task('scripts', function () {
  var bundleConfig = Object.create(webpackConfig);

  bundleConfig.plugins = bundleConfig.plugins.concat(new webpack.LoaderOptionsPlugin({
    debug: true
  }));

  return gulp.src('src/index.js')
    .pipe(gulpWebpack(bundleConfig, webpack))
    .pipe(gulp.dest('dist/'));
});

gulp.task('uglify', ['scripts'], function () {
  var bundleConfig = Object.create(webpackConfig);
  bundleConfig.plugins = bundleConfig.plugins.concat(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }), new UglifyJsPlugin());

  bundleConfig.output.filename = 'bundle.min.js';

  return gulp.src('src/index.js')
    .pipe(gulpWebpack(bundleConfig, webpack))
    .pipe(gulp.dest('dist/'));
});

gulp.task('styles', function () {

  return gulp.src('src/style.less')
    .pipe(less())
    .on('error', logError)
    .pipe(header(config.banner, {
      timestamp: (new Date()).toISOString(), pkg: config.pkg
    }))
    .pipe(gulp.dest('dist'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['src/style.less'], ['styles']);
  gulp.watch(['src/*.js'], ['scripts']);
});

gulp.task('connect', function () {
  connect.server({
    root: __dirname,
    open: 'demo',
    livereload: true
  });
});

gulp.task('test', function (done) {
  var argv = require('minimist')(process.argv.slice(2));

  new KarmaServer({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: argv.singleRun
  }, done).start();
});

gulp.task('serve', ['watch', 'connect']);
gulp.task('default', ['styles', 'uglify']);

function logError(err) {
  console.log('Error :\n' + err.message);
}