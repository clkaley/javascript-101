const ogrenciler=new Map();
console.log(ogrenciler);

ogrenciler.set(1,"Ali Çörük")
ogrenciler.set("numara","012458745120");
ogrenciler.set(true,"dfadad")
console.log(ogrenciler);


let sonuc=ogrenciler.get(1);
console.log(sonuc);


for(let i of ogrenciler.keys()){
    console.log(i);
}