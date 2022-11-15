import KonyvekController from "../controller/KonyvekController.js";
import KonyvekModel from "../model/KonyvekModel.js";
import KonyvekView from "./KonyvekView.js";

class KonyvPublikView{
    #element
    #szuloelem 
    constructor(element,szuloelem){

        console.log(element)
        this.#element = element;
        this.#szuloelem = szuloelem;
        let txt = `
        <div class="konyvTarolo">   
            <h1>${element.cim}</h1>  
            <p>${element.szerző}</p> 
            <p>${element.darab}</p>
            <button class="elveszGombocska">elvétel</button>
        </div>`;

            szuloelem.append(txt);
        

        this.elveszGomb = $(`.elveszGombocska:last-child`);
        this.elveszGomb.on("click",()=>{
            console.log("Kivontam")
            this.kattintasTrigger("kivonas");
        })

    }
    kattintasTrigger(esemenyNev){
        const esemeny = new CustomEvent(esemenyNev,{detail:this.#element.id});
        window.dispatchEvent(esemeny);
    }

}
export default KonyvPublikView