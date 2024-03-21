const btnEl=document.querySelectorAll(".button")

function randomIdGenerate(){
    let hashValue="0123456789ABCDEF"
    let hash="#"
    for(let i=0;i<6;i++){
        hash+=hashValue[Math.floor(Math.random()*hashValue.length)]
    }
    return hash
}
console.log(randomIdGenerate())
function uniqueIDgenerated(){
    btnEl.forEach((item)=>{
     
        item.setAttribute("id",randomIdGenerate())
        console.log(item)
    })
   
}

console.log(uniqueIDgenerated())