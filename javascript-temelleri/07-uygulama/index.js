//! kendisine gönderilen kelimeyi belirtilen ke z kadar ekranda yazan fonsk
function yazdir(kelime,adet){
     for(let i=0;i<adet ;i++){
        console.log(kelime);
     }
}
yazdir("aleyna",5)
//! dikdörtgen alan ve çevre hesaplama
function dikdortgen(a,b){
    let cevre=2*a+2*b;
    let alan=a*b;
    return `"cevre",${cevre},"alan",${alan};`
}
let sonuc=dikdortgen(2,5)
console.log(sonuc);


//! yazı tura uygulamasını fonk kullanarak yapma
function at(){
    let sayi=Math.floor(Math.random() * 101);
    console.log(sayi);
    if(sayi>50){
       console.log("yazi");
    }else{
        console.log("tura");
    }
   
}
at()

//! kendisine gönderilen fonksiyonun tam bölenlerini dizi şeklinde döndüren fonk
function tamBolenler(sayi){
    let sayilar=[]
    for(let i=0;i<sayi;i++){
      if(sayi%i==0){
        sayilar.push(i)
      }
    }
    return sayilar
}
console.log(tamBolenler(10))



//! değişken sayıda parametre alan toplam isminde fonksiyon
