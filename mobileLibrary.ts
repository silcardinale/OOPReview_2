import {Mobile} from "./mobile";

export class  MobileLibrary{

    private name:string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice:number;

    constructor(name :string, location:string, mobiles:Mobile[]){

        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }

    public getName():string{
        return this.name;
    }
    public getLocation():string{
        return this.location;
    }
    
    public getMobiles():Mobile[]{
        return this.mobiles;
    }

    public setName(newName:string):string{
        return this.name = newName;
    }

    public setLocation(newLocation:string):string{
        return this.location = newLocation;
    }

    public setMobiles(newMobiles:[]):Mobile[]{
        return this.mobiles = newMobiles;
    }

    public TotalPriceCalculation():number{
        
        let result = 0;
        for(let i=0; i< this.mobiles.length; i++){
            result+= this.mobiles[i].getPrice();
        }
        return result;
    }
}