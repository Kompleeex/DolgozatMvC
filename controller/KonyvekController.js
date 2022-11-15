import KonyvekView from "../view/KonyvekView.js"
import KonyvekModel from "../model/KonyvekModel.js"

class KonyvekController{
    constructor(){
        // 
        const konyvmodel = new KonyvekModel();
        konyvmodel.adatBe("../adat.json",this.konyvAdatok);

    }

    konyvAdatok(elem){
        let szuloElem=$(".FoTárolo");
        //new KonyvekModel(tomb,szuloElem);
        const konyvekView = new KonyvekView(elem,szuloElem);
        console.log(elem)
    }
}
export default KonyvekController