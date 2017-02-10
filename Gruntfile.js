module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            files: {
                cwd: 'src',  // set working folder / root to copy
                src: '**/*.js',           // copy all files and subfolders
                dest: 'dist',    // destination folder
                expand: true           // required when using cwd
            }
        }
    });
};

grunt.registerTask('default', ['build']);

grunt.registerTask('build', [
    'copy'
]);
