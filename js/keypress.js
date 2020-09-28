// KEYBOARD EVENTS
var elT;

function charCount(e) {
    var textEntered, charDisplay, counter, lastKey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;

    lastKey = document.getElementById('lastKey');
    lastKey.textContent = 'Last Key in ASCII code: ' + e.keyCode;
}

elT = document.getElementById('message');
elT.addEventListener('keypress', charCount, false);