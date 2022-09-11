//Kişi =>k1,k2
//ogrenci=>o1,o2 kişi içerisindeki metotları tekrar tekrar yazmaktansa kişi class ından miras laırız


//temel sınıf
class Kisi{
    constructor(ad,dogumyili){
        console.log("kişi const");
        this.ad=ad;
        this.dogumyili=dogumyili
    }
    yasHesapla(){
        let tarih=new Date().getFullYear()
        return  tarih-this.dogumyili;
    }
    kendiniTanit(){
        return `benim adım ${this.ad} `
    }
}


//öğrenci temelden bir kişi sınıfından türetilmiş bir sınıftır.
//child sınıf
class Ogrenci extends Kisi{
    constructor(ad,dogumyili,okulNumarasi){
        console.log("öğrenci const");
        super(ad,dogumyili);
        this.okulNumarasi=okulNumarasi;

    }
    dersCalis(){
       return `${this.ad} ders çalışıyor`;
    }
}


let kisi=new Kisi("ali",1998);
console.log(kisi.yasHesapla());
let ogrenci=new Ogrenci("ahmet",1990,651648615);
console.log(ogrenci.yasHesapla());
console.log(ogrenci.dersCalis());
console.log(ogrenci.kendiniTnait());