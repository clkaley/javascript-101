### DOM

Document Object Model(Doküman Nesne Modeli)'in kısaltması olan DOM dokümanlara erişmek için olan bir W3C standardıdır.


![Ekran Görüntüsü (547)](https://user-images.githubusercontent.com/74673470/188308889-e489a790-e4c0-4c0a-ad08-bc7e5e89a91e.png)


#### Tekil Element Seçimi
getElementById(""),querySelector("") şeklinde seçilir.


index.html
```
  <div class="card-header">
        <div id="title">
            Todo App Hello
        </div>
    </div>
```



index.js
```
let sonuc;
sonuc=document.getElementById("title");

console.log(sonuc);

```
![Ekran Görüntüsü (549)](https://user-images.githubusercontent.com/74673470/188309154-9843e6c9-6732-4696-9188-9b34e8c8b05f.png)


index.js
```
let sonuc;
sonuc=document.getElementById("title").innerText;

console.log(sonuc);

Çıktı
Todo App Hello
```



index.js
```
let sonuc;
sonuc=document.getElementById("title").className;

console.log(sonuc);

Çıktı
title
```




index.js
```
//yazı rengini değiştirme :)
document.getElementById("title").style.color="red"
```


#### Çoklu Element Seçimi

index.html
```
    <ul id="task-list">
        <li class="task">
            Görev 1
        </li>
        <li class="task">
            Görev 2
        </li>
        <li class="task">
            Görev 3
        </li>
    </ul>
```






```
let sonuc;
sonuc=document.getElementsByClassName('task');
console.log(sonuc);
```
 Collection döner
![Ekran Görüntüsü (552)](https://user-images.githubusercontent.com/74673470/188875698-7cf2970c-b256-43a0-ae08-acb57c6fa5d8.png)



ilk elemana ulaşmak için [] köşeli parantez kullanılır ve içindeki değere erişmek istedik onuda innerHtml ile yapıyoeuz :)s
```
let sonuc;
sonuc=document.getElementsByClassName('task')[0].innerHTML;
console.log(sonuc);
```



tüm hepsini tek tek bastırma işi
```
let sonuc;
sonuc=document.getElementsByClassName('task');

for(let i=0;i<=sonuc.length;i++){
    console.log(sonuc[i]);
}
// index numarası vermeden yazılabilecek for döngüsü (of yerine in yazarsak index numaralarına ulaşırız.)

for(let task of sonuc){
    console.log(sonuc);
}

her bir task a style verme
for(let task of sonuc){
    task.style.color="red"
    console.log(sonuc);
}
```





```

```


```

```