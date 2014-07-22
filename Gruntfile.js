"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            pacman: {
                src: ['src/Pacman.js'],
                options: {
                    specs: ['test/Pacman.js'],
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: 'src'
                        }
                    }
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js',
                        'test/*.js'],
                tasks: ['jasmine']
            }
        },
        pkg: grunt.file.readJSON('package.json')

    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
