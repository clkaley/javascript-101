//!ES5

function selam() {
    console.log("Merhaba");
}
selam()

// //!ES5
// var selamlamaES5=function(){
//     console.log("ES5 Fonksiyon tanımlama");
// }

// selamlamaES5();

// //!ES6
// const selamlama=()=>{
//     console.log("ES5 Fonksiyon Tanımalama");
// }


//!ES5
var selamlamaES5=function(isim){
    console.log("ES5 Fonksiyon tanımlama",isim);
}

selamlamaES5("ES5");

//!ES6
const selamlamaES6=(isim)=>{
    console.log("ES6 Fonksiyon Tanımalama",isim);
}

selamlamaES6("ES6")




var toplamES5=function(a,b){
    return a+b;;

}
var sonuc=toplamES5(9,12)
console.log("ES5:",sonuc);



const toplamES6=(a,b)=> a+b;


var sonuc=toplamES6(9,18);
console.log(sonuc);