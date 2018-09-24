// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change

    if (currency <= 0) return {};
    if (currency > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let result = {};
    const values = {'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1};

    const count = (value) => {
      let num = Math.floor(currency / values[value]);
      if (num > 0) {
        currency = currency % values[value];
        result[value] = num;
      }
    };

    count('H');
    count('Q');
    count('D');
    count('N');
    count('P');
            
    return result;
}
