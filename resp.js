var b = document.querySelector('.burger')
var n = document.querySelector('.nav')
var nl =document.querySelector('.nav-list')
var l1 =document.querySelector('#line1')
var l2 =document.querySelector('#line2')
var l3 =document.querySelector('#line3')


b.addEventListener('click',()=>{
    nl.classList.toggle('v-class')
    n.classList.toggle('h-nav')
    l1.classList.toggle("bend1");
    l2.classList.toggle("bend2");
    l3.classList.toggle("bend3");

});