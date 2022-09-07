function Soru(soruMetni, cevapSecenekler, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekler = cevapSecenekler;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt=function(cevap){
      return cevap === this.dogruCevap;
    }

    console.log(this);
  }

  Soru.prototype.cevabiKontrolEt=function(cevap){
    return cevap === this.dogruCevap;
  }

  let soru1 = new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
 },"c");

 let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır ?", { a: "Node.js",b: "nuget",c: "Npm",
 },"b");



console.log({});