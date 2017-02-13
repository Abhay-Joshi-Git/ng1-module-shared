'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', '@*/grunt-*',
        '!grunt-cdnify']});


    var serveStatic = require('serve-static');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        copy: {
                html: {
                        cwd: 'src',  // set working folder / root to copy
                        src: ['index.html'],           // copy all files and subfolders
                        dest: 'dist',    // destination folder
                        expand: true           // required when using cwd
                    },
                images: {
                        cwd: 'images',
                        src: ['*.png'],
                        dest: 'dist/images',
                        expand: true
                    }                
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*js'],
                dest: 'dist/shared.js'
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    protocol: 'http',
                    hostname: '*',
                    base: 'dist/',
                    keepalive: true,
                    open: false
                    ,
                    middleware: function(connect) {
                        return [
                            connect().use('/bower_components',
                                serveStatic('./bower_components')),
                            serveStatic('dist')    
                        ];
                    }
                }
            }
        },
        ngtemplates: {
            shared: {
                cwd: 'src',
                src: '*/*.html',
                dest: 'src/templates.js',
                options: {
                    htmlmin:  { 
                        collapseWhitespace: true, 
                        collapseBooleanAttributes: true 
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['build']);

    grunt.registerTask('build', [
        'copy',
        'ngtemplates',
        'concat',
        'connect'
    ]);

};

