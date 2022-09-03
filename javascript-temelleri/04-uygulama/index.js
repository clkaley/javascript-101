let meyveler=["elma","armut","muz","çilek"];
console.log(meyveler);

//! Kaç elemanlı
console.log("meyveler kaç elemanlı:",meyveler.length);

//! İlk eleman
console.log("meyveler [0]",meyveler[0]);

//! son eleman
console.log("meyveler [3]",meyveler[3]);
console.log("meyveler [3]",meyveler[meyveler.length-1]);

//! elma elamanı mı ?
console.log("elemenaı mı?",meyveler.includes("elma"));

//! kiraz ekle
console.log("ekle",meyveler.push("kiraz"));
console.log(meyveler);


//! eleman sil
console.log("sil",meyveler.pop());
console.log("sil",meyveler.pop());
console.log("meyveler",meyveler);


let ogrenciler=[["yiğit",2010,[60,70,80]],["ada",2015,[60,70,80]],["ahmet",2012,[60,70,80]]]
console.log(ogrenciler);


let date=new Date();
let yıl=date.getFullYear()
console.log(yıl);
console.log("yiğitin yaşı:",yıl-(ogrenciler[0][1]));
console.log("ada yaşı:",yıl-(ogrenciler[1][1]));
console.log("ahmet yaşı:",yıl-(ogrenciler[2][1]));