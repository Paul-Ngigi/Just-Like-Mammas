$(document).ready(function () {
    console.log("Content Loaded");
    // Business Logic
    function Order(size, topping, crust) {
        this.Pizzasize = size;
        this.Pizzatopping = topping;
        this.Pizzacrust = crust;
        this.address = []
    }
    function Addresses(county, city, street) {
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
        let newOrder = new Order(inputtedPizzaSize,inputtedPizzaTopping,inputtedPizzaCrust);
        
        // console.log("Pizza size " , inputtedPizzaSize);
        // console.log("Pizza topping " , inputtedPizzaTopping);
        // console.log("Pizza crust " , inputtedPizzaCrust);

        let inputtedCounty = $("input#county").val();
        let inputtedCity = $("input#city").val();
        let inputtedStreet = $("input#street").val();
        let newAddress = new Addresses(inputtedCounty,inputtedCity,inputtedStreet);
        newOrder.address.push(newAddress);
        // console.log(newOrder);

        // console.log("County " , inputtedCounty);
        // console.log("City " , inputtedCity);
        // console.log("Street " , inputtedStreet);

        $("input#county").val("");
        $("input#city").val("");
        $("input#street").val("");
    });

});