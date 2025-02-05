var x = 1;
a();
b();
console.log(x); // Output: 1

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
