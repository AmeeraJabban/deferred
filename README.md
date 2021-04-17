#Jquery Deferred function Task
You will need two functions:
-	The 1st function is almost like a timer function which will defined a deferred object and return it.
Use window.setinterval function.
window.setinterval (): takes 2 Arguments in our case.
The 1st argument is a function that do a resolve on your deferred object and takes a string as a message.
**Ex**:
yourDeferredObj.resolve (“hello”);
The 2nd argument is the period of time to recall the function repeatedly.
-	The 2nd function functionality is to call the previous function and attach call-backs using (.then ()) which is used to add handlers to be called when the Deferred object is resolved in our case it will alert the received message.
