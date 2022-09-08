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




```



```






```



```





```



```




##### Spread Operator


##### Destructuring


##### Maps


##### Sets


##### Class


##### Getter & Setter


##### Inheritance
