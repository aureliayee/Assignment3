//ASSIGNMENT 3 PART 1

//PRACTICE WITH ARRAYS

////1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.////
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Avengers"];
//
//window.console.log(movies[1]);

////2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.////
//var movies = [];
//movies[0] = "Forrest Gump";
//movies[1] = "Finding Nemo";
//movies[2] = "A Beautiful Mind";
//movies[3] = "Inside Out";
//movies[4] = "The Avengers";
//
//window.console.log(movies[0]);

////3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.////
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Avengers"];
//movies.splice(2, 5);
//movies[2] = "The Lion King";
//movies.push("A Beautiful Mind", "Inside Out", "The Avengers");
//window.console.log(movies.length);

////4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.////
//var movies = [];
//movies[0] = "Forrest Gump";
//movies[1] = "Finding Nemo";
//movies[2] = "A Beautiful Mind";
//movies[3] = "Inside Out";
//movies[4] = "The Avengers";
//delete movies[0];
//window.console.log(movies);

////5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.////
//var movies = [];
//movies[0] = "Forrest Gump";
//movies[1] = "Finding Nemo";
//movies[2] = "A Beautiful Mind";
//movies[3] = "Inside Out";
//movies[4] = "The Lion King";
//movies[5] = "The Hunger Games";
//movies[6] = "The Avengers";
//
//for (var i = 0; i < movies.length; i++) {
//    window.console.log(movies[i]);
//}

////6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.////
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Lion King", "The Hunger Games", "The Avengers"];
//for (var index in movies) {
//    window.console.log(movies[index]);
//}

////7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.///
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Lion King", "The Hunger Games", "The Avengers"];
//
//for (var index in movies) {
//    movies.sort();
//    window.console.log(movies[index]);
//}

/*8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3*////
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Lion King", "The Hunger Games", "The Avengers"];
//var leastFavMovies = ["The Shining", "The Exorcist", "It Follows"];
//
//window.console.log("Movies I like: \n\n");
//for (var index in movies) {
//    window.console.log(movies[index]);
//}
//window.console.log("\nMovies I regret watching: \n\n");
//for (var index in leastFavMovies) {
//    window.console.log(leastFavMovies[index]);
//}

////9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.////
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Lion King", "The Hunger Games", "The Avengers"];
//var leastFavMovies = ["The Shining", "The Exorcist", "It Follows"];
//movies = movies.concat(leastFavMovies);
//
//for (var index in movies) {
//    movies.sort();
//    movies.reverse();
//    window.console.log(movies[index]);
//}

////10.	Return just the last item in the array and display it within the console window.////
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Lion King", "The Hunger Games", "The Avengers"];
//var leastFavMovies = ["The Shining", "The Exorcist", "It Follows"];
//movies = movies.concat(leastFavMovies);
//window.console.log(movies.pop());

////11.	Remove the previous method and this time return just the first item in the array and display it within the console window.////
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Lion King", "The Hunger Games", "The Avengers"];
//var leastFavMovies = ["The Shining", "The Exorcist", "It Follows"];
//movies = movies.concat(leastFavMovies);
//window.console.log(movies.shift());

////12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.////
//var movies = ["Forrest Gump", "Finding Nemo", "A Beautiful Mind", "Inside Out", "The Lion King", "The Hunger Games", "The Avengers"];
//var leastFavMovies = ["The Shining", "The Exorcist", "It Follows"];
//movies = movies.concat(leastFavMovies);
//window.console.log(movies.indexOf("The Shining") + "," + movies.indexOf("The Exorcist") + "," + movies.indexOf("It Follows"));//7,8,9
//movies.splice(7, 9, "The Godfather", "Schindler's List", "The Shawshank Redemption");
//window.console.log(movies);

