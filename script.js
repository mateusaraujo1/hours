var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var image = document.getElementById('imagem')

var HOURS = window.document.getElementById('hours')
HOURS.innerHTML = `Bom dia! agora são ${hora}:${minuto}`

if (hora >= 12 && hora < 18) {
    HOURS.innerHTML = `Boa tarde! agora são ${hora}:${minuto}`

    image.innerHTML = '<img src="IMG/afternoon.png" alt="image afternoon"></img>'
    document.body.style.background = '#d69c09'
} else if (hora >= 18 || hora < 6) {
    HOURS.innerHTML = `Boa noite! agora são ${hora}:${minuto}`
    
    image.innerHTML = '<img src="IMG/night.png" alt="image night"></img>'
    document.body.style.background = '#0e3e78'
}
