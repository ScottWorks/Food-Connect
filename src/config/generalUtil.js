module.exports={
    itemNameConverter(str) {
        let myStr = str.toUpperCase()
        if (myStr.indexOf(' ') === -1) {
          if(myStr[myStr.length - 1] !== 'S') {
            return myStr + 'S'
          }
        }
        return myStr
        
      }
}