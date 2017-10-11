const timeConversion = (time) => {
    const timeArray = time.split(':');
    const amPm = timeArray[2].substring(2);

    timeArray[0] = timeArray[0];
    timeArray[2] = timeArray[2].slice(0,2);

    if (amPm === 'PM' && timeArray[0] !== '12') {
        timeArray[0] = 12 + parseInt(timeArray[0]);
    } else if (amPm === 'AM' && timeArray[0] === '12') {
        timeArray[0] = '00';
    }

    return timeArray.join(':');
}

const main = () => {
    const time = readLine();
    console.log(timeConversion(time));

};
