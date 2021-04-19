function HockeyTracker() {
    this.teams = [];
};

HockeyTracker.prototype.add = function(team) {
    console.log(this.teams);
    this.teams.push(team);
};

HockeyTracker.prototype.getPoints = function(teamName) {
    let points = 0;
    this.teams.forEach(team => {
        team[0] === teamName ? points = team[1] : 0;
    });
}

HockeyTracker.prototype.getGoalsFor = function(teamName) {
    let goals = 0;
    let currentTeam = this.teams
    currentTeam.forEach(team => {
        team[0] === teamName ? goals = team[1] : goals = team[0];
    })
    return goals
}
HockeyTracker.prototype.getGoalsAgainst = function(teamName) {
    let against = 0;
    this.teams.forEach(team => {
        team[0] === teamName ? goals = team[1] : goals = 0;
    })
    return against;
}

HockeyTracker.prototype.getGoalDifference = function(teamName) {
    let differ = 0
    this.teams[0][1] === this.teams[1][1] ? differ = 0 :
        this.teams[0][1] > this.teams[1][1] ? differ = this.teams[0][1] - this.teams[1][1] :
        differ = this.teams[1][1] - this.teams[0][1];
    return differ;
}
HockeyTracker.prototype.getWins = function(teamName) {
    let wins = 0;
    this.teams[0][1] === teams[1][1] ? wins = 0 :
        this.teams[0][1] > this.teams[1][1] ? wins = this.teams[0][1] : wins = this.teams[1][1];
    return wins;
}
HockeyTracker.prototype.getDraws = function(teamName) {
    console.log(`The draw is ${teams[0][1]}-${teams[1][1]}`);
}
HockeyTracker.prototype.getLosses = function(teamName) {
    return teams[0][1] - teams[1][1];
}

function Team(name, points) {
    const teamNew = [name, points];
}
const tracker = new HockeyTracker();
tracker.add([
    ["Winnipeg", 3],
    ["Edmonton", 0]
]);

console.log(tracker.getGoalsFor("Winnipeg")); // 3
console.log(tracker.getPoints("Winnipeg")); // 2
console.log(tracker.getPoints("Edmonton")); // 0
console.log(tracker.getGoalDifference("Edmonton")); // -3

tracker.add([
    ["Winnipeg", 1],
    ["Edmonton", 1]
]);

console.log(tracker.getGoalsFor("Winnipeg")); // 4
console.log(tracker.getPoints("Winnipeg")); // 4
console.log(tracker.getPoints("Edmonton")); // 1
console.log(tracker.getGoalsAgainst("Winnipeg")); // 1
console.log(tracker.getPoints("New York")); // 0