// // let matrix=[
// //     [1,2,3,4,5],
// //     [5,1,2,3,4],
// //     [6,5,1,2,3]]

// //     // 00 01 02 03 04
// //     // 10 11 12 13 14
// //     // 20 21 22 23 24
// //     // 30 31 32 33 34
// //     // 40 41 42 43 44


// // // for (let i = 0; i < matrix.length; i++) {
// // //     for (let j = 0; j < matrix[0].length; j++) {
// // //     if(matrix[i]==matrix[j]){
// // //     }
// // //     }
// // // }

// // // while()
// // for (let i = 0; i < matrix[0].length-1; i++) {
// //     if(matrix[i][i]!=matrix[i+1][i+1]){
// //         console.log("s");

// //     }

// // }



// let str="I have failed over and over and over again in my life and that is why I succeed."
// // wordCountEngine(str)
// console.log('wordCountEngine(str):', wordCountEngine(str))
// function sanitize(word) {
//     let sanitizedWord = "";
//     for (let i = 0; i < word.length; i++) {
//       let c = word[i].toLowerCase();
      
//       if (c >= 'a' && c <= 'z') sanitizedWord += c;
//     }
    
//     return sanitizedWord;
//   }
  
// function wordCountEngine(document) {
  
//     /*
    
//     Practice makes perfect. you'll only get Perfect by practice. just practice!
    
//     words = [Practice, makes, "perfect."", "you'll"]
//     */
//     const words = document.trim().split(" ");
    
//     let sanitizedWords = [];
    
//     // hashmap for count
//     let countByWord = {};
//     let idxByWord = {};
    
//     for (let i = 0; i < words.length; i++) {
//       // [practice, makes, perfect]
//       sanitizedWords[i] = sanitize(words[i]);
      
//       /*
      
//       {
//         practice: 2,
//         makes: 1
//       }
      
//       */
//       if (!countByWord[sanitizedWords[i]]) {
//         countByWord[sanitizedWords[i]] = 1;      
//       } else {
//         countByWord[sanitizedWords[i]]++;
//       }
  
      
//       /*
      
//       { 
//         practice: 0,
//         makes: 1
//       }
      
//       */
//       if (idxByWord[sanitizedWords[i]] === undefined) {
//         idxByWord[sanitizedWords[i]] = i;
//       }
//     }
//     /*
    
//     [
//       { word: practice, count: 3, idx: 0},
//       { word: perfect, count: 2, idx: 1},
//     ]
    
//     */
//     let output = [];
    
//     Object.keys(countByWord).map(word => {
//       const obj = {
//         word: word,
//         count: countByWord[word],
//         idx: idxByWord[word]
//       };
      
//       output.push(obj);
//     });
    
//     output.sort((a, b) => {
//       if (a.count === b.count) {
//         if (a.idx < b.idx) return -1;
//         return 1;
//       }
      
//       if (a.count > b.count) {
//         return -1;
//       }
      
//       return 1;
//     });
    
//     let result = [];
    
//     for (let i = 0; i < output.length; i++) {
//       if (output[i].word == '') continue;
//       result.push([output[i].word, output[i].count.toString()]);
//     }
    
//     return result;
//   }
  

//   wordCountEngine(str): 
//   [
//     [ 'over', '3' ],
//     [ 'and', '3' ],
//     [ 'i', '2' ],
//     [ 'have', '1' ],
//     [ 'failed', '1' ],
//     [ 'again', '1' ],
//     [ 'in', '1' ],
//     [ 'my', '1' ],
//     [ 'life', '1' ],
//     [ 'that', '1' ],
//     [ 'is', '1' ],
//     [ 'why', '1' ],
//     [ 'succeed', '1' ]
//   ]




// let target=9
// let array=[5,10,6,4,0,11,-1,5]
//   //let array=[-1,0,4,5,5,6,10,11]
// // [5,4]=9
// // [10,-1]=9
// // [4,5]=9



// let =123 
// ans =321



// guys can we contunie tomrw if you guys want
// no problem
// yup
// oh in mornign the exam will be taken for placemt 
// will be taken on 26 dec or 28 dec but
// rutvi ktell on yestedaya wedneday
// mac 



bye meet tmrw
no need 
if you want
then we connct and 




