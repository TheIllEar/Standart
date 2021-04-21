const gulp = require('gulp'); // Подключаем Gulp
const sass = require('gulp-sass'); // Подключаем Sass пакет
const minCss = require('gulp-clean-css'); // Подключаем минификатор CSS
const postcss = require("gulp-postcss"); // Подключаем PostCSS для префиксов
const autoprefixer = require("autoprefixer"); // Подключаем префиксы

gulp.task('sass', function () { // Создаем таск Sass
  return gulp.src('scss/**/*.scss') // Берем источник
    .pipe(sass().on('error', sass.logError)) // Преобразуем Scss, в CSS посредством gulp-sass и If there is an error parsing the SCSS, it will let us know where the error is so we can easily fix it.
    .pipe(minCss()) // Минификация
    .pipe(postcss([ // Префиксы
      autoprefixer()
    ]))
    .pipe(gulp.dest('css')); // Выгружаем результата в папку css
});

gulp.task('watch', ['sass'], function(){ // Создаем таск. В квадратных скобках указываем таcк, который необходимо запустить до запуска watch
    gulp.watch('scss/**/*.scss', ['sass']) // Watch команда следящая за автоматической компиляцией файлов(в данном случае из scss в css)
});


/////////New Node Version////////////////////////////////////////////////////////////////////////////
// const gulp = require('gulp'); // Подключаем Gulp
// const sass = require('gulp-sass'); // Подключаем Sass пакет
// const minCss = require('gulp-clean-css'); // Подключаем минификатор CSS
// const postcss = require("gulp-postcss"); // Подключаем PostCSS для префиксов
// const autoprefixer = require("autoprefixer"); // Подключаем префиксы
//
// gulp.task("css", function () { //Создаем таск
// return gulp.src('scss/**/*.scss') //Берем источник
// .pipe(sass().on('error', sass.logError)) //Преобразуем Scss, в CSS посредством gulp-sass и If there is an error parsing the SCSS, it will let us know where the error is so we can easily fix it.
// .pipe(minCss()) // Минификация
// .pipe(postcss([ // Префиксы
//   autoprefixer()
// ]))
// .pipe(gulp.dest('css')); //Выгружаем результата в папку css
// });
//
// gulp.task("watch", function () { //Создаем таск. В gulp.series указываем таск, который необходимо запустить до запуска watch
// gulp.watch('scss/**/*.scss', gulp.series("css")); //Watch команда следящая за автоматической компиляцией файлов(в данном случае из scss в css).
// });
