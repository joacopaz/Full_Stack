/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: JavaScript app that calculates sleeping hours and sees if we have sleep debt.
*/


const getSleepHours = day => {
    if (typeof day !== 'string' || !day) return 'Invalid day.'
    day = day.toLowerCase();
    if (day === 'monday') return 4;
    if (day === 'tuesday') return 5;
    if (day === 'wednesday') return 9;
    if (day === 'thursday') return 7;
    if (day === 'friday') return 5;
    if (day === 'saturday') return 10;
    if (day === 'sunday') return 12;
    console.error("/// Error \\\\\\")
    return 'Valid days are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.';
}


const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);
    if (actualSleepHours === idealSleepHours) {
        console.log(`You've got the perfect amount of sleep`)
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You've under slept by ${idealSleepHours-actualSleepHours} hours.`)
    } else {
        console.log(`You've over slept by ${actualSleepHours-idealSleepHours} hours.`)
    }
}

calculateSleepDebt()