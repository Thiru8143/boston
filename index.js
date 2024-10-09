import { boston } from "./bos.js";
let data =boston.data
let top=[]
for(let i=0;i<data.length;i++){
    if(data[i][11]>200000){
        top.push({name:data[i][8],salary:data[i][11]})
    }     
}
console.log(top)
document.getElementById("app").innerHTML=`
<h1>Top Earner:${top[0].name} salary:${top[0].salary} </h1>`

let shape=[]
for(let i=0;i<data.length;i++){
    if(data[i][11]>200000){
        shape.push({name:data[i][8],salary:data[i][11]})
    }     
}
console.log(shape)
document.getElementById("gap").innerHTML=`
<h1>Top Earner:${shape[0].name} salary:${shape[1].salary} </h1>`




  

