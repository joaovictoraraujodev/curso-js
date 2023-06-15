function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert(`[Erro] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = 2023 - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = `Homem`
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'components/imagens/bbm.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'components/imagens/homemj.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'components/imagens/homem.png')
            } else {
                // Velho
                img.setAttribute('src', 'components/imagens/velho.png')
            }
            
        } else if (fsex[1].checked) {
            genero = `Mulher`
            if (idade >=0 && idade < 10) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Velho
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}