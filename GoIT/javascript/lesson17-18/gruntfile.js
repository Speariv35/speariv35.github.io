
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
    // define a string to put between each file in the concatenated output
        separator: ';'
  },
  dist: {
    // the files to concatenate
    src: ['js/src/*.js'],
    // the location of the resulting JS file
    dest: 'js/script.main.js'
  }
},
uglify: {
  dist: {
    // the files to concatenate
    src: ['js/script.main.js'],
    // the location of the resulting JS file
    dest: 'js/script.main.min.js'
  }
},
concat_css: {
  all: {
    // the files to concatenate
    src: ['css/src/*.css'],
    // the location of the resulting JS file
    dest: 'css/main.style.css'
  }
},
csso: {
  dist: {
    // the files to concatenate
    src: ['css/main.style.css'],
    // the location of the resulting JS file
    dest: 'css/main.min.style.css'
  }
}
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'csso']);

};
