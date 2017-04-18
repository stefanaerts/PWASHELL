var gulp = require('gulp');
// Load the module.
var svgSprite = require('gulp-svg-sprite');

// Set our desired configuration values.
svgConfig = {
  mode: {
    // Make sure we're combining icons
    // using the <symbol> method.
    symbol: true
  },
  // Some more settings to keep
  // the SVG's code clean:
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false,
    // By default the module wants to namespace
    // all our IDs and classes. We're grownups
    // so we want to preserve our settings.
    namespaceIDs: false,
    namespaceClassnames: false
  },
  shape: {
    // Choose a folder to store the
    // intermediate SVG files in.
    dest: '/Users/stefanaerts/icons/intermediate'
  }
};

// Define our task.
gulp.task('svg', function () {
  // Set the source folder.
  gulp.src('src/uncompressed/icons/**/*.svg')
    // Include our options.
    .pipe(svgSprite(svgConfig))
    // Set the destination folder.
    .pipe(gulp.dest('src/assets/icons'));
});
