// Bind example
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

var title = "bananas";

var obj = {
  title: "apples",
  getTitle: function(){ return this.title}
}

var getT = obj.getTitle;
getT() // returns bananas

var boundGetT = getT.bind(obj);
boundGetT() // returns "apples"


function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
    console.log(this['property'+nProp]);
  }
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.apply(myArray);

alert(myInstance.property1);                // alerts 'Hello world!'
alert(myInstance instanceof MyConstructor); // alerts 'true'
alert(myInstance.constructor);              // alerts 'MyConstructor'