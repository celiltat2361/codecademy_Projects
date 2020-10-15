let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 19;

runnersAge > 18 && registeredEarly === true ? (raceNumber += 1000) : raceNumber;

if (runnersAge > 18 && registeredEarly === true) {
    console.log(`You will race at 9:30 am and your race number is ${raceNumber}`);
} else if (runnersAge > 18 && registeredEarly === false) {
    console.log(
        `You will race at 11:30 am and your racing number is ${raceNumber}`
    );
} else if (runnersAge < 18 && registeredEarly === false) {
    console.log(
        `You will race at 12:30 am and your racing number is ${raceNumber}`
    );
} else {
    console.log("go to desk");
}