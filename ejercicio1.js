function stack(){
  var  nombre = [];//se declara el arreglo nombre

  this.push = function(elemento){//en la propiedad this se obtendrá de la función elemento
  nombre.push(elemento);                                //        y se metera en el arreglo nombre el elemento
};  
  this.pop = function(){
    return nombre.pop();
  };
  this.peek = function(){
    return nombre[nombre.length-1];
  };
  this.print = function(){
    console.log(nombre.toString());
  };

}
// Aquí se declara la primera pila para nombre
var nombre= new Stack(); //la nueva pila se almacenará en la variable nombre
for (var i=0; i<2; i++){//un for recorrerá ese arreglo de pila
  nombre.push(prompt("Dame nombre: "));//y la información se obtendra mediante un prompt y se meterá al arreglo nombre
};
console.log(nombre.peek())//se imprime en pantalla el nombre
nombre.print();

// Aquí se declara la segunda pila para apellido
var apellido= new Stack(); //la nueva pila se almacenará en la variable apellido
for (var i=0; i<2; i++){//un for recorrerá ese arreglo de pila
  apellido.push(prompt("Dame el apellido: "));//y la información se obtendra mediante un prompt y se meterá al arreglo apellido
};
//console.log(nombre.peek())//se imprime en pantalla el apellido
apellido.print();

// Aquí se declara la segunda pila para apellido
var nombreCompleto= new Stack(); //la nueva pila se almacenará en la variable nombreCompleto
for (var i=0; i<2; i++){//un for recorrerá ese arreglo de pila
  nombreCompleto.push(nombre.pop()+" "+apellido.pop());//y la información se obtendra mediante un prompt y se meterá al arreglo nombreCompleto
};
//console.log(nombre.peek())//se imprime en pantalla el nombre
nombreCompleto.print();//se imprime en pantalla el primer elemento del arreglo nombre ingresado con el primer elemento del arreglo apellido ingresado y así hasta el final
//primeros en entrar, primeros en salir.
