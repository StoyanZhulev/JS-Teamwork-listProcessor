function executeCommand() {
    let str;
	//Variable that will show if we read the first input line
    let isArrMade = false;
    let cmdType = '';


    let stdin = process.openStdin();
    stdin.addListener("data", function(d) {
        str = d.toString().trim();
		//Take command name
        cmdType = str.split(' ')[0];
        if(!isArrMade){
            arr = str.split(' ');
            isArrMade = true;
            console.log(arr.join(' '));
        }else{
			//Variable that will hold the result of the executed command
            let result = '';
            if(/[A-Z]+/.test(cmdType)){
                result = 'Error: invalid command!';
            }else{
                try{
					/*Here we require the function that we need. 
					* This way to add a new command we only need to make js file with the function.
					* If there is no such file, Error is thrown.
					*/
                    let cmd = require(`./commands/${cmdType}`);
                    try{
                        result = cmd(str, arr);
                    } catch (err){
                        result = err.message;
                    }

                }catch (er){
                    result = "Error: invalid command!";
                }
            }


            console.log(result);
            if(result === 'Finished'){
                done();
            }
        }

    });

    function done() {
        process.exit();
    }
}

module.exports = executeCommand;

