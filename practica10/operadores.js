function suma(){
        var n1=document.getElementById("n1").value;
        var n2=document.getElementById("n2").value;

  if(n1=='' || n2 == '') { //풲iene 0 caracteres?
      // Damos el foco al control
    alert('No puede existir un campo vacio'); //Mostramos el mensaje
    return false; //devolvemos el foco
  }

    suma = parseInt(n1) + parseInt(n2);
        document.getElementById("res").value=suma;
        
}
function resta(){
        var n1=document.getElementById("n1").value;
        var n2=document.getElementById("n2").value;
          if(n1=='' || n2 == '') { //풲iene 0 caracteres?
      // Damos el foco al control
    alert('No puede existir un campo vacio'); //Mostramos el mensaje
    return false; //devolvemos el foco
  }
   resta=parseInt(n1) - parseInt(n2);
        document.getElementById("res").value=resta;
}
function multiplicacion(){
        var n1=document.getElementById("n1").value;
        var n2=document.getElementById("n2").value;
          if(n1=='' || n2 == '') { //풲iene 0 caracteres?
      // Damos el foco al control
    alert('No puede existir un campo vacio'); //Mostramos el mensaje
    return false; //devolvemos el foco
  }
         multiplicacion=parseInt(n1) * parseInt(n2);
        document.getElementById("res").value=multiplicacion;
}
function division(){
        var n1=document.getElementById("n1").value;
        var n2=document.getElementById("n2").value;
          if(n1=='' || n2 == '') { //풲iene 0 caracteres?
      // Damos el foco al control
    alert('No puede existir un campo vacio'); //Mostramos el mensaje
    return false; //devolvemos el foco
  }else{
          if (n2=='0') {
alert('No puede dividir entre cero');

          }

        
  }
   division=parseInt(n1)/ parseInt(n2);
        document.getElementById("res").value=division;
}
function carga(){
        document.getElementById("btn1").onclick=suma;
        document.getElementById("btn2").onclick=resta;
        document.getElementById("btn3").onclick=division;
        document.getElementById("btn4").onclick=multiplicacion;
}
function Solo_Numerico(n2){
        Numer=parseInt(n2);
        if (isNaN(Numer)){
            return "";
        }
        return Numer;
    }
    function ValNumero(Control){
        Control.value=Solo_Numerico(Control.value);
    }
    
window.onload=carga;
