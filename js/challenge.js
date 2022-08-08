document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM CONTENT HAS LOADED")
    plusMinusClick()
    pauseClickListener()
    sumbitClick()
    heartClick()
  })

const form = ()=> document.querySelector('#comment-form')
const heartLikes= {}
const buttons = [plus,minus,heart]


function plusFunction(){
    document.querySelector('#counter').innerText++
}
function minusFunction(){
    document.querySelector('#counter').innerText--
}
function submitFunction(event){
    event.preventDefault()
    const li = document.createElement('li')
    const txt = document.querySelector('#comment-input').value
    li.textContent = txt
    list.appendChild(li)
}
function plusMinusClick(){
    document.addEventListener("click",(event)=>{
        console.log(event.target.id)
        if (event.target.id==='minus'){
            minusFunction()
        }
        else if(event.target.id==='plus'){
            plusFunction()
            
        }
      
    })
}
function heartClick(event){
    document.addEventListener('click',heartFunction)
}

function sumbitClick(){
    form().addEventListener("submit",submitFunction)

}
function heartClick(){
    let heartSelect = document.querySelector('#heart')
    heartSelect.addEventListener("click",heartFunction)
 
}
function heartFunction(){
    counterSelect = document.querySelector('#counter').textContent
    let objectSearch = forEach(heartLikes)
    const li = document.createElement('li')
    let likes = document.querySelector('.likes')
    if (counterSelect===objectSearch){
         li.innerText = `${counterSelect} has been clicked ${objectSearch} times`
         likes.appendChild(li)
    }
    else {
        heartLikes.objectSearch=parseInt(objectSearch)
        li.innerText = `${counterSelect} has been clicked ${objectSearch} times`
        likes.appendChild(li)
    }



    // select the number from the time
    // if number exists in object, increment likes
    // update li to reflect new number of likes
    //else
    // add key and set value to 1 like
    // add a new li w/ like 



     

}
const isRunning=()=>{
    return (pause.innerText==='pause')? true: false
}
function pauseClickListener(){
    pause = document.querySelector('#pause')
    pause.addEventListener('click',pauseClick)
}
function pauseClick(){
    preventDefault()
    pause = document.querySelector('#pause')
    pause.innerText = (pause.innerText==="pause") ? "resume":"pause"
    buttons.forEach((button)=> {
        button.disabled = !button.disabled
    })
}
function resumeClick(){
    preventDefault()
    pause = document.querySelector('#pause')
    pause.innerText = (buttom.disabled) ? "disabled":"heart"||"plus"||"minus"
    buttons.forEach((button)=>{
        if (pause.inertext= disabled){

        }
    })

    
   

}
const startCounter = ()=>{
    let startInterval =setInterval(()=>{
        document.querySelector('#counter').innerText++

    }
,1000)

}



