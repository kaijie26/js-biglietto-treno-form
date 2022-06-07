const generateButtom = document.getElementById('generate-ticket');
generateButtom.addEventListener('click',
     function() {
         // RACCOLTA DATI DEL UTENTE TRAMITE IL FORM
         const userName = document.getElementById('user-name').value;
         const userKm = parseInt(document.getElementById('user-km').value);
         const userAge = document.getElementById('user-age').value;
         // CALCOLO IL PREZZO STANDARD
         let priceKm = 0.21;
         const ticketPrice = userKm * priceKm;

         // APPLICO LO SCONTO PER LE EVENTUALI FASCE D'ETÀ 
         let discount = 0;

         if (userAge === 'minorenne') {
             discount = ticketPrice * 0.2;
         } else if (userAge === 'over') {
            discount = ticketPrice * 0.4;
         }

         const finalPrice = ticketPrice - discount;
         const ticketFinalPrice = finalPrice.toFixed(2);

         // TICKET FINALE GENERATO DAL UTENTE
         document.getElementById('ticket-name').innerHTML = userName;
         let discountType = 'Biglietto Standard'
         if (userAge === 'minorenne') {
             discountType = 'Biglietto Minorenni'
         } else if (userAge === 'over') {
             discountType = 'Biglietto Over65'
         }
         document.getElementById('discount-type').innerHTML = discountType
         document.getElementById('ticket-price').innerHTML = ticketFinalPrice + '€'
         document.getElementById('carriage-number').innerHTML = Math.floor(Math.random() * 10);
         document.getElementById('code-cp').innerHTML = Math.floor(Math.random() * 100000);
         document.getElementById('ticket').classList.add('active')


     }

)
// RIMUOVO IL TICKET DOPO CHE L'UTENTE CLICCA 'ANNULLA'
const cancelTicket = document.getElementById('cancel-ticket')
cancelTicket.addEventListener('click',
    function() {
        // Svuoto il form
        document.getElementById('user-name').value = ''
        document.getElementById('user-km').value = ''
        document.getElementById('user-age').value = 'maggiorenne'
        // Rimuovo il ticket generato
        document.getElementById('ticket').classList.remove('active')
    }

)
