// Currying is a transform that makes f(a,b,c) 
// callable as f(a)(b)(c) . JavaScript implementations 
// usually both keep the function callable normally 
// and return the partial if the arguments count is 
// not enough


// let result = (function curry(fun) {
//     return function (a) {
//         return function (b) {
//             return fun(a, b)
//         }
//     }N
// })(function (a, b) {return a + b})(2)(3)
// console.log('result:', result)


function curry(fun) {
    return function (a) {
        return function (b) {
            return fun(a, b)
        }
    }
}
let result = curry(function (a, b) {
    return a + b
})(2)(3)
// console.log('result:', result)
// 5

let ress = curry(function (a, b) {
    return a + b
})
// console.log(ress(1)(5));
// 6

// (function dd() {
//     console.log("dd");
// })()
// dd



function many(a, b, c) {
    return a + b + c
}

function curryy(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

function three(a, b, c) {
    return a + b + c;
}

let curriedSum = curryy(three);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
console.log(curriedSum(1, 2)(3));



// The main benefit of currying is when you need to use
// the same call with some of the same parameters a lot
// i.e it helps to avoid passing the same variable again and again.



const add=(a,b,c)=>a+b+c
add(2,2,2)
console.log('add(2,2,2):', add(2,2,2))
// 6


const cur=(a)=>{
    return (b)=>{
        return (c)=>{
           return a+b+c;
        }
    }
}

cur(2)(2)(2)
console.log('cur(2)(2)(2):', cur(2)(2)(2))
// 6