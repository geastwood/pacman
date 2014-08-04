"use strict";

var template = require('grunt-template-jasmine-requirejs');
var templateOptions = {
    requireConfig: {
        baseUrl: 'src'
    }
};
module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            character: {
                src: ['src/Character.js'],
                options: {
                    specs: ['test/Character.spec.js'],
                    template: template,
                    templateOptions: templateOptions
                }
            },
            pacman: {
                src: ['src/Pacman.js'],
                options: {
                    specs: ['test/Pacman.spec.js'],
                    template: template,
                    templateOptions: templateOptions
                }
            },
            userManager: {
                src: ['src/userManager.js'],
                options: {
                    specs: ['test/userManager.spec.js'],
                    template: template,
                    templateOptions: templateOptions
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
