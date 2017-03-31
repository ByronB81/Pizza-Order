//Back End

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

var price = 0

Pizza.prototype.total = function() {
    if (this.size === "Small") {
      price = 12;
    };
    if (this.size === "Large"){
      price = 18;
    };
    for (i = 1; i <= this.topping.length; i++){
      console.log(this.topping.length);
    price = price + 1;
  }
  var tax = (price * 0.18);
  total = price + tax;
  console.log(total);
};




//Front End
//
// };
// $(document).ready(function() {
//
//   $("#formOrder").submit(function(event) {
//
//     event.preventDefault();
