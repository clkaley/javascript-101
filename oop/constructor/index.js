//Constructor

//constructor (kalıp,sınıf) tanımladığımız için ismin büyük harfle başlamasıa özen göstermeliyiz.




//constructordan bir nesne oluşturduk soru-1 diye
 let soru1 = new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
 },"c");

// let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
// },"b");
// console.log(soru1);
// console.log(soru2);

function Soru(soruMetni, cevapSecenekler, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekler = cevapSecenekler;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt=function(cevap){
      return cevap === this.dogruCevap;
    }
  }

let sorular=[ 
    new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
},"c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
},"b")]

for(let soru of sorular){
    console.log(soru);
}
console.log(soru1.cevabiKontrolEt("b"));

// cosnsole.log(sorular[0]);