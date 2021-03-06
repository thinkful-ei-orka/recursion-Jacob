// // 1. Counting Sheep

// // Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// function countingSheep(a) {

//     if(a === 0 ) {
//         return 'all sheep jumped over the fence';
//     }
//     else {
  
//         return `${a}: Another sheep jumps over the fence \n` + countingSheep( a - 1 );
  
//     }
  
// }
  
// console.log('1. counting sheep:  ', countingSheep(3));


// // 2. Power Calculator
// // Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)


// function powerCalculator(base, exponent) {

//     if(exponent < 0 ) {
//         return 'exponent should be >= 0';
//     }
//     else if (exponent === 1 ) {
//         return base;
//     }
//     else {
//         return base * powerCalculator(base, exponent - 1);
//     }
// }

// console.log('2. powerCalculator:  ', powerCalculator(10,2));
// console.log('2. powerCalculator:  ', powerCalculator(10,-2));


// // 3. Reverse String

// // Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.


// function reverseString(str) {
//     if(str.length === 1) {
//         return str;
//     }
//     else {
//         return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
//     }
// }

// console.log('3. reverse string:  ', reverseString('string'));


// // 4. nth Triangular Number

// // Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.


// function nthTriangularNumber (num) {
//     if(num === 1 ) {
//         return 1;
//     }
//     else {
//         return num + nthTriangularNumber(num - 1);
//     }
// }

// console.log('4. nth Triangular number:  ', nthTriangularNumber(3));


// // 5. String Splitter
// // Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.


// function stringSplitter(string, separator) {
//     if (string.indexOf(separator) === -1) {
//         return [string];
//     }
//     const wordIndex = string.indexOf(separator);
//     const word = string.slice(0, wordIndex);
//     const restString = string.slice(wordIndex + separator.length);
//     return [word, ...stringSplitter(restString, separator)];
// }

// console.log('5. stringSplitter:  ', stringSplitter('02/02/2020', '/'));


// // 6. Fibonacci

// // Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// function Fibonacci (num) {
//     if(num === 1) {
//         return 1;
//     }
//     if(num === 0) {
//         return 0;
//     }
//     else {
//         return Fibonacci(num - 1) + Fibonacci(num - 2);
//     }
// }

// console.log('6. fibonacci:  ', Fibonacci(3));



// // 7. Factorial

// // Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// function Factorial(n) {
//     if(n === 1) {
//         return 1;
//     }
//     return n * Factorial(n - 1);
// }

// console.log('7. factorial:  ', Factorial(5));


// 8. Find a way out of the maze

// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

function mazeSolution(maze, y = 0, x = 0) {
    console.log('look here', y, x);

    if(maze[y][x] === 'e') {
        return '';
    }
    else if (maze[y+1][x] !== null && (maze[y+1][x] === ' ' || maze[y+1][x] === 'e'  && maze[y+1][x] !== '-')) {
        maze[y][x] = '-';
        return "D" + mazeSolution(maze, y + 1, x);
    }
    else if(maze[y][x+1] === ' ' || maze[y][x+1] === 'e'   && maze[y][x+1] !== '-') {
        maze[y][x] = '-';
        return "R" + mazeSolution(maze, y, x + 1);
    }
    else if (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e'  && maze[y][x-1] !== '-') {
        maze[y][x] = '-';
        return "L" + mazeSolution(maze, y, x - 1);
    }
    else if(maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e' && maze[y - 1][x] !== '-') {
        maze[y][x] = '-';
        return "U" + mazeSolution(maze, y - 1, x);
    }

}



let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeSolution(maze));

// 9. Find ALL the ways out of the maze

// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?


// 10. Anagrams

// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

// 11. Organization Chart

// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

// 12. Binary Representation
// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

// function binaryRepresentation(num) {
//     if(num === 0) {
//         return 0;
//     }
//     else if(num === 1) {
//         return 1;
//     }
//     else {
//         return `${binaryRepresentation(parseInt(num / 2))} ${num % 2}`;
//     }
// }

// console.log('12. binary:  ', binaryRepresentation(12));