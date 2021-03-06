$(document).ready(function () {
    console.log("Content Loaded");
    // Business Logic
    function order(size, topping, crust) {
        this.Pizzasize = size;
        this.Pizzatopping = topping;
        this.Pizzacrust = crust;
        this.address = []
    }
    function addresses(county, city, street) {
        this.county = county;
        this.city = city;
        this.street = street;
    }

    // User Interface Logic
    $("form#orderForm").submit(function(event){
        event.preventDefault();
    });

});