/*----------------------------------( BABEL )----------------------------------*/

/**
* Run Modern JavaScript compiler
*
* @see https://github.com/babel/grunt-babel
*
*/

module.exports.tasks = {

   // Compiles ES6 with Babel
    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015'],
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%=config.js.srcDir%>',
          src: '{,*/}*.js',
          dest: '<%=config.js.tempDir%>',
          ext: '.js'
        }]
      }
    },
};
