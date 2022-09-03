let sayilar=[1,5,7,15,3,22,8]

//! sayiların karesi
for(let i=0;i<sayilar.length;i++){
    let kare=sayilar[i]*sayilar[i]
    console.log("kare",kare);
}

for(let sayi of sayilar){
    console.log(sayi*sayi);
}


for(let i=0; i<sayilar.length;i++){
    if(sayilar[i]%5==0){
        console.log("5 e bölünen",sayilar[i]);
    }
}


let toplam=0;
for(let i=0; i<sayilar.length;i++){
    if(sayilar[i]%2==0){
        toplam+=sayilar[i];
        console.log("çift",sayilar[i]);
        console.log("toplam",toplam);
    }
}



let urunler=["iphone 12","samsung s22","samsung s23"];
for(let i=0;i<urunler.length;i++){
    console.log(urunler[i].toUpperCase());
}


let adet=0;
for(let urun in urunler){
    if(urunler[urun].includes("samsung")){
        adet++;
        console.log("adet",adet);
        console.log(urunler[urun]);
    }
}

let ogrenciler=[
    {
        "ad":"ali","soyad":"atik","notlar":[60,70,80]
    },
    {
        "ad":"ayşe","soyad":"atik","notlar":[50,70,80]
    },
    {
        "ad":"fatma","soyad":"atik","notlar":[90,70,80]
    },

]


for(let ogrenci of ogrenciler){
    console.log(ogrenci.notlar);
}

