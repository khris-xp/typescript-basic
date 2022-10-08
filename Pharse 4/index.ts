function calc_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    return discount;
}

console.log("Discount Amount :", calc_discount(1000));