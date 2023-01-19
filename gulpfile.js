const gulp = require("gulp")
const sass = require("gulp-sass")
const pug = require("gulp-pug")

const paths = {
  'root': '.',
  'scss': 'src/style/',
  'pug': 'src/pug/',
  'css': 'dist/css/',
  'html': 'dist/'
}

gulp.task('build', gulp.series(gulp.parallel('pug', 'sass')))

gulp.task('pug', () => {
  return gulp.src(paths.pug + '**/*.pug').pipe(pug({pretty: true})).pipe(gulp.dest(paths.html))
})
gulp.task('sass', () => {
  return gulp.src(paths.scss + '**/*.scss').pipe(sass({outputStyle: 'expanded'})).pipe(gulp.dest(paths.css))
})