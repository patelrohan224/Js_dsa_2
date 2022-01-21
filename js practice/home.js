// call apply bind 
// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array.
// Bind returns a new function, allowing you to pass in a this array and any number of arguments.

let name = {
    firstName: "rohan",
    lastName: 'patel',
    printName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}
name.printName();
// rohan patel



let name2 = {
    firstName: "s",
    lastName: 'pa',
    printName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}



//using call method 
// function borrowing
// first argument ref what pointing to
name.printName.call(name2)
// s pa

let printFullname = function () {
    console.log(this.firstName + ' ' + this.lastName);
}

printFullname.call(name2)
// s pa

let printFullnameOneArgument = function (hometown) {
    console.log(this.firstName + ' ' + this.lastName + " " + hometown);
}


printFullnameOneArgument.call(name2, "gj")
// s pa gj


let printFullnameMore_Argument = function (hometown, no) {
    console.log(this.firstName + ' ' + this.lastName + " " + hometown + " " + no);
}

printFullnameMore_Argument.call(name2, "gj", "213")
// s pa gj 213

//apply method 


printFullnameMore_Argument.apply(name2, ["apply town", "213"])
// s pa apply town 213

// bind method
// return the copy of that method
// rahter then direct invoking that it give copy of method which we can 
// invoked later
let Bindmethod = printFullnameMore_Argument.bind(name2, "gjbind", "321")
console.log('Bindmethod:', Bindmethod)
// Bindmethod: ƒ (hometown,no) {
//     console.log(this.firstName + ' ' + this.lastName + " " + hometown + " " + no);
// }

Bindmethod()
// s pa gjbind 321




// Polyfill for bind method
// polyfill is sort of browser fall back 
// if brower doesnt supprt bind fuction so we write bind function
// A polyfill is a piece of code (usually JavaScript on the Web) used 
// to provide modern functionality on older browsers that do not natively 
// support it.

let nameFOr = {
    firstName: "meet",
    lastName: "patel"
}
let printNName = function () {
    console.log(this.firstName + ' ' + this.lastName);
}

// own bind function
// let printName = printNName.bind(nameFOr)
// printName()


Function.prototype.myBind = function (...args) {
    // console.log('args:', args)
    // 0: {firstName: 'meet', lastName: 'patel'}
    // length: 1
    // [[Prototype]]: Array(0)
    let obj = this
    return function () {
        obj.call(args[0])
    }
}

let ownFun = printNName.myBind(nameFOr)
console.log('printNName:', ownFun)
// printNName: ƒ () {
//     obj.call(args[0])
// }
ownFun()
// meet patel



Function.prototype.myBind_multiple = function (...args) {
    //     console.log('args:', args)
    //      args: 
    //      (2) [{…}, 'rajk']
    //      0: {firstName: 'meet', lastName: 'patel'}
    //      length: 1
    let obj = this
    let params = args.splice(1)
    return function () {
        obj.apply(args[0], params)
    }
}

let printNNameWith_oneArg = function (hometown) {
    console.log(this.firstName + ' ' + this.lastName + " " + hometown);
}
let mui = ltipleOwn = printNNameWith_oneArg.myBind_multiple(nameFOr, "rajk")
console.log('mui:', mui)
// mui: ƒ () {
//     obj.apply(args[0],params)
// }

mui()
// meet patel rajk



// what if our call function have argument and
//  one more argument in the mybind_multiple

let printNNameWith_multArg = function (hometown, state, counry) {
    console.log(this.firstName + ' ' + this.lastName + " " + hometown + " " + state + " " + counry);
}

Function.prototype.myBind_multiple_otherArgs = function (...args) {
    // console.log('args:', args)
    // args: 
    // (2) [{…}, 'rohann']
    // 0: {firstName: 'meet', lastName: 'patel'}
    // length: 1
    let obj = this
    let params = args.splice(1)
    return function (...args2) {
        console.log('args2:', args2)
        // args2: (2) ['gj', 'india']
        obj.apply(args[0], [...params, ...args2])
    }
}


let fun = printNNameWith_multArg.myBind_multiple_otherArgs(nameFOr, "rohann")
console.log('fun:', fun)
// fun: ƒ (...args2) {
//     obj.apply(args[0], [...params, ...args2])
// }
fun("gj", 'india')
// meet patel rohann gj india


let fun2 = printNNameWith_multArg.myBind_multiple_otherArgs(nameFOr, "rohann", "gj")
console.log('fun:', fun2)
// fun2: ƒ (...args2) {
//     obj.apply(args[0], [...params, ...args2])
// }
fun2('india')
// meet patel rohann gj india




let ar = [1, 2, "rohan", "s", 3, 4, 5]
let rs = ar.map(e => e * e)
console.log('rs:', rs)
// rs: (7) [1, 4, NaN, NaN, 9, 16, 25]


function square(x) {
    return x * x
}

Array.prototype.Mysquare = function (logic) {
    for (let i = 0; i < this.length; i++) {
        if (typeof (this[i]) !== "string") {
            this[i] = logic(this[i])
        } else {
            this[i] = this[i]
        }
    }
    return this
}

console.log(ar.Mysquare(square));
// (7) [1, 4, 'rohan', 's', 9, 16, 25]




// currying function

let multiply = function (x, y) {
    console.log(x*y);
}
let multiply_two = multiply.bind(this, 2)
multiply_two(5)
// 10

let multiply_three = multiply.bind(this, 3)
multiply_three(5)
// 15

// this is what function curying is

let multiply_two_multiargs= multiply.bind(this, 2, 3)
multiply_two_multiargs()
// 6

// anthoer way with function clouser

let multiply_with_cluser=function (x){
    return function (y){
        console.log('x*y:', x*y)
    }
}

let fun_two=multiply_with_cluser(2)
fun_two(5)
// 10

multiply_with_cluser(2)(4)
// 8
