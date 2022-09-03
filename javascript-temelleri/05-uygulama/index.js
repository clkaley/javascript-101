let siparis1={
    id:101,
    "siparis_tarihi":"31.12.2022",
    "odeme_Sekli":"kredi kartı",
    "kargo_adresi":"Yahya kaptan mah. Kocaeli İzmit",
    "satın_alınan_urunler":[
        { 
            "ürün-id": 5,
            "ürün-başlığı:": "IPhone 13 Pro",
            "ürün-url":"http://abc.com/iphone-13-pro",
            "ürün-fiyatı": 22000
        },
         
        {
           "ürün-id": 6,
           "ürün-başlığı": "IPhone 13 Pro Max",
           "ürün-url": "http://abc.com/iphone-13-pro-max",
           "ürün-fiyatı": 25000,
        }
    ],
    müşteri:{
        "müşteri-id": 12
    },
    satıcı:{
        "firma-id": 34,
        "firma-adı": "Apple Türkiye"
    }

}

console.log(siparis1.satın_alınan_urunler[0]["ürün-fiyatı"]+siparis1.satın_alınan_urunler[1]["ürün-fiyatı"]);
