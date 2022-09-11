## ES6 ES7 

##### Arrow Function

* ES5

```
function selam() {
    console.log("Merhaba");
}
selam()
```



```
var selamlamaES5=function(){
    console.log("ES5 Fonksiyon tanımlama");
}

selamlamaES5();
```

* ES6

```
const selamlama=()=>{
    console.log("ES5 Fonksiyon Tanımalama");
}
```


* ES5 ES6 Parametreli


```
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


Çıktı
ES5 Fonksiyon tanımlama ES5
ES6 Fonksiyon Tanımalama ES6

```



```
var toplam=function(a,b){
    return a+b;;

}
var sonuc=toplam(9,12)
console.log("ES5:",sonuc);

Çıktı 
21

```




```
const toplamES6=(a,b)=> a+b;


var sonuc=toplamES6(9,18);
console.log(sonuc);

```




##### Arrays

```
const sayilar=[1,2,3,4,5,6,7,8,9];
for(let sayi of sayilar ){
    if(sayi%2===0){
        console.log("sayi çifttir",sayi);
    }else{
        console.log("sayi tektir",sayi);
    }
}

```




Tek sayıla diyip dizi oluşturduktan sonra onun üzerine ekleyebiliriz.

```

const sayilar=[1,2,3,4,5,6,7,8,9];
const tekSayilar=[];

for(let sayi of sayilar){
    if(sayi%2===1){
        tekSayilar.push(sayi)
   
    }

}

console.log(tekSayilar);

```





```
const sayilar=[1,2,3,4,5,6,7,8,9];

const tekSayiKontrol=(sayi)=>{
    sayi%2==1;
}

//çağıralan fonksiyon üzerinden sayılar döndürülür
const tekSayilar=sayilar.filter(tekSayiKontrol);
console.log(tekSayilar);

```


Fonksiyon yerine direkt filter içinde de bu metod yazılabilir.
```
const tekSayilar=sayilar.filter((sayi)=>
    sayi%2==1);
console.log(tekSayilar);

```




##### Spread Operator
Özellikle dizi kopyalama işlemlerinde işimize yarıyor.


```
const mesaj=["benim","adım","aleyna"];

let sonuc="";
for (let msg of mesaj){
    sonuc+=msg+" ";
}

console.log(sonuc);
Çıktı 
benim adım aleyna
```



Spread operatörüyle kolayca yaptık :)

```
const mesaj=["benim","adım","aleyna"];
console.log(...mesaj)

Çıktı
benim adım aleyna
```



Dizileri birleştirmek isterse dizi 1 ve 2 dizinin alt elemanları olur.
```
const dizi1=["bir","iki"];
const dizi2=["iki","uc"];

const dizi3=[dizi1,dizi2];
console.log(dizi3);

Çıktı
(2) [Array(2), Array(2)]
0
: 
(2) ['bir', 'iki']
1
: 
(2) ['iki', 'uc']
```




Burda Spread Operatörüyle bunu yaparsak dizinin direkt elemanları olarak geliyor
```
const dizi1=["bir","iki"];
const dizi2=["iki","uc"];

const dizi4=[...dizi1,...dizi2]
console.log(dizi4);

Çıktı
['bir', 'iki', 'iki', 'uc']
```




* Referans Kopyalama
Kopyalama işlemi referans olarak yapılıyor. Bu elemanlardan herhangi bir tanesinde değişiklik yaparsak iki dizide de mevcut değişiklik yansır
```
const x=[1,2,3,4,5,6];
const y=x; //referans kopyalama
console.log("x:",x,"y:",y);

Çıktı
x: (6) [1, 2, 3, 4, 5, 6] 
y: (6) [1, 2, 3, 4, 5, 6]

```



Değişiklik İçin

```
const x=[1,2,3,4,5,6];
const y=x; 
x[2]="selam"
console.log("x:",x,"y:",y);

Çıktı
x: (6) [1, 2, 'selam', 4, 5, 6] 
y: (6) [1, 2, 'selam', 4, 5, 6]
```






* Value Kopyalama
```
const t=[1,2,3,4,5,6];
const w=[...t]; //value kopyalama
console.log("t:",t,"w:",w);

Çıktı
t: (6) [1, 2, 3, 4, 5, 6] 
w: (6) [1, 2, 3, 4, 5, 6]
```

