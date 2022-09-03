let kurs="  Komple Web Geliştirme Eğitimi   "

let sonuc;
sonuc=kurs.toLowerCase() // küçük harfe çevirme
sonuc=kurs.toUpperCase() //büyük harfe çevirme
sonuc=kurs.length //uzunluğunu bulma
sonuc=kurs.slice(5) //kesme parçalama
sonuc=kurs.substring(0,6) // kesme slice gibi
sonuc=kurs.replace("Web","frontEND") //içeriği değiştirme
sonuc=kurs.indexOf("Komple") //arama özelliği hangi indexte 2 çıktısı çünkü boşluklar var
sonuc=kurs.split(" ") //dizi olarak getirme



// sonuc=kurs.trim() //sağ ve soldan boşluk siler
// sonuc=kurs.trimStart() //baştaki boşlukları siler
// sonuc=kurs.trimEnd() //sondaki boşlukları siler
console.log("sonuc",sonuc);

//Çıktılar