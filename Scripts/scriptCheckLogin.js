var button = document.getElementById("loginButton");
function login () {
	if ((document.getElementById("pass").value != '')&&(document.getElementById("phone").value != '')){
		if ((document.getElementById("pass").value == 'password12*')&&(document.getElementById("phone").value == '89991234567')){
		window.location.href = "profile.html";
		}
		else{
		document.getElementById("checkLogin").textContent = "Введены неверные данные для входа";
		
		}
	}
	else{
		document.getElementById("checkLogin").textContent = "Пожалуйста, заполните все поля";
		document.getElementById("checkLogin").style.color = "red";
		document.getElementById("loginMain").style.margin = "146px auto";
	}
}
button.onclick = login;