export default class Trabajadores {
    constructor (n, hT, hEx){
        this.nombre = n;
        this.horasTra = hT;
        this.horasExtra = hEx;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set horasTra(hT){
        this._horasTra = hT;
    }
    get horasTra(){
        return this._horasTra;
    }
    set horasExtra(hEx){
        this._horasExtra = hEx;
    }
    get horasExtra(){
        return this._horasExtra;
    }

    montoht(){
        return this.horasTra*10;
    }
 montohex(){
    return this.horasExtra*25;
 }
 total(){
    return this.montoht()+this.montohex();
 }

}
    