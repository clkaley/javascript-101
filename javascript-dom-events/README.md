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




```

```






```

```





```

```




```

```





```

```


```

```