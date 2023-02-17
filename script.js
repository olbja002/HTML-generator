const colorInput = document.getElementById("colorChangeIn");
const elementInput = document.getElementById("ElementChangeIn");
const textInput = document.getElementById("textChangeIn");
const newElIn = document.getElementById("newElIn")

function addTextElement(elementInput, textInput) {
    // alert(elementInput);   // Alerts value for you to make sure they contain whats expected
    // alert(textInput);      // -||-
    const text = document.createElement(elementInput);
    
    // var textInput = prompt("enter your custom text", "This is new!");  // Another solution for text input

    if (textInput !== null) {
        var node = document.createTextNode(textInput);
        text.appendChild(node);
        const textCont = document.getElementById("textCont");
        textCont.appendChild(text);
    }
}

var recentColorInput;
var recentBackgroundColor;

function changeColor() {
    document.body.style.backgroundColor = colorInput.value;
    // document.body.style.backgroundColor = prompt("choose a css color or hex code");
    if (colorInput.value !== recentColorInput && document.body.style.backgroundColor == recentBackgroundColor) {
        alert("The color you choose is not in our system. Please try again");
    }
    recentColorInput = colorInput.value;
    recentBackgroundColor = document.body.style.backgroundColor;
}

function addElToList() {
    // var newEl = prompt("write an element")  // troubleshooting
    // elementInput.innerHTML += '<option value="' + newEl + '">' + newEl + "</option>"   // I first tried to change the innerHTML to add an option
    
    var newEl = newElIn.value;
    if (newEl !== "") {
    var option = document.createElement("option");
    option.text = newEl;
    elementInput.add(option);
    alert(newEl + " is added to element list");
    } else {
        alert("Error: Write an HTML element in the input field besides the button")
    }
}

newElIn.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // alert("This works"); // check if event listener is listening
        addElToList();
    }
})

// Adds event listener for when the "enter" key is pressed in the "colorInput" Element.
// this event listener stops default actions, then clicks on the button with "ColorBtn" id.
colorInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // stops default actions
        document.getElementById("colorBtn").click();
    }
});

// same for text input element
textInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // stops default actions
        document.getElementById("textElBtn").click();
    }
});

function underline(e) {
    if (e.target.style.textDecoration == "underline") {
        e.target.style.textDecoration = "none";
        return;
    }
    e.target.style.textDecoration = "underline";
}