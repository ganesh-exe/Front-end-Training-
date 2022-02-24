
console.log("Test run");
//Path module
console.log("Path module example-");
const path=require('path');
const joinPath=path.join('/folder','subfolder','test.text')
console.log(joinPath)

//OS module
console.log("OS module example-");
const os=require('os');
console.log("OS version -",os.version(),", OS uptime",os.uptime());

//Test
console.log("Random");
const a=10
console.log("Num -",a,"x 2=",a*2);