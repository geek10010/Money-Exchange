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
    // let h = Math.floor(currency / 50);
    // if (h > 0) {
    //   currency = currency % 50;
    //   result['H'] = h;
    // }

    count('Q');
    // let q = Math.floor(currency / 25);
    // if (q > 0) {
    //   currency = currency % 25;
    //   result['Q'] = q;
    // }

    count('D');
    // let d = Math.floor(currency / 10);
    // if (d > 0) {
    //   currency = currency % 10;
    //   result['D'] = d;
    // }

    count('N');
    // let n = Math.floor(currency / 5);
    // if (n > 0) {
    //   currency = currency % 5;
    //   result['N'] = n;
    // }

    count('P');
    // let p = currency;
    // if (p > 0) {
    //   result['P'] = p;
    // }
            
    return result;
}
