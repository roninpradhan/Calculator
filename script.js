const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector(".decimal");
const deleteButton = document.querySelector(".delete");
const resetButton = document.querySelector(".reset");
const equalButton = document.querySelector(".equal");

// Add number button clicks here
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        display.value += button.textContent;
    });
});

// Add operator button clicks here
operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        display.value += button.textContent;
    });
});

// Add decimal button click here
decimalButton.addEventListener("click", function() {
    display.value += decimalButton.textContent;
});

// Add delete button click here
deleteButton.addEventListener("click", function() {
    display.value = display.value.slice(0, -1);
});

// Add reset button click here
resetButton.addEventListener("click", function(){
    display.value = "";
});

// Add equals button click here
equalButton.addEventListener("click", function(){
    display.value = eval(display.value);
});
