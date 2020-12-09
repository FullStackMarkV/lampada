let img = document.getElementById('imagem')
    img.onmouseenter = function () {
        if (img.src.match('lamp_1.png')) {
            img.src = 'lamp_0.png'
        } else {
            img.src = 'lamp_1.png'
        }
    }