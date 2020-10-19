const getSleepHours = day => {
    if(day === 'monday'){
        return 8;
    } else if(day === 'tuesday'){
        return 8;
    }else if(day === 'wednesday'){
        return 8;
    }else if(day === 'thursday'){
        return 7;
    }else if(day === 'friday'){
        return 9;
    }else if(day === 'saturday'){
        return 9;
    }else if(day === 'sunday'){
        return 5;
    }
};
const getActualSleepHours = () => 
    getSleepHours('monday')+
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday');
 

const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
        console.log('you have got the perfect amount of sleep.')
    }else if(actualSleepHours > idealSleepHours) {
        console.log(' you have got more sleep than needed.')
    }else {
        console.log('you should get some rest')
    }
    if(actualSleepHours < idealSleepHours){
        console.log(`you got ${idealSleepHours-actualSleepHours} hour(s) less sleep than you need this week. Get some rest`);
    }
}

calculateSleepDebt();


console.log(getSleepHours('monday'));
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
