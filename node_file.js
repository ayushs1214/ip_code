const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createFile() {
    rl.question('Enter file name to create: ', (fileName) => {
        fs.writeFile(fileName, 'This is a random text', () => {
            console.log('File created successfully.');
            menu();
        });
    });
}

function readFile() {
    rl.question('Enter file name to read: ', (fileName) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (!err) {
                console.log('File content:', data);
            }
            menu();
        });
    });
}

function writeFile() {
    rl.question('Enter file name to write: ', (fileName) => {
        rl.question('Enter content to write: ', (content) => {
            fs.writeFile(fileName, content, () => {
                console.log('File updated successfully.');
                menu();
            });
        });
    });
}

function renameFile() {
    rl.question('Enter current file name: ', (oldFileName) => {
        rl.question('Enter new file name: ', (newFileName) => {
            fs.rename(oldFileName, newFileName, () => {
                console.log('File renamed successfully.');
                menu();
            });
        });
    });
}

function appendFile() {
    rl.question('Enter file name to append: ', (fileName) => {
        rl.question('Enter content to append: ', (content) => {
            fs.appendFile(fileName, '\n' + content, () => {
                console.log('Data appended successfully.');
                menu();
            });
        });
    });
}

function deleteFile() {
    rl.question('Enter file name to delete: ', (fileName) => {
        fs.unlink(fileName, () => {
            console.log('File deleted successfully.');
            menu();
        });
    });
}

function menu() {
    rl.question(
        'Select an operation:\n1. Create File\n2. Read File\n3. Write to File\n4. Rename File\n5. Append to File\n6. Delete File\n7. Exit\n',
        (choice) => {
            switch (choice) {
                case '1':
                    createFile();
                    break;
                case '2':
                    readFile();
                    break;
                case '3':
                    writeFile();
                    break;
                case '4':
                    renameFile();
                    break;
                case '5':
                    appendFile();
                    break;
                case '6':
                    deleteFile();
                    break;
                case '7':
                    rl.close();
                    break;
                default:
                    console.log('Invalid choice. Please select a valid option.');
                    menu();
                    break;
            }
        }
    );
}

console.log('Welcome to the Interactive File Operations Program!');
menu();
