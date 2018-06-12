module.exports = {
    sumTotalBasketWeight(basket) {
        let sum = 0;

        for (var i = 0; i < basket.length; i++) {
            if (basket[i].hasOwnProperty('weight')) {
                sum += ~~basket[i]['weight']
            }
        }
        return sum;
    },

    sumTotalWeight(arrayOfBaskets) {
        let sum = 0;

        for (var i = 0; i < arrayOfBaskets.length; i++) {
            let basketTotal = this.sumTotalBasketWeight(arrayOfBaskets[i].items)
            sum += ~~basketTotal;
        }
        return sum;
    },

    sumTotalBasketFMV(basket) {
        let sum = 0;

        for (var i = 0; i < basket.length; i++) {
            if (basket[i].hasOwnProperty('FMV')) {
                sum += ~~basket[i]['FMV']
            }
        }
        return sum;
    },

    sumTotalFMV(arrayOfBaskets) {
        let sum = 0;

        for (var i = 0; i < arrayOfBaskets.length; i++) {
            let basketTotal = this.sumTotalBasketFMV(arrayOfBaskets[i]);
            sum += ~~basketTotal;
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


    /* 
     *  Create Data set based on completed baskets
     * @param Array basketHistory = Array of basket objects
     */
    createDataSet(basketHistory){
        
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
        let number = (Number(num)).toFixed(Math.max(0, ~~decLen));

    return (decimalDelim ? number.replace('.', decimalDelim) : number).replace(new RegExp(regex, 'g'), '$&' + (sectionDelim || ','));
     },

     /*
      * Function to get meals saved
      * PROTOTYPE AND DEMO PURPOSES - NOT ACCURATE CALCULATION / DATA
      * @param Integer poundsOfFoodSaved = pounds of food saved
      */

      getMealsSaved(poundsOfFoodSaved) {
            const AVG_LBS_EATEN_YEARLY = 1996
            const DAYS_PER_YEAR = 365.25

            let lbsPerDay = AVG_LBS_EATEN_YEARLY/DAYS_PER_YEAR;
            let lbsPerMeal = lbsPerDay /3;
            let mealsSaved = poundsOfFoodSaved / lbsPerMeal;

            return this.formatNumber(mealsSaved, 0, 3, ',', '.');
      }
}