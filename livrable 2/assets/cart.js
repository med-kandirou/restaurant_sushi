//json data
let data=[
    {
        "id":"1",
        "img" : "img1",
        "nom" : "nom1",
        "prix" :"50",
        "cat" :"1" 
    },
    {
        "img" : "img2",
        "nom" : "nom1",
        "prix" :"30",
        "cat" :"1"
    },
    {
        "img" : "img3",
        "nom" : "nom1",
        "prix" :"30",
        "cat" :"1"
    },
    {
        "img" : "plat1",
        "nom" : "nom1",
        "prix" :"30",
        "cat" :"2"
    },
    {
        "img" : "plat1",
        "nom" : "nom1",
        "prix" :"30",
        "cat" :"2"
    },
    {
        "img" : "plat1",
        "nom" : "nom1",
        "prix" :"30",
        "cat" :"2"
    },
    {
        "img" : "plat1",
        "nom" : "nom1",
        "prix" :"30",
        "cat" :"3"
    },{
        "img" : "plat1",
        "nom" : "nom1",
        "prix" :"30",
        "cat" :"3"
    },
    {
        "img" : "plat1",
        "nom" : "nom1",
        "prix" :"50",
        "cat" :"3"
    }
]
;

//fonctions
function hide_element(element){
    element.classList.remove('show');
    element.classList.add('hide');
}
function show_element(element){
    element.classList.remove('hide');
    element.classList.add('show');
}
function focus(element){
    let cat=document.querySelectorAll(".categorie");
    for(let i=0;i<cat.length;i++){
        cat[i].classList.remove('border');
    }
    element.classList.add('border');
}
//links
let tous=document.getElementById("tous");
let sashimi=document.getElementById("sashimi");
let chirachi=document.getElementById("chirachi");
let nigiri=document.getElementById("nigiri");

//divs
let div_tous=document.querySelector(".menu");
let div_sashimi=document.querySelector(".sashimi");
let div_chirachi=document.querySelector(".chirachi");
let div_nigiri=document.querySelector(".nigiri");

//events
tous.addEventListener('click',function(){
    show_element(div_sashimi);
    show_element(div_chirachi);
    show_element(div_nigiri);
    focus(tous);
})
sashimi.addEventListener('click',function(){
    show_element(div_sashimi);
    hide_element(div_chirachi);
    hide_element(div_nigiri);
    focus(sashimi);
})
chirachi.addEventListener('click',function(){
    show_element(div_chirachi);
    hide_element(div_sashimi);
    hide_element(div_nigiri);
    focus(chirachi);
})
nigiri.addEventListener('click',function(){
    show_element(div_nigiri);
    hide_element(div_chirachi);
    hide_element(div_sashimi);
    focus(nigiri);
})