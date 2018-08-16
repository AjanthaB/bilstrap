
module.exports = function(grunt){


  // get the configuration info from package.json ----------------------------
  // this way we can use things like name and version (pkg.name
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    // configure the jsHint to validate js files
    jshint:{
      options:{
        reporter:require('jshint-stylish') // use jshint-stylish to make our errors look and read
      },
      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js']
    },
    myth: {
      options: {
        sourcemap: false
      },
      build: {
        expand: true,
        cwd: 'src/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'src/css/',
        ext: '.css'
      }
      
    },
    uglify:{
      options:{
         banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build:{
        files:{
          'dist/js/billstrap.min.js': 'dist/js/billstrap.min.js'
        }
      }
    },
    // compile less stylesheets to css -----------------------------------------
    less:{
      build:{
        files:{
          'src/css/billstrap.css':"src/css/billstrap.less"
        }
      }
    },
    cssmin:{
      options:{
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      concat: {
        files: {
          'dist/css/billstrap.css': ['vendor/css/normalize.css', 'src/css/billstrap.css']
        }
      },
      minify: {
        expand: true,
        cwd: 'dist/css',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css',
        ext: '.min.css'
      }
    }
  });

  // this default task will go through all configuration (dev and production) in each task
  grunt.registerTask('default', ['less', 'myth:build', 'cssmin:concat', 'cssmin:minify', 'uglify']);

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-myth');
};
