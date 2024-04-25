let number = 0;

const increment = document.querySelector("#increment")
const decrement = document.querySelector("#decrement")
const reset = document.querySelector("#reset")
const display = document.querySelector("#display")

increment.addEventListener("click", () => {
    number++;
    display.textContent = number;
});

decrement.addEventListener("click", () => {
    if (number == 0) {
        number = 0;
    } else {
        number--;
    }

    display.textContent = number;
});

reset.addEventListener("click", () => {
    number = 0;
    display.textContent = number;
});