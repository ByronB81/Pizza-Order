//Back End

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

var price = 0

Pizza.prototype.total = function() {
    if (size = "Small") {
      price = 12;
    };
    if (size = "Large"){
      price = 18;
    };
    for (i = 1; i <= this.topping.length; i++){
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
