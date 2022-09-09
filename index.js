let inbut= document.querySelector('#inb');
console.log(inbut);
let val=document.querySelectorAll('#numbers');
console.log(val);
let egal=document.querySelector('#egal');
function display(num){
        inbut.textContent+=num;

};
function calculate(){
    try{
    inbut.textContent=eval(inbut.textContent)
    }
    catch{
        Error('invalid');
    }
}

let multi= document.querySelector('#mul');
multi.addEventListener('click',function(){
    if((inbut.textContent==="" )&& (inbut.textContent.length===0)){
        console.log('inbut valid');
    }else{
        inbut.textContent+='*'
    }
   
});
let plus=document.querySelector('#plu');
plus.addEventListener('click',function(){
    if((inbut.textContent==="" )&& (inbut.textContent.length===0)){
        console.log('inbut valid');
    }else{
        inbut.textContent+='+';
    }
   
});
let mains= document.querySelector('#mains');
mains.addEventListener('click',function(){
    if((inbut.textContent==="" )&& (inbut.textContent.length===0)){
        console.log('inbut valid');
    }else{
        inbut.textContent+='-';
    }
   
});

let divis= document.querySelector('#divi');
divis.addEventListener('click',function(){
    if((inbut.textContent==="" )&& (inbut.textContent.length===0)){
        console.log('inbut valid');
    }else{
        inbut.textContent+='/'
    }
   
});

let mod= document.querySelector('#mod');
mod.addEventListener('click',function(){
    if((inbut.textContent==="" )&& (inbut.textContent.length===0)){
        console.log('inbut valid');
    }else{
        inbut.textContent+='%';
    }
   
});

let clear= document.querySelector('#cl');
clear.addEventListener('click',function(){
    inbut.textContent="";
});
let invers= document.querySelector('#inv');

let del=document.getElementById('del');
console.log(del);
del.addEventListener('click', ()=> inbut.textContent=inbut.textContent.slice(0,-1))

let AllOpe=document.querySelectorAll('.ope');
/*AllOpe.forEach(function(el){
   
    el.addEventListener('click',function(){
        console.log(el);
        if((inbut.textContent==="" )&& (inbut.textContent.length===0)){
            console.log('inbut valid');
        }else{
          inbut.textContent+=el.outerText;
        }
    }
    )
})
*/

