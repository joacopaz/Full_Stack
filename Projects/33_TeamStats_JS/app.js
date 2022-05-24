/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: JS project to display and manage sports team stats (create, retrieve, and add information) focused on object management.
*/

const team = {
    _players: [{
        firstName: 'Lionel',
        lastName: 'Messi',
        age: 34
    }, {
        firstName: 'Kun',
        lastName: 'Aguero',
        age: 31
    }, {
        firstName: 'Carlos',
        lastName: 'Tevez',
        age: 36
    }],
    _games: [{
        opponent: 'Belgium',
        teamPoints: 1,
        opponentPoints: 0
    }, {
        opponent: 'Brasil',
        teamPoints: 2,
        opponentPoints: 2
    }, {
        opponent: 'Germany',
        teamPoints: 2,
        opponentPoints: 4
    }],
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        return this._players.push({
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        })
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        return this._games.push({
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        })
    }
}
team.addPlayer('Cristiano', 'Ronaldo', 28)
team.addGame('Switzerland', 5, 0)
console.log(team.games)