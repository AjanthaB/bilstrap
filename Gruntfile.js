
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

    uglify:{
      options:{
         banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build:{
        files:{
          'dist/js/billstrap.min.js':'src/js/billstrap.js'
        }
      }
    },
    // compile less stylesheets to css -----------------------------------------
    less:{
      build:{
        files:{
          'dist/css/billstrap.css':"src/css/billstrap.less"
        }
      }
    },
    cssmin:{
      options:{
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build:{
        files:{
          'dist/css/billstrap.min.css':'dist/css/billstrap.css'
        }
      }
    }
  });

  // ========= // CREATE TASKS =========

    // this default task will go through all configuration (dev and production) in each task
  grunt.registerTask('default', ['jshint', 'less', 'cssmin', 'uglify']);

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
};
