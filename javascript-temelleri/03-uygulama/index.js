let url="https://www.w3schools.com/"
let kursAdi="Komple Web Geliştirme Kursu"


//! 1- url kaç karakterlidir ?
console.log("url karakteri:",url.length);


//! 2- kurs adi kaç kelimeden oluşmaktadır ?
let kelime=kursAdi.split(" ").length
console.log("kelime",kelime);


//! 3- url https ile mi başlıyor
let baslangic=url.startsWith("https")
console.log("başlangıç",baslangic);


//! 4- kurs adi içerisinde eğitim keimesi var mı
let varMi=kursAdi.includes("eğitim");
console.log("var mı?" ,varMi);


//! 5- url+kurs adi birleşsin
kursAdi=kursAdi.toLowerCase();
kursAdi=kursAdi.replaceAll(" ","-")
let birlestir=`${url}${kursAdi}`
console.log("birlestir",birlestir);