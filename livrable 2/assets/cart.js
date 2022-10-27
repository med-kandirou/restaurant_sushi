//json data
let data=[
    {
        "id":"1",
        "img" : "sushi",
        "nom" : "sashimi 1",
        "prix" :"50",
        "cat" :"1" 
    },
    {
        "id":"2",
        "img" : "sushi",
        "nom" : "sashimi 2",
        "prix" :"30",
        "cat" :"1"
    },
    {
        "id":"3",
        "img" : "sushi",
        "nom" : "sashimi 3",
        "prix" :"30",
        "cat" :"1"
    },
    {
        "id":"4",
        "img" : "plat1",
        "nom" : "chirachi 1 ",
        "prix" :"60",
        "cat" :"2"
    },
    {
        "id":"5",
        "img" : "plat1",
        "nom" : "chirachi 2",
        "prix" :"20",
        "cat" :"2"
    },
    {
        "id":"6",
        "img" : "plat1",
        "nom" : "chirachi 3",
        "prix" :"50",
        "cat" :"2"
    },
    {
        "id":"7",
        "img" : "plat2",
        "nom" : "chirachi 1",
        "prix" :"100",
        "cat" :"3"
    },{
        "id":"8",
        "img" : "plat2",
        "nom" : "chirachi 2",
        "prix" :"150",
        "cat" :"3"
    },
    {
        "id":"9",
        "img" : "plat2",
        "nom" : "chirachi 3",
        "prix" :"70",
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


