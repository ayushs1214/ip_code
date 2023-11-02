const fs = require ("fs");

fs.writeFile("message.txt", "Hello from node js", (err) => {
    if (err)
         throw err;
    console.log('file saved');
});

fs.readFile("message.txt", "utf8", (err, data)=> {
    if (err){
        console.log("error is:", err);
    }
    else {
        console.log("data is:", data);
    }
});

fs.writeFile("message.txt", "Updated content", (err)=> {
   if(err) throw err;
    console.log('file updated');
});

