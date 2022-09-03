function selamlama(){
    console.log("selam");
}

selamlama()


function merhaba(msg){
    console.log(msg);
}

merhaba("merhaba canım")

function yasHesaplama(dogumYili){
    return new Date().getFullYear()-dogumYili;
}
yasHesaplama(1990)
let yasAhmet=yasHesaplama(1990);
console.log(yasAhmet);
yasHesaplama(1952);
yasHesaplama(1998);


// function emeklilik(dogumYili,isim){
//      let yas=yasHesaplama(dogumYili)
// }