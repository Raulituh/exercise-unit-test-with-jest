let oneEuroIs = {
   "USD": 1.07,
    "JPY": 156.5,
    "GBP": 0.87,
};

function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };