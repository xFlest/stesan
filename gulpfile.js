const {src, dest, task} = require("gulp")
const sass = require("gulp-sass")
const pug = require("gulp-pug")

const paths = {
  'root': '.',
  'scss': 'src/style/',
  'pug': 'src/pug/',
  'css': 'dist/css/',
  'html': 'dist/'
}

gulp.task('build', ['pug', 'sss'])

gulp.task('pug', () => {
  return src(paths.pug + '**/*.pug').pipe(pug({pretty: true})).pipe(dest(paths.html))
})
gulp.task('sass', () => {
  return src(paths.scss + '**/*.scss').pipe(sass({outputStyle: 'expanded'})).pipe(dest(paths.css))
})