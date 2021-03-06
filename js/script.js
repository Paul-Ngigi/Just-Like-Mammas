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

        let inputtedPizzaSize = $("select.size").val();
        let inputtedPizzaTopping = $("select.topping").val();
        let inputtedPizzaCrust = $("select.crust").val();

        console.log("Pizza size " , inputtedPizzaSize);
        console.log("Pizza topping " , inputtedPizzaTopping);
        console.log("Pizza crust " , inputtedPizzaCrust);

        let inputtedCounty = $("input#county").val();
        let inputtedCity = $("input#city").val();
        let inputtedStreet = $("input#street").val();

        console.log("County " , inputtedCounty);
        console.log("City " , inputtedCity);
        console.log("Street " , inputtedStreet);

    });

});