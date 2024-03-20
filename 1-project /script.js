const btnEl=document.querySelectorAll(".button")
// let hashValue="0123456789ABCDEF"
// let hash="#"
// for(let i=0;i<6;i++){
    
//     hash+=hashValue[Math.floor(Math.random()*hashValue.length)]
    
// }

console.log(hash)
btnEl.forEach((item)=>{
    let hashValue="0123456789ABCDEF"
let hash="#"
for(let i=0;i<6;i++){
    
    hash+=hashValue[Math.floor(Math.random()*hashValue.length)]
    
}
    item.setAttribute("id",hash)
    console.log(item)

})