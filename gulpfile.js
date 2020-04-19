const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
const minifyHtml = require('gulp-minify-html');
const uglify = require('gulp-uglify-es').default;
const minifyCss = require('gulp-minify-css');

gulp.task('import-bootstrap.css', ()=> {
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('import-js', ()=> {
  gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/jquery/dist/jquery.min.js', './node_modules/popper.js/dist/umd/popper.min.js'])
      .pipe(gulp.dest('./dist/js'));
});

//import bootstrap, jquery and popper.js
gulp.task('import-dependencies', ['import-bootstrap.css', 'import-js']);

//copy Html and js to dist
gulp.task('copyHtml', ()=> {
  gulp.src('./src/*.html')
      .pipe(minifyHtml())
      .pipe(gulp.dest('./dist'));
});

gulp.task('copyCss', ()=> {
  gulp.src('./src/css/*.css')
  	  .pipe(concat('style.css'))
  	  .pipe(minifyCss())
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('copyJs', ()=> {
  gulp.src('./src/js/*.js')
  	  .pipe(concat('script.js'))
  	  .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
});

//reload browser
gulp.task('reload', ()=> {
  browserSync.reload();
});

//watch for changes and init browserSync
gulp.task('watch', ()=> {
  browserSync.init({
    server: './dist'
  });

  gulp.watch('./src/*.html', ['copyHtml', 'reload']);
  gulp.watch('./src/css/*.css', ['copyCss', 'reload']);
  gulp.watch('./src/js/*.js', ['copyJs', 'reload']);
});
