
function gameObject() {
    return {
    "home": {
        "teamName": "Brooklyn Nets",
        "colors": ["Black", "White"],
        "players": {
            "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
            },
            "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7,
            },
            "Brook Lopez": {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
            },
            "Mason Plumee": {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5,
            },
            "Jason Terry": {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1,
            },
        
        },
    },

    "away": {
        "teamName": "Charlotte Hornets",
        "colors": ["Turquoise", "Puple"],
        "players": {
            "Jeff Adrien": {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2,
            },
            "Bismak Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10,
            },
            "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5,
            },
            "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0,
            },
            "Brendan Haywood": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12,
            }
        }
    }
}}

function homeTeamName(){
    let teamInfor = gameObject()
    return teamInfo["home"]["teamName"]
}

function numPointsScored(name){
    let object = gameObject()
    let objKeys = Object.keys(object)
    for(let k of objKeys) {
        let players = Object.keys(object[k]["players"])
    for (let p of players) {
        if (p === name) {
            return object[k]["players"][p]["points"]
        }
        }
    }
}

function shoeSize(name) {
    let object = gameObject()
    let objKeys = Object.keys(object)
    for(let k of objKeys) {
        let players = Object.keys(object[k]["players"])
    for (let ss of players) {
        if (ss === name) {
            return object[k]["players"][ss]["shoe"]
        }
        }
    }
}


function teamColors(teamName){
    const object = gameObject()
    for (let k in object){
        if (object[k].teamName === teamName) {
            return object[k].colors
        }
    }
}

function teamNames(){
    const object = gameObject()
    return Object.keys(object).map(team => {
        return object[team].teamName
    })
}

function playerNumbers(teamName){
    const object = gameObject()
    for (let k in object){
        const team = object[k]
        if (team.teamName === teamName) {
            return Object.keys(team.players).map(player => {
                const playerObject = team.players[player]
                return playerObject.number
            })
        }
    }
}    

function findPlayer(name){
    const object = gameObject()
    for (let k in object) {
        let team = object[k].players
        for (let player in team) {
            return team[player]
        }
    }
}
function playerStats(nameOfPlayer) {
    return findPlayer(nameOfPlayer)
}

function bigShoeRebounds() {
    const object = gameObject()

    const memory = {shoesize: 0}

    // this first for lets us look at both "home" and "away" key values
    for (let key in object) {
        const team = object[key]

        const thePlayers = team.players
        for (let playerName in thePlayers) {
            const player = thePlayers[playerName]

            if (player.shoe > memory.shoesize) {
                memory.shoesize = player.shoe
                memory.rebounds = player.rebounds
            }
        }
    }
    return memory.rebounds
}

