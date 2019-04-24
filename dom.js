let h2 = document.querySelector('h2');
let list = document.getElementsByTagName("li");
let button = document.querySelector("button");
let body = document.getElementsByTagName("body")[0];
let lis = document.getElementsByClassName("todo");

h2.style.color= "orange";


list[2].classList.add("intro");
for (let i = 0; i< list.length; i++) {
	list[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}

// CLICK EVENTS

button.addEventListener("click", function(){
	body.classList.toggle("purple");
});

// MOUSE OVER AND MOUSEOUT EVENTS
for( let i = 0; i < lis.length; i++) {
		lis[i].addEventListener("mouseover" , function(){
			this.classList.add("green");
		});

	for( let i= 0; i< lis.length; i++) {
		lis[i].addEventListener("mouseout", function(){
			this.classList.remove("green");
		});
	}
	for( let i= 0; i< lis.length; i++) {
		lis[i].addEventListener("click", function(){
			this.classList.toggle("done");
		});
	}
	}

console.log("Hi!");