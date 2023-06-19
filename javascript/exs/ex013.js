var agora = new Date()
var dia = agora.getDate()
console.log(`Hoje é dia ${dia}.`)
if (dia <=15){
    console.log('Estamos no inicio do mês')
}
else{
    console.log('Estamos no final do mês')
}