export const PrototypalInheritanceBlog = `
<div class="code-block as-light-grey">
What is prototype?<br>
All objects in Javascript objects have special hidden property that is either null or references other object which is called “prototype”. We can access the prototype property of the object through <strong>__proto__</strong>
</div>
<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
const obj = {};<br>
obj.__proto__;<br>
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}<br>
obj.__proto__.__proto__;<br>
// null<br>
// going up the prototype chain of object twice gives us null<br>
</div>
</code>
<br>
The object’s ability to access the properties and methods of other object through the special property called <i>prototype</i> is called <strong>prototypal inheritance</strong>.<br>
The array and the function both have access to the properties and methods of object through the prototypal chain.
<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
const arr = [];<br>
arr.__proto__;<br>
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]<br>
arr.__proto__.__proto__;<br>
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}<br>
// The array <i>arr</i> can access the <strong>toString()</strong> method of the object.<br>
arr.toString(); // “” <br>
</div>
</code>
<br>
Similarly for function:
<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
function func(){};<br>
func.__proto__;<br>
// ƒ () { [native code] }<br>
func.__proto__.__proto__;<br>
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}<br>
</div>
</code>
<br>
In both cases, when we go up the prototypal chain by doing <i>.__proto__</i> twice, we reference the properties and methods of object.
<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
let bird = {<br>
&nbsp&nbsp name: “Pigi”,<br>
&nbsp&nbsp fly: true,<br>
&nbsp&nbsp sing(){<br>
&nbsp&nbsp&nbsp&nbsp return \`I am \${this.name}, I can fly.\`;<br>
&nbsp&nbsp }<br>
};<br>
let reptile = {<br>
&nbsp&nbsp name: “Luco”,<br>
&nbsp&nbsp fly: false<br>
}<br>
let singingReptile = bird.sing.bind(reptile); <br>
// returns a function <i>sing</i> with <i>this</i> pointing to <i>reptile</i>. <br>
console.log(singingReptile());<br>
// I am Luco, I can fly.<br>
// Using prototypal inheritance, <i>reptile</i> can access all properties and methods of <i>bird</i><br>
reptile.__proto__ = dragon   <br>
//NOTE: Never use __proto__ for prototypal inheritance as it confuses the compiler and affects the performance.<br>
reptile.sing();      // I am Luco, I can fly. <br>
reptile.fly;     //false<br>
//<i>reptile</i> borrowed all the properties and methods of <i>bird</i> and overwrites with own values if the property is already present in <i>reptile</i>.<br>
bird.__proto__;       // {}<br>
bird.isPrototypeOf(reptile);       // true<br>
reptile.isPrototypeOf(bird);       // false<br>
for(let prop in bird){<br>
&nbsp&nbsp console.log(prop);<br>
}<br>
// name<br>
// fly<br>
// sing<br>
for(let prop in reptile){<br>
&nbsp&nbsp if(reptile.hasOwnProperty(prop){<br>
&nbsp&nbsp console.log(prop);<br>
}<br>
}<br>
// name<br>
// fly<br>
</div>
</code>
<br>
<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
function multiplyBy10(num){<br>
&nbsp&nbsp  return num*10;<br>
}<br>
multiplyBy10.__proto__;<br>
// ƒ () { [native code] }<br>
Function.prototype<br>
// ƒ () { [native code] }<br>
multiplyBy10.__proto__=== Function.prototype<br>
// true<br>
Object.prototype<br>
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}<br>
</div>
</code>
<br>
<div class="code-block as-light-grey">
<strong>multiplyBy10</strong> has the following properties and methods:<br>
&nbsp&nbsp -code()<br>
&nbsp&nbsp -name(optional)<br>
&nbsp&nbsp -properties<br>
&nbsp&nbsp -__proto__<br>
&nbsp&nbsp -prototype: {}<br>
Similarly <strong>Function</strong> has the following properties and methods:<br>
&nbsp&nbsp -code()<br>
&nbsp&nbsp -__proto__<br>
&nbsp&nbsp -properties<br>
&nbsp&nbsp -prototype: {} // It contains all the inbuilt methods of function such as apply, bind, call etc. Under the hood <i>multiplyBy10</i> get access to all of them through the prototypal chain. <i>multiplyBy10.__proto__ points to it.</i><br>
</div>
<br>
A better way for prototypal inheritance is using <strong>Object.create()</strong>.<br>
<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
let dog = {<br>
&nbsp&nbsp barks: true<br>
}<br>
let tommy = Object.create(dog)<br>
tommy.barks<br>
// true<br>
</div>
</code>
<br>
Exercise 1: Add new method to the Date object to get next year.<br>
<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
Date.prototype.getNextYear = function(){<br>
return this.getFullYear() + 1;<br>
}<br>
new Date(“1999-11-9”).getNextYear();      //2000<br>
</div>
</code>
<br>
Exercise 2: Modify <i>.filter()</i> method to print “ok” in place of each item.<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
Array.prototype.filter = function(){<br>
let arr = [];<br>
for(let i=0; i < this.length; i++){<br>
&nbsp&nbsp arr.push(“ok”);<br>
}<br>
return arr;<br>
}
</div>
</code>
<br>

`