module.exports = {
    sumTotalBasketWeight(basket) {
        let sum = 0;

        for (var i = 0; i < basket.length; i++) {
            if (basket[i].hasOwnProperty('weight')) {
                sum += basket[i]['weight']
            }
        }
        return sum;
    },

    sumTotalWeight(arrayOfBaskets) {
        let sum = 0;

        for (var i = 0; i < arrayOfBaskets.length; i++) {
            let basketTotal = this.sumTotalBasketWeight(arrayOfBaskets[i])
            sum += basketTotal;
        }
        return sum;
    },

    sumTotalBasketFMV(basket) {
        let sum = 0;

        for (var i = 0; i < basket.length; i++) {
            if (basket[i].hasOwnProperty('FMV')) {
                sum += basket[i]['FMV']
            }
        }
        return sum;
    },

    sumTotalFMV(arrayOfBaskets) {
        let sum = 0;

        for (var i = 0; i < arrayOfBaskets.length; i++) {
            let basketTotal = this.sumTotalBasketFMV(arrayOfBaskets[i]);
            sum += basketTotal;
        }
        return sum;
    },

    generateRandomColors(numOfColors) {
        let colors = [];
        let counter = 0;
        while (counter < numOfColors) {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let color = `rgb(${r}, ${b}, ${b})`;
            colors.push(color);
            counter += 1;
        }

        return colors;
    }
}