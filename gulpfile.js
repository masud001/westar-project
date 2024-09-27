
const  {src, dest, watch, series }= require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Task to copy Swiper CSS and JS files to src/assets
function copySwiper() {
    return src([
        'node_modules/swiper/swiper-bundle.min.{js,css}'
    ]).pipe(dest('src/assets/swiper'));
}

// Task to compile and minify Bootstrap JavaScript
function buildBootstrapJS() {
    return src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
        .pipe(dest('src/assets/js')); // Output the minified Bootstrap JS
}

function buildStyles() {
    return src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(purgecss({content: ['src/*.html']}))
        .pipe(dest('src/assets/css'));
}

function watchTask() {
    watch(['src/scss/**/*.scss', 'src/*.html'], buildStyles);
}

exports.default = series(copySwiper,buildBootstrapJS, buildStyles, watchTask);