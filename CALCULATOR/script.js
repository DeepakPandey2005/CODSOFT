let text=document.querySelector('#text');
let keys=document.querySelectorAll('.keys');
let notch=document.querySelector('#notch');//made to pervent copy of this code
let owner=document.querySelector('#owner');
let string="";

keys.forEach((key)=>[
    key.addEventListener("click",()=>{
        if (key.innerText=='C'){
            string="";
            text.value=string;
        }
        else if(key.innerText=="="){
            string=eval(string);
            text.value=string;
        }
        else if(key.innerText=="sqr"){
           string=eval(text.value*text.value);
           
            text.value=string;
        }
        else {
            string=string+key.innerText;
            text.value=string;
        }
    })
])
notch.addEventListener('click',()=>{
    owner.style.display="block";
    setTimeout(()=>{
        owner.style.display="none";
    },3000);
   
})
// autohr -deepak 