module.exports = function(grunt) {
	grunt.initConfig({
   		uglify: {
   			js: {
   				src: 'src/autoselect.js',
   				dest: 'builds/autoselect.min.js'
   			},
   		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

 	grunt.registerTask('default', ['uglify']);
}