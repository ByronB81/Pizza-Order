//Back End

function Pizza(name, size, topping, price) {
  this.name= name;
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

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
  var tax = (price * 0.18).toFixed(2);
  total = price + tax;
  console.log(total);
};




//Front End

$(function() {
  $("#blanks form").submit(function(event){
    event.preventDefault();
    var orderName = $("input#customer-name").val();
    var pizzaSize = $("#pizza-size").val();
    var pizzaTopping = $("input:checkbox[name-topping]:checked");
    var newPizza= new Pizza(orderName, pizzaSize);
    if (orderName){
      if (pizzaSize) {
        if (pizzaTopping) {

          $.each($(pizzaTopping), function() {
            newPizza.topping.push($(this).val());
          })

          newPizza.total();
          console.log(total)
          $("order-name").text(newPizza.name);
          $(".pizza-size-output").text(newPizza.size);
          $(".pizza-toppings-output1").text("WHY YOU NO WORK?");
          alert("topping worked");

        }
        alert("sizer worked");

        $(".pizza-price-output").text(newPizza.price);
        $("#output").show();
        $("#size-alert").hide();
        $("#name-alert").hide();
        resetFields();
      } else{
      $("#size-alert").show();
      $("#name-alert").hide();
    }
    else{
    $("#name-alert").show();
    $("#size-alert").hide();
    }

  }
});
