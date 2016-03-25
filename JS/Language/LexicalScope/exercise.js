var roomNumbersEcho = [];
var roomNumbersEcho2 = [];
var roomNumbersEcho3 = [];
var baseNumber = 100;

for(var i = 0; i<5; i++){
    roomNumbersEcho.push(function(){
       return baseNumber + i;
    });
    roomNumbersEcho2.push((function(baseNumber){
        return function(){
            return baseNumber + i;
        };
    })(baseNumber));
    roomNumbersEcho3.push((function(j){
        return function(){
            return baseNumber + j;
        };
    })(i));
}

var hotel = {
    baseNumber : 500,
    echoRoomNumber: function(i){
        return baseNumber + i;
    },
    echoRoomNumber2: function(i){
        var baseNumber = this.baseNumber;
        return function(){
            return baseNumber + i;
        };
    },
    echoRoomNumber3: function(i){
        var baseNumber = this.baseNumber;
        return roomNumbersEcho[0];
    }

};

let makeAllTrue = [];

//EDIT-START

makeAllTrue.push((roomNumbersEcho[3]() + " " + roomNumbersEcho2[3]() + " "+ roomNumbersEcho3[3]()) === "change me" );

baseNumber = 200;
i = 50;

makeAllTrue.push((roomNumbersEcho[3]() + " " + roomNumbersEcho2[3]() + " "+ roomNumbersEcho3[3]()) === "change me" );

function LogIt(){
    var i = 1;
    var baseNumber = 41;
    makeAllTrue.push(roomNumbersEcho[0]() === "change me");
}

function LogIt2(){
    makeAllTrue.push(baseNumber === "change me");
}

function LogIt3(){
    makeAllTrue.push(baseNumber === "change me");
    var baseNumber = 10000;
}

LogIt();
LogIt2();
makeAllTrue.push(hotel.echoRoomNumber(10) === "change me");
makeAllTrue.push(hotel.echoRoomNumber2(10)() === "change me");
makeAllTrue.push(hotel.echoRoomNumber3(10)() === "change me");
LogIt3();
