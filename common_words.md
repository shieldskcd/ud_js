# Common Keywords used in JavaScript

## alert
Alert simply creates a pop-up box that will display a message to the user when it is executed. A simple example is `Alert("This is an alert")` which will create a pop up on the page saying "This is an alert".

## let
Let creates a new variable when it does not exist such as `let userName = "Max"` to created a variable called `UserName` and set its value to `Max`. If you later type `userName = "Joe"` then it will **overwrite** the variable previously used. 

## const
Const creates a variable which **cannot change**. If you create something like `const TotalUsers = 15;` and then later try to set `totalUsers = 20;` you will get an error because this is not supposed to change. 

## function
Function is used to create a prebuilt code set that can be called by the main page as needed. A function has the following format: 
```
function greetUser(name) {
    alert('Hi ' + name);
}
```
In this instance, you see the function called. Then, you see the name for the function `(greetUser)` and then you see the input `(name)` which is what it takes for input. Finally, between the curly braces, you see the code body that is performed by the function.

## return
Return triggers a function (see above) to return data back to the script that is calling it. For example, if you have the following function:
```
function MyNumber(number) {
    let myValue = 1
    let addValue = 2
    number = myValue + addValue
    return number
}
```
The function would return the value of number.

**Important Note** Once you execute the `return` function in a code snippet, **no other code will be executed in the block afterward**.


## parseInt
When we are trying to accept user input in JavaScript, it will normally pick the 'safe' option wherein it treats every input as a string so if you tell it to add three numbers (i.e. `userInput.value = 1 + 3 + 5`) the system will, by default combine those so that `userInput.value = 135`. However, that is not what we want when we are dealing with numbers. So, we can use the ParseInt to force something to become numbers: 
```
userInput.value = ParseInt(1 + 3 + 5);
```
tells JavaScript to add the numbers together which will make `userInput.value = 9`.

You can also use a shorter version of the parseInt using a code like the following:
```
result = thisNumber + +userInput.value
```
where the additional + forces integer.

**Important Note** If the string of numbers includes a decimal, ParseInt will round the decimal. To get decimals, you need the next keyword...

## parseFloat
ParseFloat works in a very similar fashion as **ParseInt** (see above) however, it allows the values passed to it to include decimals. 

For example:
```
userInput.value = ParseInt(1.3 + 3.5 + 5.7)
```
would **STILL** produce the value of `userInput.value = 9`.

BUT, if you use:
```
userInput.value = ParseFloat(1.3 + 3.5 + 5.7)
```
would produce `userInput.value = 10.5` because the float is allowing the variable to hold decimals. 

## .toString()
Using .toString() is a keyword in JavaScript that allows you to make any value presented to a variable into a string, even if it is a number. For example:
` result = 1 + 3 + 4` wouild likely set the value of result to `result = 8`
whereas, if you used `result.toString()` it would set the value of result to `result = 1+3+4`
