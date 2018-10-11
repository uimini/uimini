var     gulp         =    require('gulp'),
        pug          =    require('gulp-pug'),
        stylus       =    require('gulp-stylus'),
        plumber      =    require('gulp-plumber'),
        notify       =    require('gulp-notify'),
        concat       =    require('gulp-concat'),
        uglify       =    require('gulp-uglifyjs'),
        jshint       =    require('gulp-jshint'),
        sourcemaps   =    require('gulp-sourcemaps'),
        cssnano      =    require('gulp-cssnano'),
        autoprefixer =    require('gulp-autoprefixer'),
        browserSync  =    require('browser-sync'),
        cache        =    require('gulp-cache'),
        rename       =    require("gulp-rename"),
        del          =    require('del'),

        // WARRNING css-media-queries group
        gcmq         =    require('gulp-group-css-media-queries');

var config = {
        // Build
        cssFolder:           './dist/css',
        jsFolder:            './dist/js',

        // Dev
        cssDevFolder:        './src/stylus',
        jsDevFolder:         './src/js',

        // TEST
        testFolder:           './test',
        testSecondFolder:   '/static'
};

// STYLE FOR UImini
gulp.task ('style', function() {
    return gulp
        .src(config.cssDevFolder + '/main.styl')
        // .pipe(sourcemaps.init())
        .pipe(plumber({ errorHandler: onError }))
        .pipe(stylus({
            'include css': false
        }))
        .pipe(autoprefixer({
            //3v for Flex-box
            browsers: ['last 3 version']
        }))
        // Dosn`t work
        // .pipe(sourcemaps.write('.'))
        .pipe(rename({ basename: "uimini" }))

        .pipe(gulp.dest(config.cssFolder))
        .pipe(gcmq())
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.cssFolder))

        // Dest min for test
        .pipe(gulp.dest(config.testFolder +config.testSecondFolder + '/css/'))
        .pipe(browserSync.reload({stream: true}))
});

// SCRIPT FOR UIMini
gulp.task ('script', function() {
    return gulp
        .src([
            config.jsDevFolder +'/common.js'
        ])
        .pipe(plumber())

        /*
        Jshint - detects errors and potential problems in JavaScript code.
        Errors are output in the console with syntax highlighting.
        You can add a list of ignored files on - .jshintignore (file is hidden)
        Also, you can comment on 2 lines below if you dont need jshint.
        */
        // .pipe(jshint())
        // .pipe(jshint.reporter('jshint-stylish'))

        .pipe(concat('uimini.js'))
        .pipe(gulp.dest(config.jsFolder))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.jsFolder))

        // Dest min for test
        .pipe(gulp.dest(config.testFolder +config.testSecondFolder +'/js'))
        .pipe(browserSync.reload({stream: true}))
});

// PUG FOR TEST
gulp.task ('pug', function () {
    return gulp
        .src(config.testFolder +'/**/*.pug')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(config.testFolder))
        .on('end', browserSync.reload)
});

// DELETE FOLDER BEFORE RUN SERVER
gulp.task('clean', function() {

    //UIMini
    return del.sync(config.cssFolder)

    //Test
    return del.sync(config.testFolder)

});

// WATCH
gulp.task('watch', function(){

    // UIMini
    gulp.watch(config.cssDevFolder +'/**/*.styl', ['style']);
    gulp.watch(config.jsDevFolder +'/**/*.js', ['script']);

    // Test
    gulp.watch(config.testFolder +'/**/*.pug', ['pug']);
});


// SERVER FOR TEST
gulp.task('serve', function() {
    browserSync({
        server:{
            baseDir: config.testFolder
        },
        // port: 8080,
        // open: true,
        notify: false
    })
});

//
// MAIN TASK
//

// DEV FOR UIMini & TEST
gulp.task('default', ['pug','style','script','watch','serve']);
gulp.task('build', ['style','script']);

// CLEAR CACHE
gulp.task('cache', function() {
    return cache.clearAll();
});


// Error Message
var onError = function(err) {
    notify.onError({
        title:    "Error in " + err.plugin,
        message: err.message
    })(err);
    this.emit('end');
};