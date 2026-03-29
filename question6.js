let clubs = [
    {name: "Real Madrid", wins: 10, draws: 0, losses: 0},
    {name: "Bayern", wins: 8, draws: 2, losses: 0},
    {name: "PSG", wins: 6, draws: 4, losses: 0},
    {name: "Bodo", wins: 7, draws: 2, losses: 1},
    {name: "Arsenal", wins: 2, draws: 6, losses: 2}
]
let highestPoints = 0;
let topClub = "";
for (let i = 0; i < clubs.length; i++){
    let club = clubs[i];
    let points = (club.wins * 3) + club.draws;
    console.log(points)

    if(points > highestPoints){
        highestPoints = points;
        topClub = club.name;
    }
}
console.log("Top Club:", topClub)