var foo = "foo";
var fooObj = {
	foo: "baz"
};
var barObj = {
 	foo: "bad"
};

function log1 (){
  this.foo = this.foo || "bar";
  return this;
}

fooObj.log1 = log1;
fooObj.log2 = function(){
	return log1();
};

var newLog1 = fooObj.log1.bind(barObj);
var newLog2 = fooObj.log2.bind(barObj);

fooObj.log3 = newLog1;
fooObj.log4 = newLog2;

//EDIT-START

console.log(foo === "foo");
console.log(this.foo === "foo");
console.log(fooObj.log1().foo === "baz");
console.log(fooObj.log2().foo === "foo");
console.log(log1().foo === "foo");
console.log(log1.call(fooObj).foo === "baz");
console.log(new log1().foo === "bar");
console.log(newLog1().foo === "bad");
console.log(newLog2().foo === "foo");
console.log(fooObj.log3().foo === "bad");
console.log(fooObj.log4().foo === "foo");
console.log((fooObj.log1)().foo === "baz");
console.log((1,fooObj.log1)().foo === "foo");

//EDIT-END
