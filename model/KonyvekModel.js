class KonyvekModel{

    #KonyvekTomb = [];
    constructor(){
        
    }

    adatBe(vegpont, Mycallback){
        fetch(vegpont,{
            method:'GET',
            header:{
                'content-Type': 'application/json', 
            }
        })
            .then((response) => response.json())
            .then((data)=>{
                this.#KonyvekTomb=data.konyv;
                console.log(this.#KonyvekTomb)
                Mycallback(this.#KonyvekTomb);
            })
            .catch((error)=>{
                console.log('error', error);
            });

    }
}
export default KonyvekModel