module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'fnnr-app/';
    var report = './report/';
    var root = './';
    var server = './src/server/';
    var specRunnerFile = 'specs.html';
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var build = './build/fnnr-app/app/';

    var config = {
        /**
        * File paths
        */
        //alljs I want to vet. TODO fix the js files so that the errors is not too many to fix.
        alljs: [
            //'./src/**/*.js',
            //'./*.js',
            //'!./src/**/js/*.min.js'
        ],
        build: build,
        buildFonts: build + 'content/fonts/',
        buildImages: build + 'content/images/',
        client: client,
        clientApp: clientApp,
        css: temp + 'styles.css',
        fonts: clientApp + 'app/content/fonts/**/*.*',//bower.directory + 'font-awesome/fonts/**/*.*',
        html: clientApp + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: clientApp + 'app/content/images/**/*.*',//client + 'images/**/*.*',
        index: client + 'index.html',//client + 'index.html',
        //js is all the js files in the app that are actually launched with the application
        js: [
            clientApp + 'js/app.js',
            //clientApp + 'js/config.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js',
            //'!' + clientApp + '**/views/**/app.js'
            '!' + clientApp + 'gulpfile.js'
        ],
        jsOrder: [
            '**/script_components/*.js',
            '**/app.js',//'**/app.module.js',
            '/src/client/**/config.js',
            '/src/client/**/controllers/**/*Ctrl.js',
            '/src/client/**/directives.js',
            '/src/client/**/services/**/*.js',
            '/src/client/**/factories/**/*.js',
            '/src/client/**/filters/**/*.js',
            '/src/client/**/controllers/appControllers.js'
            //'**/*.module.js',
            //'**/*Ctrl.js',
            //'**/*Ctrl.js',
            //'**/*.js'
        ],
        less: [clientApp + 'app/content/css/*.css', '!'+clientApp + 'app/content/css/vendor.min.css'],//client + 'styles/styles.less',
        report: report,
        root: root,
        server: server,
        stubjs: [
            bower.directory + 'angular-mocks/angular-mocks.js',
            client + 'stubs/**/*.js'
        ],
        temp: temp,

        /**
         * Optimized file names
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },

        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'fuelNowNetRetail',//'app.core',//module name
                standAlone: false,//whether this is a standalone module or belongs to another one
                root: ''//app/'//root for template id
            }
        },

        /**
        * browser sync
        */
        browserReloadDelay: 1000,

        /**
        * Bower and NPM locations
        */
        bower: bower,
        packages : [
            './package.json',
            './bower.json'
        ],

        /**
        * specs.html, out HTML spec runner
        */
        specRunner: client + specRunnerFile,
        specRunnerFile: specRunnerFile,
        testlibraries: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            'node_modules/mocha-clean/index.js',
            'node_modules/sinon-chai/lib/sinon-chai.js'
        ],
        specHelpers: [client + 'test-helpers/*.js'],
        specs: [clientApp + '**/*.spec.js'],
        serverIntegrationSpecs: [client + 'tests/server-integration/**/*.spec.js'],

        /**
        * Node settings
        */
        defaultPort: 7203,
        nodeServer: server + 'app.js'
    };

    config.getWireddepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    config.karma = getKarmaOptions();

    return config;

    ////////////

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                client + '**/*.module.js',
                client + '**/*.js',
                temp + config.templateCache.file,
                config.serverIntegrationSpecs
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    {type: 'html', subdir: 'report-html'},
                    {type: 'lcov', subdir: 'report-lcov'},
                    {type: 'text-summary'}
                ]
            },
            preprocessors: {}
        };
        options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }
};
