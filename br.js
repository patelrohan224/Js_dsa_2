
let num=153
let result=0
let temp
while(num>0){
    temp=num%10
    result=result*10+temp
    num=parseInt(num/10)
}
console.log(result);
