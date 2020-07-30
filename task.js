function taxis(num){
    const SMALLTAXI = 3;
    const BIGTAXI = 6;

    if(num <= SMALLTAXI){
        return 'you need small taxi';
    } else if (num > SMALLTAXI && num < BIGTAXI){
        return 'you need big taxi';
    } else if (num > BIGTAXI && num % BIGTAXI === 0){
        return `You will need ${(num / BIGTAXI)} big taxis for ${num} people`;
    } else {
        let bigTaxiCount = Math.floor(num / BIGTAXI);
        let bigTaxiPeople = Math.floor(num / BIGTAXI) * 6;
        let smallTaxiCount = Math.ceil((num % BIGTAXI) / SMALLTAXI);
        let smallTaxiPeople = num % BIGTAXI;
        let array = [];
        array.push(bigTaxiCount);
        array.push(smallTaxiCount);
        return `[${array}] You will need ${bigTaxiCount} big taxis for ${bigTaxiPeople} people and
        ${smallTaxiCount} small taxi for ${smallTaxiPeople} people `;
    }
}

console.log(taxis(9));