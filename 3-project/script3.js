const clock=document.querySelector("#clock")
function updateTime(){
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
   
    clock.innerHTML=timeString
}

// console.log(timeString)
setInterval(updateTime,1000)