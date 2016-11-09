var grunt = require('grunt');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-melvinjs');

    /**
     *  Extend grunt tasks. You can add your own stuff here:
     */
    grunt.extendConfig({
        clean: {
            www_dev: ['www/*']
        }
    });

    grunt.registerTask('default', ['clean:www_dev', 'melvinjs:dev']);
};