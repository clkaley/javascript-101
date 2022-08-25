// Uygulama 1
let a=45;
if(a>10 && a<50){
    console.log("a 10-50 arasındadır.");
}else{
    console.log("a 10-50 arasında değildir");
}



// Uygulama 2
let b=9;
if(b%2==0 || b>0){
    console.log("Sayı Çift ve Pozitiftir Sayıdır");
}else{
    console.log("Sayı Tek ve Negatiftir");
}



// Uygulama 3
let x=10,y=30,z=20;
if(x>y || x>z){
    console.log("En büyük x tir");
}else if(y>x || y>z){
    console.log("En büyük y dir");
}else if(z>x || z>y){
    console.log("En büyük z dir");
}else{
    console.log("Sayılar eşittir");
}




// Uygulamada 4
let vize1=20;
let vize2=20;
let finalnot=70
let ort=(((vize1*40)/100)+((vize2*40)/100)+((finalnot*60)/100))
console.log(ort);

if(ort>50 && finalnot>=50 || ort<=50 && finalnot>=70){
    console.log("Geçtin");  
}
else{
    console.log("Kaldın");
}

