var button = document.getElementById("searchButton");
function search () {
	if ((document.getElementById("placeFlightFrom").value != '')&&(document.getElementById("placeFlightTo").value != '')&&(document.getElementById("dateFlightTo").value != '')&&(document.getElementById("dateFlightBack").value != '')){
		window.location.href = "search.html";
	}
	else{
		document.getElementById("check").textContent = "Пожалуйста, заполните все поля";
		document.getElementById("check").style.color = "red";
	}
}
button.onclick = search;