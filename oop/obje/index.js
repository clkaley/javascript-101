//obje oluşturma
// objeye hizmet eden fonksiyonlar oluyor bunlara method diyoruz.
let soru={
    soruMetni:"Hangisi js paket yönetim uygulamasıdır ?",
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


let soru1={
    soruMetni:"Hangisi .net paket yönetim uygulamasıdır ?",
    cevapSecenekler:{
        a:"Node.js",
        b:"nuget",
        c:"Npm"
    },
    dogruCevap:"b",
    cevapKontrol:function (cevap) {
        return cevap === this.dogruCevap;
    }
}

console.log(soru1.soruMetni);
console.log(soru1.cevapKontrol("c"));