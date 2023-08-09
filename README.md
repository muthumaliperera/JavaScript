<h2>Introduction to JavaScript</h2>

<table style="border: none  padding: 10px;">
    <tr>
        <td><li>Js is a client-side scripting language that execute on your broweser.<br></li>
            <li>Js essentially used to make your pages alive</li>
            <li>Using Js we can capture event, create animations, validating user inputs and much more.</li>
            <li>In present Js not only execute on browser but also on the server.</li>
            <li>Node.js is one of the most amazing example of server-side JavaScript</li>
        </td>
        <td> <img src="imgs/js.gif" alt="Gif_img_here" width="200" /> </td>
 </tr>
</table>

<h3>History of JavaScipt</h3>
   <li>Js was developed by Brendan Eich in Netscape Communications Corporation in 1995</li>
   <li>JavaScript started his life with the name Mocha ans was concisely named LiveScript.</li>
    <li>In 1995 LiveScript officially renamed to JavaScript with Netscape Navigator Road leads</li>
    

<h3>What is ECMAScript</h3>
   <li>ECMA stands for Europian Computer Manufacturers Association, a private international nonprofit standard organization.</li>
   <li>In 1996 Netscape submitted JavaScript to ECMA.</li>
   <li>JavaScript is implementation of ECMAScript.</li>
   

<h3>What is ES6</h3>
   <li>ECMAScript 6 is update of ES5 which was standardize in 2009.</li>
   <li>ES6 was published by ECMA International in June 2015.</li>

<h3>Literals, Variables & Constants</h3>
<table style="border: none  padding: 10px;">
    <tr>
        <td>Variables</td>
        <td><li>Variable is a name that contains a specific value</li></td>
    </tr>
    <tr>
        <td>Constant</td>
        <td><li>In ES6 a new Keyword added in the JavaScript which is const.</li>
        <li>Constant also hold value but unlike variables it can't be changed after initialization.</li>
    </tr>
    <tr>
        <td>Identifier</td>
        <td><li>Variables and constants are usually call identifier.</li>
        <li>Identifier consists of letters numbers Underscore(_) and the Dollar ($) sign.</li>
        <li>Unicode Characters are allowed</li>
        <li>Identifier must start with the letter Dollar sign ($) or underscore(_).</li>
        <li>Identifier cannot be a reserved word.(words that created for a specific task).</li>
        </td>
    </tr>
    <tr>
        <td>Literals</td>
        <td><li>You are providing a value directly in the program.</li>
        <li>Literals is just the way to create identifier with the value.</li>
    </tr>
</table>

<h3>Primitive Type & Object</h3>
<h4>Primitive Types</h4>
<p>JavaScript Data or values are primitive or object. Primitive data are immutable means we cannot change the value of the variable after initializing<br>JS recognized four types of numerical literals, Binary, Decimal, Octal, HexaDecimal.</p>

<h4>Boolean</h4> 
<p> Boolean is just a value type that have only two possible values. True or False. We dont use boolean values inside quotaion marks.("")</p>

<h4>Symbols</h4> 
<p>In ecmascript 6 we have a new type symbol.<br>Symbols is the new data type in es6 which represent Unique tokens.<br>Once you created a symbol it is unique and it will not match any other symbols.</p>

<h4>Null & Undefined</h4> 
<p>JS has two special types null and undefined.<br>Null has only one possible value which is Null and undefined has only one possible value undefined<br>Both Null and undefined Represent something doesn't exist.</p>

<!--Tutorial 05 -->

<h4>Object Types</h4>
<li>Array</li>
<li>Date</li>
<li>Regular Expression</li>
<li>Map & WeakMap</li>
<li>Set and WeakSet</li>

<h4>What is Object?</h4>
<li>Objects are mutable</li>
<li>Can change any value anytime.</li>
<li>Object is just like a Container that can have different kind of data.</li>
<li>Object literal syntax :{} </li>

<img src="imgs/js1.png" alt="workspace" width="600"/>

<h4>Array</h4>
<li>Array is Collection of Different types of Data.</li>
<li>Array Start with [0] and end with [n] value.</li>
<li>Array element can be any type of of data, It may be objects or primitive type.</li>
<li>Array size is not fixed so you can add and remove array element anytime.</li>
<li>Array is zero based. So the first element of the array is 0 next element is 1 and so on.</li>

<img src="imgs/js2.png" alt="workspace" width="600"/>

<h4>Date</h4>
<li>Represent date and time using date object.</li>

<h4>Date</h4>
<li>Represent date and time using date object.</li>

<img src="imgs/js3.png" alt="workspace" width="600"/>

<h4>Regular Expression</h4>
<li>It is a sub language of JavaScript</li>
<li>Used to perform Complex search and replace operations on strings.</li>


<h4>Maps and Sets</h4>
<li>In new ECMAScript 6 a new data type introduced is map and set and their week counterpart, WeekMap and Weakset.</li>
<li>Maps are just likean object but it offers more advantages than object in certain situations</li>
<li>Set are similar to array expect they can't content duplicate element.</li>

<img src="imgs/js4.png" alt="workspace" width="600"/>

