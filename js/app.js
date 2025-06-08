console.log('form')

//leggo i dati dal DOM

const formElement = document.getElementById('form-biglietto')
const InputKM = formElement.querySelector("#Km")
const SelectSconto = formElement.querySelector("#sconto")

const prezzoOutputElement = document.querySelector('#biglietto .prezzo')

console.log(InputName, InputKM, SelectSconto)

//ascolto evento click

formElement.addEventListener('submit', function (event) {
	event.preventDefault() // blocca l'invio del form
	console.log('submit del form', event)
// leggo i valori dei dati inseriti nel form

const kmValue = parseFloat(InputKM.value)
const scontoValue = SelectSconto.value
const nameValue = InputName.value

console.log(kmValue, scontoValue, nameValue)

const prezzoBase = kmValue * 0.21

let percentualeSconto = 0

	if (scontoValue === 'minorenni') {
		// utente ha selezionato minorenni
		percentualeSconto = 20
	} else if (scontoValue === 'over65') {
		// utente ha selezionato over 65
		percentualeSconto = 40
	}

	const sconto = (prezzoBase * percentualeSconto) / 100

	const prezzoFinale = prezzoBase - sconto

	prezzoOutputElement.innerHTML = prezzoFinale.toFixed(2) + ' &euro;'

 })