const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Addition ");
    readline.question('Enter first number: ', (num1) => {
    readline.question('Enter second number: ', (num2) => {

        const result = Number(num1) + Number(num2);
        console.log('The result is:', result);
       
        console.log("Subtraction ");
        readline.question('Enter first number: ', (num1) => {
        readline.question('Enter second number: ', (num2) => {
        const result = Number(num1) - Number(num2);
        console.log('The result is:', result);

        console.log("Multiplication ");
        readline.question('Enter first number: ', (num1) => {
        readline.question('Enter second number: ', (num2) => {

        const result = Number(num1) * Number(num2);
        console.log('The result is:', result);


        readline.close();

                    });
                });
            });
        });

    });
});