<!--Tutorial 06 -->
<h4>String</h4>
<li>A Collection of characters, Numbers, and Symbols.</li>
<li>In Js string represents UNICODE TEXT<li>Unicode text is a computing industrial standard for representing text data.</li><li>Unicode store letter and characters By assigning a number of each one.</li></li>
<li>Special Chracters</li>
<table>
    <tr>
        <td>Escaping Characters</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>\n</td>
        <td>New line</td>
    </tr>
    <tr>
        <td>\r</td>
        <td>Carriage Return</td>
    </tr>
    <tr>
        <td>\t</td>
        <td>Tab</td>
    </tr>
    <tr>
        <td>\' & \"</td>
        <td>Single & Double Quote</td>
    </tr>
    <tr>
        <td>\`</td>
        <td>Backtick (new ES6)</td>
    </tr>
    <tr>
        <td>\$</td>
        <td>Dollar Sign (new ES6)</td>
    </tr>
    <tr>
        <td>\\</td>
        <td>Backslash</td>
    </tr>
    <tr>
        <td>\\uXXXX</td>
        <td>Unicode Format</td>
    </tr>
    
</table>

<img src="imgs/js5.PNG" alt="workspace" width="600"/>

<!--Tutorial 07 -->

<h4>If & Else</h4>
<img src="imgs/js6.PNG" alt="if_else_statement" width="600"/>


<!--Tutorial 08 -->
<h4>Switch</h4>
<img src="imgs/js7.PNG" alt="Switch_statement" width="600"/>

<!--Tutorial 09 -->
<h4>Loop</h4>
<li>While Loop</li>
<img src="imgs/js8_1.PNG" alt="while_loop" width="500"/>

<!--Tutorial 10 -->
<li>Do while Loop</li>
<img src="imgs/js8_2.PNG" alt="Do_while_Loop" width="500"/>

<!--Tutorial 11 -->
<li>for Loop</li>
<img src="imgs/js8_3.PNG" alt="for_loop" width="600"/>


<!--Tutorial 12 -->
<li>Nested for Loop</li>
<img src="imgs/js9.PNG" alt="nested_for" width="500"/>


<!--Tutorial 13 -->
<li>for/in  Loop</li>
<img src="imgs/js10.PNG" alt="for/in_loop" width="600"/>

<!--Tutorial 14 -->
<li>for/of  Loop</li>
<img src="imgs/js11.PNG" alt="for/of_loop" width="600"/>



<!--Tutorial 15 -->
<h4>Expressions</h4>
<li>Expression is a statement that evaluate to a value</li>

<h5>Primary Expression/ Simple Expression</h5>
<p>Constant or literal values, it can be variable reference or certain language result keywords</p>
<li>5.30- number literals </li>
<li>"Name" - String literals</li>
<li></li>

<h5>JavaScript Reserve Words</h5>
<li>Null</li>
<li>True</li>
<li>False</li>

<h5>Bare Expressions</h5>
<li>str - expression evaluate to the value of the str</li>
<li>undefined - it is a global variable , not a keyword like null</li>
<li>False</li>

<!--Tutorial 16-24-->
<h4>Operators</h4>
<li>Assignment Operators</li>
<li>Arithmetic Operators</li>
<li>Comparison Operators</li>
<li>String Operators</li>
<li>Logical Operators</li>
<li>Bitwise Operators</li>
<li>Ternary Operators</li>
<li>Type Operators</li>
<table>
    <tr>
        <td>Operator</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>typeof</td>
        <td>Returns the type of a variable</td>
    </tr>
    <tr>
        <td>instanceof</td>
        <td>Returns true if an object is an instance of an object type</td>
    </tr>
</table>
<li>Destructing Assignment Operator</li>
<p>It is new in EcmaScript 6</p>
<img src="imgs/js12.PNG" alt="Destructing Assignment Operato" width="600"/>


<!--Tutorial 25-->
<h4>Object and Array Operators</h4>
<img src="imgs/js13.PNG" alt="object_array_operators" width="600"/>

<!--Tutorial 26-->
<h4>instanceof Operator</h4>
<img src="imgs/js14.PNG" alt="instanceof_operators" width="600"/>

<h4>Delete Operator</h4>
<img src="imgs/js15.PNG" alt="oDelete_operators" width="600"/>

<h4>Conditional Operators</h4>
<img src="imgs/js16.PNG" alt="Conditional _operators" width="600"/>


<!--Tutorial 27,28-->
<h4>Jump Statements</h4>
<li>jump statement are used to jump the execution to the new location</li>

<img src="imgs/js17.PNG" alt="workspace" width="600"/>

<h4>Labeled Statements</h4>
<li>allow us to specify name to the specific block that can refer it to somewhere in the program</li>

<img src="imgs/js18.PNG" alt="workspace" width="600"/>

<h4>Continue Statements</h4>
<li>Restart the loop after next iteration</li>

<img src="imgs/js19.PNG" alt="workspace" width="600"/>

<h4>Return Statements</h4>
<img src="imgs/js20.PNG" alt="workspace" width="600"/>


<!--Tutorial 29-->
<h4>Functions</h4>
<li>Declare with function keyword followed by function name</li>
<li>parameters are optional</li>

<img src="" alt="workspace" width="600"/>

<!--Tutorial 30-->
<h4>Function Arguments & Defualt Arguments</h4>
<h5>Function Arguments</h5>
<img src="imgs/js22.PNG" alt="workspace" width="600"/>

<h5>Default Arguments</h5>
<img src="imgs/js23.PNG" alt="workspace" width="600"/>

<!--Tutorial 25-->
<h4></h4>
<li></li>

<img src="" alt="workspace" width="600"/>