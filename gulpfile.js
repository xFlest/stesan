const gulp = require("gulp")
const sass = require("gulp-sass")(require('sass'))
const pug = require("gulp-pug")
const typescript = require("gulp-typescript")

const paths = {
  'root': 'dist/',
  'scss': 'src/scss/',
  'pug': 'src/pug/',
  'ts': 'src/ts/',
}


gulp.task('pug', () => {
  return gulp.src(paths.pug + '**/*.pug').pipe(pug({pretty: true})).pipe(gulp.dest(paths.root))
})
gulp.task('sass', () => {
  return gulp.src(paths.scss + '**/*.scss').pipe(sass({outputStyle: 'expanded'})).pipe(gulp.dest(paths.root))
})
gulp.task('ts', () => {
  return gulp.src(paths.ts + '**/*.ts').pipe(typescript({target: 'ES6'})).pipe(gulp.dest(paths.root))
})


gulp.task('build', gulp.series(gulp.parallel('pug', 'sass', 'ts')))
