F2.extend('YourPluginName', (function(){
    return {
        doSomething: function(note){
            F2.log("Something has been done. "+note);
        }
    };
})());
