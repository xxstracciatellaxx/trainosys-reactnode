import { promises as fs } from 'fs';
import readline from 'readline';

const DIARY_FILE = 'diary.txt';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function writeToDiary() {
    try {
        const entry = await question('Enter your diary entry: ');
        const date = new Date().toISOString();
        await fs.appendFile(DIARY_FILE, `${date} - ${entry}\n`);
        console.log('Diary entry added.');
    } catch (error) {
        console.error('Error writing to diary:', error);
    }
}

async function readDiary() {
    try {
        const data = await fs.readFile(DIARY_FILE, 'utf8');
        console.log('Your Diary Entries:');
        console.log(data || 'No entries found.');
    } catch (error) {
        console.error('Error reading diary:', error);
    }
}

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function runDiaryApp() {
    let continueRunning = true;

    while (continueRunning) {
        const answer = await question('Do you want to (R)ead, (W)rite in your diary, or (E)xit? ');

        if (answer.toUpperCase() === 'W') {
            await writeToDiary();
        } else if (answer.toUpperCase() === 'R') {
            await readDiary();
        } else if (answer.toUpperCase() === 'E') {
            continueRunning = false;
            console.log('Exiting the diary application. Goodbye!');
        } else {
            console.log('Invalid choice. Please choose (R)ead, (W)rite, or (E)xit.');
        }
    }

    rl.close();
}

runDiaryApp();