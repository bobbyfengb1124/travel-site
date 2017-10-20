var $ = require('jquery');
var Person = require('./modules/Person');

alert("This is a test abcd 123.");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();


$("h1").remove();