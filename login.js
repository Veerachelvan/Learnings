let email = document.getElementById("email");
let pass = document.getElementById("password");
let alertm = document.getElementById("alertEmail");
let alertp = document.getElementById("alertPassword");
let rememberme = document.getElementById('rememberme').value;
let pettern = /[a-zA-Z0-9.-_%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
let funTimeout;


// funtion for view password 
let viewpassword = document.getElementById("viewpassword");
viewpassword.onclick = function (){

	if (pass.type == "password"){
		pass.type = "text";
		viewpassword.setAttribute("src", "view.png")
	}
	else{
		pass.type = "password";
		viewpassword.setAttribute("src", "hide.png")
	}
	
}

loginStatus = false;

// funtion to handle PASSWORD validation
function handleValidation(event) {
	let email = document.getElementById("email").value;
	let pass = document.getElementById("password").value;

	if (pettern.test(email) && pass.length > 0) {

		let dummy = new Map([
			["test@gmail.com", "123456789"],
			["user88216-d@aol.com", "ropmvvim"],
			["user22254@outlook.com", "cbzuxckh"],
			["user68537@yahoo.com", "p8rlcnng"],
			["user42041@gmail.com", "cygvxm2m"],
			["user40325@outlook.com", "81vf1ore"],
			["user28013@aol.com", "o87584ya"],
			["user95342@gmail.com", "p81wyfih"],
			["user36874@yahoo.com", "pvyo5ir8"],
			["user50713@gmail.com", "0rxs5cxg"],
			["user92907@outlook.com", "y62xul53"]
		]);
		const auth = dummy.get(email);
		// Clear Timeout

		if (funTimeout) {
			clearTimeout(funTimeout);
		}

		// handling  pop-up box and email & password checking

		if (auth == pass) {
			let green = document.getElementById("pop-up");
			green.setAttribute("class", "pop-up-green");
			green.textContent = "Entered a valid email password";
			loginStatus = true;
			// set time out for popup-green

			funTimeout = setTimeout(() => closePopUp(green), 2000);

		}
		else {
			let red = document.getElementById("pop-up");
			red.setAttribute("class", "pop-up-red");
			red.textContent = "Enter correct email and password";
			loginStatus = false;

			// set time out for popup-red

			funTimeout = setTimeout(() => closePopUp(red), 2000);

		}

		event.preventDefault();
	}
	else {
		// handling alert message after press the button

		emailAlert(event);
		passAlert(event);

		console.log("enter valid email and password")
		event.preventDefault();
	}

}

// handling alert message before press the button

// for email alert message funtion
function emailAlert(event) {
	console.log("email validation test")

	if (!pettern.test(email.value)) {
		alert(alertm,email);
	}
	else {
		closeAlert(alertm,email);
	}
}

//for password alert message funtion
function passAlert(event) {
	console.log("password validation test")
	if (!(pass.value).length > 0) {
		alert(alertp,pass);
	}
	else {
		closeAlert(alertp,pass);
	}
}

// alert function

function alert(alertBox, ipBox){
		alertBox.style.display = 'block';
		ipBox.style.border = "1px solid red"
}

// close alert function

function closeAlert(alertBox,ipBox){
	alertBox.style.display = 'none';
	ipBox.style.removeProperty('border');
}

//close pop-up function

function closePopUp(color) {
	color.setAttribute("class", "pop-up");
	if(loginStatus){
		window.location.href="home.html";
	}
}