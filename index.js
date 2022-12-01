// basic object creation
var myuser = {
    name: 'Vinit',
    age: 20,
    hobbies: ['Sports', 'Gaming']
};
console.log(myuser.hobbies[0]);
console.log(myuser);
// function with optional parameters and predefined types
function test(name, age, date) {
    console.log("".concat(name, " is ").concat(age, " years old, today is ").concat(date.toDateString()));
}
test('Vinit', 19, new Date());
function powerfun(base, exponential) {
    return base ^ exponential;
}
console.log(powerfun(3, 2));
// obj types
function obj(myobj) {
    console.log("Object has 2 values a and b as follow as ".concat(myobj.a, " , ").concat(myobj.b));
}
obj({ a: 21, b: 43 });
