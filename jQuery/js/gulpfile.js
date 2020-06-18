var cssmin = require('gulp-cssmin');
gulp task('cssmin',function(){
    return gulp.src('lib/css.css')
               .pipe(cssmin())
               .pipe(gulp.dest('lib'));
});