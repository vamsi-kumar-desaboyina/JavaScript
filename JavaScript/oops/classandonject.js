//Create a class Mobile with:
// properties: brand, price
// method: details() → prints brand + price

class Mobile
{
    constructor(brand,price)
    {
        this.brand=brand;
        this.price=price;
    }
    details()
    {
        console.log(`${this.brand} priceis ${this.price}`);
    }
}
let obj=new Mobile('vivo',33333);
obj.details();