var copy = require('recursive-copy')
var path = require('path')
var through = require('through2')

// Options
const srcInput = 'icons/'
const outputDir = 'src/icons'
const options = {
  overwrite: true,
  expand: false,
  dot: false,
  junk: false,
  filter: ['**/*.svg'],
  rename: function(filePath) {
    return filePath.replace('.svg', '') + '.js'
  },
  transform: function(src, dest, stats) {
    if (path.extname(src) !== '.svg') {
      return null
    }
    return through(function(chunk, enc, done) {
      var output = chunk.toString()
      //done(null, '(function () { return `' + output + '`; }());') //module.exports/export default = didnt work var = Icon = `` => undefined
  //    done(null, 'function Icon() { return `' + output + '`; }')
      // done(null, 'export default `' + output + '`;')
      // done(null, 'export default `' + output + '`;')
       done(null, 'return `' + output + '`;') //Is placed into function
     //  done(null, 'exports.default = `' + output + '`;')
    })
  }
}

// Run function from npm run copy
copy(srcInput, outputDir, options)
  .then(function(results) {
    console.info('Copied ' + results.length + ' files')
  })
  .catch(function(error) {
    console.error('Copy failed: ' + error)
  })
