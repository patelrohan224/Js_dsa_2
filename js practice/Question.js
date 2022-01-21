// Intro
// eventloop
// generator function
// useEffect
// closure
// splice
// coding *4
// useState async or sync
// null
// undefined
// data types
// scope
// CSS positioning
// sorting an array of objects by Name
// & some more


// 1.Question around constructor function
// 2.Adding a specific feature to an array as method
// 3.What is EVent Delegation
// 4.Defer vs async
// 5.What is promise All
// 6.What is Forward ref
// 7.What is controlled component
// 8.What is useEffect
// 9.What is Reducer in redux

// Questions:
//  Variable hoisting?
//  Four es6 features
//  Prototype chain?
//  Closures
//  Given InputArr = [1, ‘a’, ‘b’, 5, 6], Implement InputArr.square() So that it return OutputArr = [1, ‘a’, ‘b’, 25, 36]
//  const sum = (a, b) => a + b
// sum(1, 2) // + operation
// sum(2, 3) // + operation
// sum(1, 2) // from cache

// - Implement a caching fn
// - Can change implementation of sum fn
// - Do Not polluting the global space
//  Implement a stopwatch in React JS


// 1.closure
// 2.constructor
// 3.flattening the array
// 4.find sum(1,2,3,4,......n)
// 5 prototype chain
// 6.currying and implementation
// 7. Create a prototype of map function







//  const memoizAddition = () => {
//     let cache = {};
//    return (value) => {
//     if (value in cache) {
//      console.log('Fetching from cache');
//      return cache[value];
//       // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//     }
//     else {
//      console.log('Calculating result');
//      let result = value + 20;
//      cache[value] = result;
//      return result;
//     }
//    }
//   }
//   // returned function from memoizAddition
//   const addition = memoizAddition();
//   console.log(addition(20)); //output: 40 calculated
//   console.log(addition(20)); //output: 40 cached







// what is cache

// The Cache interface provides a persistent storage 
// mechanism for Request / Response object pairs that are cached in long lived memory.
// open() to open a specific named Cache object and then call any of the Cache methods to maintain the Cache.