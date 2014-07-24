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
            pacman: {
                src: ['src/Pacman.js'],
                options: {
                    specs: ['test/Pacman.js'],
                    template: template,
                    templateOptions: templateOptions
                }
            },
            userManager: {
                src: ['src/userManager.js'],
                options: {
                    specs: ['test/userManager.js'],
                    template: template,
                    templateOptions: templateOptions
                }
            },
            util: {
                src: ['src/util.js'],
                options: {
                    specs: ['test/util.js'],
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
