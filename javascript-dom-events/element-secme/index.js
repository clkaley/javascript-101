// let sonuc;
// sonuc=document.getElementById("title").innerText;
// sonuc=document.getElementById("title").className;

// document.getElementById("title").style.color="red"

// console.log(sonuc);



let sonuc;
sonuc=document.getElementsByClassName('task')[0].innerHTML;
sonuc=document.getElementsByClassName('task');

// for(let i=0;i<=sonuc.length;i++){
//     console.log(sonuc[i]);
// }

for(let task of sonuc){
    task.style.color="red"
    console.log(sonuc);
}
console.log(sonuc);