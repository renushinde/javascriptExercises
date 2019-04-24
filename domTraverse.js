//var container = document.getElementById("container");
console.log(container.childNodes); // // this contains all of the nodes (including text nodes) that are children
container.childNodes.length; // 11
console.log(container.children); // this contains all of the elements that are children of the element we have selected
container.children.length; // 5

var link = document.querySelector("a");
link.parentElement; // <body id="container">...</body>
link.previousElementSibling; // <div class="hello">Hello Everyone!</div>
link.previousSibling; // text node
link.nextSibling; // text node
link.nextElementSibling; // <button>​Click me!​</button>​


// Creating and Apending the element
var button = document.createElement("button");
button.innerText = "I am a button created with JavaScript!";

var container = document.getElementById("container");
container.appendChild(button);

// ANSWERS

//Select the section with an id of container without using querySelector.
 let container = document.getElementById("container");
//Select the section with an id of container using querySelector.
let container = document.querySelector("#container");
//Select all of the list items with a class of "second".
let secondLis = document.getElementsByClassName("second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
let olThird = document.querySelector("ol .third");

//Give the section with an id of container the text "Hello!".
 container.innerText= "HELLO";

//Add the class main to the div with a class of footer.
let footer = document.getElementsByClassName("footer");
footer.classList.add("main");

//Remove the class main on the div with a class of footer.
footer.classList.remove("main");

//Create a new li element.
let newLi = document.createElement("li");

//Give the li the text "four".
newLi.innerText = four;

//Append the li to the ul element.
var list = document.querySelector("ul");
list.appendChild("newLi");
//Loop over all of the lis inside the ol tag and give them a background color of "green".
let ol = document.getElementsByTagName("ol li");
for (var i = 0; i < ol.length; i++) {
	ol[i].style.backgroundColor ="green";
}

//Remove the div with a class of footer.

footer.classList.remove("footer");