function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem1') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' Horas'
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'rgb(199, 144, 26)'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.jpg'
        document.body.style.background = 'rgb(223, 175, 121)'
    }
    else{
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'rgb(59, 36, 73)'
    }
}
