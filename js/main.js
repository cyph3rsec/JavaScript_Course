function button() {
    document.getElementById("thanks").innerHTML = "Thanks for clicking";
    //console.log(docuemnt.getElementById("thanks"));
    //alert("Thanks for clicking here");
}

function redirect() {
    window.open("https://www.techbrainsistemas.com.br/"); //open on new window/ new tab
    //window.location.href = "https://www.techbrainsistemas.com.br"; //open on the same tab
}

function mouseover() {
    document.getElementById("mouseover").innerHTML = "Thanks for using the mouse";
    alert("Change Text");
}

function load() {
    alert("Full Page Loaded!");
}


//--------------------------------------------------------------------------------------------------------//
//WORKING WITH VARIABLES
//var namee = "Romulo Willian Sidooski";
//var age = 32;
//var age2 = 37;
//var sent = "Japan is the best team in the world";

//console.log(namee);
//console.log(age);
//console.log(sent.replace("Japan", "Brazil"));
//alert(sent.replace("Japan", "Brazil"));


// alert(namee + " has " + age + " years.");
//alert(age + age2);

//var n1 = 20;
//var n2 = 3;

//console.log(n1 * n2);

//--------------------------------------------------------------------------------------------------------//
//Working with arrays

//var lista = ["Apple", "Watermelon", "Avocato", "Orange"];
//lista.push("Grape");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" "));

//--------------------------------------------------------------------------------------------------------//

//WORKING WITH DICTIONARY

//var fruits = [{ namee: "apple", color: "red" }]
//console.log(fruits);

//--------------------------------------------------------------------------------------------------------//

/*
WORKING WITH CONDITIONALS

var age = prompt("Your age: ");
if (age >= 18) {
    alert("you are older than 18");
} else {
    alert("You are younger than 18")
};
*/

//--------------------------------------------------------------------------------------------------------//
/*WORKING WITH WHILE / REPETITION STRUCTURE

var count = 0;
while (count <= 10) {
    console.log(count);
    alert(count);
    count++;
};

*/
//--------------------------------------------------------------------------------------------------------//

//WORKING WITH FOR
/*var count;
for (count = 0; count <= 10; count++) {
    alert(count);
};
*/
//--------------------------------------------------------------------------------------------------------//

//WORKING WITH DATES
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

//--------------------------------------------------------------------------------------------------------//
//WORKING WITH FUNCTIONS

/*
function add(n1, n2) {
    return n1 + n2;
}

function agee(age) {
    var validar;
    if (age >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var age = prompt("What's your age? ");
console.log(agee(age));

//alert(add(5, 10));

*/
//--------------------------------------------------------------------------------------------------------//