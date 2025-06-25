let display = document.getElementById("display");

function press(value) {
  const lastChar = display.value.slice(-1);
  //   console.log(lastChar);

  if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(value)) {
    display.value = display.value.slice(0, display.value.length - 1) + value;
    return;
  }

  // Prevent multiple decimals in a single number
  if (value === ".") {
    // Find the last operator
    const parts = display.value.split(/[\+\-\*\/]/);
    const lastNumber = parts[parts.length - 1];

    if (lastNumber.includes(".")) return; // already has a dot
    if (["+", "-", "*", "/"].includes(lastChar)) value = "0."; // prevent starting with .
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
