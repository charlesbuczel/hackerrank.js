const main = () => {
    let n = parseInt(readLine());

    let stairs = [];
    stairs.length = n;
    stairs.fill(' ');
    while(n--) {
        stairs[n] = '#';
        console.log(stairs.join(''));
    }
};
