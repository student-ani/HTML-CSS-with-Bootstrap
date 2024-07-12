//---------***Datatypes***--------
//1- Premetive(6)
//A. Numbers
var num1 = 23
var num2 = 45
console.log(num1 + num2);

//B. boolean
var a = true
var b = false
console.log(a);

//C. undefined
var und;
console.log(und);

//D. null
var n = null;
console.log(n);

//E. Strings
var str1 = "Hello ";
var str2 = "World";
console.log(str1 + str2);

//F. Symbol



//2- Refrence
//A. Objects
var marks = {
    deepak : 41,
    rahul : 42,
    sachin : 43
}
console.log(marks);

//B. Arrays
var arr =[2, 5, 8, 3, 15,"payal"]
console.log(arr[5])
console.error(arr[1])


//--------***Operators***-------
//arithmatic
var a = 10;
var b = 20;
console.log("The value is: ", a+b);
 b += 2;
 console.log("after updation: ",b)

// Comparision
var x = 22;
var y = 33;
console.log(x>y)
console.log(x<y)

//logical(&&)
console.log(true && false)

//logical(||)
console.log(true || false)

//logical(!)
console.log(!true)

//Conditional
var age=4
if(age<8){
    console.log('You are a kid');
}else{
    console.log('You are gay')
}

let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

//DOM manipulation

let elem = document.getElementById('click');
console.log(elem);
let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
elemClass.style.background = "green";

