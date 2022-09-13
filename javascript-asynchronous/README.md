# Async
Senkron: Kodlar yukarıdan aşağıya sırayla işlenir ve bir satırdaki işlem bitmeden diğer satıra geçilmez. Asenkron: yapıda ise uzun zaman alan veya farklı görevdeki işlemler aynı anda gerçekleştirilir.


Senkron işlem ilk işlem tamamlanmadan alt tarafa geçmez
```
console.log(1);
console.log(2);
console.log(3);


Çıktı
1
2
3
```


Asenkron
```
console.log(1);
setTimeout(()=>{
console.log(2);
},2000)
console.log(3);


Çıktı
1
3
2
```




```

```





```

```
