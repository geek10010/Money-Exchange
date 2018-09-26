// PLEASE DON'T change function name
module.exports = function makeExchange(input) {
  // Return an object containing the minimum number of coins needed to make change
  let currency = input;

  if (currency <= 0) return {};

  if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };
  }

  const result = {};
  const moneyValues = {
    H: 50, Q: 25, D: 10, N: 5, P: 1,
  };

  const count = (value) => {
    const num = Math.floor(currency / moneyValues[value]);
    if (num > 0) {
      currency %= moneyValues[value];
      result[value] = num;
    }
  };

  ['H', 'Q', 'D', 'N', 'P'].forEach(value => count(value));

  return result;
};
