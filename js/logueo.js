var txt_usuario, txt_contraseña, boton,btn_cerrar_modal;
window.onload=function(){
    txt_usuario=document.getElementById("usuario");
    txt_contraseña=document.getElementById("contraseña");
    boton=document.getElementById("btn");
    boton.addEventListener("click", procesar);
}
function procesar(){
    var str_usuario, usuario; 
    str_usuario=localStorage.getItem("usuario");
    usuario=JSON.parse(str_usuario);
    if(txt_usuario.value===usuario.usuario && txt_contraseña.value===usuario.clave){
        console.log("logueado");
        location.href="index.html";
    }
}