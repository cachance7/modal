var src = './src';
var dest = './dist';

module.exports = {
    templates: {
        src: src + '/templates/*.*',
        dest: dest
    },
    markup: {
        src: src + '/html/*.*',
        dest: dest
    },
    production: {
        cssSrc: dest + '/*.css',
        jsSrc: dest + '/*.js',
        dest: dest
    }
};
