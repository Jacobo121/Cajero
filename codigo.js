var cuentas = [
    { nombre: "MALI", saldo: 200, password: 'helloworld' },
    { nombre: "GERA", saldo: 290, password: "l33t" },
    { nombre: "MAUI", saldo: 67, password: "123" },
    { nombre: "SANDRA", saldo: 300, password: '4321' }
  ];

var usuario = document.getElementById("user");
var contra = document.getElementById("password");
var boton = document.getElementById("botoncito");
var pos;
var passwordCuenta = contra;
var validar = false;


boton.addEventListener("click", cajero);


  function pedirPassword(){
      passwordCuenta = password.value;
      return passwordCuenta;
  }


  function cajero() {
    var nombreCuenta = usuario.value.toUpperCase();
      for(i=0; i<cuentas.length; i++){
        if (nombreCuenta === cuentas[i].nombre){
          validar = true;
          pos = i;
        } 
      }
      
      if (validar == true) {
        passwordCuenta = pedirPassword();
      } else {
        añadirtexto("p","*Nombre de usuario incorrecto*","veri_user");
      }

        if (passwordCuenta === cuentas[pos].password){
          añadirtexto("h1","Bienvenido " + cuentas[pos].nombre,"welcome");
          añadirtexto("saldo","Su saldo es de: " + cuentas[pos].saldo,"saldo");
          } else{
            añadirtexto("p","*Contraseña incorrecta*","veri_password");
      }
        return null;
  }
  
  añadirtexto = function(etiqueta,texto,veri) {
      var verificacion = document.createElement(etiqueta);
      verificacion.style.cssText = 'color:red;';
      var x = document.createTextNode(texto);
      verificacion.appendChild(x);
      document.getElementById(veri).appendChild(verificacion);
  }



  function cajeroRetiro(){
    valorRetiro = prompt("Ingrese valor a retirar: ");
    //Valida que existan fondos suficiente
    if(valorRetiro <= cuentas[pos].saldo ){
      var saldo = cuentas[pos].saldo - valorRetiro;
      //Evalúa regla de negocio
      if(saldo >= 10){
        cuentas[pos].saldo = saldo;
        console.log("Retiro exitoso, nuevo saldo:" + cuentas[pos].saldo);
      }else{
        console.log("Fondos insuficientes");
      }  
    }else{
      console.log("Fondos insuficientes");
    }
    return null;
  }

  function cajeroDeposito(){
    var valorDeposito = prompt("Ingrese valor del depósito: ");
    var saldo = parseInt(valorDeposito) + cuentas[pos].saldo;
    //Valida regla de negocio para el depósito.
    if(saldo <= 990){
        cuentas[pos].saldo = saldo;
        console.log("Deósito exitoso, nuevo saldo:" + cuentas[pos].saldo);
      }else{
        console.log("Supera límite permitido");
      }  
    return null;
  }

