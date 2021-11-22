let x=2003202
let b
let sum=0
while(x>0){
    b=x%10
    sum=sum*10+b
    x=parseInt(x/10)
    // x = x/10|0
}
console.log(sum);



let numbers=[1,2,4,6,2,8,9,1,10]
var firstIndex

for (i = numbers[0]; i <= numbers.length; i++) {
  firstIndex = numbers[0]
  if (numbers[i] == firstIndex) {
    console.log(firstIndex);
    break;
  }
}