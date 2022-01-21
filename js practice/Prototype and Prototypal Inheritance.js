// an object that is associated with every functions 
// and objects by default in JavaScript, where 
// function's prototype property is accessible and 
// modifiable and object's prototype property 
// (aka attribute) is not visible. Every function 
//  includes prototype object by default.


let arr=["rohan","meet","harsh"];

function fun(){
    //
}



// arr.__proto__
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// Array.prototype
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// arr.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// arr.__proto__.__proto__.__proto__
// null





// object.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// object.__proto__.__proto__
// null




// fun.__proto__
// ƒ () { [native code] }

// Function.prototype
// ƒ () { [native code] }

// fun.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// fun.__proto__.__proto__.__proto__
// null



// prototype chain



let object={
    name:"vv",
    city:"gj",
    getIntro: function(){
        console.log(this.name+this.city);
    }
}

let object2={
    name:"rohan"
}

object2.__proto__=object


// object.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// object2.__proto__
// {name: 'vv', city: 'gj', getIntro: ƒ}

// object2.getIntro()
// rohangj

// object.getIntro()
// vvgj

// object2.city
// 'gj'

// object2.name
// 'rohan'

Function.prototype.mybind= function() {
    console.log("own my bind");
}

function fun(){

}

// fun.mybind()
// own my bind


