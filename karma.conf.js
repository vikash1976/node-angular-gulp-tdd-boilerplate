module.exports = function(config) {
        config.set({
            // list of files / patterns to load in the browser

            // **/*.js: All files with a "js" extension in all subdirectories
            
            preprocessors: {
                'tests/*.js': [ 'browserify' ] //Mention path as per your test js folder
            },
            files: [
                'public/assets/javascript/*.js',
                'node_modules/angular-mocks/angular-mocks.js',
                'tests/*.js'
            ],

            /*browsers: [
                'PhantomJS'
            ],*/
            browsers : ['Chrome'],
            
            plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-browserify'
            ],

            // level of logging: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
            logLevel: config.LOG_WARN,

            // base path, that will be used to resolve files and exclude
            basePath: './',

            // web server port
            port: 7676,

            // testing framework to use (jasmine/mocha/qunit/...)
            frameworks: ['jasmine', 'browserify'],

            // Additional reporters, such as growl, junit, teamcity or coverage
            reporters: ['progress'],

            // Enable or disable colors in the output (reporters and logs).
            colors: true
        });
    };
