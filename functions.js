module.exports={    
    // Wrapper for Dice roller, verifies parameters and parses response.
    performRolls: function(commandContent='1d20+0'){
        let splitContent = commandContent.split("d");
        let num = splitContent[0];
        let sides = 0;
        let mod = 0;
        if (commandContent.indexOf("+")>=0){
        sides = parseInt(splitContent[1].split("+")[0]);
        mod = parseInt(splitContent[1].split("+")[1]);
        }
        else if (commandContent.indexOf("-")>=0){
        sides = parseInt(splitContent[1].split("-")[0]);
        mod = parseInt(splitContent[1].split("-")[1]) * -1;
        }
        else {
        sides = parseInt(splitContent[1]);
        mod = parseInt(0);
        }
        let rolls = dice(num, sides, mod);
        let calcString= rolls.results.reduce( (a,b)=> a.toString()+" + "+b.toString());
        calcString = (mod<0)? calcString + " - "+ Math.abs(mod): calcString + " + " +mod;
        return "ROLLS: "+ rolls.results + "\nCALC: "+calcString+"\nRESULT: " + rolls.total; 
    },

    greeting: function(commandContent=null) {
        let name = commandContent;
        if (name) {
        return "\Hai " + name + "! ^_^"; 
    }}
};

//dice rolling function
let dice= function(num, sides, mod) {
    let rolls = [];
    function add(a, b) {
        return a + b;
    }
    for (i = 0; i < num; i++) {
        rolls.push(Math.ceil(Math.random() * sides)); 
    }
    return {results: rolls, total: rolls.reduce(add, 0) + mod};
}

