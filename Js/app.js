var nombre;
nombre = document.getElementById("nombre").value;
var correo; 
correo = document.getElementById("correo").value;
var contrasena;
contrasena = document.getElementById("contrasena").value;
var confirmar_contrasena;
confirmar_contrasena = document.getElementById("confirmar_contrasena").value;
    
    function validarFormulario(){


        if(nombre.length < 2){
            alert("Error: ingrese un nombre que sea mayor a dos caracteres");
        } else{
            if(correo.length < 5){
                alert("Error: correo electronico demasiado corto");
            } else{
                if(contrasena.length < 3){
                    alert("Error: contraseña muy corta")
                } else{
                    if(contrasena != confirmar_contrasena){
                        alert("Error: no coinciden las contraseñas");
                    }
                }
            }
        }
        


        return true;
    }   
    


