/*var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
if (diaSem == 0) {
    console.log(`Domingo`)
}
else if (diaSem == 1) {
    console.log(`Segunda`)
}
else if (diaSem == 2) {
    console.log(`Terça`)
}
else if (diaSem == 3) {
    console.log(`Quarta`)
}
else if (diaSem == 4) {
    console.log(`Quinta`)
}
else if (diaSem == 5) {
    console.log(`Sexta`)
}
else {
    console.log(`Sábado`)
}
This is one way to make without the switch case
 */

/* Lets go now use switch case for making this challenge */ 
var agora = new Date()
var diaSem = agora.getDay()
//console.log(diaSem) 
switch(diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:  
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5: 
        console.log(`Sexta`) 
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`[ERRO] dia inválido`)    
        break                          
}