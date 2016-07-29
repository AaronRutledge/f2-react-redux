var _appConfig = {
    appId: 'openf2_examples_javascript_helloworld',
    manifestUrl: 'http://localhost:3000/f2apps/helloManifest.js'
};

$(function(){
    F2.init();
    F2.registerApps(_appConfig);

});
