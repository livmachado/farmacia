import { Colors } from "../util/Colors";
import { formatCurrency } from "../util/Currency";

export abstract class Product {
    private _id:number;
    private _name:string;
    private _type:number;
    private _price:number;


	constructor(id: number, name: string, type: number, price: number) {
		this._id = id;
		this._name = name;
		this._type = type;
		this._price = price;
	}



	public get id(): number {
		return this._id;
	}


	public get nome(): string {
		return this._name;
	}


	public get type(): number {
		return this._type;
	}


	public get price(): number {
		return this._price;
	}

	public set id(value: number) {
		this._id = value;
	}


	public set nome(value: string) {
		this._name = value;
	}


	public set type(value: number) {
		this._type = value;
	}

	public set price(value: number) {
		this._price = value;
	}

    public view(): void{
        let type: string;

        switch(this._type){
            case 1:
                type = "Medicamento"
            break;
            case 2:
                type = "Medicamento";
            break;
            default:
                type = "Tipo Inválido";
        }

        console.log(Colors.bg.black, Colors.fg.white,"\n************************************");
        console.log("        DADOS DO PRODUTO            ");
        console.log("************************************");
        console.log(`Código: ${this._id}`);
        console.log(`Nome do Produto: ${this._name}`);
        console.log(`Tipo de Produto: ${type}`);
        console.log(`Preço: ${formatCurrency(this.price)}`, Colors.reset);
    }




}