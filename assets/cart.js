//json data
let data=[
    {
        "id":"1",
        "img" : "sushi",
        "nom" : "Sashimi 1",
        "prix" :"50",
    },
    {
        "id":"2",
        "img" : "sushi",
        "nom" : "Sashimi 2",
        "prix" :"30",
    },
    {
        "id":"3",
        "img" : "sushi",
        "nom" : "Sashimi 3",
        "prix" :"30",
    },
    {
        "id":"4",
        "img" : "plat1",
        "nom" : "Chirachi 1",
        "prix" :"60",
    },
    {
        "id":"5",
        "img" : "plat1",
        "nom" : "Chirachi 2",
        "prix" :"20",
    },
    {
        "id":"6",
        "img" : "plat1",
        "nom" : "Nigiri 3",
        "prix" :"50",
    },
    {
        "id":"7",
        "img" : "plat2",
        "nom" : "Nigiri 1",
        "prix" :"100",
    },{
        "id":"8",
        "img" : "plat2",
        "nom" : "Nigiri 2",
        "prix" :"150",
    },
    {
        "id":"9",
        "img" : "plat2",
        "nom" : "Nigiri 3",
        "prix" :"70",
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
let items=document.querySelectorAll(".item");
items.forEach(item=>{
    item.addEventListener('click',function(){
        //nav focus
        for(let i=0;i<items.length;i++){
            items[i].classList.remove('border');
        }
        item.classList.add('border'); 
    })
});
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
})
sashimi.addEventListener('click',function(){
    show_element(div_sashimi);
    hide_element(div_chirachi);
    hide_element(div_nigiri);
})
chirachi.addEventListener('click',function(){
    show_element(div_chirachi);
    hide_element(div_sashimi);
    hide_element(div_nigiri);
    
})
nigiri.addEventListener('click',function(){
    show_element(div_nigiri);
    hide_element(div_chirachi);
    hide_element(div_sashimi);
})

let btns=document.querySelectorAll('.btns');
let pannier=document.getElementById('pannier');
let total=document.getElementById('prixTotal');
let count=00;
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let id=btn.value;
        for(let i=0;i<data.length;i++){
            if(data[i].id==id){
                pannier.innerHTML+='<div class="achat"><img src="images/'+data[i].img+'.png" width=70 height=70><div><p>'+data[i].nom+'</p><p>'+data[i].prix+' DH</p></div><button class="remove" value='+data[i].id+'><i class="fa fa-close" style="color:red"></i></button></div>';
                count+=parseInt(data[i].prix);
                total.innerHTML=count+' DH';
            }
        }
        let remove=document.querySelectorAll('.remove');
        remove.forEach((item)=>{
            item.addEventListener('click',()=>{
                for(let i=0;i<data.length;i++){
                    if(data[i].id==item.value){
                        prix_reduit=parseInt(data[i].prix);
                        count=count-prix_reduit;
                        total.innerHTML=count+' DH';
                    }
                }
                item.parentElement.remove();    
            })
        })
    })
})

var reset=document.getElementById("reset");
reset.addEventListener("click",function(){
    pannier.innerHTML='';
    total.innerHTML='0 DH';
});

var reset=document.getElementById("submit");
reset.addEventListener("click",function(){
    pannier.innerHTML='';
    total.innerHTML='0 DH';
    alert("demmande envoyé");
});

