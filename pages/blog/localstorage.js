function iniciarblog(){
var boton=document.getElementById('guardar');
boton.addEventListener('click', nuevoitem, false);
mostrar();
}
function nuevoitem(){
var clave=document.getElementById('claveblog').value;
var valor=document.getElementById('textoblog').value;
localStorage.setItem(clave,valor);
mostrar();
document.getElementById('claveblog').value='';
document.getElementById('textoblog').value='';
}
function mostrar(){
var cajadatos=document.getElementById('caja');
cajadatos.innerHTML='';
for(var f=0;f<localStorage.length;f++){
var clave=localStorage.key(f);
var valor=localStorage.getItem(clave);
cajadatos.innerHTML+='<div>'+clave+': '+valor+'</div>';
}
}
window.addEventListener('load', iniciarblog, false);
