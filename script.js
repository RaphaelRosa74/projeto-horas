function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/morning.jpg'
        document.body.style.background = '#e5ba5b'
    } else if(hora >= 12 && hora < 18){
        img.src = 'imagens/afternoon.jpg'
        document.body.style.background = '#405260'
    } else{
        img.src = 'imagens/night.jpg'
        document.body.style.background = '#414457'
    }
}