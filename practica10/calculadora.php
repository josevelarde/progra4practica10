<!DOCTYPE html>
<html>
<head>
        <title>Calculadora</title>
<script type="text/javascript" src="operadores.js"></script>

</head>
<body>
     
        <label>Numero 1</label><input type="text" id="n1" onkeyUp="return ValNumero(this);" value="" >
        <label>Numero 2</label><input type="text" id="n2" onkeyUp="return ValNumero(this);" ><br/>
        <label>Operaciones</label><br/>
        <input type="button" id="btn1" value="+" >
        <input type="button" id="btn2" value="-" >
        <input type="button" id="btn3" value="/" >
        <input type="button" id="btn4" value="*" ><br/>
        <label>Resultado</label><br/>
        <input type="text" value="" id="res">
        
</body>
</html>
