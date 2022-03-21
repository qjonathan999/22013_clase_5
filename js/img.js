export default class Imagen{
    constructor(src,alto,ancho){
        this.src=src
        this.alto=alto
        this.ancho=ancho
    }
    render(){
        return`<img src="${this.src}" width="${this.ancho}" height="${this.alto}">`
    }
}