const fs = require('fs');

const filePath = 'example.txt';

const contentToWrite = 'Hello, this is some content that we are writing to a file.';
fs.writeFile(filePath, contentToWrite, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
    console.log('File written successfully.');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
      } else {
        console.log('File content:');
        console.log(data);
        
        const contentToAppend = '\nThis content is appended to the file.';
        fs.appendFile(filePath, contentToAppend, (err) => {
          if (err) {
            console.error('Error appending to the file:', err);
          } else {
            console.log('Content appended to the file.');
            
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                console.error('Error reading the file:', err);
              } else {
                console.log('Updated file content:');
                console.log(data);
                
                fs.unlink(filePath, (err) => {
                  if (err) {
                    console.error('Error deleting the file:', err);
                  } else {
                    console.log('File deleted successfully.');
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
