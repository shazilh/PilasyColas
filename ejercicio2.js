
function Queue(){
  var nombre=[];

  this.dataStore = Array.prototype.slice.call(arguments,0);
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print=print;

  function enqueue (element){
    this.dataStore.push(element);
  }
  function dequeue(){
    return this.dataStore.shift();
  };

  function empty(){
    return this.dataStore.length == 0;
  };

  function print(element){
    return console.log(this.dataStore);
  };
}
var nombre = new Queue();
for (var i =0 ; i<2; i++){
  nombre.enqueue(prompt("Dame nombre: "));
};

console.log(nombre.peek())
nombre.print();

var apellido =  new Queue();
for (var i =0 ; i<2; i++){
  apellido.enqueue(prompt("Dame apellido: "));
}

apellido.print();

var nombres = new Queue();
for (var i =0 ; i<2; i++){
 nombres.queue(nombre.enqueue()+" "+apellido.enqueue());
}

nombres.print();
