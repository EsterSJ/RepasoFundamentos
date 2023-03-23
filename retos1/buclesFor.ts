function evenNumbers(num: number){
    for (let i = 0; i < num; i++){
        if (i%2!=0){
            console.log(i);
            
        }
    }
}

evenNumbers(23);

function myRevert(myArr: number[]): number[]{
    let arrayRevertido: number[] = [];
    for (let i = myArr.length-1; i >= 0; i--){
        arrayRevertido.push(myArr[i]);
    }
    return arrayRevertido
}

console.log(myRevert([1,2,3,4,5,6,7,8,9,10]));

function isRainbow(colors: string[]){
    for (let i = 0; i < colors.length; i++){
        switch (colors[i]){
            case "rojo":
            case "naranja":
            case "amarillo":
            case "verde":
            case "azul":
            case "añil":
            case "violeta":
                console.log("El color " + colors[i] + " está en el arcoiris");
                break;
            default:
                console.log("El color " + colors[i] + " no está en el arcoiris");    
        }
    }
}

isRainbow(["verde","morado","rosa","amarillo","blanco","rojo","gris","naranja"]);

function add(myWords: string[]): number{
    let suma: number = 0;
    for (let word of myWords){
        suma += word.length;
    }
    return suma;
}

console.log(add(["verde","morado","rosa","amarillo","blanco","rojo","gris","naranja"]));
