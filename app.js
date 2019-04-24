// Problem 1 : Print day
/*let userChoice = prompt("Enter a num to to return day of the week");
function printDay(userChoice) {
    
    var dates = {

      1:"Sunday",
      2:"Monday",
      3:"Tuesday",
      4:"Wednesday",
      5:"Thursday",
      6:"Friday",
      7:"Saturday"

    };
   return dates[userChoice];
}

alert(printDay(userChoice));*/


// Problem 2 : Last element in an array
function lastElement(array) {
   return array[array.length-1];
  }
let array = [3,4,5,6];
console.log(lastElement(array));
console.log(array);


// Problem 3 : Single letter count

function singleLetterCount( str, char) {
	var finalCount = 0;
	for(let i= 0 ; i < str.length; i++ ){
		if (str[i].toLowerCase() === char.toLowerCase()) {
			finalCount ++;
		}
	}
	return finalCount;
}

console.log(singleLetterCount( 'amazing', 'A'));

// Problem 4 : Unique in Order
function uniqueInOrder(iterable) {
    let arrayWithoutDuplicates = Array.from(new Set(iterable));
   return arrayWithoutDuplicates;
 }
uniqueInOrder("AABBCC");

