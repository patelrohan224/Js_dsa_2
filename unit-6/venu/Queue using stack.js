let s1=new Array()
let s2=new Array()

function enQ(x)
{
    s1.push(x)
}
function deQ(){
    if(s2.length===0){
        if(s1.length===0){
            console.log("empty")
            return
        }
        else{
            while(s1.length!=0){
                let x=s1.pop()
                s2.push(x)
            }
        }
    }
        x=s2.pop()
        console.log(x)
        return 
}
enQ(1)
enQ(2)
deQ()
deQ()





