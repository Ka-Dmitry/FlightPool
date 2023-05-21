var addPassengerButton = document.getElementById("addPassengerButton");
var removePassengerButton = document.getElementById("removePassengerButton");
var confirmPassengerButton = document.getElementById("confirmPassengerButton");
var existingPassengers = document.getElementById("existingPassengers");
var Clone = document.getElementById("existingPassengers");
function addPassengerForm() {
	$("<form class=\"wow fadeInLeft\" data-wow-delay=\"0.1s\"><fieldset><h1>Добавить пассажира</h1><label>Имя</label><input required type='text' class='test-5-name'><label>Фамилия</label><input required type='text' class='test-5-last'<label>Дата рождения</label><input required type='date' class='test-5-dob'><label>Номер документа</label><input required type='number' class='test-5-doc'><button onclick=\"this.parentNode.parentNode.remove(); document.getElementById('FinaleCost').textContent = Number(document.getElementById('FinaleCost').textContent) - 5723\" class='addingPassengersButton' id='cancelPassengerButton' type='button'>Отмена</button></fieldset></form>").appendTo($(".existingPassengers"));
	document.getElementById('FinaleCost').textContent = Number(document.getElementById('FinaleCost').textContent) + 5723;
}
addPassengerButton.onclick = addPassengerForm;
removePassengerButton.onclick = removePassenger;
confirmPassengerButton.onclick = confirmPassengerForm;