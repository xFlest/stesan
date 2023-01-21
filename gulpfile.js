const gulp = require("gulp")
const sass = require("gulp-sass")(require('sass'))
const pug = require("gulp-pug")
const browserSync = require("browser-sync")  

const paths = {
  'root': '/dist/',
  'scss': '/src/scss/',
  'pug': '/src/pug/',
  'style': '/dist/css/',
}


gulp.task('pug', () => {
  return gulp.src(paths.pug + '**/*.pug').pipe(pug({pretty: true})).pipe(gulp.dest(paths.root))
})
gulp.task('sass', () => {
  return gulp.src(paths.scss + '**/*.scss').pipe(sass({outputStyle: 'expanded'})).pipe(gulp.dest(paths.style))
})


gulp.task('build', gulp.series(gulp.parallel('pug', 'sass')))