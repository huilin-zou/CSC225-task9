// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string) {
    var splitString=string.split("");
    var reverseArr=splitString.reverse();
    var joinArr=reverseArr.join("");
    return string;
}



// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase
// charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    var length = string.length;
 
    for (var i = 0; i < length; i++)
    {
        if (string[i] >= 'a' && string[i] <= 'z')
            document.write(
            String.fromCharCode(string.charCodeAt(i) - 32)
            );
        else if (string[i] >= 'A' && string[i] <= 'Z')
            
            document.write(
            String.fromCharCode(string.charCodeAt(i) + 32)
            );
    }
}

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array) {
    return array.map(element => element * (9/5) + 32);
}

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array) {
    return array.map(score => score >= 75);
}

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is
// fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers() {
  const cardinalengtumbers = [2, 3, 4, 5, 6];
  const germanNumbers = ["zwei", "drei", "vier", "fünf", "sechs"];
  var resultarray=[];
for (var i = 0; i < cardinalengtumbers.length; i++) {
    resultarray.push(cardinalengtumbers[i]+" is "+germanNumbers[i]);
}
return resultarray;
}

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example:
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  for(var i = 0;i<numbers.length;i++){
    var isPrime = true;
    
    for(var j = 2;j<numbers[i];j++){
    
        if(numbers[i]%j==0){
            isPrime = false;
        }
    }
    
    if(isPrime){
        if(numbers[i]!=1){
            result[k] = numbers[i];
            k++;
        }
    }
}
return result;
}

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, 
//log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes)
// "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 
//RULES I LOVE JAVASCRIPT" Console log out:

function lastFunc(){
    for(let i=1; i<=100; i++){
      if(i % 3 == 0 && i % 5 == 0){
        console.log("CSC225 RULES I LOVE JAVASCRIPT");
      }
      else if(i % 3 == 0){
        console.log("CSC225 RULES");
      }
      else if(i % 5 == 0){
        console.log("I LOVE JAVASCRIPT");
      }
      else{
        console.log(i);
      }
    }
  }
  
  lastFunc();
