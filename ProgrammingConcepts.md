**Programming Concepts**
====================
1.Shapes
========
>## -What is this?
>#### If We use this, We can draw shapes. ex) Points, squares, circles, etc.
>## -Why is it important?
>#### This is one of the basic concepts for implementing visual effects.<br/>We can make buttons, pictures, etc. with this.
>## -How do we use it?
>#### It is used by entering coordinates and sizes.<br/>Coordinate standards can be changed using OOmode, etc.<br/>We can also enter some additional values to make them as desired.
>## -Example
>#### line 25 ~ line 29 in Result.js<br/>Used to draw a square with a white border to visually isolate text on the result screen.
>#### <pre><code>stroke('white');<br/>noFill();<br/>strokeWeight(3);<br/>rect(20, 60, 750, 345);<br/>rect(20, 410, 750, 60);</code></pre>

2.Colors
========
>## -What is this?
>#### This allows We to color shapes, backgrounds, etc.
>## -Why is it important?
>#### By giving color, the result can be visually colorful.
>## -How do we use it?
>#### It can be colored or changed using Stroke and Fill.<br/>Stroke is bordering and Fill affects inside.
>## -Example
>#### line 41, line 42 in ButtonT.js<br/>Used to change the color of the button when you put the mouse on it.
>#### <pre><code>button_colorT1 = 220;<br/>fill(button_colorT1);</code></pre>

3.Variables
===========
>## -What is this?
>#### It is the memory space that stores certain values.<br/>The memory space is called a variable because it can store values within an acceptable range.
>## -Why is it important?
>#### If We use variables, We do not need to enter the same number within the code.<br/>It is also easy to modify the value.<br/>Additional operations or other modifications can be made with code.<br/>It's important because We can do various things with variables.
>## -How do we use it?
>#### We must first define a variable.<br/>p5.js can be defined as let, var, or const.<br/>Variables defined by let or var can always be modified.<br/>Variables defined by const cannot be modified with code.<br/>When We define a variable, We can put it inside an argument or change it to a calculation or equivalent value.
>## -Example
>#### line 8 ~ line 19 in ScreenCount.js<br/>Generates variables on each screen to switch screens.
>#### <pre><code>const MAIN_MENU = 0;<br/>const HOW_TO_PLAY = 1;<br/>const SCENE_1 = 2;<br/>const SCENE_2 = 3;<br/>const STAGE_1 = 4;<br/>const STAGE_2_Intro = 5;<br/>const STAGE_2 = 6;<br/>const STAGE_3_Intro = 7;<br/>const STAGE_3 = 8;<br/>const STAGE_4_Intro = 9;<br/>const STAGE_4 = 10;<br/>const EPILOGUE = 11;</code></pre>

4.Conditional Statements
========================
>## -What is this?
>#### Using conditional statements, we can check whether the condition is true or false.<br/>If it is true, the following code will be executed.<br/>If false, do not execute or execute code inside the ellse.
>## -Why is it important?
>#### Conditional statements allow We to set conditions for execution, allowing We to execute code of Wer choice according to the circumstances.
>## -How do we use it?
>#### There are three types: 'if'/'elseif'/'else'. When 'if' is true, internal code is executed.<br/>'elseif' is similar to 'if', but when We check the previous conditional statement, it goes over if it is false, checks the condition, executes the code if it is true, and moves on without executing the code if it is false.<br/>'else' executes internal code when all 'if' and 'elseif' above are false.
>## -Example
>#### line 15 ~ line 18 in TimeLimit.js<br/>Used to reduce timer by 1 per second.
>#### <pre><code>if(frameCount % 60 == 0 && Time_limitS1 > 0)<br/>    {<br/>        Time_limitS1--;<br/>    }</code></pre>

