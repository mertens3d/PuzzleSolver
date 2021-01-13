//const gulp = require('gulp');
//const vars = require('../vars');
//const uglify = require('gulp-terser'); //require('gulp-uglify-es');
//const rename = require('gulp-rename');
//var sort = require('gulp-sort');
//const concat = require('gulp-concat');
//const replace = require('gulp-replace');

//module.exports = {
//  combineJs: function (cb, vars) {
//    console.log('s) combineJs');
//    console.log('source filter: ' + vars.PuzzleSolverProxyJs.SourceDirFilter());
//    return gulp.src(vars.PuzzleSolverProxyJs.SourceDirFilter())
//      .pipe(sort())
//      .pipe(concat(vars.PuzzleSolverProxyJs.NameConcat()))
//      .pipe(gulp.dest(vars.PuzzleSolverProxyJs.WorkingDest))
//      .pipe(replace('"', '\''))
//      .pipe(gulp.dest(vars.PuzzleSolverProxyJs.WorkingDest));
//  },
//}