//array destructuring
let name=["aleyna","celik"];

// let firstName=name[0];
// let lastName=name[1];


// let [firstName,lastName]=name
// console.log(firstName,lastName);


let user=["aleyna","celik","istanbul","gop"]
let[firstName,lastName,city,town]=user
console.log(firstName,lastName,city,town);



//object destructuring
let urun={
    marka:"Apple",
    model:"ıphone 14",
    fiyat:50000
}

let {marka,model,fiyat}=urun;
console.log(marka,model,fiyat);