console.log('form')

const inputKm = document.getElementById('Kilometri')
const selectSconto = document.getElementById('sconto')
const btnprezzo = document.getElementById('converti')
const divRisultato = document.getElementById('risultato')

console.log(inputKm, selectSconto, btnprezzo, divRisultato)

btnprezzo.addEventListener('click', function () {

	// 1. leggere il valore inserito dall'utente nell'input km
	const Kilometri = parseFloat(inputKm.value) // string
	console.log(Kilometri)

	// 2. devo leggere il valore dello sconto selezionato dall'utente nella select sconto

	const sconto = selectSconto.value
	console.log(sconto)

    const COSTO_PER_KM = 0.21
    const prezzoBase = COSTO_PER_KM * Kilometri

	// 3. calcolare LO SCONTO
    let scontoApplicato = 0

	if (sconto === 'Intero') {
	   scontoApplicato = 0
	} else if (sconto === 'Studente') {
       scontoApplicato = 20 * prezzoBase / 100
	} else if (sconto === 'Over65') {
	   scontoApplicato = 40 * prezzoBase / 100
	}

    const Biglietto = prezzoBase - scontoApplicato

	// 4. stampare il prezzo del biglietto
	divRisultato.innerHTML = `${Biglietto.toFixed(2)} EUR`
})