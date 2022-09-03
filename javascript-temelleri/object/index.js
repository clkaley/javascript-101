let user1=["ali","turan",18];
let user2=["ali","turan",18];

let user={
    "name":"ali",
    "lastname":"turan",
    "yas":38,
    "adres":{
        "sehir":"kocaeli",
        "ilçe":"izmit"
    },
    "hobiler":["sinema","kitap","yüzme"]
}

console.log(user);
console.log(typeof user);

console.log(user.name);
console.log(user.yas);
console.log(user.adres.ilçe);
console.log(user.adres.sehir);

console.log(user.hobiler[0]);