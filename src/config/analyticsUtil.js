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

    /* 
     * Function to generate a random array of colors (earch color in RGB format)
     * @param Integer numOfColors = Number of colors that you want to generate
     */

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
    },

    // TODO:
    /* 
     *  Need to create a function that creates an object of totals
     */
    createBusinessTotalObjectWeight(basketHistory){
        // TODO:
    },


    /*
     * Function to format a number to a particular pattern
     * @param integer num = number to format
     * @param integer decLen = length of decimal
     * @param integer len = length of whole part
     * @param string sectionDelim = Sections Delimiter
     * @param string decimalDelim = Decimal Delimter
     */

     formatNumber(num, decLen, len, sectionDelim, decimalDelim) {
        let regex = '\\d(?=(\\d{' + (len || 3) + '})+' + (decLen > 0 ? '\\D' : '$') + ')';
        let number = num.toFixed(Math.max(0, ~~decLen));

    return (decimalDelim ? number.replace('.', decimalDelim) : number).replace(new RegExp(regex, 'g'), '$&' + (sectionDelim || ','));
     }
}