var grunt = require('grunt');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-melvinjs');

    /**
     *  Extend grunt tasks. You can add your own stuff here:
     */
    grunt.extendConfig({
        copy: {
            www_dev: {
                src: ['app/**', '!app/**/*.less', '!app/**/*.jade'],
                expand: true,
                dest: 'www'
            }
        },
        clean: {
            www_dev: ['www/*', '!www/bower_components/**']
        }
    });

    grunt.registerTask('default', ['clean:www_dev', 'melvinjs:dev', 'copy:www_dev']);


    /**
     * Production task - optimizes modules, minify the resources
     */
    grunt.registerTask('production', ['melvinjs:production']);
};