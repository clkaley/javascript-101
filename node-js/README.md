# Node.js

Node js, V8 isimli bir javascript motoru üzerinde çalışır. Node.js; bir JavaScript kodunu sadece tarayıcılarda değil aynı zamanda bilgisayarınızda bağımsız şekilde çalışacak bir uygulama şeklinde kullanmak istenmesinden ortaya çıkmıştır.

![Ekran Görüntüsü (591)](https://user-images.githubusercontent.com/74673470/190600749-993ba8bb-926b-4c8a-9e5d-b064e0fab9f4.png)

Node.js

1. Server Tabanlı
2. Asenkron Programlama
3. Npm (node.js kurulumu ile birlikte geliyo. komut satırıyla bu paketleri indiriyoruz.)

#### Node.js kurulumu

https://nodejs.org/en/ linkinden :)

LTS(hatalardan arınmış sürüm) vs Current(son sürüm)
İşletim sistemine göre vs seçilip indirme başlatılır. Kurulum zaten basit next diyerek bitirilir. Kurulumun olup olmadığını görmek için cmd ye girilir.

```
 node -v
 npm -v
```

![Ekran Görüntüsü (593)](https://user-images.githubusercontent.com/74673470/190603012-994b5266-e201-4d7e-87bc-b2673a90e526.png)

#### Hello World uygulaması

Tarayıcıya bağımlılığımız olmadığı için sadec app.js dosyası açılır.

cmd açılır
dosya dizinine gelinir

```
node dosyanınismi.js
```

![Ekran Görüntüsü (595)](https://user-images.githubusercontent.com/74673470/190603745-3ffa1810-695d-4ea3-b39b-caceeb7f6ea1.png)



- JS IIFE(Immediately-invoked Function Expressions)

Yani bir fonksiyon tanımladık diyelim, tanımladığımız fonksiyonu çağırmanıza gerek kalmadan, tanımlandığı yerde anında çalışan fonksiyonlardır. Genelde anonim fonksiyon olarak kullanılırlar.


```
(function(){
    //function scope
    return{
        
    }
});
```
#### Node Modül Kullanımı
module.exports ve exports anahtar kelimesi her Node.js dosyası içerisinde kullanılabilen global bir nesnedir.

Node.js ile herhangi bir nesne, fonksiyon, değişken tanımladıktan sonra module.exports veya exports anahtar kelimelesini kullanarak diğer dosyalarda da yazılan kodların kullanımını sağlayabiliriz.


window objesi tarayıcılarda kullanacağımız yapı
```
console.log(window);
```


İki tane dosya açtık app.js ve logger.js burda iki farklı js dosyası window üzerinde birleşip iletişim kurabildi.


Biz birden fazla modül kulllanmak istiyor isek 
app.js -> Module 1
calculate-> Module 2
logger.js-> Module 3
Bunların hepsini Global.module içerisinde birleştirmemiz gerekiyor.

modülleri dışarıya açma
```
module.exports.log=log;
module.exports.url=url
ya da 
module.exports={
    name:name,
    log:log
}

```


#### NPM
https://www.npmjs.com/

* Herhangi bir paketi yüklemeden önce "package.json" dosyası oluşturulmalıdır.

cmd ye 

```
npm init 

```


* Bu yazıldıktan sonra sorular soruluyor version license name  vb sorular bunun sorulmasını istemiyorsak yine cmd'ye

```
npm init --yes
```


* Herhangi bir paket indirmek istiyorsak bunun için yukarıda verilen linkten istediğimiz paketi buluyoruz aynı şekilde dizinimize gelip o paketin komutunu yazıyoruz. Enterdan sonra node-module klasörü oluşturulur orda indirdiğimiz paket bulunur.

```
npm i underscore
```

![Ekran Görüntüsü (597)](https://user-images.githubusercontent.com/74673470/190855444-0cb1e24a-235f-458c-9b23-80105f88c6e1.png)


İndirdiğimiz moduller package.json dosyasının dependencies yani bağımlılıklar kısmında bulunuyor.
![Ekran Görüntüsü (599)](https://user-images.githubusercontent.com/74673470/190855515-ffcefb13-2359-4ed2-80ee-a43482d7a91e.png)



```
var _=require("underscore")

var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);

console.log(_.min(numbers))

Çıktı
2
```



#### Global & Local Package
paket kurarken cmd ye yazdığımız direkt paketin güncel sürümünü indirir ama biz şu şekilde yazarsak

```
npm i jquery@2.7
```



Bu pakette local paket ama development aşamasında var sadece bu devDependencies kısmına gelir.
```
npm i webpack --save-dev

```



Global paket eklemek için

```
npm i live-server --global

```




Global paketleri görüntülemek için
```
npm list -g
```



Versiyon numaralarının anlamları var
patch-> hata oluşumunda arttırılır
minor-> yeni özellik eklendiğinde
major-> köklü değişklik için
^ bu işaret ise güncellemeyi almak için
```                     
"underscore": "^1.13.4" -> major.minor.patch
```







```

```







```

```
