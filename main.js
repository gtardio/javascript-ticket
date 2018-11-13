var age = prompt('Quanti anni hai?');
var km = prompt('Quanti Km hai percorso?');

var price = 0.21 * km;

if (age <= 18) {
  alert("Il costo del tuo biglietto è €" + ( price - (price * 20 / 100)));
}

else if (age >= 65) {
  alert("Il costo del tuo biglietto è €" + ( price - (price * 40 / 100)))
}

else {
  alert("Il costo del tuo biglietto è €" + price);
}
