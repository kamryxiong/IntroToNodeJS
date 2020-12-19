var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'ecommerce'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	let sql = 'CREATE DATABASE ecommerce';
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// table
CREATETABLE[dbo].products([product_id] INTNOTNULLPRIMARYKEYIDENTITY,[product_image_url] NVARCHAR(250)NULL,[product_price] NVARCHAR(250)NULL,[product_description] NVARCHAR(250)NULL,[inventory_amount] NVARCHAR(250)NULL,[date_created] NVARCHAR(50)NULL, [date_uptdated] NVARCHAR(50)Null)
INSERTINTOproducts(product_id,[product_image_url],product_price,product_description,inventory_amount, date_created, date_uptdated)
VALUES ('1','','$10','','13'), ('2','','$12','','10'),('3','','$18','','20'), ('4','','$15','','16'),('5','','$24','','13'),('6','','$25','','16'), ('7','','$15','','23'),('8','','$13','','21'),('9','','$24','','25'),('10','','$24','','30')

CREATETABLE[dbo].cart_item([cart_id] INTNOTNULLPRIMARYKEYIDENTITY,[user_id] NVARCHAR(250)NULL,[product_id] NVARCHAR(250)NULL,[quantity] NVARCHAR(250)NULL,[date_created] NVARCHAR(250)NULL,[date_uptdated])
INSERTINTOcart_item(cart_id,[user_id],product_id,quantity,date_created, date_uptdated)

db.query(sql, (err, result) =>{
	if(err) throw err;
	console.log(result);
	res.send('product table created..');

})

db.query(sql, (err, result) =>{
	if(err) throw err;
	var sql = "SELECT TOP 6 * FROM products";
	var sql = "INSERT INTO cart_item (product_id, product_price, inventory_amount) VALUES ('1','$10','13'), ('2','$12','10'),('3','$18','20')";
	var sql = "UPDATE cart_item SET quantity = '2' WHERE cart_id = '4'";
	var sql = "SELECT * FROM cart_id;
	var sql = "DELETE FROM cart_id WHERE user_id = '1'";
	console.log(result);
	res.send('product table created..');

})


connection.end();