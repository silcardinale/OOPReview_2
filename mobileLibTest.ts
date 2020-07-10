import {MobileLibrary} from "./mobileLibrary";
import {Mobile} from "./mobile";

let movil_a = new Mobile("Iphone","11 Pro", "Apple","512 GB","Space Grey", true, 4, 1790);
let movil_b = new Mobile("Iphone","Xs Max", "Apple","128 GB","White", true, 3, 1650);
let movil_c = new Mobile("Samsung","Galaxy 10", "Samsung","32 GB","Silver", true, 2, 1210);
let movil_d = new Mobile("Iphone","6 Plus", "Apple","16 GB","Black", true, 1, 970);

let moviles = [movil_a, movil_b,movil_c,movil_d];

let movilesLib = new MobileLibrary("Casa Movil","Madrid",[movil_a, movil_b,movil_c,movil_d]);

console.log(movilesLib.TotalPriceCalculation());

console.log(movilesLib.getName());

console.log(movilesLib.setLocation("Barcelona"));
console.log(movilesLib.getLocation());

