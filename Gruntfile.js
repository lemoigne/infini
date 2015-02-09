module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'app/css/app.css': 'app/sass/app.scss'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {

                    'app/min.js': ['app/js/vendor/modernizr-2.6.2.min.js',
                        'app/js/vendor/angular.min.js', 'app/js/vendor/angular-ui-bootstrap.js', 'app/js/vendor/angular.route.js', 'app/js/**/*.js']
                }

            }
        },

        jshint: {
            all: ['app/js/*.js', 'app/js/**/*.js', '!app/js/vendor/*.*']
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            js: {
                files: ['app/js/*.js', 'app/js/**/*.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            images: {
                files: ['app/img/*.*', 'app/img/**/*.*'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            sass: {
                files: 'app/sass/**/*.scss',
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            html: {
                files: ['app/*.html', 'app/**/*.html'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    base: 'app/',
                    port: 9000,
                    hostname: "localhost",
                    open: true
                }
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('app/')
                        ];
                    }
                }
            }
        }
    });

    grunt.registerTask('serve', [
        'connect',
        'watch'
    ]);

    grunt.registerTask('default' , ['jshint', 'uglify', 'sass']);
}