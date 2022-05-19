interface Car {
color: string;
}
 
interface Audi extends Car {
plateNumber: number;
}
 
let audi = {} as Audi;
audi.color = "blue";
audi.plateNumber = 10;