    var opertor = window.prompt("Enter the operator")
    var number1 = 10, number2 = 2;
    switch (opertor)
    {
        case '+':
            document.write("Addition of two numbers is: " + (number1 + number2));
            break;
        case '-':
            document.write("Subtraction of two numbers is: " + (number1 - number2));
            break;           
        case '*':
            document.write("Multiplication of two numbers is: " + (number1 * number2));
            break;
        case '/':
            document.write("Division of two numbers is: " + (number1 / number2));
            break;
        case '%':
            document.write("Module of two numbers is: " + (number1 % number2));
            break;
        default:
            document.write("<b> You have entered Wrong operator </b>");
            document.write("<br \> Please enter Correct operator such as +, -, *, /, %");
    }