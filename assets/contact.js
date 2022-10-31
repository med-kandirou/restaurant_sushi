let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let phone=document.getElementById("Phone");
let email=document.getElementById("email");
let msg=document.getElementById("msg");
submit=document.getElementById("submit");
var feed_back=document.getElementById("feed_back");
feed_back.style.display="none";
submit.addEventListener('click',function(){
    feed_back.style.display="block";
    if(nom.value=="" || prenom.value=="" || phone.value=="" || email.value=="" || msg.value==""){
        feed_back.innerText="Oops! Il faut saisir tous les champs";
        feed_back.classList.remove("valid"); 
        feed_back.classList.add("non_valide"); 
    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){
        feed_back.innerText="Format Email incorrect";
    }
    else if(/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/g.test(phone.value)==false){
        feed_back.innerText="Format numero de telephone incorrect";
    }
    else{
        feed_back.classList.remove("non_valide"); 
        feed_back.classList.add("valid"); 
        feed_back.innerText="Merci pour votre feed-back";
        nom.value="";
        prenom.value="";
        phone.value="";
        email.value="";
        msg.value="";
    }
});