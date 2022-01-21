async function main () {
    console.log('hello')
  
    // await delay(3)
  
    console.log('world')
  }

main()


// function delay(i){
//     let startTime=new Date().getTime();
//     currentTime=startTime
//     while(currentTime<startTime+(i*1000)){
//         currentTime=new Date().getTime();
//     }
// }

// function delay(i){
//     return new Promise(function (res,rej){
//         setTimeout(function (){
//             res()
//         },i*1000)
//     })
// }


// Remove falsy values 
// The 7 falsy values are:
//  0 , 0n , null , undefined , false , NaN , and "" 
var arr = [{}, [], undefined, null, false, true, 1, "String"];

// console.log(arr.filter(e=>e));
// [{…}, Array(0), true, 1, 'String']



Array.prototype.removeFalcy=function (){
    let result=[]
    let falsy=[0,0n,null,undefined,false,NaN,""]
    for (let i = 0; i < this.length; i++) {
        if(falsy.indexOf(this[i])==-1){
            result.push(this[i]);
        }
    }
    return result
}

console.log(arr.removeFalcy());
// [{…}, Array(0), true, 1, 'String']