Değişklik için
```
const t=[1,2,3,4,5,6];
const w=[...t]; 
t[2]="hello"
console.log("t:",t,"w:",w);

Çıktı
t: (6) [1, 2, 'hello', 4, 5, 6] 
w: (6) [1, 2, 3, 4, 5, 6]
```



* Obje için spread operatör kullanımı
```
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

Çıktı
{name: 'aleyna', surname: 'celik', city: 'İstanbul', street: 'Çakı'}

```


* Fonksiyon İçinde Spread Operator
Fonksiyon içinde kullanımına rest parametreleri deniyor.
```


function toplam(...args){
    let sonuc=0;
    for (let sayi of args){
        sonuc+=sayi
    }
    return sonuc
}

console.log(toplam(1,35,4));
console.log(toplam(1,7,369,357));
Çıktı
40
734

```




```
function bilgileriGoster(firstname,lastname,...addres){
    console.log(firstname,lastname,addres);
}

bilgileriGoster("aleyna","celik","istanbul","kocaeli")
Çıktı
aleyna celik (2) ['istanbul', 'kocaeli']
```







##### Destructuring
Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.


* Array

```
let name=["aleyna","celik"];

let firstName=name[0];
let lastName=name[1];

console.log(firstName,lastName);


Çıktı
aleyna celik

```



Burda dizi ataması yaparak dizinin 0. indexteki eleman firtName e 21. indexteki eleman lastName e aktarılır.
```
let name=["aleyna","celik"];
let [firstName,lastName]=name
console.log(firstName,lastName);

Çıktı
aleyna celik

```



* Object 
```
let urun={
    marka:"Apple",
    model:"ıphone 14",
    fiyat:50000
}

let {marka,model,fiyat}=urun;
console.log(marka,model,fiyat);

Çıktı
Apple ıphone 14 50000
```







##### Maps


```
const ogrenciler=new Map();
console.log(ogrenciler);
```

![Ekran Görüntüsü (567)](https://user-images.githubusercontent.com/74673470/189534248-59770ba1-69f1-4332-b070-371d9ccb37e1.png)







```
const ogrenciler=new Map();
//Key value şeklinde ilk yazılanlar key key türü any istediğimiz türden olabilir.

ogrenciler.set(1,"Ali Çörük")
ogrenciler.set("numara","012458745120");
ogrenciler.set(true,"dfadad")
console.log(ogrenciler);
```

![Ekran Görüntüsü (569)](https://user-images.githubusercontent.com/74673470/189534394-b2b15772-804f-48c7-8220-5937ea25311c.png)




Key bilgisiyle value yi çekme
```
const ogrenciler=new Map();

ogrenciler.set(1,"Ali Çörük")
ogrenciler.set("numara","012458745120");
ogrenciler.set(true,"dfadad")

let sonuc=ogrenciler.get(1);
console.log(sonuc);

Çıktı
Ali Çörük
```


Key değerlerini for döngüsüyle bastırma
value içinde sadece keys yerine values() yazılır

```
const ogrenciler=new Map();


ogrenciler.set(1,"Ali Çörük")
ogrenciler.set("numara","012458745120");
ogrenciler.set(true,"dfadad")


for(let i of ogrenciler.keys()){
    console.log(i);
}

Çıktı
1
numara
true

```


##### Sets
A JavaScript Set is a collection of unique values.



```
const sayilar=new Set();
console.log(sayilar);

```

![Ekran Görüntüsü (571)](https://user-images.githubusercontent.com/74673470/189534960-ed5c31d0-9833-476b-a746-14edcc1b127a.png)



```
const sayilar=new Set([1,2,3]);

console.log(sayilar);

```
![Ekran Görüntüsü (573)](https://user-images.githubusercontent.com/74673470/189535036-8c4142dc-8975-4c4c-9d35-25555df7f51e.png)



Aynı değerden 2 tane verirsek bir tanesini alır
```
const sayilar=new Set();
sayilar.add(1)
sayilar.add(2)
sayilar.add(3)
sayilar.add(4)
sayilar.add(4)
console.log(sayilar);


```
![Ekran Görüntüsü (575)](https://user-images.githubusercontent.com/74673470/189535146-8662b868-3436-48db-bf1c-06d67e63918c.png)




```

```






```

```






##### Class


##### Getter & Setter


##### Inheritance
