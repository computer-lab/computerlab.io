// For any third party dependencies, like jQuery, place them in the lib folder.

requirejs.config({
    baseUrl: '/js/',
    paths: {
        app: 'app',
        bower_components: '../../bower_components'
    }
});

// custom js modules
requirejs(['app/main']);
requirejs(['app/animations']);
requirejs(['app/nav']);
