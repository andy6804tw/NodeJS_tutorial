var fs = require('fs');
console.log('Before File Reading');

fs.writeFile('./file','Hello!~','utf8',function(error){
    if(error) throw error;
    console.log("finish!");
});

console.log('After File Reading');