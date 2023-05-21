var button = document.getElementById("registerButton");
var name = document.getElementById("name");
var surname = document.getElementById("surname");
var doc = document.getElementById("doc");
var phone = document.getElementById("phone");
document.getElementById("checkRegister").style.color = "red";
function search () {
	var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
	if ((name.value != '') && (surname.value != '') && (doc.value != '') && (phone.value != '') && (password.value != '') && (password2.value != '')){
		if (password.length < 7){
			document.getElementById("checkRegister").textContent = "В пароле должно быть минимум 7 символов";
		} else if ((password.indexOf('0') == -1) && (password.indexOf('1') == -1) && (password.indexOf('2') == -1) && (password.indexOf('3') == -1) && (password.indexOf('4') == -1) && (password.indexOf('5') == -1) && (password.indexOf('6') == -1) && (password.indexOf('7') == -1) && (password.indexOf('8') == -1) && (password.indexOf('9') == -1)){
			document.getElementById("checkRegister").textContent = "В пароле должна быть хотя бы одна цифра";
		} else if ((password.indexOf('!') == -1) && (password.indexOf('*') == -1) && (password.indexOf('$') == -1)){
			document.getElementById("checkRegister").textContent = "В пароле должен быть хотя бы 1 символ: '!', '*', '$'";
		} else if (password != password2){
			document.getElementById("checkRegister").textContent = "Вы неверно повторили пароль";
		} else{
			window.location.href = "profile.html";
		}
	}
	else{
		document.getElementById("checkRegister").textContent = "Пожалуйста, заполните все поля";
	}
}
button.onclick = search;