5.Loops
=======
>## -What is this?
>#### The loops repeats the internal code as long as the conditions are met.
>## -Why is it important?
>#### This is similar to the difference between addition and multiplication.<br/>It is important because it reduces cumbersome repetitive tasks, increasing the efficiency of tasks.
>## -How do we use it?
>#### There are 'When' and 'for' in the repetition.<br/>"While" adds conditions to "conditions" in the form of "When" to execute statements while the conditions are true.<br/>'for' creates variables such as i = 0 in the form of for (initial, condition, change) and enters conditions such as i <10 in the condition. If i++ is entered in change, i++ is executed in one loop.<br/>The difference between 'When' and 'for' can be seen as a difference in the form of a conditional statement.
>## -Example
>#### line 30 ~ line 34 in sketch.js<br/>Used to use a particle class created to fly red particles when clicked on the screen on an empty screen.
>#### <pre><code>for(let particle of explosion)<br/>    {<br/>        particle.update();<br/>        particle.draw();<br/>    }</code></pre>

6.Functions
===========
>## -What is this?
>#### A function is a code that performs a constant operation in a program source code.<br/>Functions are largely divided into embedded functions and custom functions.<br/>An embedded function is a function that is already defined at the programming language level, and it is simply called and written to the format without having to create a function separately.<br/>The language references show that a significant number of built-in functions are provided.<br/>A user-defined function is a function created and written by a programmer, which must be predefined somewhere in the code before it can be called and written.
>## -Why is it important?
>#### The function allows us to simply organize unnecessary or multiple redundant code by calling the function.<br/>Furthermore, separating programs into multiple functions makes coding easier and more convenient.
>## -How do we use it?
>#### Enter a name for the function in '[name]' in 'function [name] ([argument])' format.<br/>The name must not conflict with any other function or variable.<br/>In addition, [argument] allows We to enter values or bullions.<br/>And write the code inside below.<br/>If We need to output the results, use 'return'.<br/>To use the function, use '[name] ([argument]);' expression according to the format above.
>## -Example
>#### line 10 ~ line 103 in Chating.js<br/>Creating functions to implement in-game chat.
>#### <pre><code>function Chating(x, y, w, h, person, message)<br/>{<br/>    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;<br/>    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;<br/>    const quit_range_within_x = mouseX >= x + w*9 - 30 && mouseX < x + w*9;<br/>    const quit_range_within_y = mouseY >= y - h*5/7 - 15 && mouseY < y - h*5/7 + 15;<br/><br/>    push();<br/>    if(chatbox_mod == 0)<br/>    {<br/>        push();<br/>        if(button_range_within_x && button_range_within_y)<br/>        {<br/>            if(mouseIsPressed)<br/>            {<br/>                if(mouseButton === LEFT)<br/>                {<br/>                    push();<br/>                    tint(255, 180);<br/>                    imageMode(CENTER);<br/>                    image(ChatBox, x, y, w, h);<br/>                    chatbox_mod = 1;<br/>                    pop();<br/>                }else false<br/>            }else{<br/>                push();<br/>                tint(255, 200);<br/>                imageMode(CENTER);<br/>                image(ChatBox, x, y, w, h);<br/>                pop();<br/>            }<br/>        }else{<br/>            push();<br/>            tint(255, 220);<br/>            imageMode(CENTER);<br/>            image(ChatBox, x, y, w, h);<br/>            pop();<br/>        }<br/>        pop();<br/>    }else if(chatbox_mod == 1)<br/>    {<br/>        push();<br/>        noStroke();<br/>        fill(230, 255, 247, 150);<br/>        rect(x + w*4, y + h, 500, 200);<br/>            push();<br/>            strokeWeight(1);<br/>            fill(164, 192, 244, 150);<br/>            rect(x + w*4, y - h/4*3, 500, 30);<br/>                push();<br/>                stroke('black');<br/>                fill('black');<br/>                textSize(18);<br/>                text(person, x, y - h/4*3 + 2);<br/>                pop();<br/>            pop();<br/><br/>            push();<br/>            fill('black');<br/>            textAlign(LEFT, TOP);<br/>            textSize(12);<br/>            text(message, x - w + 5, y - h/4*3 + 20);<br/>            pop();<br/>        pop();<br/><br/>        push();<br/>        if(quit_range_within_x && quit_range_within_y)<br/>        {<br/>            if(mouseIsPressed)<br/>            {<br/>                if(mouseButton === LEFT)<br/>                {<br/>                    push();<br/>                    fill(220, 20, 60, 150);<br/>                    rect(x + w*9 - 15, y - h*5/7, 30, 30);<br/>                    pop();<br/>                    chatbox_mod = 0;<br/>                }else false<br/>            }else{<br/>                push();<br/>                fill(220, 20, 60, 160);<br/>                rect(x + w*9 - 15, y - h*5/7, 30, 30);<br/>                pop();<br/>            }<br/>        }else{<br/>            push();<br/>            fill(220, 20, 60, 180);<br/>            rect(x + w*9 - 15, y - h*5/7, 30, 30);<br/>            pop();<br/>        }<br/>        pop();<br/>    }<br/>    pop();<br/>}</code></pre>

