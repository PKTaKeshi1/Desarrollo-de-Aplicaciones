<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tipos de Datos</title>
  <script src="tipos-datos.js"></script>
</head>
<body>
  <h1>Uso y Conversión de Tipos de Datos</h1>
</body>
</html>

----------------------------------------------------------------
  // Cambio de tipo dinámico
let answer = 42;
console.log(typeof answer, answer);

answer = "Gracias por todo el pescado";
console.log(typeof answer, answer);

// parseInt ejemplos
console.log(parseInt("F", 16));      
console.log(parseInt("1111", 2));    
console.log(parseInt("15", 10));     
console.log(parseInt("Hello", 8));   

// Uso de toString()
let howMany = 10;
console.log("howMany:", howMany.toString());
console.log("45:", (45).toString());
let x = 7;
console.log("x en binario:", x.toString(2));
