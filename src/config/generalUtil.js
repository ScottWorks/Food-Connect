module.exports={
    itemNameConverter(str) {
        let myStr = str.toUpperCase()
        if (myStr.indexOf(' ') === -1) {
          if(myStr[myStr.length - 1] !== 'S') {
            return myStr + 'S'
          }
        }
        return myStr
        
      },

    /*
     * Function to validate email
     * @param String email = Email that user has entered and needs validation
     */

      validateEmail(email) {
          let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      }
}