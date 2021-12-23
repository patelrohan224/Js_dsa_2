// settimeout

// setTimeout(()=>{
//     console.log("ss");
// },[1000])

// setTimeout(function(){
//     console.log("fun is calling");
// },1000)

// setTimeout(fun,1000,1,2)
// function fun(a,b){
//     console.log("fun is calling",a+b);
// }


// const Obj={
//     name:"wrew",
//     fun(){
//         return console.log(`${Obj.name} is calling`);
//         // return console.log(`${this.name} is calling`);
//     }
// }
// // Obj.fun()
//  setTimeout(Obj.fun,1000)


// console.log(1);
// setTimeout(() => { console.log(2); }, 0); //take time to loading
// console.log(3);

// setInterval



let display=setInterval(function(){console.log("hi this setinterval");},1000)
clearInterval(display)
