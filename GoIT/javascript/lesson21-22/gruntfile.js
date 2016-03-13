module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'js/src/ES6',
                src: ['script.js'],
                dest: 'js/src',
                ext: '.js',
                extDot: 'first'
            }]
        }
    },
    concat: {
      options: {
        separator: ''
      },
      js: {
        src: [ 'js/src/*.js'],
        dest: 'js/build/script.min.js'
      },
      css: {
        src: ['style/build/*.css'],
        dest: 'style/build/style.min.css'
      }
    },
    uglify:{
      dist: {
        src: ['js/build/script.min.js'],
        dest: 'js/build/script.min.js',
      }
    },
    cssmin:{
      dist: {
        src: ['style/build/style.min.css'],
        dest: 'style/build/style.min.css'
      }
    },
    watch: {
      css: {
        files: ['style/src/*.css'],
        tasks: ['concat']
      },
      babel: {
        files: ['js/src/ES6/script.js'],
        tasks: ['babel']
      }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['babel', 'concat', /*'uglify'*/, 'cssmin']);

};