7.Classes
=========
>## -What is this?
>#### Class is a kind of framework that defines the variables and methods within a particular type of object.<br/>We can create a new class inside a variable and use that variable to execute functions inside the class.<br/>Class is not hoisted unlike function.<br/>We can call the constructor only with new. No other way is possible.<br/>New cannot be called without a constructor method.
>## -Why is it important?
>#### There is a function called Inheritance.<br/>Inheritance refers to a child class inheriting the properties and functions of a parent class.<br/>If a part of a feature needs to be changed, only the features inherited from the child class are modified and redefined, which is called Overriding.<br/>Inheritance makes it easier to reuse classes while maintaining encapsulation.
>## -How do we use it?
>#### It is defined in the form 'Class [Name],' and uses the 'constructor' method inside the class to create and initialize the class-generated objects.<br/>It is used to obtain 'this' value within the class.<br/>A special method named 'constructor' can exist in only one class.<br/>We can then declare additional methods in the form '[name] ()'.<br/>And when We use methods, We can use them in the '[class].[name] ()' format.
>## -Example
>#### line 6 ~ line 31 in Hand.js<br/>Create a class to make the hand look like it's moving up and down.
>#### <pre><code>class Hand<br/>{<br/>    constructor(x, y)<br/>    {<br/>        this.x = x;<br/>        this.y = y;<br/>    }<br/><br/>    update()<br/>    {<br/>        this.y += random(-1, 1)<br/><br/>        if(this.y >= 475 || this.y <= 470)<br/>        {<br/>            this.y = 472.5<br/>        }else false<br/>    }<br/><br/>    draw()<br/>    {<br/>        const Hand_sizeW = 200;<br/>        const Hand_sizeH = 180;<br/>        image(HandL, this.x - 200, this.y, Hand_sizeW, Hand_sizeH);<br/>        image(HandR, this.x + 200, this.y, Hand_sizeW, Hand_sizeH);<br/>    }<br/>
}</code></pre>

8.Arrays
========
>## -What is this?
>#### Array refers to a structure in which elements numbered in sequence are formed in a continuous form.<br/>Arrays can be useful for storing and processing a large number of data.
>## -Why is it important?
>#### Let's say we need to process 100 data.<br/>To store 100 data without using an array, 100 variables are required.<br/>If so, you need to write down the code that puts the value and the output code 100 times.<br/>If you do that, it is very difficult to code and the code amount is longer.<br/>However, if you use an array, you can write code efficiently.<br/>If you declare an array of 100 address values and use "for" to put the values and print them out, it will be a very efficient code.
>## -How do we use it?
>#### We can make a declaration in this way.<pre><code>var arrNumber = new Array(); //Array Declaration<br/>var arrNumber = new Array("a","b","c","d");<br/>var arrNumber = [1,2,3,4];</code></pre>It can be initialized at the same time as the array declaration, but it can also be initialized as below.<pre><code>var arrNumber = new Array(); //배열선언<br/><br/>arrNumber[0] = 1;<br/>arrNumber[1] = 2;<br/>arrNumber[2] = 3;<br/>arrNumber[3] = 4;<br/>arrNumber[4] = 5;<br/><br/>for(let i=0; i<5; i++){<br/>    arrNumber[i]=i;<br/>}</code></pre>Furthermore, push(), pop(), shift() can be used to add or remove the desired value at the end of the array, remove the value from the first address, and return it.
>## -Example
>#### line 9 in sketch.js<br/>When you click on the screen when it's empty, create an array to put the particle classes you created to make the particles fly away into the array.
>#### <pre><code>let explosion = []</code></pre>