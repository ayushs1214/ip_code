const readLine = require('readline-sync');
const replModule = require ('repl');

function calculator () 
{
    console.log("Command Line Calc");

    const repl = replModule.start();
    repl.on('exit', ()=> {
        console.log('Exiting calculator');
    });

    repl.on('line', (line)=> {
        try {
            const result = eval(line);
            console.log(result);
        }
        catch(error){
            console.error(error.message);
        }
    });

}

calculator();