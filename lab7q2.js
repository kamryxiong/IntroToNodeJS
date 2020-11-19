console.log ('lab7q2');

var price = 5.99;
var quantity = 5;
var alert = 'Quantity must be less than 6';

var totalcost = '"Total Cost" is ' + price * quantity;

if (quantity > 5) {
	display = alert;
}
else if (quantity <= 5)
 display = totalcost; 


console.log(display);