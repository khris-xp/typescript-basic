function calc_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    return discount;
}
console.log("Discount Amount :", calc_discount(1000));
