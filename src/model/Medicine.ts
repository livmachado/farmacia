import { Colors } from "../util/Colors";
import { Product } from "./Product";

export class Medicine extends Product {
    private _generic: string;
    

	constructor(
        id: number,
        name: string,
        type: number,
        price: number,
		generic: string
    ) {
        super(id, name, type, price);
        this._generic = generic;
	}


	public get generic(): string {
		return this._generic;
	}


	public set generic(value: string) {
		this._generic = value;
	}

    	// Método visualizar sobrescrito (Polimorfismo)
	public view(): void {
		super.view()
        console.log(Colors.bg.black, Colors.fg.white,`Genérico: ${this._generic}`,Colors.reset)
	}
    
}