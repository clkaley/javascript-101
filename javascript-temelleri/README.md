# Javascript - 101

### Javascript Temelleri

##### 01-Değişkenler

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


##### 02-Operatörler

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


##### 02-03- If Else

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


##### Numbers


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




##### Dates Times
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


##### Diziler

```
let urun1="iphone 12"
let urun2="iphone 12"
let urun3="iphone 12"

let urunler=["iphone 12i","iphone 13","iphone 14"];
let fiyatlar=[9000,2000,3000];

console.log("ürünler:",urunler);
console.log("fiyatlar:",fiyatlar);
```

![Ekran Görüntüsü (539)](https://user-images.githubusercontent.com/74673470/188269140-53d24f28-9ac8-4418-b18a-c557d6a1c1cd.png)



###### Dizi Metodları

```
let ogrenciler=["çınar","ayşe","fatma"]
console.log("ogrenciler:" ,ogrenciler);
console.log("ogrencilerin uzunluğu:" ,ogrenciler.length);
console.log("ogrencilerin toString:" ,ogrenciler.toString());
console.log("öğrenciler join",ogrenciler.join(" "));


Çıktılar:
ogrenciler: (3) ['çınar', 'ayşe', 'fatma']
ogrencilerin uzunluğu: 3
ogrencilerin toString: çınar,ayşe,fatma
öğrenciler join çınar ayşe fatma
```


##### Objects



```
let user={
    "name":"ali",
    "lastname":"turan",
}
console.log(user);
console.log(typeof user);

Çıktılar
{name: 'ali', lastname: 'turan'}
object
```



```
let user={
    "name":"ali",
    "lastname":"turan",
    "yas":38,
    "adres":"istanbul"
  
}
console.log(user.name);
console.log(user.yas);

Çıktılar
ali
38
```



```
let user={
    "name":"ali",
    "lastname":"turan",
    "yas":38,
    "adres":{
        "sehir":"kocaeli",
        "ilçe":"izmit"
    }
}

console.log(user.adres.ilçe);
console.log(user.adres.sehir);

Çıktılar
kocaeli
izmit

```



```
let user={
    "name":"ali",
    "lastname":"turan",
    "yas":38,
    "adres":{
        "sehir":"kocaeli",
        "ilçe":"izmit"
    },
    "hobiler":["sinema","kitap","yüzme"]
}

console.log(user.hobiler[0]);

Çıktılar
sinema
```




##### Döngüler


```
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```


```
for(let i=0;i<10;i++){
    console.log(i);
}
```

![Ekran Görüntüsü (541)](https://user-images.githubusercontent.com/74673470/188281820-1c3599bb-460a-4c68-9617-65efc7b37239.png)



##### Fonksiyonlar

```
function selamlama(){
    console.log("selam");
}
selamlama()

Çıktı
selam
```


```
function merhaba(msg){
    console.log(msg);
}

merhaba("merhaba canım")

Çıktı
merhaba canım
```


```
function yasHesaplama(dogumYili){
    console.log( new Date().getFullYear()-dogumYili);
}

yasHesaplama(1990);
yasHesaplama(1952);
yasHesaplama(1998);

Çıktılar
32
70
24
```



```
function yasHesaplama(dogumYili){
    return new Date().getFullYear()-dogumYili;
}

yasHesaplama(1990)
let yasAhmet=yasHesaplama(1990);

Çıktı
burda return değeri döner ama satıra yazdırma ama o değeri vardır mevcutta
32

```

##### Scopes


Fonksiyon kapsamı içerisinden dışarda olan kapsama erişebiliyoruz.


```
var isim="aleyna" //global scope
function yaz(){
    console.log(isim);
}
yaz();


Çıktı
aleyna
```


Fonksiyon önce kendi kapsamına bakar bulamazsa global scope a gider.
```
var isim="aleyna"

function yaz(){
    var isim="ayşe"
    console.log(isim);
}

yaz();
console.log("isim",isim);

Çıktı
ayse
aleyna
```



```

function yaz(){
    var isim="ayşe"
    var yas=25;
    console.log(isim,yas);
}

yaz();

Çıktı
ayşe 25
```



```
function yaz(){
    var isim="ayşe"
    var yas=25;
    console.log(isim,yas);
}
yaz();
console.log(yas);

Çıktılar
ayşe 25
Uncaught ReferenceError: yas is not defined at hata çünkü global scope da ulaşmalıyım. Dar kapsamdan geniş kapsama ulaşamıyoruz malesef :(
```

if ve for bloğu ayrı bir kapsam oluşturumuyo global scope dur.
```
if(true){
    var isim="ali"
    console.log(isim);
}
console.log(isim);

Çıktı
ali
ali
```

* yani fonksiyonlar kendi scope alanlarını oluşturur
* block (let const) içerisinde yeni bir scope oluşmaz


```
if(true){
    let isim="mahmut"
    console.log(isim);
}
console.log(isim);

Çıktı
mahmut
ali
```



```
const adres="istanbul"
adres="Kocaeli"

Çıktı
Uncaught TypeError: Assignment to constant variable at
```
