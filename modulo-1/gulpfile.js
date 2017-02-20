var gulp    = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass    = require ('gulp-sass');
    //babel   = require('gulp-babel');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "Clase-03/Solucion",
        port: 1500
    });

    gulp.watch("Clase-03/Solucion/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("Clase-03/Solucion/*.html").on('change', browserSync.reload);
    gulp.watch("Clase-03/Solucion/*.js").on('change', browserSync.reload);
});

gulp.task("sass", function(){
  return gulp.src('Clase-03/Solucion/*.scss')
  .pipe(sass({ outputStyle: 'compressed'}))
  .pipe(gulp.dest('Clase-03/Solucion/'));
});

gulp.task('default', ['serve']);
