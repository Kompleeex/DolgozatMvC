import KonyvPublikView from "./konyvPublikView.js";

class KonyvekView{
    constructor(elem, szuloelem){
       console.log(elem)
        elem.forEach(element => {
            console.log(element)
            const konyvem = new KonyvPublikView(element,szuloelem)
        });
    }
}
export default KonyvekView