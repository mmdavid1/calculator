function calculateStringAndNumber() {

    var regex = /^[0-9+\s]+$/;
    if (!regex.test(input)) {
      document.getElementById("errorBox").textContent = "Error: Invalid input format. Only numbers and '+' sign are allowed.";
      return; // Exit the function
    }

    var input = document.getElementById("inputField").value;
    var parts = input.split("+");

    var firstNumber = parseFloat(parts[0].trim());
    var secondNumber = parseFloat(parts[1].trim());

    var result = document.getElementById("result").textContent = firstNumber + secondNumber;
    

}