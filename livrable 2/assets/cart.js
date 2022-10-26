//links
let tous=document.getElementById("sashimi");
let sashimi=document.getElementById("sashimi");
let chirachi=document.getElementById(".chirachi");
let nigiri=document.getElementById(".nigiri");

//divs
let div_tous=document.querySelector(".menu");
let div_sashimi=document.querySelector(".sashimi");
let div_chirachi=document.querySelector(".chirachi");
let div_nigiri=document.querySelector(".nigiri");


//events
tous.addEventListener('click',function(){
    div_sashimi.classList.add("hide");
    div_chirachi.classList.add("hide");
    div_nigiri.classList.add("hide");
})


sashimi.addEventListener('click',function(){
    div_chirachi.classList.add("hide");
    div_nigiri.classList.add("hide");
})
chirachi.addEventListener('click',function(){
    div_sashimi.classList.add("hide");
    div_nigiri.classList.add("hide");
})
nigiri.addEventListener('click',function(){
    div_sashimi.classList.add("hide");
    div_chirachi.classList.add("hide");
})

