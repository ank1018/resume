export const ClosureBlog = `
<div class="code-block as-light-grey">
What is closure?<br>
When a function is returned from another function, the inner function which is called closure has access to the scope of the enclosing function even when the enclosing function is popped off the call stack.<br>
</div><br>
The closure has access to variables in three separate scopes:<br>
1. Its own scope<br>
2. The scope of the outer function.<br>
3. Global scope.<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
let superHeroOne = “superman”;<br>
function heroes() {<br>
&nbsp&nbsp let superHeroTwo = “batman”;<br>
&nbsp&nbsp\treturn function superHeroes() {<br>
&nbsp&nbsp\tlet superHeroThree = “wonderwoman”;<br>
&nbsp&nbsp return function power() {<br>
&nbsp&nbsp&nbsp&nbsp console.log(\`\${superHeroOne} + is more powerful than + \${superHeroThree} + who is more powerful than + \${superHeroTwo}\`);<br>
&nbsp&nbsp&nbsp&nbsp }<br>
&nbsp&nbsp }<br>
}<br>
heroes()()();  //superman is more powerful than wonderwoman who is more powerful than batman
</div>
</code>
<br>
Javascript already knows which variable it needs.<br>
<div class="code-block as-light-grey">
Why closure works?<br>
Where we write the function matters (lexical environment) not where we call the function.
</div>
<br>
The closure also has access to:<br>
1. Its own parameters.<br>
2. Parameters of the outer functions.<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
addThreeNumber(num1) {<br>
&nbsp&nbsp return function (num2) {<br>
&nbsp&nbsp&nbsp&nbsp return function (num3) {<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp return num1+num2+num3;<br>
&nbsp&nbsp&nbsp&nbsp }<br>
&nbsp&nbsp }<br>
}<br>
addThreeNumber(10)(20)(30);   //60<br>
</div>
</code>

<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
function reminder() {<br>
&nbsp&nbsp const meetingReminder = “Hi! Time for meeting”;<br>
&nbsp&nbsp setTimeout(function(){<br>
&nbsp&nbsp&nbsp&nbsp console.log(meetingReminder);<br>
&nbsp&nbsp }, 4000);<br>
}<br>
reminder();<br>
</div>
</code>
<br>
<strong>Advantages of closure</strong><br>
1. Memory efficient.<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
Without closure<br>
function withoutClosure(index) {<br>
&nbsp&nbsp const bigOperation = new Array(8000).fill(‘Hi’);<br>
&nbsp&nbsp console.log(‘Array was created’);<br>
&nbsp&nbsp return bigOperation[index];<br>
}<br>
withoutClosure(500);<br>
withoutClosure(500);<br>
withoutClosure(500);<br>
<br>
Output: <br>
Array was created<br>
Array was created<br>
Array was created<br>
Hi<br>
</div>
</code>
<br>
In the above example, everytime the function “withoutClosure” is called array “bigOperation” is created and then again destroyed.<br>
We can solve this issue using closure without polluting the global scope.<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
function withClosure(){<br>
&nbsp&nbsp const bigOperation = new Array(8000).fill(‘Hello’);<br>
&nbsp&nbsp console.log(“Array was created”);<br>
&nbsp&nbsp return function(index){<br>
&nbsp&nbsp&nbsp&nbsp return bigOperation[index];<br>
&nbsp&nbsp }<br>
}<br>
withClosure(500);<br>
withClosure(500);<br>
withClosure(500);<br>
<br>
Output:<br>
Array was created<br>
Hello<br>
</div>
</code>
<br>
In this case, array “bigOperation” is created only once and can be accessed in closure.<br>
<br>
2. Encapsulation<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
const timeToParty = () => {<br>
let timer = 0;<br>
const idleTime = () => timer++;<br>
const preparationTime = () => timer;<br>
const partyTime = () => {<br>
timer = -1;<br>
return “Blast”;<br>
}<br>
setInterval(idleTime, 1000);<br>
&nbsp&nbsp return {<br>
&nbsp&nbsp&nbsp&nbsp preparationTime: preparationTime;<br>
&nbsp&nbsp }<br>
}<br>
const party = timeToParty();<br>
party.preparationTime();    //0<br>
party.partyTime();    //TypeError: party.partyTime is not a function<br>
</div>
</code>
<br>
In the above example, we see that the function “partyTime” is not accessible from outside since it was not returned. Only “preparationTime” function is accessible.<br><br>
Exercise:<br>
<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
let name;<br>
function setName(){<br>
&nbsp&nbsp name = “abc”;<br>
&nbsp&nbsp console.log(“name has been set”);<br>
}<br>
setName();<br>
setName();<br>
setName();<br>
console.log(name);<br>
<br>
Output:<br>
name has been set<br>
name has been set<br>
name has been set<br>
abc<br>
</div>
</code>
<br>
Write the above function such that the “name” variable is set only once.<br>

<code>
<div style="background-color: #d0d0d5; padding: 12px;
    font-size: 14px;">
let name;<br>
function setNameInClosure(){<br>
let count = 0;<br>
&nbsp&nbsp return function(){<br>
&nbsp&nbsp&nbsp&nbsp if(count > 0){<br>
&nbsp&nbsp&nbsp&nbsp return;<br>
&nbsp&nbsp&nbsp&nbsp } else {<br>
&nbsp&nbsp&nbsp&nbsp name = ”xyz”;<br>
&nbsp&nbsp&nbsp&nbsp count++;<br>
&nbsp&nbsp&nbsp&nbsp console.log(“name has been set”);<br>
&nbsp&nbsp&nbsp&nbsp}<br>
&nbsp&nbsp}<br>
}<br>
setNameInClosure();<br>
setNameInClosure();<br>
setNameInClosure();<br>
console.log(name);<br>
<br>
Output:<br>
name has been set<br>
abc<br>
</div>
</code>
<br>
Thank you.

`