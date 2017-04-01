function Pizza(name, size, pepperoni, jalapenos) {
  this.name= name;
  this.size = size;
  this.pepperoni = pepperoni;
  this.jalapenos = jalapenos;
  this.price = 0;
}

Pizza.prototype.calculateTotal = function() {
    if (this.size === "Small") {
      this.price = 12;
    }
    if (this.size === "Large"){
      this.price = 18;
    }
    if (this.pepperoni == true)
      this.price = this.price + 1;

    if (this.jalapenos == true)
      this.price = this.price + 1;


    var tax = (this.price * 0.18).toFixed(2);
    this.price = parseFloat(this.price) + parseFloat(tax);
};

function placeOrder() {
  document.getElementById("name-alert").innerHTML = "";


   var custName = document.getElementById("customer-name").value;
   if (custName == "")
     document.getElementById("name-alert").innerHTML = "<p><strong>Don't forget to enter a name!</strong></p>";
   else {

    var size = document.getElementById("pizza-size").value;
    var pepperoni = document.getElementById('pepperoni').checked;
    var jalapenos = document.getElementById('jalapenos').checked;

    var pizza = new Pizza(custName, size, pepperoni, jalapenos);
    pizza.calculateTotal();
    var pizzaPrice = pizza.price;

   var toppingsString = "";
   if (pepperoni == true && jalapenos == true)
      toppingsString = toppingsString + "Pepperoni and Jalapenos";
   else if (pepperoni == true && jalapenos == false)
      toppingsString = toppingsString + "Pepperoni";
    else if (pepperoni == false && jalapenos == true)
      toppingsString = toppingsString + "Jalapenos";
   document.getElementById("output").innerHTML = custName + "'s Order<br />" + "Size: " + size + "<br />" + "Toppings: " + toppingsString;
  }
}
