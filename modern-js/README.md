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


##### Destructuring


##### Maps


##### Sets


##### Class


##### Getter & Setter


##### Inheritance
