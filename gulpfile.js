const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');

function css() {
  return (
    src('*.scss')
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(dest('.'))
  );
}

exports.css = css;
exports.default = css;
