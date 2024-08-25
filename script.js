function toggleMode() {
    const html = document.documentElement

    //mais simplificado do classList para light mode//
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector('#profile img')

    //substituir a imagem//
    if(html.classList.contains('light')) {
    //se estiver com o light mode, adicionar a imagem light
    img.setAttribute ('src', './assets/avatar-light.png')
    } else {
    //se tiver sem light mode, mantem a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    }
}