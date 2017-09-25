var methods={};

methods.say=function(a,b){
    return a+b;
}
this.call=function(){
    return "Hello!!!";
}
exports.data=methods;