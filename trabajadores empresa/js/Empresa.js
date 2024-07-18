export default class Empresa {
    constructor (){
        this.acumhex = 0;
        this.auxmenorsal = 50000;
        this.auxnombre = "";

    }
    procesartrabajadores(tra){
    this.acumhex+= tra.montohex();
    if (tra.total() < this.auxmenorsal){
        this.auxmenorsal = tra.total();
        this.auxnombre = tra.nombre;
    } 
    }
    devolvertotalhex(){
        return this.acumhex;
    }
    devolvertotalmenor(){
        return this.auxmenorsal;
    }
    devolvernommenor(){
        return this.auxnombre;
    }   
}