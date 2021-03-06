module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "index.css": "src/index.scss"
                }
            }
        },
        watch: {
            files: ['src/*.js', 'src/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'sass']);
};