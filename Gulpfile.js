import gulp from "gulp"
import sass from "gulp-sass"

gulp.task("sass", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("public/css"))
})

gulp.task("sass:watch", function () {
  gulp.watch("src/scss/**/*.scss", ["sass"])
})
