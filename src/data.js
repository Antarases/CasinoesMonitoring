let data = new Array(100);

let type = ['roulette', 'blackjack', 'baccarat', 'poker'];

/*--------------------------------------------------------------------------------------------*/

function getRndInteger(min, max) {              //returns a random integer from min to max(included max)
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*-------- Generation data for tables --------------------------------------------------------*/

function generateTable(id){
    let randTypeId = getRndInteger(0, (type.length-1));
    let randMaxPlayers = getRndInteger(3, 5);     //from 3 to 5
    let randPlayers = getRndInteger(0, randMaxPlayers);

    return {
        id,
        type: type[randTypeId],
        name: 'Table #' + (id + 1),
        warning: false,
        players: randPlayers,
        maxPlayers: randMaxPlayers
    }
}

for(let i=0; i<data.length; i++){
    data[i] = generateTable(i);
}

/*----------- Changing tables data ------------------------------------------------------------*/

function changeTablesData(){
    for(let i=0; i<data.length; i++){
        let playersChangeProbability = getRndInteger(0, 9);
        let warningChangeProbability = getRndInteger(0, 9);
        let warningRecoveryProbability = getRndInteger(0, 9);

        if(playersChangeProbability < 3 ){                //30% probability that quantity of players will be changed
            data[i].players = getRndInteger(0, data[i].maxPlayers);
        }

        if(data[i].warning === false && warningChangeProbability < 1){       //10% probability that warning will be emerged on serviceable table
            data[i].warning = true;

            if(warningRecoveryProbability < 5){          //50% probability that warning is ended
                setTimeout(() => (
                    data[i].warning = false
                ), 5000);
            }
        }
    }
}

setInterval(changeTablesData, 5000);

/*--------------------------------------------------------------------------------------------*/

export {data};


