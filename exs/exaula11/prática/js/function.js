function check() {
    const country = document.getElementById('country');
    const p = document.querySelector('.closed_p');
    p.classList.toggle('opened_p');
    p.classList.toggle('closed_p');
    country.value = country.value.toUpperCase();
    if (country.value == "") {
       p.innerHTML = `Valor <span class="error">INVALIDO!</span> Por favor clique nas setas ao lado da caixa de texto e digite qual o seu País de Origem`
    } else if (country.value == "BRASIL") {
       p.innerHTML = `País de origem <span class="brasil">${country.value}</span>: Você é <span class="brasil">Brasileiro!</span>`
    } else {
       p.innerHTML = `País de origem <span class="stranger">${country.value}</span>: Você é <span class="stranger">Estrangeiro!</span>`
    }
}

function imgclick() {
   const country = document.getElementById('country');
   const p = document.querySelector('.opened_p');
   p.classList.toggle('closed_p');
   p.classList.toggle('opened_p');
   if (country.value != "") {
      country.value = ""
   }
}