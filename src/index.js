// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change

    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let result = {};

    let h = Math.floor(currency / 50);
    if (h > 0) {
      currency = currency % 50;
      result['H'] = h;
    }

    let q = Math.floor(currency / 25);
    if (q > 0) {
      currency = currency % 25;
      result['Q'] = q;
    }

    let d = Math.floor(currency / 10);
    if (d > 0) {
      currency = currency % 10;
      result['D'] = d;
    }

    let n = Math.floor(currency / 5);
    if (n > 0) {
      currency = currency % 5;
      result['N'] = n;
    }

    let p = currency;
    if (p > 0) {
      result['P'] = p;
    }
            
    return result;
}
