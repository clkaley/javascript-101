//Öğrenci 1
let ogrenci1_isim="Ada Bilgi";
let ogrenci1_dt=2012;
let ogrenci1_not1=70
let ogrenci1_not2=70
let ogrenci1_not3=80


//Öğrenci 2
let ogrenci2_isim="Yiğit Bilgi Bilgi";
let ogrenci2_dt=2010;
let ogrenci2_not1=40
let ogrenci2_not2=40
let ogrenci2_not3=50


// Öğrenci Yaşları
let date=new Date
let year=date.getFullYear()
console.log(year);


let adaYas=year-ogrenci1_dt;
console.log("ada yaş:",adaYas);

let bilgiYas=year-ogrenci2_dt;
console.log("bilgi yaş:",bilgiYas);


//Öğrenci Not Ortalamaları
let ogrenci1_ort=(ogrenci1_not1+ogrenci1_not2+ogrenci1_not3)/3
console.log("Ada Not Ortalaması",ogrenci1_ort);

let ogrenci2_ort=(ogrenci2_not1+ogrenci2_not2+ogrenci2_not3)/3

console.log("Bilgi Not Ortalaması",ogrenci2_ort);


//Başarı Durumu
console.log("Öğrenci 1",ogrenci1_ort>=50);
console.log("Öğrenci 2",ogrenci2_ort>=50);
