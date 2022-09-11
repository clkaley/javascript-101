//class

class Kisi {
  constructor(ad, meslek, dyil) {
    console.log("nesne oluşturuldu");
    this.ad = ad;
    this.meslek = meslek;
    this.dyil = dyil;
  }

  yasHesapla() {
    let tarih = new Date().getFullYear();
    return tarih - this.dyil;
  }

  get ad(){
    return this._ad;
  }
  set ad(value){
    if(value.length<3){
        console.log("isminiz bu kadar kısa olamaz");
    }
    this._ad=value
  }
}

let kisi1 = new Kisi("ali ", "mühendis", 1952);
console.log(kisi1.ad);