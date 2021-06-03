document.getElementById("btn1").addEventListener("click",(e)=>{
   var el=document.querySelector('#id01');
   el.setAttribute("obj-model", 'obj:url(bebidas.obj);mtl:url(bebidas.mtl)');
   el.setAttribute("scale", '.10 .10 .10');
 })
 document.getElementById("btn2").addEventListener("click",(e)=>{

   var el=document.querySelector('#id01');
   el.setAttribute("obj-model", 'obj:url(florero.obj);mtl:url(florero.mtl)');
   el.setAttribute("scale", '.10 .10 .10');
})
document.getElementById("btn3").addEventListener("click",(e)=>{

   var el=document.querySelector('#id01');
   el.setAttribute("obj-model", 'obj:url(sofa.obj);mtl:url(sofa.mtl)');
   el.setAttribute("scale", '.10 .10 .10');
})
document.getElementById("btn4").addEventListener("click",(e)=>{

   var el=document.querySelector('#id01');
   el.setAttribute("obj-model", 'obj:url(REDE.obj);mtl:url(REDE.mtl)');
   el.setAttribute("scale", '.10 .10 .10');
})