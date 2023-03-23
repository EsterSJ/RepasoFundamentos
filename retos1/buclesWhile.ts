function hasEven(myNums: number[]): boolean{
    let existe: boolean = false;
    let i: number = 0;
    
    while (!existe && i < myNums.length){
        if (myNums[i]%2 == 0){
                existe = true;
        }
        i++;        
    }
    return existe;
}

console.log(hasEven([3,5,7,9,11,25,1]));
console.log(hasEven([3,5,4,9,11,25,1]));

function startWithM(myNames: string[]): boolean{
    let all: boolean = true;
    let i: number = 0;
    while (i < myNames.length && all){
        if (myNames[i][0] != "M"){
            all = false;
        }
        i++;
    }
    return all;
}

console.log(startWithM(["Maria","Macarena","Miguel"]));
console.log(startWithM(["Maria","Jorge","Miguel"]));


