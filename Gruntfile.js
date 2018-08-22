
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    banner: '/*! <%= pkg.name %>' + '.com v:' + '<%= pkg.version %> ' + 'Date: ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
    jshint:{
      options:{
        reporter:require('jshint-stylish') // use jshint-stylish to make our errors look and read
      },
      build: ['Gruntfile.js', 'src/**/*.js']
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'src/js/bilstrap.js',
        dest: 'js/bilstrap.min.js'
      },
    },
    less:{
      build:{
        files:{
          'src/css/bilstrap.css':"src/less/bilstrap.less"
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/css/bilstrap.css', 'vendor/css/normalize.css'],
        dest: 'css/bilstrap.css'
      }
    },
    cssmin: {
      compress: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'css/bilstrap.min.css': ['css/bilstrap.css']
        }
      }
    },

  });

  grunt.registerTask('default', ['jshint', 'uglify', 'less', 'concat']);
  grunt.registerTask('prod', ['jshint', 'uglify', 'less', 'concat', 'cssmin:compress']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
