# Javascript - 101

### Javascript Temelleri

###### 01-Değişkenler

```
let urunAd="vestel-tv"; 
let urunFiyat=5000; 
console.log(typeof urunAd);
console.log(typeof urunFiyat);

Çıktı:
string
number
```




```
let sayi1="10"
let sayi2="15";

let toplam=sayi1+sayi2;
console.log(toplam); 
// String i number a çevirme
console.log(Number(sayi1)+Number(sayi2)); //number şeklinde olur

Çıktı: 
1015 

```




```
let sayi3=10
let sayi4=20;

let toplam2=sayi3+sayi4;
console.log(toplam2); //number şeklinde olur
//string e çevirme ardından toplama
console.log(sayi3.toString()+sayi4.toString());

Çıktı:
30
1020
```



```
let isim="aleyna"
let soyad="celik"
console.log(isim+soyad);

Çıktı
aleynacelik
```


```
let sinavNotu=80;
let basariDurumu=(sinavNotu>70)
console.log(basariDurumu);
console.log(typeof basariDurumu);

Çıktı:
true
boolean
```



```
let yas;
console.log(yas);
console.log(typeof yas);

Çıktı:
undefined (muted)
undefined
```





```
let sira=""
console.log(sira);
console.log("sira",typeof sira);

Çıktı:
null
sira string

```


###### 02-Operatörler

* Aritmetik Operatörler
" + - * / % şeklindedir"

```
sonuc=a+b;
sonuc=a-b;
sonuc=a*b;
sonuc=c/a;
sonuc=c%a;
```


* Atama Operatörleri

```
sonuc = a;
sonuc += a // sonuc = sonuc + a 
sonuc -= a // sonuc = sonuc - a 
sonuc *= a // sonuc = sonuc * a 
sonuc /= a // sonuc = sonuc / a 
sonuc %= a // sonuc = sonuc % a 
```

* Karşılaştırma Operatörleri

```
sonuc = (a == b)
sonuc = (a != b)
sonuc = (3 === "3") // değer tip
sonuc = (a > b)
sonuc = (a < b)
sonuc = (a <= b)
```


###### 02-03- If Else

```
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```


* and  &&
true , true => true
true , false => false

* or ||
true, true => true
true, false => true
false, false => false




##### String Metodlar

```
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

Çıktılar:
sonuc komple web geliştirme eğitimi
KOMPLE WEB GELIŞTIRME EĞITIMI
29
e Web Geliştirme Eğitimi
Komple
Komple frontEND Geliştirme Eğitimi
2
['', '', 'Komple', 'Web', 'Geliştirme', 'Eğitimi', '', '', '']
Çıktıları yok örnek olarak verildi
sonuc=kurs.trim() //sağ ve soldan boşluk siler
sonuc=kurs.trimStart() //baştaki boşlukları siler
sonuc=kurs.trimEnd() //sondaki boşlukları siler
```





```
let ad = "Aleyna";
let soyad = "Çelik";
let yas = 23;
let sehir = "İstanbul";

let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yaşıyorum.' + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı.';

// Template literals 
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı.`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.${emeklilik}`;

console.log(mesaj);

```


### Numbers


```
let sonuc;
console.log(sonuc);
console.log("tipi",typeof sonuc);

Çıktılar
undefined
tipi undefined
```


```
let sonuc;
sonuc=10;
console.log(sonuc);
console.log("tipi",typeof sonuc);

Çıktılar
10
tipi number
```



```
let sonuc;
sonuc="10";
console.log(sonuc);
console.log("tipi",typeof sonuc);

Çıktılar
10
tipi string

```




### Dates Times
```
let simdi=new Date()//şimdiki tarih bilgisi, saat bilgisi var
console.log("simdi",simdi);
console.log("sonuc",typeof simdi);


Çıktı
Sat Sep 03 2022 13:26:28 GMT+0300 (GMT+03:00)
object
```



```
let simdi=new Date() 
let sonuc=simdi.getDate();//gün

console.log("sonuc", sonuc);

Çıktılar
3 //3 eylül dü
```





```
let simdi=new Date() 
let sonuc=simdi.getDay();//gün bilgisi

console.log("sonuc", sonuc);

Çıktılar
6 -> Cumartesi demek
```





```
let simdi=new Date() 
let sonuc=simdi.getFullYear(); //yıl bilgisi

console.log("sonuc", sonuc);

Çıktılar
2022
```



