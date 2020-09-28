// USER INTERFACE EVENTS
// LOAD
function setup() { //Declare function
    var textInput; // Create Variable
    textInput = document.getElementById('uname'); // Get username input
    textInput.focus(); // Give username focus
}
window.addEventListener('load', setup, false); // When page loaded call setup()



// FOCUS & BLUR EVENT
function checkUsername() { //Declare function
    var username = el.value; //Store username in variable
    if (username.length < 5) { // If username < 5 characters
        elMsg.className = 'warning'; // Change class on message
        elMsg.textContent = 'Not long enough, yet...'; // Update message
    } else { //Otherwise
        elMsg.textContent = ''; // Clear the message
    }
}

function tipUsername() {
    elMsg.className = 'tip'; //change class for message
    elMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
}

var el = document.getElementById('uname'); //username input
var elMsg = document.getElementById('feedback'); // Element to hold message

// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); //focus call tipUsername()
el.addEventListener('blur', checkUsername, false); //blur call tipUsername()