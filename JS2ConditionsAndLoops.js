/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Conditions and Loops Lab
   FE JS2 Lab
*/

/** Key Terms:
 *  Boolean Operators
 *  Loop
 *   - for
 *   - for of
 *   - while
 *   - do while
 *  
 *  Conditional / Control Flow Statement
 *  "Equal To": == 
 *  "Strictly Equals": ===   
 *  Increment ++
 *  Decrement --
 *  Index
 *  Modulus
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1: Driving the speed limit.. ? \n`);

/**
 * Step 1: Create two variables: speedLimit and mySpeed
 * Step 2: Set their values to numbers between 1 and 100.
 * 
 * Step 3: Conditionals:
 *             a. Using a conditional, determine if mySpeed is greater than the speedLimit
 *             b. If true, print "Slow Down! Mom is mad!" to the console
 *             c. If mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
 *             d. If mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */
let speedLimit = 75;
let mySpeed = 85;

if (mySpeed > speedLimit) {
   console.log('Slow Down! Mom is mad!');
} else if (mySpeed === speedLimit) {
   console.log('Everyone is happy!');
} else {
   console.log('Speed up! Dad is mad!');
}


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2: Is it time to wake up for work? \n`);

/**
 * Step 1: Create two variables, alarmSet and weekDay
 * Step 2: Set them to a boolean value
 * 
 * Step 3: Create a conditional... // if (true) {do thing} 
 *         to do something if the alarm is or isnt set & it is or isnt a week day. 
 *
 *         a. If alarm is set and it is a week day print "Sound Alarm! Time for work!" to the console
 *         b. Otherwise, print "I can sleep in!" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */
let alarmSet = true;
let weekDay = false;

if (alarmSet && weekDay) {
   console.log('Sound Alarm! Time for work!');
} else {
   console.log('I can sleep in!');
}
/* Don't need to set alarmSet and weekDay to true in if statement b/c it is inherent they both must be true when using &&.
Original: if (alarmSet === true && weekDay === true)
Change: removed === and true values to clean up code
*/

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 3: Username & Password \n`);

/**
 * Step 1: Create two variables, username and password.
 * Step 2: Create a conditional/control flow statement:
 *         - if the username is "Tommy123" and the password is "12345"
 *	          or the username is "Timmy456" and the password is "6789", 
 *		       print "Admin Login Successful" to the console
 *
 *	        - otherwise, print "Admin Access Denied"
 * 
 * ↓ YOUR CODE HERE ↓ */
 let username = 'xxx';
 let password = 'xxx';
 
 if ((username === "Tommy123" && password === "12345") || (username ==="Timmy456" && password === "6789")) {
    console.log('Admin Login Successful');
 } else {
    console.log('Admin Access Denied');
 }
/* Might not need to wrap each && arguement in parentheses, as it appeared to work correctly in walkthrough, but I kept the wrap b/c it helps readability. */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 4: Student Class \n`);

/**
 * Step 1: Create a variable called studentClass. Don't give it a value yet.
 *         There is a variable called studentGrade. It could be any number from 0-12.
 * 
 * Step 2: Write code that will change the value of studentClass based on studentGrade
 *          - 0-6 will be Elementary
 *          - 7-8 will be Middle
 *          - 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior 
 *          
 *         Any other value should return "Error" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */
let studentGrade = 12;
let studentClass;

if (studentGrade >= 0 && studentGrade <= 6) {
   studentClass = 'Elementary';
} else if (studentGrade === 7 || studentGrade === 8) {
   studentClass = 'Middle';
} else if (studentGrade === 9) {
   studentClass = 'Freshman';
} else if (studentGrade === 10) {
   studentClass = 'Sophmore';
} else if (studentGrade === 11) {
   studentClass = 'Junior';
} else if (studentGrade === 12) {
   studentClass = 'Senior';
} else {
   console.log('Error');
}
console.log(studentClass);

/* Changed if and else if statements to be more specific and use && (and) and || (or) statements.
Original:
if (studentGrade <= 6) {
   studentClass = 'Elementary';
} else if (studentGrade <= 8) {
   studentClass = 'Middle';
} else if (studentGrade === 9) {
   studentClass = 'Freshman';
} else if (studentGrade === 10) {
   studentClass = 'Sophmore';
} else if (studentGrade === 11) {
   studentClass = 'Junior';
} else if (studentGrade === 12) {
   studentClass = 'Senior';
} else {
   console.log('Error');

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 5: Loops! \n`);

/**
 * Step 1: Write a "for loop" that will iterate backwards and print 10 to -10.
 * Step 2: Write a "do/while" loop that will print 1 through 50.
 * Step 3: Modify the previous "do/while" loop.
 *         Print the iterator if the remainder (% // modulus) is 0 when divisible by 4.
 * 
 * ↓ YOUR CODE HERE ↓ */

/* let i = 10 // start place
   i > -11 //stop place
   i-- // incrementor
*/

for (let i = 10; i > -11; i--) {
   console.log(i);
}

/* Original Step 2
let i = 1;
do {
   console.log(i);
   i++;
} while (i <= 50);

Modified this code so I could use the "do/while" loop in the next step correctly.
*/

let i = 1;
do {
   if (i % 4 === 0) {
   console.log(i);
   }
   i++;
} while (i <= 50);
/* Changed code back to "do/while" loop instead of the "for" loop that I used to make it work. Watched walkthrough to find out how to just modify original "do/while" loop to get same outcome. */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 6: Debugging an infinite loop! \n`);

/**
 * Step 1: Read through the written code below.
 *         Figure out why it's causing an infinite loop & fix the syntax.
 * Step 2: Uncomment out to test
 * 
 * ↓ YOUR CODE HERE ↓ */

   /*    
   for (let i = 11; i > 10; i++) { 
      console.log(i);   
   } 
  */


   for (let i = 0; i < 10; i++) { 
      console.log(i);   
   }
   /* 
   Original: I switched the greater than (>) sign in the 2nd arguement to be less than (<), so the code won't run because i is already more than 10 at the start. - correct
   After walkthrough: changed i to 0 and kept the changed < sign to get the code to at least do something. - correct
   There are multiple ways to "fix" this, the point is to understand why it's an infinite loop and provide at least one way to fix.
   */

console.log('-----------Finished------------')
