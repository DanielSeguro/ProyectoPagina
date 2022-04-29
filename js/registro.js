var txt_nombre, txt_apellido, txt_correo, txt_celular, txt_usuario, txt_contraseña, txt_confirmarcontra,btn_cerrar_modal;
let btn_submit;

window.onload=function(){


    txt_correo=document.getElementById("correo");
    txt_usuario=document.getElementById("usuario");
    txt_contraseña=document.getElementById("contraseña");
    btn_submit=document.getElementById("enviar");
	ventana = document.getElementById("ventana");
	btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
    btn_submit.addEventListener("click", evaluar);
	btn_cerrar_modal.addEventListener("click",cerrarVentana);
}
function evaluar(){
    
        var usuario={
            correo: txt_correo.value, 
            usuario: txt_usuario.value,
            clave: md5(txt_contraseña.value)
        }

        localStorage.setItem("usuario",JSON.stringify(usuario));
        abrirVentana();

   
        txt_correo.value="";
        txt_usuario.value="";
        txt_contraseña.value="";
    
        
    
}
function abrirVentana(){
	ventana.classList.remove("hidden");
}

function cerrarVentana(evento){
	location.href = "logueo.html";
}