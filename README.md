Assignment - Login & Calculator | Stopwatch Web Application

Project Overview

This project consists of two parts:

Part A: A Login Page with Validation and a Simple Calculator built using jQuery and arrow functions.

Part B: A Stopwatch Web Application using Async/Await, Promises, SetInterval, and ClearInterval.

Tech Stack

Frontend: HTML, CSS, Bootstrap

JavaScript Frameworks & Libraries: jQuery

Async Programming: Promises, Async/Await

Part A: Login Page & Simple Calculator

Features Implemented:

1. Login Page with Validation

Fields:

Email (Must be a @northeastern.edu email)

Username

Password

Confirm Password

Validation Requirements:

Null Checks for all fields

Special Characters Restriction (except for passwords)

Min & Max Length Validation

Real-time validation (Errors appear in red below the field on key events, not on form submit)

Submit button is disabled until all validations are passed

Successful Login: Redirects the user to the calculator page.

2. Simple Calculator

Two Input Fields: Users can enter numbers only (validated using jQuery).

Operations: Add, Subtract, Multiply, Divide

Error Handling:

Prevents special characters

Prevents empty inputs

Prevents division by zero

Single Arrow Function Implementation:

All operations (add, subtract, multiply, divide) handled in one arrow function.

Results are displayed dynamically and cannot be edited.

Part B: Stopwatch Web Application

Features Implemented:

Displays HH:MM:SS format (Starts from 00:00:00)

Three Buttons: Start, Stop, Reset

Date Picker: Displays the current date (allows past and future selections but is non-editable)

Async Programming Features:

setInterval() to increment time every second when started

clearInterval() to pause/reset the stopwatch

Async/Await and Promises are used to handle UI responsiveness during state changes

Ensures accurate timekeeping without UI lag
