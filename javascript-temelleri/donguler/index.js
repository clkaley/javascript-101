for(let i=0;i<10;i++){
    console.log(i);
}


let toplam=0;

let sayilar=[0,5,88,9,4,5,63];
for(let i=0;i<sayilar.length;i++){
    console.log("i",sayilar[i]);
    toplam+=sayilar[i];
    console.log(toplam);
}


for(let index in sayilar ){
    console.log("sayi",index);
}