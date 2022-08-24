let text;
let person = prompt("Please enter your name:", "Chopis Boi");
if (person == null || person == "") {
    text = "User cancelled the prompt.";
} else {
    text = "Hello " + person + "! Welcome to the most advanced calculator..";
}
document.getElementById("demo").innerHTML = text;
document.getElementById("demo").innerHTML = text;
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = buttonText;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
