function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')

//pegar a tag img
const img = document.querySelector("#profile img")

// subistituir a imagem
if(html.classList.contains('light')) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute('src', './Assets/Avatar-bismark.png.jpeg')

} else {
// se tiver sem light mode, manter a imagem normal
img.setAttribute('src', './Assets/Avatar-bismark.png.jpeg')
img.setAttribute('alt', "Foto de Bismark com camisa de Socorrista")

}


}
