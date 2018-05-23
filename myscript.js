var firstName = prompt("First name please: ");
var lastName = prompt("Last name please: ");
var age = prompt("Age please: ");
var height = prompt("Height please: ")
var petName = prompt("What is your pet name? ")

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if (firstName[0]=== lastName[0]){
	nameCond = true;
}else {
	nameCond = false;
}

if (age > 20 && age < 30){
	ageCond = true;
}else { 
ageCond = false
}

if (height >= 170){ 
heightCond = true;
}else{
	heightCond = false;
}

if (petName[petName.length-1] === "y"){
	petCond = true;
}else{
	petCond = false;
}

if (nameCond && ageCond && heightCond && petCond){
	console.log("Welcome, spy!");
} else{
	console.log("Nothing to see here.")
}