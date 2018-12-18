/* eslint-disable no-console */
const packageSettings = require('./package.json');

(function () {
  module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: ['src/environments'],
      copy: {
        build: {
          files: [
            {
              src: ['./conf/environment.ts.template'],
              dest: './src/environments/environment.ts'
            }
          ]
        }
      },
      'string-replace': {
        dev: {
          files: {
            './': ['src/environments/environment.ts',]
          },
          options: {
            replacements: [
              {
                pattern: /\$VERSION/g,
                replacement: packageSettings.version
              },
              {
                pattern: /\$ENV/g,
                replacement: 'development'
              },
              {
                pattern: /\$HOSTNAME/g,
                replacement: 'localhost:4200'
              },
              {
                pattern: /\$PRODUCTION/g,
                replacement: false
              },
              {
                pattern: /\$HOME_URI/g,
                replacement: 'https://localhost:4200'
              },
              {
                pattern: /\$FIRE_APIKEY/g,
                replacement: 'AIzaSyADYw6E1aCjBdI2bAY1jMwr-AT2bCQKqM0'
              },
              {
                pattern: /\$FIRE_AUTHDOMAIN/g,
                replacement: 'creditos-540ef.firebaseapp.com'
              },
              {
                pattern: /\$FIRE_DB/g,
                replacement: 'https://creditos-540ef.firebaseio.com'
              },
              {
                pattern: /\$FIRE_PROJECTID/g,
                replacement: 'creditos-540ef'
              },
              {
                pattern: /\$FIRE_STOREBUCKET/g,
                replacement: 'creditos-540ef.appspot.com'
              },
              {
                pattern: /\$FIRE_MSGID/g,
                replacement: '601836792733'
              }
            ]
          }
        },
        test: {
          files: {
            './': ['src/environments/environment.ts']
          },
          options: {
            replacements: [
              {
                pattern: /\$VERSION/g,
                replacement: packageSettings.version
              },
              {
                pattern: /\$ENV/g,
                replacement: 'development'
              },
              {
                pattern: /\$HOSTNAME/g,
                replacement: 'localhost:4200'
              },
              {
                pattern: /\$PRODUCTION/g,
                replacement: false
              },
              {
                pattern: /\$HOME_URI/g,
                replacement: 'https://localhost:4200'
              },
              {
                pattern: /\$FIRE_APIKEY/g,
                replacement: 'AIzaSyADYw6E1aCjBdI2bAY1jMwr-AT2bCQKqM0'
              },
              {
                pattern: /\$FIRE_AUTHDOMAIN/g,
                replacement: 'creditos-540ef.firebaseapp.com'
              },
              {
                pattern: /\$FIRE_DB/g,
                replacement: 'https://creditos-540ef.firebaseio.com'
              },
              {
                pattern: /\$FIRE_PROJECTID/g,
                replacement: 'creditos-540ef'
              },
              {
                pattern: /\$FIRE_STOREBUCKET/g,
                replacement: 'creditos-540ef.appspot.com'
              },
              {
                pattern: /\$FIRE_MSGID/g,
                replacement: '601836792733'
              }
            ]
          }
        },
        prod: {
          files: {
            './': ['src/environments/environment.ts']
          },
          options: {
            replacements: [
              {
                pattern: /\$VERSION/g,
                replacement: packageSettings.version
              },
              {
                pattern: /\$ENV/g,
                replacement: 'development'
              },
              {
                pattern: /\$HOSTNAME/g,
                replacement: 'localhost:4200'
              },
              {
                pattern: /\$PRODUCTION/g,
                replacement: false
              },
              {
                pattern: /\$HOME_URI/g,
                replacement: 'https://localhost:4200'
              },
              {
                pattern: /\$FIRE_APIKEY/g,
                replacement: 'AIzaSyADYw6E1aCjBdI2bAY1jMwr-AT2bCQKqM0'
              },
              {
                pattern: /\$FIRE_AUTHDOMAIN/g,
                replacement: 'creditos-540ef.firebaseapp.com'
              },
              {
                pattern: /\$FIRE_DB/g,
                replacement: 'https://creditos-540ef.firebaseio.com'
              },
              {
                pattern: /\$FIRE_PROJECTID/g,
                replacement: 'creditos-540ef'
              },
              {
                pattern: /\$FIRE_STOREBUCKET/g,
                replacement: 'creditos-540ef.appspot.com'
              },
              {
                pattern: /\$FIRE_MSGID/g,
                replacement: '601836792733'
              }
            ]
          }
        }
      },
      tslint: {
        options: {
          configFile: 'tslint.json',
          quiet: true
        },
        target: ['src/**/*.ts']
      }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-tslint');

    grunt.registerTask('dev', ['clean', 'copy:build', 'string-replace:dev', 'tslint']);
    grunt.registerTask('test', ['clean', 'copy:build', 'string-replace:test']);
    grunt.registerTask('prod', ['clean', 'copy:build', 'string-replace:prod']);
  };
}());
