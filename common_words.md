# Common Keywords used in JavaScript

## Alert
Alert simply creates a pop-up box that will display a message to the user when it is executed. A simple example is `Alert("This is an alert")` which will create a pop up on the page saying "This is an alert".

## Let
Let creates a new variable when it does not exist such as `let userName = "Max"` to created a variable called `UserName` and set its value to `Max`. If you later type `userName = "Joe"` then it will **overwrite** the variable previously used. 

## Const
Const creates a variable which **cannot change**. If you create something like `const TotalUsers = 15;` and then later try to set `totalUsers = 20;` you will get an error because this is not supposed to change. 

## Function
Function is used to create a prebuilt code set that can be called by the main page as needed. A function has the following format: 
```
function greetUser(name) {
    alert('Hi ' + name);
}
```
In this instance, you see the function called. Then, you see the name for the function `(greetUser)` and then you see the input `(name)` which is what it takes for input. Finally, between the curly braces, you see the code body that is performed by the function.

## Return
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
