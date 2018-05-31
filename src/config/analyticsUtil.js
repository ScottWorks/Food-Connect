
module.exports = {
    sumTotalBasketWeight(basket) {
    let sum = 0;

        for(var i =0; i < basket.length; i++) {
            if(basket[i].hasOwnProperty('weight')) {
                sum += basket[i]['weight']
            }
        }
        return sum;
    },

    sumTotalWeight(arrayOfBaskets) {
        let sum = 0;

        for(var i=0; i < arrayOfBaskets.length; i++) {
            let basketTotal = this.sumTotalBasketWeight(arrayOfBaskets[i])
            sum += basketTotal;
        }
        return sum;
    }
}

