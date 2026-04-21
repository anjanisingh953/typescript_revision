"use strict";
//super() is used to calling a parent class constructor
//we should use super() before using "this" in a child constructor
//private properties & methods can be access only inside the current class but not outside the class
//protected properties & methods can be access only inside the current class and its child classes but not outside the class
//we use static keyword for any property or methods then it can be directly access by class Name without creating an instance
class Product {
    name;
    price;
    pId;
    static inCart = false;
    isOrdered = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is ordered at price rs.${this.price}`;
        }
        else {
            return `No product is add to cart`;
        }
    }
}
var product = new Product('Iphone17', 154000, 123);
product.addToCart();
console.log(product.buyProduct());
console.log(Product.inCart); //inCart has public access modifier
var product = new Product('Samsung Galaxy', 65000, 124);
product.addToCart();
console.log(product.buyProduct());
//privat access modifier example
class OrderData extends Product {
    constructor() {
        super('Macbook 15', 89000, 125);
    }
    getPrice() {
        return `Price data from child class ${this.price}`;
    }
}
var order = new OrderData();
console.log(order.getPrice());
class CustomError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
    displayErrorinfo() {
        return `${this.statusCode} statusCode found with message: ${this.message}`;
    }
}
const error = new CustomError('Internal server error', 501);
console.log(error.displayErrorinfo());
//# sourceMappingURL=class.js.map