const gulp = require('gulp'),
    gulp_sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    browser_sync = require('browser-sync');

gulp.task('html', () => {
    return gulp.src('app/views/index.html')
    .pipe(browser_sync.reload({stream: true}))
})

gulp.task("images", () => {
    return gulp.src(['app/src/images/**/*'])
    .pipe(cache(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 1}),
      imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]}),
        mozjpeg({quality: 70}),
        pngquant({quality: [0.5, 0.5]}),
    ])))
    .pipe(gulp.dest('app/public/images/**/*'))
    .pipe(browser_sync.reload({
        stream: true
    }))
})

gulp.task('sass', () => {
    return gulp.src('app/src/stylesheets/**/*.sass')
    .pipe(gulp_sass({
        outputStyle: 'expandet'
    })).on('error', gulp_sass.logError)
    .pipe(concat('all.css'))
    .pipe(gulp.dest('app/public/stylesheets'))
    .pipe(browser_sync.reload({
        stream: true
    }))
})
gulp.task('browser-sync', () => {
    browser_sync.init({
        server: {
            baseDir: 'app/',
            index: "/view/index.html",
            directory: false
        },
        open: true
    })
})

gulp.task('watch', () => {
    gulp.watch('app/public/stylesheets/css/*.css', gulp.parallel('sass'));
    gulp.watch('app/views/**/*.html', gulp.parallel('html'))
    // gulp.watch('app/javascripts/min/*.js')
})

gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync'))