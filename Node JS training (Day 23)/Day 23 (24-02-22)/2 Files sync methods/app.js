const { readFileSync , writeFileSync, appendFileSync, unlinkSync}=require('fs')
const path=require('path')

//write a file
writeFileSync('test.txt','First line written using node');
writeFileSync('testtwo.txt','Second file');
writeFileSync('testthree.txt','Third file');


const readOp=readFileSync('./test.txt','utf-8')
const readTwo=readFileSync('./testtwo.txt','utf-8')
const readThree=readFileSync('./testthree.txt','utf-8')

//appending file - two ways
writeFileSync('test.txt','  Second line using writeFile',{flag:'a'});
const readOptwo=readFileSync('./test.txt','utf-8')

appendFileSync('test.txt','  Third line using appendFile');
const readOpthree=readFileSync('./test.txt','utf-8')

//deleting a file
unlinkSync('./testtwo.txt')
//const readTwo=readFileSync('./testtwo.txt')

//Printing file content
console.log(readOp);
console.log(readOptwo);
console.log(readOpthree);
console.log(readTwo);
console.log(readThree);


writeFileSync('./content/abc.txt', 'Hello');