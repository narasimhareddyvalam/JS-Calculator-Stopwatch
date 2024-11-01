$(document).ready(() => {
    const username = sessionStorage.getItem("username");
    if (username) {
        $('#welcomeUser').text(username);
    } else {
        window.location.href = "index.html"; 
    }

    const validateNumber = (number) => {
        const numberRegex = /^-?\d*\.?\d*$/; 
        return numberRegex.test(number) && number.trim() !== '';
    };

    const validateInputField = (inputField, errorField) => {
        const value = $(inputField).val();
        if (!validateNumber(value)) {
            $(errorField).text("Please enter a valid number (no special characters).");
        } else {
            $(errorField).text(""); 
        }
    };

    $('#number1').on('input', function () {
        validateInputField(this, '#number1Error');
    });

    $('#number2').on('input', function () {
        validateInputField(this, '#number2Error');
    });

    // Unified arrow function for all operations
    const calculate = (operation) => {
        const num1 = $('#number1').val();
        const num2 = $('#number2').val();

        if (validateNumber(num1) && validateNumber(num2)) {
            let result;
            const parsedNum1 = parseFloat(num1);
            const parsedNum2 = parseFloat(num2);

            // Perform the operation based on the operation argument
            switch (operation) {
                case 'add':
                    result = parsedNum1 + parsedNum2;
                    break;
                case 'subtract':
                    result = parsedNum1 - parsedNum2;
                    break;
                case 'multiply':
                    result = parsedNum1 * parsedNum2;
                    break;
                case 'divide':
                    if (parsedNum2 === 0) {
                        $('#result').text("Cannot divide by zero");
                        return; 
                    }
                    result = parsedNum1 / parsedNum2;
                    break;
                default:
                    $('#result').text("Invalid operation");
                    return;
            }

            if (!isFinite(result)) {
                $('#result').text("Result is infinite.");
            } else {
                $('#result').text(result);
            }
        } else {
            $('#result').text('');
        }
    };

    // Using the same arrow function for all operations
    $('#addButton').click(() => calculate('add'));
    $('#subtractButton').click(() => calculate('subtract'));
    $('#multiplyButton').click(() => calculate('multiply'));
    $('#divideButton').click(() => calculate('divide'));
});
