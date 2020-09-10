var x = "Hello World!";

var message = "in global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message); 
    b();
}
function b () {
    console.log("b: message = " + message);
}
a();


var mensaje = "EN GLOBAL";
console.log("global: mensaje = " + mensaje);

var a = function () {
    var mensaje = "ADENTRO DE A";
    console.log("a: mensaje = " + mensaje); 
    
    function b () {
    console.log("b: mensaje = " + mensaje);
}
b();
}
a();