////13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. ////
//var employee1 = [];
//var employee2 = [];
//
//employee1["employeeid"] = 4567;
//employee1["name"] = "Bob Tucker";
//employee1["title"] = "Senior Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//employee2["employeeid"] = 4983;
//employee2["name"] = "Emily Hwang";
//employee2["title"] = "Senior Recruiter";
//employee2["department"] = "Human Resources";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//window.console.log(employees[1]["name"]);

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.///
//var employee1 = [];
//var employee2 = [];
//
//employee1["employeeid"] = 4567;
//employee1["name"] = "Bob Tucker";
//employee1["title"] = "Senior Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//employee2["employeeid"] = 4983;
//employee2["name"] = "Emily Hwang";
//employee2["title"] = "Senior Recruiter";
//employee2["department"] = "Human Resources";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];
//for (var i = 0; i < employees.length; i++) {
//    window.console.log(employees[i]["name"]);
//}

////15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.////

//var employee1 = [];
//var employee2 = [];
//var employee3 = [];
//
//employee1["employeeid"] = 4567;
//employee1["name"] = "Bob Tucker";
//employee1["title"] = "Senior Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//employee2["employeeid"] = 4983;
//employee2["name"] = "Emily Hwang";
//employee2["title"] = "Senior Recruiter";
//employee2["department"] = "Human Resources";
//employee2["isCurrent"] = true;
//employee3["employeeid"] = 9871;
//employee3["name"] = "Sally Hickson";
//employee3["title"] = "Accountant";
//employee3["department"] = "Finance";
//employee3["isCurrent"] = false;
//
//var employees = [employee1, employee2, employee3];
//for (var i = 0; i < employees.length; i++) {
//    if (employees[i]["isCurrent"] == true) {
//        window.console.log(employees[i]["name"]);
//    }
//}

/*16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.*/
//var movies = [["Shawshank Redemption", 1], ["Forrest Gump", 2], ["A Beautiful Mind", 3], ["The Godfather", 4], ["Finding Nemo", 5]];
//
//for (var i = 0; i < movies.length; i++) {
//    var movieTitle = movies[i].filter(function (item1) {
//        return typeof item1 === "string";
//    });
//    window.console.log(movieTitle.toString());
//}

////PRACTICE WITH FUNCTIONS

////1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
//var displayMessage = function (testValue) {
//    window.console.log(testValue);
//};
//displayMessage("Cat");

////2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
//function calculate(value1, value2) {
//    window.console.log(value1 % value2);
//}
//calculate(20, 3);

/*3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees: 

ZAK 
JESSICA 
MARK 
FRED 
SALLY
*/

//var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
//var showEmployee = function (value1) {
//    window.console.log("Employees:\n\n");
//    for (var index in value1) {
//         window.console.log(value1[index]);
//    }
//};
//showEmployee(employees);

//ASSIGNMENT 3 PART 1
	
/*The Rock, Paper, Scissors Game (10 points)
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.
Our code will break the game into 3 phases:
1.	User makes a choice. How will we collect the user’s choice?
2.	Computer makes a choice. How will we collect the computer’s choice?
3.	A conditional that determines who wins.
In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
1.	Begin by prompting the user for their choice.
2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
5.	What if the result ends in a tie? Figure out how to handle that as well.
6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.*/
//var userChoice = window.prompt("Please choose: rock, paper, or scissors: ");
//var choice2 = Math.random();
//if (choice2 < 0.3) {
//    var compChoice = "rock";
//} else if (choice2 < 0.6) {
//    var compChoice = "paper";
//} else {
//    var compChoice = "scissors";
//}
//
//if (userChoice === compChoice) {
//    window.alert("You have both chosen " + userChoice + ". Please play again.");
//} else if (userChoice === "rock") {
//    if (compChoice === "paper") {
//        window.alert("You have chosen Rock while the computer choose Paper..sorry, you lose.");
//    } else {
//        window.alert("You have chosen Rock while the computer choose Scissors..You win!");
//    }
//} else if (userChoice === "paper") {
//    if (compChoice === "scissor") {
//        window.alert("You have chosen Paper while the computer choose Sissors..sorry, you lose.");
//    } else {
//        window.alert("You have chosen Paper while the computer choose Rock..You win!");
//    }
//} else if (userChoice === "scissors") {
//    if (compChoice === "rock") {
//        window.alert("You have chosen Scissors while the computer choose Rock..sorry, you lose.");
//    } else {
//        window.alert("You have chosen Scissors while the computer choose Paper..You win!");
//    }
//} else {
//    window.alert("Sorry, that is not a valid entry, please enter either: rock, paper, or scissors");
//}

