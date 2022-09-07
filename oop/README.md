# OOP

### Object 

oop=> nesne tabanlı programalama

obje nasıl oluşturulur ?
```
let soru={
    soruMetni:"Hnagisi js paket yönetim uygulamasıdır ?",
    cevapSecenekler:{
        a:"Node.js",
        b:"TypeScript",
        c:"Npm"
    },
    dogruCevap:"c"
}
```

Obje içindeki bilgilere property (özellik) denir. Objeye hizmet eden fonksiyonlar oluyor bunlara method diyoruz.


```
let soru={
    soruMetni:"Hnagisi js paket yönetim uygulamasıdır ?",
    cevapSecenekler:{
        a:"Node.js",
        b:"TypeScript",
        c:"Npm"
    },
    dogruCevap:"c",
    //objeye hizmet eden method
    cevapKontrol:function (cevap) {
        return cevap === this.dogruCevap;
    }
}
```


```
let soru={
    soruMetni:"Hnagisi js paket yönetim uygulamasıdır ?",
    cevapSecenekler:{
        a:"Node.js",
        b:"TypeScript",
        c:"Npm"
    },
    dogruCevap:"c",
    cevapKontrol:function (cevap) {
        return cevap === this.dogruCevap;
    }
}

console.log(soru.soruMetni);
console.log(soru.cevapKontrol("c"));
```

![Ekran Görüntüsü (558)](https://user-images.githubusercontent.com/74673470/188906609-911e448f-acfe-4e6b-bc49-047ae63757eb.png)




Sınıf -> Nesne


##### Constructor
Constructor -> ES5 versiyondur.


constructor (kalıp,sınıf) tanımladığımız için ismin büyük harfle başlamasıa özen göstermeliyiz.

index.js
```
function Soru(){

}
```


index.js
```
function Soru(soruMetni, cevapSecenekler, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekler = cevapSecenekler;
  this.dogruCevap = dogruCevap;
}

//constructordan bir nesne oluşturduk soru-1 diye

let soru1 = new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
},"c");


console.log(soru1);
```

![Ekran Görüntüsü (560)](https://user-images.githubusercontent.com/74673470/188935777-0ee08ec1-6685-496a-8c92-c09492ee1ece.png)



Birden fazla soru yazabiliriz nesne ismi vermeden array oluşturup bunları oranın içine yazdırabilirsiniz.

```
let sorular=[ 
    new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
},"c"),
    new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
},"c")]



console.log(sorular[0]);

```





For döngüsüyle sırasıyla dizidekileri bastırma
```
let sorular=[ 
    new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
},"c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
},"b")]

for(let soru of sorular){
    console.log(soru);
}
```

![Ekran Görüntüsü (563)](https://user-images.githubusercontent.com/74673470/188937292-a3128122-3be1-49d3-9678-bfa79054913b.png)



```
function Soru(soruMetni, cevapSecenekler, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekler = cevapSecenekler;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt=function(cevap){
      return cevap === this.dogruCevap;
    }
  }

   let soru1 = new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
 },"c");


    console.log(soru1.cevabiKontrolEt("b"));
```



### Prototype

Prototype (prototip) özelliği Javascript’te Inheritance’ın (kalıtımın) temelini oluşturmaktadır. Inheritance var olan class’ları kullanarak, yeni class’lar tanımlanmasına olanak sağlamaktadır.


index.js
```
  Soru.prototype.cevabiKontrolEt=function(cevap){
    return cevap === this.dogruCevap;
  }
```

