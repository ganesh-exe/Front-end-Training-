const prime=(num)=>{
    if(num===1){
        console.log(num,'is neither prime nor composit')
    }
    else if(num<!0){
        for (let n=2;n<num;num++){
            if( num%n==0){
                console.log(num,'is a prime number')
            }
        }
    }
}
module.exports={prime}