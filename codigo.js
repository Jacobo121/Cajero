var cuentas = [
    { nombre: "MALI", saldo: 200, password: 'helloworld', genero: 'feminino'},
    { nombre: "GERA", saldo: 290, password: "l33t", genero:'femenino'},
    { nombre: "MAUI", saldo: 67, password: "123", genero:'masculino' },
    { nombre: "SANDRA", saldo: 300, password: "4321", genero:'femenino' },
    { nombre: "LUISA", saldo: 500, password: "1234", genero:'femenino' }
  ];

var usuario = document.getElementById("user");
var contra = document.getElementById("password");
var boton = document.getElementById("botoncito");

var pos;
var passwordCuenta = contra;
var validar = false;


boton.addEventListener("click", cajero);


  function pedirPassword(){
      passwordCuenta = passwordCuenta.value;
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
        añadirtexto("p","*Nombre de usuario incorrecto*","veri_user",'color:white;');
      }

        if (passwordCuenta === cuentas[pos].password){
          var conte = document.getElementById("contenedor");
          conte.style.cssText = 'display:none;';
          var s = document.getElementById("colorcito");
          s.style.cssText = 'display:block;';
          
          } else{
            añadirtexto("p","*Contraseña incorrecta*","veri_password",'color:white;');
      } 
      var sexo = "femenino";
      if (cuentas[pos].genero == sexo ) {
        añadirtexto("h2","Bienvenida " + cuentas[pos].nombre,"welcome",'color:white;');
      } else {
        añadirtexto("h2","Bienvenido " + cuentas[pos].nombre,"welcome",'color:white;');
      }
       
        return null;
  }
  
  añadirtexto = function(etiqueta,texto,veri,color) {
      var verificacion = document.createElement(etiqueta);
      verificacion.style.cssText = color;
      var x = document.createTextNode(texto);
      verificacion.appendChild(x);
      document.getElementById(veri).appendChild(verificacion);
  }



var ingresar = document.getElementById("ingresar_saldo");
var retirar = document.getElementById("retirar_saldo");
var consu = document.getElementById("consultar_saldo");

ingresar.addEventListener("click", cajeroDeposito);
retirar.addEventListener("click", cajeroRetiro);
consu.addEventListener("click", consultarSuSaldo);

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

  function consultarSuSaldo() {
    alert("Su saldo es de: " + cuentas[pos].saldo)
  }
  