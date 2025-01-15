# Firebase Asynchronous Data Access Error

This example demonstrates a common error in Firebase applications where attempting to access data before it's fully loaded leads to errors. The solution involves proper asynchronous operation handling using promises and error handling.

## Bug
The `getData` function attempts to access a Firestore document immediately after initiating the fetch, which may lead to an error if the data isn't yet available. 

## Solution
The corrected `getData` function uses `.then` to handle the promise successfully and catch any errors that occur during the asynchronous operation.