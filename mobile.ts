export class Mobile {
    private name: string;
    private model: string;
    private trademark:string;
    private sdSize: string;
    private color: string;
    private is5G :boolean;
    private cameraNumber: number;
    private price: number;

    constructor (name: string, model: string,trademark:string,sdSize: string,color: string,is5G :boolean,cameraNumber: number,price: number){

        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    public getName():string{
            return this.name;
    }
    public setName(newName:string):string{
        return this.name = newName;
    }

    public getModel():string{
        return this.model;
    }
    public setModel(newModel):string{
        return this.model = newModel;
    }

    public getTrademark():string{
        return this.trademark;
    }
    public setTrademark(newTrademark:string):string{
        return this.trademark = newTrademark;
    }

    public getSdSize():string{
        return this.sdSize;
    }
    public setSdSize(sdSize:string):string{
        return this.sdSize = sdSize;
    }

    public getColor():string{
        return this.color;
    }
    public setColor(newcolor:string):string{
        return this.color = newcolor;
    }
    public getIs5G():boolean{
        return this.is5G;
    }
    public setIs5G(is5g:boolean):boolean{
         return this.is5G = is5g;

    }
    public getCameraNumber():number{
         return this.cameraNumber;
    }
    public setCameraNumber(newcamera:number):number{
        return this.cameraNumber = newcamera;
    }

    public getPrice():number{
        return this.price;
   }
   public setPrice(newprice:number):number{
       return this.price = newprice;
   }
    public mostrarTodos():string{

        return this.name +" " + this.model + " " + this.trademark + " " + this.color + " " + this.is5G + " " + this.cameraNumber + " " + "Eur" + this.price;
    }

    public Caracteristicas():string{

        return "The characteristics of the mobile name are: " + "\n" + "Name: " + this.name + " \n" + "Model: " + this.model + "\n" + "Trademark: " + this.trademark + "\n" + "SD Size (GB): " + this.sdSize + "\n" + "Color: " + this.color + "\n" + "Is 5G?: " + this.is5G + "\n" + "Number of Cameras: " + this.cameraNumber + "\n" + "Price: Eur" + this.price;
    }

}


