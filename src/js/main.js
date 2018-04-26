// active/unactive Return date input
document.getElementById('roundtrip').onclick = function() {
    if ( this.checked ) {
        document.getElementById('return-date').removeAttribute("disabled");
    } else {
        document.getElementById('return-date').setAttribute("disabled", "disabled");
        document.getElementById('return-date').value = "";
    }
};

// show/hide main menu on mobile
function showMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// add city from tags in input
var departureCity = document.getElementById('departure-city');
var arrivalCity = document.getElementById('arrival-city');

function setDepartureCity(val){
    departureCity.value = val
}
function setArrivalCity(val){
    arrivalCity.value = val
}

// set element value into pseudo-select
var el = document.getElementById('select');
function span(val){
    el.value = val
}