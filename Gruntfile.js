var grunt = require('grunt');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-melvinjs');

    grunt.registerTask('default', ['melvin']);
};