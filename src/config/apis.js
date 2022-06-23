export const currencies =
  "https://api.coingecko.com/api/v3/simple/supported_vs_currencies";

export const Trending = (currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLowerCase()}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
};

export const Top100 = (currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
};
