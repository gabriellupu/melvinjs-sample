var grunt = require('grunt');
var package_json = require('./package.json');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-melvinjs');

    /**
     *  Extend or override already defined grunt tasks
     *  This example overrides the production ulglify task by adding
     *  the project and version at the top of the compiled script
     */
    grunt.extendConfig({
        uglify: {
            options: {
                banner: '//' + package_json.name + ' ' + package_json.version + '\n'
            },
            prod: {
                files: {
                    'www/app.js': 'www/app.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['melvinjs:dev']);
    grunt.registerTask('prod', ['melvinjs:prod']);
};
