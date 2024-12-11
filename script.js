'use strict'

var x = document.getElementById('btn'); 
 
 function functionScroll(){ 
    if(document.body.scrollTop > 20|| document.documentElement.scrollTop > 20){ 
        x.style.display = 'block' 
    } 
    else{ 
        x.style.display = 'none' 
    } 
 } 
     
 window.onscroll = function(){ 
    functionScroll() 
 } 
 
 function topFunc(){ 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0 
 }




function myFunc(nkar){
   var nkar1 = document.getElementById('nkar1')
   nkar1.src = nkar.src
   nkar1.parentElement.style.display = 'block'
   nkar1.style.backgroundColor = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'

}