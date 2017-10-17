let registeredEarly = true;

let runnersAge = 18;

let raceNumber =  Math.floor( Math.random() * 1000 );

!registeredEarly ? console.log('Late') : console.log( raceNumber += 1000);

if (runnersAge > 18 && registeredEarly) {
  console.log(`You run at 9:30am. Race number: ${raceNumber}`);
} else if (registeredEarly || runnnersage > 18) {
  console.log(`You run at 11am. Race number: ${raceNumber}`);
} else if (runnersAge < 18 && !registeredEarly) {
  console.log(`You start at 12:30am. Race number ${raceNumber}`)
} else {
  console.log('see front desk');
}
