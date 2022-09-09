const mesaj=["benim","adım","aleyna"];

// let sonuc="";
// for (let msg of mesaj){
//     sonuc+=msg+" ";
// }


// console.log(sonuc);


console.log(...mesaj)


const dizi1=["bir","iki"];
const dizi2=["iki","uc"];

const dizi3=[dizi1,dizi2];
console.log(dizi3);

const dizi4=[...dizi1,...dizi2]
console.log(dizi4);



const x=[1,2,3,4,5,6];
const y=x; 
x[2]="selam"
console.log("x:",x,"y:",y);



const t=[1,2,3,4,5,6];
const w=[...t]; 
t[2]="hello"
console.log("t:",t,"w:",w);



const user={
    name:"aleyna",
    surname:"celik"
};

const address={
    city:"İstanbul",
    street:"Çakı"
}

const userInfo=({...user,...address})
console.log(userInfo);



//! Fonksiyon içinde kullanımına rest parametreleri deniyor.

function toplam(...args){
    let sonuc=0;
    for (let sayi of args){
        sonuc+=sayi
    }
    return sonuc
}

console.log(toplam(1,35,4));
console.log(toplam(1,7,369,357));


function bilgileriGoster(firstname,lastname,...addres){
    console.log(firstname,lastname,addres);
}

bilgileriGoster("aleyna","celik","istanbul","kocaeli")