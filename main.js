const main = document.querySelector('main');

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let chosenLetter = letters[Math.floor(Math.random() * letters.length)];

console.log(chosenLetter);

document.body.addEventListener('keyup', function(event) {
    const keyPressed = event.key;
    if(keyPressed === chosenLetter) {
        chosenLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(keyPressed);    
        console.log("Secret Key Pressed");
        var p = document.createElement("p");
        p.innerHTML = "SECRET KEY PRESSED"
        main.appendChild(p);

    }
})