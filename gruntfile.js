module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n/  Author: Jeremy Carlsten \n/  Version:<%= pkg.version %> \n*/\n'
            },
            dist: {
                files: [
                    {src: 'src/js/*.js', dest: 'distribution/smartTextarea-<%= pkg.version %>.min.js'}
                ]
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        coffee: {
            compile: {
                files: {
                    'src/js/smartTextarea.js': 'src/coffee/*.coffee',
                    'test/js/hotkeyTests.js': 'test/coffee/hotkeyTests.coffee'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-qunit');


    grunt.registerTask('test', ['coffee', 'jshint', 'qunit']);
    grunt.registerTask('compile', ['coffee', 'jshint']);
    grunt.registerTask('default', ['coffee', 'jshint', 'qunit','uglify']);

};