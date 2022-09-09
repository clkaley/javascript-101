// const sayilar=[1,2,3,4,5,6,7,8,9];
// for(let sayi of sayilar ){
//     if(sayi%2===0){
//         console.log("sayi çifttir",sayi);
//     }else{
//         console.log("sayi tektir",sayi);
//     }
// }


// const sayilar=[1,2,3,4,5,6,7,8,9];
// const tekSayilar=[];

// for(let sayi of sayilar){
//     if(sayi%2===1){
//         tekSayilar.push(sayi)
   
//     }

// }

// console.log(tekSayilar);



//const sayilar=[1,2,3,4,5,6,7,8,9];

// const tekSayiKontrol=(sayi)=>{
//     sayi%2==1;
// }

//çağıralan fonksiyon üzerinden sayılar döndürülür
// const tekSayilar=sayilar.filter((sayi)=>
//     sayi%2==1);
// console.log(tekSayilar);




const sayilar=[1,2,3,4,5,6,7,8,9];
const tekSayilar=sayilar.map((sayi)=>
    sayi%2 == 1);
console.log(tekSayilar);