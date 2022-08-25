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
