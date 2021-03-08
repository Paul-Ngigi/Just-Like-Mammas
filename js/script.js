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
    function resetFields() {
        $("input#county").val("");
        $("input#city").val("");
        $("input#street").val("");
    };
    $("#addOrder").click(function () {
        $("#pizzaOrder").append('<div class="newOrder mt-3">' +
            '<select class="size form-select" aria-label="Default select example">' +
            '<option selected>Choose Your Pizza Size</option>' +
            '<option value="small">Small</option>' +
            '<option value="large">Medium</option>' +
            '<option value="medium">Large</option>' +
            '</select>' +
            '<div class="topping mt-3">' +
            '<h4>Choose Your Favourite Toppings</h4>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Meatlovers (Ksh 50)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">' +
            '<label class="form-check-label" for="inlineCheckbox2">Pepperoni Pizza (Ksh 80)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">' +
            '<label class="form-check-label" for="inlineCheckbox3">Potato-Rosemary-Pizza (Ksh 50)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Prawn Pizza (Ksh 60)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Proscuitto Rocket Pizza (Ksh 70)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Quattro Formaggio Four Cheese Pizza (Ksh 90)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Sausage and kale pizza (Ksh 50)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Supreme Pizza (Ksh 100)</label>' +
            '</div>' +
            '</div>' +
            '<select class="crust form-select mt-3" aria-label="Default select example">' +
            '<option selected>Choose     Your Pizza Crust</option>' +
            '<option value="Crispy">Crispy</option>' +
            '<option value="Stuffed">Stuffed</option>' +
            '<option value="Gluten-Free">Gluten-Free</option>' +
            '</select>' +
            '<input type="number" class="form-control mt-3" id="pizzaNumber" placeholder="Number of pizzas" min="1" required />' +
            '</div>'
        );
    });
    $('#addDelivery').click(function () {
        $("#newAddress").show();
    })
    $("form#orderForm").submit(function (event) {
        event.preventDefault();

        let inputtedPizzaSize = $("select.size").val();
        let inputtedPizzaTopping = $("select.topping").val();
        let inputtedPizzaCrust = $("select.crust").val();
        let newOrder = new Order(inputtedPizzaSize, inputtedPizzaTopping, inputtedPizzaCrust);

        // console.log("Pizza size " , inputtedPizzaSize);
        // console.log("Pizza topping " , inputtedPizzaTopping);
        // console.log("Pizza crust " , inputtedPizzaCrust);

        $("#new-address").each(function () {
            let inputtedCounty = $(this).find("input#county").val();
            let inputtedCity = $(this).find("input#city").val();
            let inputtedStreet = $(this).find("input#street").val();
            let newAddress = new Addresses(inputtedCounty, inputtedCity, inputtedStreet);
            newOrder.address.push(newAddress);
        })
        // console.log(newOrder);

        // console.log("County " , inputtedCounty);
        // console.log("City " , inputtedCity);
        // console.log("Street " , inputtedStreet);s


    });

});