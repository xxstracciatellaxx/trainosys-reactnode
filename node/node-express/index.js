const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Hello', (feelings) => {
    console.log('World');
    readline.close();
})