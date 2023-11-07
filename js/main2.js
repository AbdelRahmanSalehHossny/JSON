// function hello(userName, age) {
//     console.log(`Hello ${userName} Your Age Is ${age}`);
// }
// hello("Ali", 20);
// hello("Ahmed", 23);

// function generateYears(start, end, exclude) {
//     for (let i = start; i < end; i++) {
//         if (i == exclude) {
//             continue;
//         }
//         console.log(i);
//     }
// }
// generateYears(1997, 2022, 2020);


// function calc(...number) {
//     let result = 0;
//     for(let i = 0; i < number.length; i++) {
//         result += number[i];
//     }
//     console.log(`Final Result Is ${result}`);
// }
// calc(10,20,30,40,50);



// function showinfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//     document.write(`<div>`);
//     document.write(`<h1>Welcome, ${us} </h1>`);
//     document.write(`<h2>Age : ${ag} </h2>`);
//     document.write(`<h2>Hour Rate: ${rt} </h2>`);
//     if (show === "Yes") {
//         if (sk.length > 0) {
//           document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//         } else {
//           document.write(`<p>Skills: No Skills</p>`);
//         }
//       } else {
//         document.write(`<p>Skills Is Hidden</p>`);
//       }
//     document.write(`</div>`);
// }
// showinfo("Osama", 38, 20, "No", "Html", "CSS");




// assignments 1
// function sayHello(theName, theGender) {
//     if (theGender == "Male") {  
//         console.log(`Hello Mr ${theName}`);
//     }
//     if (theGender == "Female") {  
//         console.log(`Hello miss ${theName}`);
//     }
//     if (theGender == undefined) {  
//         console.log(`Hello ${theName}`);
//     }
// }
// sayHello("Abd El Rahman", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"




// assignments 2
// function calculate(firstNum, secondNum, operation) {
//     if (secondNum === undefined) {
//         console.log("Second Number Not Found");
//     }
//     switch (operation) {
//         case 'add':
//             console.log(firstNum + secondNum);
//             break;
//         case 'subtract':
//             console.log(firstNum - secondNum);
//             break;
//         case 'multiply':
//             console.log(firstNum * secondNum);
//         default:
//             break;
//     }
//     return firstNum + secondNum;
// }

// calculate(20); // Second Number Not Found
// console.log(calculate(20, 30)); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600




// assignments 3
// function ageInTime(theAge) {

// }

// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months




// assignments 4
// function checkStatus(a, b, c) {
    
// }

// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"




// assignments 5
// function createSelectBox(startYear, endYear) {
//     document.write(`<Select>`);
//     for (let i = startYear; i <= endYear; i++) {
//         document.write(`<option>${i}</option>`);
//     }
//     document.write(`</Select>`);
// }
// createSelectBox(2000, 2021);




// assignments 6
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000









// assignments 1
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end ; i+=10) {
//     if (i == exclude) {
//         continue;
//     }
//     console.log(i);
// }



// assignments 2
// let end = 0;
// let start = 10;
// let stop = 3;

// for (let i = start; i >= end; i--) {
//     // console.log(i);
//     if (i == stop) {
//         break;
//     }
//     if (end < start) {
//         console.log(`0${i}`);
//     }
// }




// assignments 3
// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {
//     console.log(i);
//     console.log(`-- ${breaker}`);
//     console.log(`-- ${end - breaker}`);
// }




// assignments 4
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   if (index > jump) {
//     console.log(index);
//     index -= jump;
//   } else break
// }




