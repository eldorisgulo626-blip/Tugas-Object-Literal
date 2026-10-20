var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

let groupedResult = {};

motoGP.forEach(item => {
  let country = item.winner.country;
  let fullName = `${item.winner.firstName} ${item.winner.lastName}`;
  let winLoc = `${item.circuit}, ${item.location}`;

  if (!groupedResult[country]) {
    groupedResult[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  groupedResult[country].winningCircuits.push({
    name: fullName,
    winLocation: winLoc
  });

  groupedResult[country].totalWin += 1;
});

console.log(JSON.stringify(groupedResult, null, 2));