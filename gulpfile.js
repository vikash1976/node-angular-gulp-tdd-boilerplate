/* gulpfile */

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	portfinder = require('portfinder'),
	webserver = require('gulp-webserver'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	exec = require('child_process').exec,
	watch = require('gulp-watch'),
    Server = require('karma').Server;


/**
 * Run tests
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});


gulp.task('default', ['server', 'test']);

//jshint task

gulp.task('jshint', function(){
	return gulp.src('source/javascript/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

//watch task
gulp.task('watch', ['jshint', 'build-js', 'css'], function(){
	gulp.watch(['source/javascript/**/*.js', 'source/css/**/*.css'], ['jshint', 'build-js', 'css']);
	
	portfinder.basePort = 35730;
    portfinder.getPort(function(err, port){
        if(err) {
            console.error(err);
            return;
        }
        // Create LiveReload server
        livereload.listen({port:port});
        gutil.log('Livereload listen port '+port);
     });

    // Watch any files in dist/, reload on change
    gulp.watch('public/assets/**').on('change', livereload.changed);
});

// build js task
gulp.task('build-js', function(){
	return gulp.src('source/javascript/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(concat('bundle.js'))
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('public/assets/javascript'));
});

// css task
gulp.task('css', function() {
    return gulp.src('source/css/**/*.css')
        .pipe(gulp.dest('public/assets/stylesheets'));
        
});
gulp.task('compress', function() {
  return gulp.src('source/javascript/**/*.js')
  	.pipe(sourcemaps.init())
	.pipe(concat('bundle.js'))
    .pipe(uglify())
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/javascript/vendor'));
});

gulp.task('server', ['webserver', 'livereload', 'watch'], function () {});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'public/assets'
  });
});
gulp.task('nodeServer', function(cb){
	exec('nodemon source/server/httpServer.js', function(error, stdout, stderr) {
        gutil.log('stdout: ' + stdout);
        gutil.log('stderr: ' + stderr);
        cb(error)
    }).stdout.on('data', function(data){ // to ensure it logs nodemon httpServer.js output to stdout
        gutil.log(data);
    })
});
 
gulp.task('livereload', function() {
  gulp.src('public/assets/**')
    .pipe(watch('public/assets/**'))
    .pipe(connect.reload());
});