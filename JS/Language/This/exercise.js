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

var makeAllTrue = [
	foo === "foo",
	this.foo === "foo",
	fooObj.log1().foo === "baz",
	fooObj.log2().foo === "foo",
	log1().foo === "foo",
	log1.call(fooObj).foo === "baz",
	new log1().foo === "bar",
	newLog1().foo === "bad",
	newLog2().foo === "foo",
	fooObj.log3().foo === "bad",
	fooObj.log4().foo === "foo",
	(fooObj.log1)().foo === "baz",
	(1,fooObj.log1)().foo === "foo"
];

//EDIT-END
