const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');


gulp.task('bundle', function(){
  return browserify('./src/App.js').transform("babelify", {presets: ["react"]}).bundle().pipe(source('bundle.js')).pipe(gulp.dest('./static/'));
});


gulp.task('watch',function(){
   var b = browserify({
     entries: ['./src/App.js'],
     cache: {},
     packageCache: {},
     plugin: ['watchify']
   });

   b.on('update', makeBundle);

    function makeBundle(){
      b.transform("babelify", {presets: ["react"]}).bundle()
        .pipe(source('bundle.js'))
        .on('error', function(err){
          console.log(err.message);
          console.log(err.codeFrame);
        })
        .pipe(gulp.dest('./static/'));
        console.log("Bundle updated successfully");
    }

    makeBundle();

})