/*
The Basic Calculator (10 points)
In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
1.	Prompt the user for a number and store that in a variable.
2.	Prompt the user for a second number and store that in a variable.
3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
4.	Create a new named function called calculate() that accepts 3 parameters.
5.	Call the calculate function and pass in the 3 variables as parameters. 
HINT: You will need to convert the 2 numbers from strings to numbers. 
6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.*/

//var num1 = window.prompt("Please enter in a number: ");
//var num2 = window.prompt("Please enter in a 2nd number: ");
//var action = window.prompt("Would you like to add, subtract, multiply or divide these numbers?");
//function calculate(value1, value2, mathAction) {
//    var mathAction2;
//    switch (mathAction) {
//    case "add":
//        mathAction2 = Number(value1) + Number(value2);
//        break;
//    case "subtract":
//        mathAction2 = Number(value1) - Number(value2);
//        break;
//    case "multiply":
//        mathAction2 = Number(value1) * Number(value2);
//        break;
//    case "divide":
//        mathAction2 = Number(value1) / Number(value2);
//        break;
//    }
//    window.alert(mathAction2);
//}
//if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
//    calculate(num1, num2, action);
//} else {
//    window.alert("That is not a correct action. Please enter only add, substract, multiply or divide.");
//    location.reload();
//} 

/*Death by JavaScript (4 points each for 20 points total)
Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.
1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

Sample Data and Output
Example string: 'webmaster' 
Expected Output: 'abeemrstw'*/

//function reorder(str) {
//    str = window.prompt("Please enter a word: ");
//    var strArray = str.split("");
//    strArray.sort();
//    window.console.log(strArray.join(""));
//}
//reorder(); 

/*2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.

Sample Data and Output
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox'*/

//function upperFirst(str) {
//    str = window.prompt("Please write a sentence:");
//    var strArr = str.split(" ");
//    var newArr = [];
//    for (var i = 0; i < strArr.length; i++) { 
//        var FirstLetter = strArr[i].charAt(0).toUpperCase();
//        var restOfWord = strArr[i].slice(1);
//        newArr[i] = FirstLetter + restOfWord;
//        }
//    window.console.log(newArr.join(" "));
//}
//upperFirst();

/*3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

Sample Data and Output
Example string: 'The quick brown fox' 
Expected Output: 5*/

//function vowels(str) {
//    str = window.prompt("Please write a sentence:");
//    var matches = str.match(/[aeiou]/gi);
//    window.console.log(matches.length);
//}
//vowels();


/*4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.

Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA */

//function generator() {
//    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789";
//    var newArr = [];
//    for (var i = 0; i < 8; i++) {
//        var randomNum = chars.charAt(Math.floor(Math.random() * chars.length));
//        newArr[i] = randomNum;
//    }
//    window.console.log(newArr.join(""));
//}
//generator();

/*5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.

Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/

//function longestCountryName(country1, country2, country3) {
//    var length1 = country1.length, length2 = country2.length, length3 = country3.length;
//    if (Math.max(length1, length2, length3) === length1) {
//        window.console.log(country1);
//    } else if (Math.max(length1, length2, length3) === length2) {
//        window.console.log(country2);
//    } else {
//        window.console.log(country3);
//    }
//}
//longestCountryName("Australia", "China", "Germany");