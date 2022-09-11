// function constructor ile kalıp olşturup bu kalıbın üzerinden yeni nesne kalıbı oluşturuyoduk.






// function constructor
function KisiES5(ad,meslek,dyil){
    this.ad=ad;
    this.meslek=meslek;
    this.dyil=dyil;
    this.yasHesapla=function(tarih){
        return tarih-this.dyil;
    }
}

let emre=new KisiES5("emre","mühendis",1998);
let ahmet=new KisiES5("ahmet","mühendis",1999);
console.log(emre,ahmet);
console.log(emre.yasHesapla(2022));





//class

class Kisi {
    constructor(ad,meslek,dyil){
        console.log("nesne oluşturuldu");
        this.ad=ad;
        this.meslek=meslek;
        this.dyil=dyil;
        }

        yasHesapla(){
            let tarih=new Date().getFullYear();
            return tarih-this.dyil;
    }
}

let kisi1=new Kisi("ali","mühendis",1952);
console.log(kisi1.yasHesapla());
