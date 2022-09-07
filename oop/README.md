# OOP

### Object Oluşturma

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

```


````