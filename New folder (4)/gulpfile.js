const fs = require('node:fs');
const gulp = require('gulp');
const minify = require('gulp-minify');

// function modify() {
//     var files = fs.readdirSync('src')
//     const jsFiles = files.filter( file => file.includes(".js"))
//     const js = jsFiles.map(file => fs.readFileSync('src/'+file ,'utf-8')).join('\n')
//     fs.writeFileSync('index.js',js)
//     console.log(minify(js))

// }
 
function modify() {
  return gulp.src('src/*.js') 
    
    .pipe(minify())
    .pipe(gulp.dest('dist'))

}

function combinecss(fn) {
    var files = fs.readdirSync('src')
    const cssfiles = files.filter( file => file.includes(".css"))
    const styles = cssfiles.map(file => fs.readFileSync('src/'+file ,'utf-8')).join('\n')

    fs.writeFileSync('dist/styles.css',styles)

    fn()
}
function watch(){
    gulp.watch("src/*.js",modify)
    gulp.watch("src/*.css",combinecss)
}

exports.default = watch
