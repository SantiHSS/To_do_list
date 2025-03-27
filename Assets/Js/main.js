document.writeln (prompt("Bienvenido al menú principal, por favor ingrese el número de la opción que desea ejecutar:")); //Se recibe la opción elegida y se almacena

// listatareas = []; //Almacenamos las tareas que creemos

// function tarea(){
// 	let nuevatarea = prompt("Ingrese una nueva tarea: "); //Variable que guarda la tarea que el usuario escriba
// 	listatareas.push(nuevatarea); //Agregamos la tarea al array
// 	document.writeln("Tarea agregada: " + nuevatarea); //Imprimimos la confirmación de la tarea
// }
// function mostrartareas(){
// 	document.writeln("Listas de tareas:"); //Se imprime este mensaje primero
// 	for(let i = 0; i < listatareas.length; i++){ //Utilizamos un for para recorrer el array por completo
// 		document.writeln(i + 1 + ". " + listatareas[i]); //Se imprime tarea por tarea
// 	}
// }
// function borrar(){
// 	let indicetarea = parseInt(prompt("Ingresa el número de la tarea que deseas eliminar")); //Guardamos la tarea que vamos a borrar
// 	listatareas.splice(indicetarea-1, 1); //Eliminamos la tarea indicada
// 	document.writeln("Tarea eliminada");
// 	document.writeln(listatareas); //Imprimimos la lista final
// }

// function principal(){
// 	let opcion; //Variable que almacena la opción seleccionada del menú
//  	do {
// 		document.writeln("Seleccione una opción:");"\n" //Se muestran las opciones del menú
// 		document.writeln("1. Agregar tarea");"\n"
// 		document.writeln("2. Mostrar tarea");"\n"
// 		document.writeln("3. Borrar tarea");"\n"
// 		document.writeln("0. Salir");"\n"

// 		opcion = parseInt(prompt("Bienvenido al menú principal, por favor ingrese el número de la opción que desea ejecutar:")); //Se recibe la opción elegida y se almacena

// 		switch (opcion) { //Se compara la opción elegida con cada uno de los casos para determinar cuál de los métodos se ejecuta
// 			case 1:
// 				tarea();
// 				break;

// 			case 2:
// 				mostrartareas();
// 				break;

// 			case 3:
// 				borrar();
// 				break;

// 			case 0:
// 				dicument.writeln("Saliendo del programa...");
// 				break;

// 			default:
// 				document.writeln("Opción no válida. Por favor, elige de nuevo.");
// 				break;
// 		}
// 	} while(opcion !== 0);
// }
// principal(); //Inicia el programa


// let nombre = "Juan";
// var ciudad = "Madrid";
// const EDAD = 30;
// var llovera = true;
// var nevara = false;
// let nota = null;

// let lista = [1,2,3,4,5];
// let lista2 = ["Fresa","Pera","Piña","Mango"];

// let mix = [1, "Fresa", true, null, { nombre: "Juan", edad: 30, ciudad: "Madrid" }];

// let diccionario = { nokmbre: "Juan", edad: 30, ciudad: "Madrid" };

// // comentario

// console.log("nombre:" ,nombre);
// console.log("ciudad:" ,ciudad);
// console.log("edad:" ,EDAD);
// console.log("hola Mundo");



// // operadores 

// let a = 10;
// a = 25;
// let b = 5;

// console.log("suma",a + b);
// console.log("resta",a - b);
// console.log("multiplicacion",a * b);
// console.log("division",a / b);
// console.log("modulo",a % b);

// let n = 10;

// n = n + 1;

// n += 1;

// n++;

// n *= 2;
// n /= 2;

// a = 5;
// b = 10;
// c = 15;

// if (a > b && a > c) {
//     console.log("El mayor es A", a);
// }
// else if (b > a && b > c) {
//     console.log("El mayor es B", b);
// }
// else {
//     console.log("El mayor es C", c);
// }

// //fffffffffffffffffff

// // if (a > b && a > c) { console.log("El mayor es A", a);
// // else if (b > a && b > c) console.log("El mayor es B", b);
// // else console.log("El mayor es C", c);


// a = 5;


// if (a > 18 || a % 2 == 0) {
//     console.log("o es mayor o su edad es par");
// }else {
//     console.log("es menor y ademas no es par");
// }