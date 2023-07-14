const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

//1.Two team
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

//2.goalkeeper and fieldPlayes
const [goalKeeper, ...fieldPlayers] = players1;

//3.All players
const allPlayers = players1.concat(players2);

//4. players Total 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'
const players1Total = players1.concat(
  'Marcelo',
  'Isco',
  'Asensio',
  'Diaz',
  'Odriozola'
);

//5. Game odds Mingueza', 'Messi', 'Modrich'
const { team1, draw, team2 } = game.odds;

//6. printGoal
const printGoal = function (...players) {
  let a = players;
  console.log(a);
  for (let i = 0; i < players.length; i++) {
    a = players;
    console.log(a);
  }
};
printGoal('Mingueza', 'Messi', 'Modrich');
printGoal(game.scored);
//7.'
