var myArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var numberTen = 'ten'

function func() {
    myArray.push(numberTen);
    console.log(myArray);
}
func();

function func1() {
    myArray.splice(2, 3);
    console.log(myArray);
}
func1();


function func2() {
    myArray.slice(1, 3);
    console.log(myArray);
}
func2();