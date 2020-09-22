function caller(value){
    var deferred = $.Deferred();
    window.setInterval(function(){
        deferred.resolve('Hello');
    },value);
    return deferred;
}
function init(){
    caller(3000).then(function(text){
        alert(text);
    });
}
init();