function contar() {
    let init = document.getElementById('txtn')
    let final = document.getElementById('txtn2')
    let pass = document.getElementById('txtn3')
    let res = document.getElementById('res')

    if (init.value.length == 0 || final.value.length == 0 || pass.value.length == 0) {
        res.innerHTML('[ERRO] Faltam dados!')
        //window.alert('[ERRO] Faltam dados! \u{1F975}')
    } else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(init.value)
        let f = Number(final.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1 ')
            p = 1
        }
        if ( i < f) {
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            //CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3C1}`
    }   
}
