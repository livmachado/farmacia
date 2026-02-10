import { Colors } from "../util/Colors";
import { Product } from "./Product";

export class Cosmetic extends Product {
    private _fragrance: string;
    

    constructor(
        id: number,
        name: string,
        type: number,
        price: number,
        fragrance: string
    ) {
        super(id, name, type, price);
        this._fragrance = fragrance;
    }


    public get fragrance(): string {
        return this._fragrance;
    }


    public set fragrance(value: string) {
        this._fragrance = value;
    }

        // Método visualizar sobrescrito (Polimorfismo)
    public view(): void {
        super.view()
        console.log(Colors.bg.black, Colors.fg.white,`Fragância: ${this._fragrance}`,Colors.reset)
    }
    
}