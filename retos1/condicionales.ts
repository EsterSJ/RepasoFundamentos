function zodiac (day: number, month: string): string{
    switch (month){
        case "enero":
            if (day <= 22){
                return "Capricornio";
            }
            else{
                return "Acuario";
            }
            break;
        case "febrero":
            if (day <= 20){
                return "Acuario";
            }
            else{
                return "Piscis";
            }
            break;
        case "marzo":
            if (day <= 20){
                return "Piscis";
            }
            else{
                return "Aries";
            }
            break;
        case "abril":
            if (day <= 19){
                return "Aries";
            }
            else{
                return "Tauro";
            }
            break;
        case "mayo":
            if (day <= 20){
                return "Tauro";
            }
            else{
                return "Géminis";
            }
            break;
        case "junio":
            if (day <= 20){
                return "Géminis";
            }
            else{
                return "Cáncer";
            }
            break;
        case "julio":
            if (day <= 20){
                return "Cáncer";
            }
            else{
                return "Leo";
            }
            break;
        case "agosto":
            if (day <= 22){
                return "Leo";
            }
            else{
                return "Virgo";
            }
            break;
        case "septiembre":
            if (day <= 23){
                return "Virgo";
            }
            else{
                return "Libra";
            }
            break;
        case "octubre":
            if (day <= 23){
                return "Libra";
            }
            else{
                return "Escorpio";
            }
            break;
        case "noviembre":
            if (day <= 23){
                return "Escorpio";
            }
            else{
                return "Sagitario";
            }
            break;
        case "diciembre":
            if (day <= 23){
                return "Sagitario";
            }
            else{
                return "Capricornio";
            }
            break;
        default:
            return "Fecha incorrecta";
    }
}

// let signo: string;
// signo = zodiac(17,"enero");
// console.log(signo);

function continent (country: string){
    if (country == "España" || country == "Portugal" || country == "Francia" || country == "Belgica" || country == "Italia"){
        console.log("EUROPA");
    }else if (country == "Canada" || country == "Brasil" || country == "Argentina" || country == "Estados Unidos" || country == "Barbados"){
        console.log("AMERICA");
    }else if (country == "Japón" || country == "China" || country == "Indonesia" || country == "Singapur" || country == "Tailandia"){
        console.log("ASIA");
    }else if (country == "Nigeria" || country == "Kenia" || country == "Senegal" || country == "Tanzania" || country == "Marruecos"){
        console.log("AFRICA");
    }else if (country == "Nueva Zelanda" || country == "Australia" || country == "Fiyi" || country == "Samoa" || country == "Papua Nueva Guinea"){
        console.log("OCEANIA");
    }
}

// continent("España");
// continent("Japón");
// continent("Argentina");
// continent("Tanzania");
// continent("Australia");

function isEven(n: number){
    if (n%2==0){
        console.log("El número es par");
        
    }else{
        console.log("El número es impar");
        
    }
}

// isEven(89);
// isEven(102);

export {isEven}
