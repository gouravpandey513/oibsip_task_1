let display = document.getElementById('display');
let expression = '';

function appendCharacter(character) {
  expression += character;
  display.value = expression;
}

function deleteLastCharacter() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}
