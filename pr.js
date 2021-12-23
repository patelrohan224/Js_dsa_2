let str="I have failed over and over and over again in my life and that is why I succeed."
str=str.trim().split(" ")
for (let i = 0; i < str.length; i++) {
    str[i]=str[i].toLocaleLowerCase()
    let ar=[]
    for (let j = 0; j <str[i].length; j++) {
        if(str[i][j]>="a" && str[i][j]<="z") {
                ar.push(str[i][j])
        }
    }
    str[i]=ar.join("")
}
console.log(str);
let obj={}
for (let i = 0; i < str.length; i++) {
 if(obj[str[i]]==undefined) {
   obj[str[i]]=1
 }else{
  obj[str[i]]=obj[str[i]]+1
 }
  
}
console.log(obj);
// for (let i = 0; i < obj.length; i++) {
//     console.log('obj[i]:', obj[i])
//     let rs=obj[i].trim().split(":")
//     console.log('rs:', rs)
// }
let arr=[]
let max=0
for (const key in obj) {
           arr.push([key,obj[key].toString()]) 
}
arr.sort((a,b) => b[1]-a[1])
// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = 0; j < str.length; j++) {
//     if(Number(arr[i][1])==Number(arr[i+1][1])){
//         let first,second
//         for (let k = 0; k < str.length; k++) {
//             if(arr[i][0]==str[k]){
//                 first=k
//             }
//             if(arr[i+1][0]==str[k]){
//                 second=k
//             } 
//         }
//         console.log(first,second);
//         if(first<second){
//             console.log("s");
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//         }
//     }
// }
// }
// console.log(arr);



function sanitize(word) {
  let sanitizedWord = "";
  for (let i = 0; i < word.length; i++) {
    let c = word[i].toLowerCase();
    
    if (c >= 'a' && c <= 'z') sanitizedWord += c;
  }
  
  return sanitizedWord;
}

function wordCountEngine(document) {
  
  /*
  
  Practice makes perfect. you'll only get Perfect by practice. just practice!
  
  words = [Practice, makes, "perfect."", "you'll"]
  */
  const words = document.trim().split(" ");
  
  let sanitizedWords = [];
  
  // hashmap for count
  let countByWord = {};
  let idxByWord = {};
  
  for (let i = 0; i < words.length; i++) {
    // [practice, makes, perfect]
    sanitizedWords[i] = sanitize(words[i]);
    
    /*
    
    {
      practice: 2,
      makes: 1
    }
    
    */
    if (!countByWord[sanitizedWords[i]]) {
      countByWord[sanitizedWords[i]] = 1;      
    } else {
      countByWord[sanitizedWords[i]]++;
    }

    
    /*
    
    { 
      practice: 0,
      makes: 1
    }
    
    */
    if (idxByWord[sanitizedWords[i]] === undefined) {
      idxByWord[sanitizedWords[i]] = i;
    }
  }
  /*
  
  [
    { word: practice, count: 3, idx: 0},
    { word: perfect, count: 2, idx: 1},
  ]
  
  */
  let output = [];
  
  Object.keys(countByWord).map(word => {
    const obj = {
      word: word,
      count: countByWord[word],
      idx: idxByWord[word]
    };
    
    output.push(obj);
  });
  
  output.sort((a, b) => {
    if (a.count === b.count) {
      if (a.idx < b.idx) return -1;
      return 1;
    }
    
    if (a.count > b.count) {
      return -1;
    }
    
    return 1;
  });
  
  let result = [];
  
  for (let i = 0; i < output.length; i++) {
    if (output[i].word == '') continue;
    result.push([output[i].word, output[i].count.toString()]);
  }
  
  return result;
}



/*


*/


// lower case
//remove sybole , punc etc 
// count ocurance
//  


/*



{
  practice: 1,
  makes: 1
}

[
  { word: practice, count: 3, idx: 0},
  { word: perfect, count: 2, idx: 1},
]



{
  3: [practice],
  2: [perfect],
  1: [youll,only,get,by]
}

- I still need to maintain the order of original document
- 

*/


// https://leetcode.com/problems/unique-paths/