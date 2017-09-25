var fs = require('fs');
console.log('Before File Reading');

fs.readFile('./file','utf8',function(error,data){
    console.log(data);
})

console.log('After File Reading');