/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }
*/
// let a = 5;
// if (a < 2) {
//   console.log("yes");
// }
// if (a > 2) {
//   console.log("yes");
// }
// let marks = 100;
// if (marks >= 70) {
//   console.log("good");
// }
// else {
//   console.log("bad");
// }
// if (marks >= 70) {
//   console.log("good");
// }
// else {
//   console.log("bad");
// }
// let time = 13;
// let time = 30;
// if (time < 10) {
//     console.log("Good morning");
// }
// else if (time < 20) {
//     console.log("Good day");
// }
// else {
//     console.log("Good evening");
// }
/*
  Conditional (Ternary) Operator
*/
// let marks = 100;
// marks > 70 ? console.log("good") : console.log("bad");
// let theAge = 30;
// theAge < 15
//   ? console.log(15)
//   : theAge > 15 && theAge < 20
//   ? console.log("15 To 20")
//   : theAge > 20
//   ? console.log("Larger Than 60")
//   : console.log("Unknown")
/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
// let price = 0;
// console.log(`The Price Is ${price || 200}`)
// console.log(`The Price Is ${price ?? 200}`)
/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/
// let day = 1;
// switch (day) {
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
//   default:
//     console.log("Unknown Day");
//     break;
// }
/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/
// let myFriends = ["Ahmed", "Mohamed", "Sayed" , ["Marwan", "Ali"]];
// console.log(myFriends);
// console.log(`Hello ${myFriends[3][1]}`);
// myFriends[3] = "Gamal";
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);
/*
  Array Methods
  - Length
*/
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Marwan"];
// myFriends[myFriends.length - 1] = "Ali";
// console.log(myFriends);
/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
// console.log(myFriends);
// myFriends.unshift("Osama", "Nabil");
// console.log(myFriends);
// myFriends.push("Samah", "Eman");
// console.log(myFriends);
// let first = myFriends.shift();
// console.log(myFriends);
// console.log(`First Name Is ${first}`);
// last = myFriends.pop();
// console.log(myFriends);
// console.log(`Last Name Is ${last}`);
/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
// console.log(myFriends);
// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed" , 2));
// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));
// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed" , 1));
/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/
// let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];
// console.log(myFriends);
// console.log(myFriends.sort().reverse());
/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1,3));
// console.log(myFriends.slice(-4,-1));
// console.log(myFriends);
// myFriends.splice(1, 3, "Sameer", "Samara");
// console.log(myFriends);
/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];
// let allFriends = myFriends.concat(myNewFriends , schoolFriends);
// console.log(allFriends);
// console.log(allFriends.join());
// console.log(allFriends.join(" "));
// console.log(allFriends.join(""));
// console.log(allFriends.join(" # "));
// console.log(allFriends.join("|").toUpperCase());
// assignments 1
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// Method 1
// console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];
// // Method 2
// console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];
// assignments 2
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.shift();
// friends.pop();
// console.log(friends); // ["Eman", "Osama"]
// assignments 3
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// finalArr = finalArr.concat(arrOne , arrTwo).sort().reverse();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// assignments 4
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// console.log(words[2][0].slice(2,6).toUpperCase()); // ZERO
// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
// console.log(words[website.length]);
// assignments 5
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// assignments 6
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// allArrs = arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase();
// console.log(allArrs); // fxy
/*
  Loop
  - Loop On Sequences
*/
// let myFriends = [1, 2, "Osama", "Ahmed", "Sayed",  5, 6 , "Ali" , "Gamal"];
// let onlyNames = [];
// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);
// for (let i = 0; i < 5; i++) {
//   console.log(myFriends[i]);
// }
// if (typeof myFriends[0] === 'string') {
//   onlyNames.push(myFriends[0]);
// }
// if (typeof myFriends[1] === 'string') {
//   onlyNames.push(myFriends[1]);
// }
// if (typeof myFriends[2] === 'string') {
//   onlyNames.push(myFriends[2]);
// }
// if (typeof myFriends[3] === 'string') {
//   onlyNames.push(myFriends[3]);
// }
// console.log(onlyNames);
// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === 'string') {
//     onlyNames.push(myFriends[i]);
//   }
// }
// console.log(onlyNames);
/*
  Loop
  - Nested Loops
*/
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];
// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log("Colors: ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log("Models: ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${colors[k]}`);
//   }
// }
/*
  Loop Control
  - Break
  - Continue
  - Label
*/
// let products = ["Keyboard", "Mouse", 20, 30, "Pen", 10, 50, "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]);
// }
/*
  Products Practice
*/
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 5;
// document.write(`<h1>Show ${showCount} Products</h1>`);
// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3> [${i + 1}] ${products[i]} </h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p> ${colors[j]} </p>`);
//   }
//   document.write(`</div>`);
// }
// function years(start,end,exclude) {
//   for (let i = start; i <= end ; i++) {
//     if(i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }
// years(2019,2022,2019);
/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/
/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/
/*
  DOM [Create Elements]
  - createElement
  - createAttribute
  - createComment
  - createTextNode
  - appendChild
*/
/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/
/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave
  --- onload
  --- onscroll
  --- onresize
  --- onfocus
  --- onblur
  --- onsubmit
*/
/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/
/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
  --- replace
*/
/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/
/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/
// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");
// if (window.localStorage.getItem("color")) {
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }
// lis.forEach((li) => {
//   li.addEventListener("click" , (e) => {
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color",e.currentTarget.dataset.color);
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });
/*
  Destructuring 1
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/
/*
  Destructuring 2
  - Destructuring Array Advanced Examples
*/
/*
  Destructuring 3
  - Destructuring Array => Swapping Variables
*/
/*
  Destructuring 4
  - Destructuring Object
*/
/*
  Destructuring 5
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/
/*
  Destructuring 6
  - Destructuring Function Parameters
*/
/*
  Destructuring
  - Destructuring Mixed Content
*/
/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/
/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values                 يمكن تخزين أي قيم بيانات
  WeakSet => Collection Of Objects Only                 مجموعة من الكائنات فقط
  --
  Set     => Have Size Property                             لها خاصية الحجم
  WeakSet => Does Not Have Size Property                  ليس لها خاصية الحجم
  --
  Set     => Have Keys, Values, Entries                            هل لديك مفاتيح ، قيم ، إدخالات
  WeakSet => Does Not Have clear, Keys, Values And Entries   لا يحتوي على مفاتيح وقيم وإدخالات واضحة
  --
  Set     => Can Use forEach                       يمكن استخدامها لكل فرد
  WeakSet => Cannot Use forEach                   لا يمكن استخدامها لكل واحد

  Usage: Store objects and removes them once they become inaccessible
*/
/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/
/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/
/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/
/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/
/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/
/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/
/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/
/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/
/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/
/*
  Regular Expression

  Quantifiers Part 1
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one

  Quantifiers Part 2
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x

  Quantifiers Part 3
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/
/*
  Constructor Function
*/

/*
  Constructor Function
  - New Syntax
*/

/*
  Constructor Function
  - Deal With Properties And Methods
*/

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

/*
  Class
  - Static Properties And Methods
*/

/*
  Class
  - Inheritance
*/

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
//   value: 3,
// });

// myObject.c = 100;

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(delete myObject.c);

// console.log(myObject);

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

/*
  Generators
  - Delegate Generator
*/

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

/*
  Modules
  - Import And Export
*/

/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

let request = new XMLHttpRequest();
request.open("GET", "object.json");
request.send();
console.log(request);
