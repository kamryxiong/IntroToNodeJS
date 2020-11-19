console.log('lab7q3');

var email = 'xiongk@uwosh.edu';
var password = 7;
var confirmpassword = 5;

var emailalert = 'Invalid email, please try again';
var passwordalert = 'Password must contain at least 6 characters';
var confirmpasswordalert = 'Password does not match, please try again';

var check = " ";
var display = '"Welcome!"';

if (email = '@uwosh.edu') {
	check = check + password;
}
else if (email != '@uwosh.edu') {
	display = emailalert;
}

if (password >= 6) {
	check = check + password;
}
else if (password < 6) {
	display = passwordalert;
}

if (confirmpassword = password) {
		display = 'Welcome';
}
else if (confirmpassword != password) {
		display = confirmpasswordalert;
}

console.log(display);