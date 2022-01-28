const readline = require('readline-sync');

function prompt(message) {
    console.log(`=> ${message}`);
}

function invalidNumber(number) {
    return number.trimStart() === '' || Number.isNaN(Number(number));
}


prompt('Loan calc');

while (true) {
    prompt('Please enter total loan amount.')
    let loanAmount = readline.question();
    while (invalidNumber(loanAmount)) {
        prompt("Please enter a valid number.");
        loanAmount = readline.question();
    }

    prompt('Please enter annual percentage rate.')
    let annualPercentageRate = readline.question();
    while (invalidNumber(annualPercentageRate)) {
        prompt("Please enter a valid number");
        annualPercentageRate = readline.question();
    }

    prompt('Please enter the duration of the loan in years.')
    let loanDuration = readline.question();
    while (invalidNumber(loanDuration)) {
        prompt("Please enter a valid number");
        loanDuration = readline.question();
    }

    let annualInterestRate = Number(annualPercentageRate) / 100;
    let monthlyInterestRate = annualInterestRate / 12;
    let months = Number(loanDuration) * 12;

    let monthlyPayment = Number(loanAmount) *
        (monthlyInterestRate /
            (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));


    prompt(`The result is: ${monthlyPayment.toFixed(2)}`);
    console.log('\n');
    prompt('Would you like to perform another calculation? (y/n)');
    let answer = readline.question();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt('Please enter "y" or "n".');
        answer = readline.question().toLowerCase();
    }

    if (answer === 'n') {
        break;
    }

}