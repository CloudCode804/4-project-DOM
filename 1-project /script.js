const btnEl=document.querySelectorAll(".button")
const body=document.querySelector("body")
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

        const setID = randomIdGenerate()
        item.setAttribute("id",setID)
        item.style.backgroundColor = setID;
        item.addEventListener("click",function(e){
        console.log("clicked"+setID)
     
            const bgColor = e.target.style.backgroundColor;
            body.style.backgroundColor = bgColor;
       })
        
    })
    
   
}
uniqueIDgenerated()
