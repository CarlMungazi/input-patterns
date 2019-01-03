module.exports = {
  // Only allow alpha-numeric characters
  // Explanation: The provided string must have one or more characters within the a-z, A-Z and 0-9 ranges
  alphaNumeric: "[a-zA-Z0-9]+",


  /*********************************************************************************
  The following regular expressions are returned by functions to allow users to dynamically set certain values
  **********************************************************************************/

  /**
  * The password must contain N or more characters that are of at least one number, and one uppercase and lowercase letter
  * @param {number} characterMinimum
  * @returns a regex string
  * Explanation: We have three positive lookaheads checking for any numbers and characters within the a-z and A-z ranges.
  * Finally, we must have at least the given number of characters 
  */ 
  password: (characterMinimum = 8) => {
    return `(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{${characterMinimum},}`;
  }
}